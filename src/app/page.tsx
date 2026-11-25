import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Card from "@/components/Card";
import JsonLd from "@/components/JsonLd";
import { SOCIAL, TAGLINE } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  pageName: "Modern Bar & Event Venue",
  description:
    "Georgie's Social House is a modern bar and private event venue in downtown Lexington, KY, serving handcrafted cocktails, wine, bourbon, and shared nosh.",
  path: "/",
});

const REFINED_IMAGES = [
  {
    src: "/images/IMG_0050.png",
    alt: "Guests socializing at Georgie's Social House in Lexington, KY",
    offset: "",
  },
  {
    src: "/images/gallery-10.jpg",
    alt: "A craft cocktail being poured at Georgie's Social House in Lexington, KY",
    offset: "sm:mt-10",
  },
  {
    src: "/images/home-refined-adulting.jpg",
    alt: "A cocktail and the atmosphere at Georgie's Social House in Lexington, KY",
    offset: "sm:mt-20",
  },
];

const HERO_LINKS = [
  { label: "Menus", href: "/menu" },
  { label: "Parties & Events", href: "/parties-events" },
  { label: "Visit", href: "/contact" },
];

const CARDS = [
  {
    heading: "Our Cocktails",
    image: "/images/gallery-05.jpg",
    alt: "A handcrafted coupe cocktail at Georgie's Social House in Lexington, KY",
    description:
      "One-of-a-kind craft cocktails, developed in-house by our mixologist Donny and named for famous Georges. Our menu changes seasonally with the freshest ingredients, and we pour stellar zero-proof options too.",
    cta: { label: "drink menu", href: "/menu#traditional-cocktails" },
  },
  {
    heading: "Nosh",
    image: "/images/gallery-11.jpg",
    alt: "Guests sharing a charcuterie board at Georgie's Social House in Lexington, KY",
    description:
      "A thoughtfully curated nosh menu of small bites designed to complement our artisanal cocktails, with charcuterie, wine, and pairings tailored to the spirit of your gathering.",
    cta: { label: "food menu", href: "/menu#nosh" },
  },
  {
    heading: "Parties & Events",
    image: "/images/gallery-20.jpg",
    alt: "Guests toasting cocktails at a celebration at Georgie's Social House",
    description:
      "Rediscover the joy of mingling. From milestone celebrations to happy hours, showers, and private events, Georgie's is Lexington's setting for unforgettable celebrations.",
    cta: { label: "explore parties", href: "/parties-events" },
  },
];

const PRESS = [
  {
    quote: "New downtown Lexington bar rises to new heights",
    href: "https://www.kentucky.com/article274502901.html",
    logo: "/images/press-herald-leader.png",
    logoAlt: "Lexington Herald-Leader",
  },
  {
    quote: "Georgie's Social House Open",
    href: "https://smileypete.com/business/cannabuzz-bar-and-georgies-social-house-open/",
    logo: "/images/press-smiley-pete.png",
    logoAlt: "Smiley Pete Publishing",
  },
];

