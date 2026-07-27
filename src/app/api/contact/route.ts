import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Per-field maximum lengths (server-enforced, independent of the client).
const MAX = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  inquiryType: 100,
  eventDate: 40,
  guestCount: 40,
  message: 2000,
} as const;

// Basic in-memory rate limiting: 3 submissions per 5 minutes per IP.
// NOTE: per-instance only. Behind multiple serverless instances this is
// best-effort; a shared store (e.g. Upstash/Redis) would be needed for a hard
// guarantee. Sufficient as a first line of defense against form spam.
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 5 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  inquiryType?: unknown;
  eventDate?: unknown;
  guestCount?: unknown;
  message?: unknown;
  smsConsent?: unknown;
  // Honeypot: must stay empty for real users (hidden field).
  company?: unknown;
};

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  // Rate limit before doing any work.
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": "300" } }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success and drop
  // the submission silently (no email sent, no error surfaced).
  if (str(body.company)) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const firstName = str(body.firstName);
  const lastName = str(body.lastName);
  const email = str(body.email);
  const phone = str(body.phone);
  const inquiryType = str(body.inquiryType);
  const eventDate = str(body.eventDate);
  const guestCount = str(body.guestCount);
  const message = str(body.message);

  // Server-side validation.
  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "First name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (!message) errors.message = "Please enter a message.";
  if (
    firstName.length > MAX.firstName ||
    lastName.length > MAX.lastName ||
    email.length > MAX.email ||
    phone.length > MAX.phone ||
    inquiryType.length > MAX.inquiryType ||
    eventDate.length > MAX.eventDate ||
    guestCount.length > MAX.guestCount ||
    message.length > MAX.message
  ) {
    errors.form = "One or more fields are too long.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const generalTo = process.env.CONTACT_TO_EMAIL || "hello@georgieslexington.com";
  const eventsTo = process.env.CONTACT_EVENTS_EMAIL || "events@georgieslexington.com";
  // Event-related inquiries route to the events inbox; everything else
  // (general questions) goes to the general inbox.
  const isEventInquiry = inquiryType !== "" && inquiryType !== "General question";
  const to = isEventInquiry ? eventsTo : generalTo;
  const from = process.env.CONTACT_FROM_EMAIL || "Georgie's Website <onboarding@resend.dev>";

  // If email is not configured yet, accept the submission without failing the
  // user. Wire RESEND_API_KEY (and optionally CONTACT_TO/FROM_EMAIL) to enable.
  if (!apiKey) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New ${inquiryType || "contact form"} message from ${firstName} ${lastName}`.trim(),
      text: [
        `Inquiry: ${inquiryType || "General question"}`,
        `Name: ${firstName} ${lastName}`.trim(),
        `Email: ${email}`,
        `Phone: ${phone || "(not provided)"}`,
        ...(eventDate ? [`Preferred date: ${eventDate}`] : []),
        ...(guestCount ? [`Estimated guests: ${guestCount}`] : []),
        `SMS consent: ${body.smsConsent ? "yes" : "no"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    // Log the real error server-side; return a generic message to the client.
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }
}
