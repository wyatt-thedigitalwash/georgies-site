import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Party & Event Venue Lexington, KY",
  description:
    "Georgie's Social House is a downtown Lexington, KY bar and private event venue. Friday Supper Club, happy hour parties, bridal and baby showers, and private events.",
};

type Event = {
  heading: string;
  image: string;
  alt: string;
  imagePosition?: "top" | "center" | "bottom";
  body: string;
  cta: { label: string; href: string };
};

const EVENTS: Event[] = [
  {
    heading: "Friday Supper Club",
    image: "/images/parties-friday-supper-club.jpg",
    alt: "Food being served at the event venue in Lexington, KY",
    body: "Rather than traditional seating, embrace the joy of mingling in our uniquely designed venue. Handcrafted cocktails, a curated selection of wines and bourbons, and exceptional service set the stage for a gathering that fosters connection and laughter.",
    cta: { label: "inquire now", href: "/contact" },
  },
  {
    heading: "Bridal & Baby Showers",
    image: "/images/parties-bridal-baby-showers.jpg",
    alt: "Loved ones enjoying an intimate bridal shower party",
    imagePosition: "top",
    body: "Immerse yourself in a gorgeous atmosphere with a curated selection of wines, cocktails, charcuterie, and nosh. Our stylish venue is the perfect backdrop for creating unforgettable memories with the people who matter most.",
    cta: { label: "inquire now", href: "/contact" },
  },
  {
    heading: "Private Events",
    image: "/images/parties-private-events.jpg",
    alt: "A private event set up at Georgie's Social House bar",
    body: "Georgie’s Social House offers an exclusive setting for private events. Whether it is a birthday, rehearsal dinner, or corporate gathering, enjoy our stylish and inviting bar atmosphere reserved just for your group.",
    cta: { label: "inquire now", href: "/contact" },
  },
  {
    heading: "Happy Hour Party",
    image: "/images/parties-happy-hour.jpg",
    alt: "Guests enjoying a happy hour party at Georgie's Social House",
    body: "Our happy hours are more than a time to unwind. Join us Wednesday through Friday until 7pm for special rates on drinks and nosh, plus reserved tables in a setting that encourages connection and creativity. It is team building, elevated.",
    cta: { label: "explore happy hour", href: "/menu" },
  },
];

export default function PartiesEventsPage() {
  return (
    <>
      {/* Intro + event cards */}
      <section data-bg="light" className="bg-white py-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <SectionHeading as="h1" align="center" color="dark">
            Private Parties &amp; Events
          </SectionHeading>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/90">
            Rediscover the joy of gathering. From intimate showers to corporate
            celebrations, Georgie’s Social House is Lexington’s setting for
            handcrafted cocktails, polished service, and an atmosphere built for
            connection.
          </p>
          <Button href="/contact" variant="solid" className="mt-8">
            inquire about an event
          </Button>
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-6 md:mt-20">
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
            {EVENTS.map((e) => (
              <Card
                key={e.heading}
                image={e.image}
                alt={e.alt}
                imagePosition={e.imagePosition}
                heading={e.heading}
                description={e.body}
                cta={e.cta}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section data-bg="dark" className="bg-ink py-16 text-cream md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <SectionHeading as="h2" align="center" color="white">
            Ready to Host at Georgie’s?
          </SectionHeading>
          <p className="mt-6 text-[17px] leading-relaxed text-cream/90">
            Tell us about your event and we will help you make it unforgettable.
          </p>
          <Button href="/contact" variant="cream" className="mt-8">
            inquire now
          </Button>
          <div className="mt-8 space-y-1 text-[15px] text-cream/80">
            <p>
              <a
                href={`mailto:${CONTACT.eventsEmail}`}
                className="underline underline-offset-4 hover:text-cream"
              >
                {CONTACT.eventsEmail}
              </a>
            </p>
            <p>Text only: {CONTACT.textOnly}</p>
          </div>
          <p className="mt-10 text-sm italic text-cream/50">
            Event images shown courtesy of @sladesocial.
          </p>
        </div>
      </section>
    </>
  );
}