const EXPERIENCE_PARAGRAPHS = [
  "The top priority here at Georgie’s is to provide our patrons with a distinct, one-of-a-kind space to gather, converse, and enjoy an unparalleled experience.",
  "As soon as you step foot into our establishment, you’ll be greeted with a fresh energy and immediate comfort, inspiring you to bask in the beauty and pleasure of life.",
  "Working closely with Christopher Michael Designs, we’ve cultivated an aesthetically beautiful interior space that boasts a modern twist on traditional bar design, sure to delight and excite our clientele.",
  "The space seamlessly and intrinsically gels with a wide range of events, parties, and celebrations. Whether you are seeking a small party venue in Lexington, KY, or want to hold large team-building events, we can make that happen for you!",
  "Even our exterior planters have been arranged to create the perfect ambiance for our sidewalk café. Our front windows feature sleek and modern garage doors that connect the outdoor environment to the inside, allowing you to enjoy the best of both worlds.",
  "At Georgie’s, we’re proud to provide a space that fosters unforgettable memories and experiences with every visit. We operate on a first-come, first-serve basis, and unfortunately, we do not accept reservations at this time. However, we do offer a convenient walk-up waitlist, and in the event that we’re at capacity when you arrive, our team will promptly notify you via text as soon as a seat becomes available.",
  "As a sister concept of the popular downtown bar Centro, our goal is to continue to bring you fresh and exciting experiences that will have you returning time and time again. We can’t wait to see you celebrating life at Georgie’s!",
];

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      {/* Hero */}
      <section data-bg="dark" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-24 pb-32">
        <Image
          src="/images/gallery-07.jpg"
          alt="Georgie's Social House in Lexington, KY"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/70"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center px-5 text-center [text-shadow:0_1px_14px_rgba(0,0,0,0.45)]">
          <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-[0.04em] text-cream md:text-7xl">
            {TAGLINE}
          </h1>
          <Image
            src="/images/brush-line-sand.svg"
            alt=""
            width={487}
            height={24}
            aria-hidden="true"
            className="mt-8 h-3 w-52"
          />
          <nav
            aria-label="Primary"
            className="mt-8 flex flex-col items-center gap-y-5 sm:flex-row sm:gap-y-0"
          >
            {HERO_LINKS.map((l, i) => (
              <Fragment key={l.label}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-5 w-px bg-cream/30 sm:mx-8 sm:block"
                  />
                )}
                <Link
                  href={l.href}
                  className="group relative font-display text-xl uppercase tracking-[0.18em] text-cream transition-colors hover:text-white md:text-2xl"
                >
                  {l.label}
                  <span className="pointer-events-none absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-cream transition-[width] duration-300 ease-out group-hover:w-full" />
                </Link>
              </Fragment>
            ))}
          </nav>
        </div>
      </section>

      {/* Discover cards */}
      <section data-bg="light" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid gap-x-14 gap-y-16 md:grid-cols-3">
            {CARDS.map((c) => (
              <Card key={c.heading} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR SPACE — full-width parallax */}
      <section
        data-bg="dark"
        className="relative bg-ink bg-[url('/images/gallery-21.jpg')] bg-cover bg-center bg-scroll md:bg-fixed"
      >
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center md:py-40">
          <SectionHeading as="h2" align="center" color="white">
            Our Space
          </SectionHeading>
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-cream/90">
            <p>
              Welcome to Georgie’s Social House! Come experience what we call
              Refined Adulting right here in Lexington. Enjoy hand crafted
              cocktails, chef prepared charcuterie boards &amp; gourmet hotdogs
              and our extensive wine &amp; bourbon collection in an unbeatable
              atmosphere. Each cocktail is named after a famous George – and
              homage to George’s Deli that occupied our space for 35 celebrated
              years prior to our opening in 2022.
            </p>
            <p>
              We are situated in a charming local community along Limestone,
              offering impressive views of the nearby courthouses along the
              Limestone Corridor neighborhood. Among our friendly neighbors is
              Lussi Brown Coffee Bar, with whom we get our cold brew for our
              wildly popular espresso martini, known as The Force, named after
              the legendary creator of Star Wars, George Lucas.
            </p>
            <p>
              Hang out with friends or through a party with us! Georgie’s is the
              event space you’ve been looking for with customizable options and
              ease of booking – we’re a unique party location for rehearsal
              dinners, birthday celebrations, bridal showers and private or
              corporate events.
            </p>
          </div>
          <Button href={SOCIAL.maps} external variant="cream" className="mt-8">
            get directions
          </Button>
        </div>
      </section>

      {/* REFINED ADULTING — centered statement + gallery teaser */}
      <section data-bg="light" className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading as="h2" align="center" color="green">
            Refined Adulting
          </SectionHeading>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            Join us for a brand-new socializing experience we like to call
            refined adulting. Indulge in specialty craft cocktails, an impressive
            wine and bourbon selection, tasty charcuterie boards, and polished
            hospitality while relaxing in an atmosphere of comfort and style.
            From the moment you lay eyes on our space, you know attention to
            detail is our thing.
          </p>
          <Button href="/gallery" variant="solid" className="mt-8">
            view gallery
          </Button>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-4 px-6 sm:gap-6">
          {REFINED_IMAGES.map((img) => (
            <Link
              key={img.src}
              href="/gallery"
              className={`group block overflow-hidden ${img.offset}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* THE EXPERIENCE — full-width parallax */}
      <section
        data-bg="dark"
        className="relative bg-ink bg-[url('/images/gallery-16.jpg')] bg-cover bg-center bg-scroll md:bg-fixed"
      >
        <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:py-32">
          <SectionHeading as="h2" align="center" color="white">
            The Experience
          </SectionHeading>
          <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-cream/90">
            {EXPERIENCE_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/parties-events" variant="cream">
              explore parties &amp; events
            </Button>
          </div>
        </div>
      </section>

      {/* Press — white, centered */}
      <section data-bg="light" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex justify-center">
            <SectionHeading align="center" color="dark">
              Georgie’s in the Press
            </SectionHeading>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {PRESS.map((p) => (
              <article
                key={p.href}
                className="flex flex-col items-center border border-ink/10 bg-sand/40 px-6 py-10 text-center"
              >
                <div className="relative h-14 w-56">
                  <Image src={p.logo} alt={p.logoAlt} fill sizes="224px" className="object-contain" />
                </div>
                <p className="mt-6 text-xl italic leading-snug">“{p.quote}”</p>
                <Button href={p.href} external variant="solid" className="mt-6 px-8 py-3 text-base">
                  read article
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
