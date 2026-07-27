import type { Metadata, Viewport } from "next";
import { Spectral, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/seo";

// Body + nav: Spectral (serif), matching the live site.
const spectral = Spectral({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

// Display headings: Fraunces (serif) via Google Fonts.
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Buttons / logo-style labels: the site's actual BarteldesSmallMedium.
const barteldes = localFont({
  src: "../fonts/BarteldesSmallMedium.otf",
  variable: "--font-rounded",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Georgie's Social House is a modern bar and event venue in downtown Lexington, KY. Refined adulting with handcrafted cocktails, wine, bourbon, and nosh.";

export const metadata: Metadata = {
  metadataBase: new URL("https://georgieslexington.com"),
  title: {
    default: "Modern Lexington Bar & Event Venue | Georgie's Social House",
    template: "%s | Georgie's Social House",
  },
  description: SITE_DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Georgie's Social House",
    title: "Modern Lexington Bar & Event Venue | Georgie's Social House",
    description: SITE_DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Georgie's Social House -- refined adulting in downtown Lexington, KY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Lexington Bar & Event Venue | Georgie's Social House",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#4d5b50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${fraunces.variable} ${barteldes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-ink">
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:font-rounded focus:lowercase focus:text-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
