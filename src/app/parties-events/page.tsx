import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Card from "@/components/Card";
import JsonLd from "@/components/JsonLd";
import { CONTACT } from "@/lib/site";
import { pageMeta, breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata = pageMeta({
  pageName: "Parties & Private Events",
  description:
    "Host milestone celebrations, showers, private parties, and corporate events at Georgie's Social House in Lexington, KY, with handcrafted cocktails and polished service.",
  path: "/parties-events",
});

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
    heading: "Milestone Celebrations",
    image: "/images/parties-friday-supper-club.jpg",
    alt: "Guests celebrating a milestone at the event venue in Lexington, KY",
    body: "Rather than traditional seating, embrace the joy of mingling in our uniquely designed venue. Engagement party, retirement and birthday celebrations, or special anniversaries, let us help you celebrate. We can accommodate groups of 20 or more.",
    cta: { label: "inquire now", href: "/contact" },
  },
  {
    heading: "Bridal & Baby Showers",
    image: "/images/parties-bridal-baby-showers.jpg",
    alt: "Loved ones enjoying an intimate bridal shower party",
    imagePosition: "top",
    body: "Ideal gathering times for these events are Saturdays and Sundays at 2pm. Rates start at $20 a person with a 20 guest minimum for these days and times, however we are happy to accommodate other times for different rates. Desserts and decoration for your area are welcomed.",
    cta: { label: "inquire now", href: "/contact" },
  },
  {
    heading: "Private Events",
    image: "/images/parties-private-events.jpg",
    alt: "A private event set up at Georgie's Social House bar",
    body: "Georgie’s offers an exclusive setting for private events. Options to customize include entertainment, catered food, bring your own decor, and hold your party when we’re typically closed. Rates begin at $1,500 and are dependent upon party day and timeframe.",
    cta: { label: "inquire now", href: "/contact" },
  },
  {
    heading: "Corporate Events",
    image: "/images/studio-279.jpg",
    alt: "A corporate gathering at Georgie's Social House in Lexington, KY",
    body: "Host your next team gathering at Georgie’s. From client receptions and team-building outings to holiday parties and networking mixers, our stylish venue and polished service make every corporate event feel effortless and memorable.",
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
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Parties & Private Events", path: "/parties-events" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Private Event & Party Venue",
          description:
            "Private events, corporate gatherings, milestone celebrations, happy hour parties, and bridal and baby showers at Georgie's Social House in Lexington, KY.",
          path: "/parties-events",
        })}
      />
      {/* Intro + event cards */}
      <section data-bg="light" className="bg-white py-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <SectionHeading as="h1" align="center" color="dark">
            Parties &amp; Private Events
          </SectionHeading>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/90">
            Fully customizable options for every kind of gathering offering
            handcrafted cocktails, polished service and an atmosphere built for
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
          <p className="mt-10 text-sm italic text-cream/60">
            Event images shown courtesy of @sladesocial.
          </p>
        </div>
      </section>
    </>
  );
}
