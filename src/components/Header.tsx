"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { InstagramIcon, FacebookIcon, MapPinIcon } from "@/components/icons";
import { NAV, EMPLOYMENT_PDF, SOCIAL } from "@/lib/site";

function Socials({ size = 18 }: { size?: number }) {
  return (
    <div className="flex items-center gap-4">
      <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Instagram" className="text-ink transition-colors hover:text-brand">
        <InstagramIcon size={size} />
      </a>
      <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Facebook" className="text-ink transition-colors hover:text-brand">
        <FacebookIcon size={size} />
      </a>
      <a href={SOCIAL.maps} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Google Maps" className="text-ink transition-colors hover:text-brand">
        <MapPinIcon size={size} />
      </a>
    </div>
  );
}

const MOBILE_LINKS = [
  ...NAV.map((item) => ({ ...item, external: false })),
  { label: "Join Our Team", href: EMPLOYMENT_PDF, external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Lock body scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-sand text-ink">
      <div className="flex h-20 items-center justify-between px-5 md:px-8">
        {/* Logo — far left */}
        <Link
          href="/"
          aria-label="Georgie's Social House, home"
          onClick={() => setOpen(false)}
          className="shrink-0"
        >
          <Image
            src="/images/logo-georgies-black.png"
            alt="Georgie's Social House"
            width={200}
            height={48}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Right cluster — menu items then social icons */}
        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-[15px]">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-brand ${
                      isActive(item.href) ? "border-b border-ink pb-0.5" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={EMPLOYMENT_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  Join Our Team
                </a>
              </li>
            </ul>
          </nav>
          <span className="h-5 w-px bg-ink/20" aria-hidden="true" />
          <Socials />
        </div>

        {/* Mobile hamburger — animated to an X */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] text-ink md:hidden"
        >
          <span
            aria-hidden="true"
            className={`block h-[2px] w-6 rounded-full bg-current transition-transform duration-300 ease-out ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-[2px] w-6 rounded-full bg-current transition-opacity duration-200 ease-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-[2px] w-6 rounded-full bg-current transition-transform duration-300 ease-out ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Backdrop — tap to close */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-x-0 bottom-0 top-20 z-40 bg-ink/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile panel — animated open/close */}
      <nav
        aria-label="Mobile"
        inert={!open}
        className={`grid overflow-hidden bg-sand transition-all duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr] border-t border-ink/10 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col px-6 pt-2">
            {MOBILE_LINKS.map((item, i) => {
              const base = `block border-b border-ink/10 py-3 text-lg transition-all duration-300 ease-out ${
                open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
              }`;
              const style = { transitionDelay: open ? `${100 + i * 45}ms` : "0ms" };
              return (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      style={style}
                      className={`${base} text-ink hover:text-brand`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={style}
                      className={`${base} ${isActive(item.href) ? "text-brand" : "text-ink"} hover:text-brand`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div
            style={{
              transitionDelay: open ? `${100 + MOBILE_LINKS.length * 45}ms` : "0ms",
            }}
            className={`px-6 pb-6 pt-5 transition-all duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            <Socials size={22} />
          </div>
        </div>
      </nav>
    </header>
  );
}
