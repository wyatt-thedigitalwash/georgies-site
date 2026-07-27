import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
};

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
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
  if (firstName.length > 100 || lastName.length > 100 || message.length > 5000) {
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
  } catch {
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }
}
