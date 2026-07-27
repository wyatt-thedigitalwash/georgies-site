import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { CONTACT, HOURS, EMPLOYMENT_PDF } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  pageName: "Contact",
  description:
    "Contact Georgie's Social House in downtown Lexington, KY. Get our address, hours, email, and text line, or plan a visit to our bar and event venue today.",
  path: "/contact",
});

const DETAILS = [
  {
    label: "Visit",
    body: (
      <>
        {CONTACT.addressLine1}
        <br />
        {CONTACT.addressLine2}
      </>
    ),
  },
  {
    label: "Hours",
    body: (
      <div className="space-y-1">
        {HOURS.map((h) => (
          <div key={h.days} className="uppercase">
            {h.days} {h.time}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Email",
    body: (
      <a
        href={`mailto:${CONTACT.email}`}
        className="text-ink transition-colors hover:text-brand"
      >
        {CONTACT.email}
      </a>
    ),
  },
  { label: "Text Only", body: CONTACT.textOnly },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {/* Header + info + form */}
      <section data-bg="light" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading as="h1" align="center" color="dark">
            Get in Touch
          </SectionHeading>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/80">
            Questions, private events, or just want to say hello? Send us a note
            and we’ll be in touch soon.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-12 px-6 md:mt-20 md:grid-cols-[1fr_1.3fr] md:gap-16">
          {/* Details */}
          <dl className="space-y-8">
            {DETAILS.map((d) => (
              <div key={d.label}>
                <dt className="text-xs uppercase tracking-[0.25em] text-brand">
                  {d.label}
                </dt>
                <dd className="mt-2 font-body text-lg leading-relaxed text-ink">
                  {d.body}
                </dd>
              </div>
            ))}
          </dl>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Join our team */}
        <div className="mx-auto mt-14 max-w-5xl px-6 md:mt-20">
          <div className="flex flex-col items-center gap-5 border-t border-ink/10 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-xl uppercase text-ink">
                Looking to join the team?
              </p>
              <p className="mt-1 text-[15px] text-ink/70">
                We’re always glad to meet good people.
              </p>
            </div>
            <Button href={EMPLOYMENT_PDF} external variant="solid">
              apply
            </Button>
          </div>
        </div>
      </section>

      {/* Map, full width */}
      <section data-bg="light" className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative h-80 w-full overflow-hidden border border-ink/10 md:h-[420px]">
            <iframe
              title="Map to Georgie's Social House, 161 N Limestone St, Lexington, KY 40507"
              src="https://maps.google.com/maps?q=161%20N%20Limestone%20St,%20Lexington,%20KY%2040507&z=16&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
