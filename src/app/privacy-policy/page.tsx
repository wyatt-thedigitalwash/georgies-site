import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  pageName: "Privacy Policy",
  description:
    "The Georgie's Social House privacy policy: the personal information we collect, how we use and share it, and our SMS terms of use for our Lexington, KY bar.",
  path: "/privacy-policy",
});

const h2 = "font-display text-2xl uppercase tracking-tight text-brand md:text-3xl";
const h3 = "font-display text-lg uppercase tracking-wide text-ink";
const body = "text-[17px] leading-relaxed text-ink/80";

export default function PrivacyPolicyPage() {
  return (
    <section data-bg="light" className="bg-white py-16 md:py-24">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading as="h1" align="left" color="green">
          Privacy Policy
        </SectionHeading>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-ink/60">
          Last updated March 27, 2025
        </p>

        <div className="mt-10 space-y-12">
          <div className="space-y-4">
            <h2 className={h2}>Information We Collect</h2>
            <p className={body}>Personal information we collect includes:</p>
            <ul className={`list-disc space-y-2 pl-5 ${body}`}>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Date of birth (if required for age verification)</li>
              <li>Payment details (if applicable)</li>
              <li>Reservation details (e.g., date, time, party size)</li>
              <li>Preferences for events, special promotions, or VIP services</li>
              <li>Any other voluntarily shared information</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className={h2}>How We Use Personal Information</h2>
            <p className={body}>We use personal information for:</p>
            <ul className={`list-disc space-y-2 pl-5 ${body}`}>
              <li>Confirming and managing reservations and event bookings</li>
              <li>Sending updates about upcoming events, specials, and promotions</li>
              <li>Providing customer service and responding to inquiries</li>
              <li>Processing payments</li>
              <li>Improving services based on feedback</li>
              <li>Complying with legal and regulatory requirements</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className={h2}>Sharing of Personal Information</h2>
            <p className={body}>
              We do not sell or rent your personal information. Information may be
              shared with service providers, when required by law, or in business
              transfer scenarios.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className={h2}>SMS Terms of Use</h2>

            <div className="space-y-2">
              <h3 className={h3}>Consent &amp; Third-Party Sharing</h3>
              <p className={body}>
                The information (Phone Numbers) obtained as part of the SMS
                consent process will not be shared with third parties for
                marketing purposes.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Communication Types</h3>
              <p className={body}>
                Reservation confirmations, reminders, limited-time promotions
                opted into, and vendor logistics communications.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Message Frequency</h3>
              <p className={body}>
                Up to 1 SMS message per week related to your reservations and
                event bookings. Message and data rates may apply. Message
                frequency may vary.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Opt-Out</h3>
              <p className={body}>
                Reply &ldquo;STOP&rdquo; to any message or contact us directly.
                You can decline SMS by unchecking consent boxes on our forms.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Help &amp; Support</h3>
              <p className={body}>
                Reply &ldquo;HELP&rdquo; or visit our{" "}
                <Link
                  href="/contact"
                  className="text-brand underline underline-offset-4 hover:text-ink"
                >
                  Contact page
                </Link>
                . You can also reach us at{" "}
                <a
                  href={`mailto:${CONTACT.eventsEmail}`}
                  className="text-brand underline underline-offset-4 hover:text-ink"
                >
                  {CONTACT.eventsEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
