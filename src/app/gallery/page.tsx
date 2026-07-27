import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  pageName: "Gallery",
  description:
    "Browse the Georgie's Social House photo gallery in Lexington, KY: our modern bar, handcrafted cocktails, nosh, and private event space in one social setting.",
  path: "/gallery",
});

// 21 gallery photos with their intrinsic dimensions, in the live order.
const PHOTOS: { n: string; w: number; h: number }[] = [
  { n: "01", w: 1000, h: 1500 },
  { n: "02", w: 1000, h: 1500 },
  { n: "03", w: 1000, h: 667 },
  { n: "04", w: 1000, h: 667 },
  { n: "05", w: 1000, h: 667 },
  { n: "06", w: 1000, h: 666 },
  { n: "07", w: 1000, h: 667 },
  { n: "08", w: 1000, h: 642 },
  { n: "09", w: 1000, h: 667 },
  { n: "10", w: 970, h: 1455 },
  { n: "11", w: 1000, h: 667 },
  { n: "12", w: 1000, h: 666 },
  { n: "13", w: 1000, h: 667 },
  { n: "14", w: 1000, h: 667 },
  { n: "15", w: 1000, h: 666 },
  { n: "16", w: 1872, h: 1248 },
  { n: "17", w: 1000, h: 1500 },
  { n: "18", w: 830, h: 1248 },
  { n: "19", w: 1000, h: 667 },
  { n: "20", w: 1000, h: 1500 },
  { n: "21", w: 1000, h: 666 },
];

export default function GalleryPage() {
  return (
    <section data-bg="light" className="bg-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <h1 className="sr-only">
        Georgie&apos;s Social House Photo Gallery -- Lexington, KY
      </h1>
      <div className="columns-1 gap-2 sm:columns-2 [&>*]:mb-2">
        {PHOTOS.map((p) => (
          <div key={p.n} className="break-inside-avoid">
            <Image
              src={`/images/gallery-${p.n}.jpg`}
              alt={`Georgie's Social House in Lexington, KY: bar, cocktails, and event space (photo ${Number(p.n)} of 21)`}
              width={p.w}
              height={p.h}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="block h-auto w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
