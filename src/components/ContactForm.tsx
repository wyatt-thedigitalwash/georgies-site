"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full border border-ink/20 bg-white px-3 py-2.5 text-base text-ink outline-none transition-colors focus:border-brand";
const labelClasses = "block text-sm font-medium text-ink";

const GENERAL_INQUIRY = "General question";
const INQUIRY_OPTIONS = [
  GENERAL_INQUIRY,
  "Private event",
  "Friday Supper Club",
  "Happy Hour Party",
  "Bridal or Baby Shower",
];
const GUEST_OPTIONS = ["Under 15", "15–30", "30–50", "50+"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [inquiry, setInquiry] = useState<string>(GENERAL_INQUIRY);
  const showEventFields = inquiry !== GENERAL_INQUIRY;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      inquiryType: inquiry,
      eventDate: showEventFields ? data.get("eventDate") : "",
      guestCount: showEventFields ? data.get("guestCount") : "",
      message: data.get("message"),
      smsConsent: data.get("smsConsent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const firstError =
          body?.errors && typeof body.errors === "object"
            ? Object.values(body.errors)[0]
            : body?.error;
        setErrorMsg(
          typeof firstError === "string"
            ? firstError
            : "Please check the form and try again."
        );
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-brand bg-cream px-5 py-8 text-center"
      >
        <p className="font-display text-2xl text-ink">Thank you!</p>
        <p className="mt-2 text-base text-ink/80">
          Your message has been sent. We’ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="inquiryType" className={labelClasses}>
          I’m reaching out about
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          className={`mt-1 ${inputClasses}`}
        >
          {INQUIRY_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>

        {/* Reveals when an event/party inquiry is selected */}
        <div
          className={`grid transition-all duration-300 ease-out ${
            showEventFields
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!showEventFields}
        >
          <div className="overflow-hidden">
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div>
                <label htmlFor="eventDate" className={labelClasses}>
                  Preferred date
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  tabIndex={showEventFields ? undefined : -1}
                  className={`mt-1 ${inputClasses}`}
                />
              </div>
              <div>
                <label htmlFor="guestCount" className={labelClasses}>
                  Estimated guests
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  tabIndex={showEventFields ? undefined : -1}
                  className={`mt-1 ${inputClasses}`}
                  defaultValue=""
                >
                  <option value="">Select…</option>
                  {GUEST_OPTIONS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className={labelClasses}>Name *</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              aria-label="First name"
              placeholder="First"
              className={inputClasses}
            />
          </div>
          <div>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              aria-label="Last name"
              placeholder="Last"
              className={inputClasses}
            />
          </div>
        </div>
      </fieldset>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`mt-1 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={`mt-1 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Comment or Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`mt-1 ${inputClasses}`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="smsConsent"
          name="smsConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-brand"
        />
        <label htmlFor="smsConsent" className="text-sm leading-relaxed text-ink/70">
          By checking this box, you agree to receive SMS messages from Georgie’s
          Social House related to marketing, customer care and delivery
          notifications. You may reply STOP to opt-out at any time. Reply to HELP
          to (859) 212-9080 for assistance. Messages and data rates may apply.
          Message frequency will vary. Learn more on our Privacy Policy page.
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-brand px-10 py-3.5 text-base lowercase font-rounded text-cream transition-colors duration-300 ease-out hover:bg-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
