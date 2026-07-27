// Central SEO helpers: per-page metadata builder and JSON-LD structured data.
// Business facts are sourced from src/lib/site.ts (SITE.md is an empty template).
import type { Metadata } from "next";
import { CONTACT } from "./site";

export const SITE_URL = "https://georgieslexington.com";
export const BUSINESS_NAME = "Georgie's Social House";
export const LOCATION = "Lexington, KY";
const OG_IMAGE = "/og-image.png";
const OG_ALT = `${BUSINESS_NAME} -- refined adulting in downtown ${LOCATION}`;

// Builds a full, unique page title in the required
// "[Page Name] | [Business Name], [Location]" format.
export function pageTitle(pageName: string): string {
  return `${pageName} | ${BUSINESS_NAME}, ${LOCATION}`;
}

// Returns a complete Metadata object for a page: unique title + description,
// canonical URL, and full Open Graph + Twitter Card tags. metadataBase in the
// root layout resolves the relative paths to absolute URLs.
export function pageMeta({
  pageName,
  description,
  path,
}: {
  pageName: string;
  description: string;
  path: string;
}): Metadata {
  const title = pageTitle(pageName);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: BUSINESS_NAME,
      title,
      description,
      url: path,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

// ---- JSON-LD structured data builders --------------------------------------

const LOCAL_BUSINESS_ID = `${SITE_URL}/#business`;

// LocalBusiness (BarOrPub is the most specific Schema.org type for a
// cocktail bar / social house). Rendered on every page via the root layout.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "@id": LOCAL_BUSINESS_ID,
    name: BUSINESS_NAME,
    description:
      "A modern bar and private event venue in downtown Lexington, KY, serving handcrafted cocktails, wine, bourbon, and nosh.",
    url: SITE_URL,
    telephone: "+18598381531",
    email: CONTACT.email,
    image: `${SITE_URL}${OG_IMAGE}`,
    logo: `${SITE_URL}/images/logo-georgies-black.png`,
    priceRange: "$$",
    servesCuisine: ["Cocktails", "Wine", "Bourbon", "Charcuterie"],
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.addressLine1,
      addressLocality: "Lexington",
      addressRegion: "KY",
      postalCode: CONTACT.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.0476243,
      longitude: -84.4956092,
    },
    areaServed: {
      "@type": "City",
      name: "Lexington",
    },
    sameAs: [
      "https://www.instagram.com/georgies_socialhouse/",
      "https://www.facebook.com/p/Georgies-Social-House-100088811977072/",
    ],
  };
}

// Service schema for service-related pages, provider references LocalBusiness.
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    areaServed: { "@type": "City", name: "Lexington" },
    provider: {
      "@type": "BarOrPub",
      "@id": LOCAL_BUSINESS_ID,
      name: BUSINESS_NAME,
    },
  };
}

// BreadcrumbList: Home > [Page] (> [Child] for nested pages).
export function breadcrumbSchema(
  trail: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}
