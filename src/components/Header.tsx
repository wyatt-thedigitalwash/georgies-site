"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MenuIcon,
  CloseIcon,
  InstagramIcon,
  FacebookIcon,
  MapPinIcon,
} from "@/components/icons";
import { NAV, EMPLOYMENT_PDF, SOCIAL } from "@/lib/site";

function Socials({ size = 18 }: { size?: number }) {
  return (
    <div className="flex items-center gap-4">
      <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Instagram" className="text-ink hover:text-brand">
        <InstagramIcon size={size} />
      </a>
      <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Facebook" className="text-ink hover:text-brand">
        <FacebookIcon size={size} />
      </a>
      <a href={SOCIAL.maps} target="_blank" rel="noopener noreferrer" aria-label="Georgie's on Google Maps" className="text-ink hover:text-brand">
        <MapPinIcon size={size} />
      </a>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-sand text-ink">
      <div className="flex h-20 items-center justify-between px-5 md:px-8">
        {/* Logo — far left */}
        <Link href="/" aria-label="Georgie's Social House, home" className="shrink-0">
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
                    className={`hover:text-brand ${
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
                  className="hover:text-brand"
                >
                  Join Our Team
                </a>
              </li>
            </ul>
          </nav>
          <span className="h-5 w-px bg-ink/20" aria-hidden="true" />
          <Socials />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-ink/10 bg-sand px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-ink/10 py-3 text-lg ${
                    isActive(item.href) ? "text-brand" : "text-ink"
                  } hover:text-brand`}
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
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-3 text-lg text-ink hover:text-brand"
              >
                Join Our Team
              </a>
            </li>
          </ul>
          <div className="mt-5">
            <Socials size={22} />
          </div>
        </nav>
      )}
    </header>
  );
}
