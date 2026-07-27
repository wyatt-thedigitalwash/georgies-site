import Link from "next/link";
import { InstagramIcon, FacebookIcon, MapPinIcon } from "@/components/icons";
import { EMPLOYMENT_PDF, SOCIAL, HOURS, ESTABLISHED } from "@/lib/site";

const FOOTER_LINKS = [
  { label: "Join our team", href: EMPLOYMENT_PDF, external: true },
  { label: "Menu", href: "/menu", external: false },
  { label: "Contact", href: "/contact", external: false },
  { label: "Privacy Policy", href: "/privacy-policy", external: false },
];

const labelClass =
  "font-display text-2xl uppercase leading-none text-cream";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="grid gap-10 px-5 py-16 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cream/60">
            {ESTABLISHED}
          </p>
          <address className="mt-4 not-italic font-body text-xl leading-snug">
            161 N Limestone St.
            <br />
            Lexington, KY
            <br />
            40507
          </address>
        </div>

        <div>
          <h2 className={labelClass}>Hours</h2>
          <ul className="mt-4 space-y-2">
            {HOURS.map((h) => (
              <li key={h.days} className="text-base">
                <span className="font-semibold uppercase">{h.days}</span>
                <span className="mx-2 text-cream/60" aria-hidden="true">·</span>
                <span className="uppercase">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className={labelClass}>Links</h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.map((l) =>
              l.external ? (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-base text-cream/80 hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ) : (
                <li key={l.label}>
                  <Link href={l.href} className="text-base text-cream/80 hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div>
          <h2 className={labelClass}>Follow</h2>
          <div className="mt-4 flex gap-4">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Instagram" className="text-cream/80 hover:text-cream">
              <InstagramIcon size={24} />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Facebook" className="text-cream/80 hover:text-cream">
              <FacebookIcon size={24} />
            </a>
            <a href={SOCIAL.maps} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Google Maps" className="text-cream/80 hover:text-cream">
              <MapPinIcon size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="px-5 py-6 md:px-8">
          <p className="text-sm text-cream/60">© 2026 Georgie’s</p>
        </div>
      </div>
    </footer>
  );
}
