// Site-wide constants for Georgie's Social House.
// Sourced from the live site (see EXTRACTION.md). Copy is verbatim.

export const SITE_NAME = "Georgie's Social House";

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Parties & Events", href: "/parties-events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// "Join Our Team" opens the printable employment application PDF.
export const EMPLOYMENT_PDF = "/employment-application.pdf";

export const SOCIAL = {
  instagram: "https://www.instagram.com/georgies_socialhouse/",
  facebook: "https://www.facebook.com/p/Georgies-Social-House-100088811977072/",
  maps: "https://www.google.com/maps/place/Georgie's+Social+House/@38.0476243,-84.4981841,17z/data=!3m2!4b1!5s0x884244ee84be4c05:0x29e592ea9452be5e!4m6!3m5!1s0x88424584cd78251b:0xcc1e8643bf1f9f33!8m2!3d38.0476243!4d-84.4956092!16s%2Fg%2F11jzntm9dv?entry=ttu",
};

export const CONTACT = {
  addressLine1: "161 N Limestone St.",
  addressLine2: "Lexington, KY 40507",
  cityLine: "Lexington, KY",
  zip: "40507",
  email: "hello@georgieslexington.com",
  eventsEmail: "events@georgieslexington.com",
  textOnly: "(859) 838-1531",
};

// En dashes (U+2013) used for ranges; em dashes are disallowed project-wide.
export const HOURS: { days: string; time: string }[] = [
  { days: "Wed–Fri", time: "4PM–Late" },
  { days: "Sat–Sun", time: "2PM–Late" },
];

export const TAGLINE = "refined adulting";
export const ESTABLISHED = "Established 2023";
