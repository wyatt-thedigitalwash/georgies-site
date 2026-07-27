import Image from "next/image";
import Link from "next/link";

type CardProps = {
  image: string;
  alt: string;
  imagePosition?: "top" | "center" | "bottom";
  /** Tailwind aspect-ratio class for the image frame. Defaults to portrait 4/5. */
  imageAspect?: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
};

const OBJECT_POS = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

// Editorial card: tall image, serif heading with a thin accent rule, muted
// copy, and an understated text link. The whole card is the click target.
// Content is a flex column so the links align across a row regardless of
// description length.
export default function Card({
  image,
  alt,
  imagePosition = "center",
  imageAspect = "aspect-[4/5]",
  heading,
  description,
  cta,
}: CardProps) {
  return (
    <Link href={cta.href} className="group flex flex-col">
      <div className={`relative ${imageAspect} w-full overflow-hidden`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${OBJECT_POS[imagePosition]}`}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-7 font-display text-2xl uppercase tracking-wide text-ink">
          {heading}
        </h2>
        <Image
          src="/images/brush-underline.svg"
          alt=""
          width={487}
          height={24}
          aria-hidden="true"
          className="mt-3 h-2 w-28"
        />
        <p className="mt-5 text-[15px] leading-[1.75] text-ink/70">{description}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          {cta.label}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
          >
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
