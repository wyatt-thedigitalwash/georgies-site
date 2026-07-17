import type { Metadata } from "next";
import { Spectral, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Body + nav: Spectral (serif), matching the live site.
const spectral = Spectral({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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

export const metadata: Metadata = {
  metadataBase: new URL("https://georgieslexington.com"),
  title: {
    default: "Modern Lexington Bar & Event Venue | Georgie's Social House",
    template: "%s | Georgie's Social House",
  },
  description:
    "Georgie's Social House is a modern bar and event venue in downtown Lexington, KY. Refined adulting with handcrafted cocktails, wine, bourbon, and nosh.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
