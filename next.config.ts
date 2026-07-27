import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old "parties_events" (underscore) -> new "parties-events" (hyphen).
      // Both trailing-slash and non-trailing-slash variants handled explicitly.
      {
        source: '/parties_events',
        destination: '/parties-events',
        permanent: true,
      },
      {
        source: '/parties_events/',
        destination: '/parties-events',
        permanent: true,
      },
      // Removed "discover more" sub-page -> its parent parties & events page.
      {
        source: '/parties-events-discover-more',
        destination: '/parties-events',
        permanent: true,
      },
      {
        source: '/parties-events-discover-more/',
        destination: '/parties-events',
        permanent: true,
      },
      // Old WordPress menu PDFs (linked as "Drink Menu" / "Food Menu" on the
      // previous homepage) -> the new on-site menu page.
      {
        source:
          '/wp-content/uploads/2024/10/Georgies-Spring-Menu-.pdf-1711643554334-7-5.pdf',
        destination: '/menu',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2026/04/Georgies-Summer-2026.pdf',
        destination: '/menu',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Long-lived immutable caching for static assets (images, fonts, icons).
        // These match by file extension, so both /images/* and root icons are
        // covered. Next already sets immutable caching on /_next/static/*.
        source: '/:path*.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
