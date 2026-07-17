import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

type Cta = { label: string; href: string; external?: boolean };
type Tone = "dark" | "light" | "sand";

type FeatureSectionProps = {
  heading: string;
  paragraphs: string[];
  image: string;
  alt: string;
  imagePosition?: "top" | "center" | "bottom";
  lead?: string;
  chips?: string[];
  cta?: Cta;
  ctas?: Cta[];
  reverse?: boolean;
  tone?: Tone;
  headingColor?: "green" | "white" | "dark";
};

const SECTION_BG: Record<Tone, string> = {
  dark: "bg-ink text-cream",
  light: "bg-white text-ink",
  sand: "bg-sand text-ink",
};

const OBJECT_POS = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

export default function FeatureSection({
  heading,
  paragraphs,
  image,
  alt,
  imagePosition = "center",
  lead,
  chips,
  cta,
  ctas,
  reverse = false,
  tone = "light",
  headingColor = tone === "dark" ? "white" : "green",
}: FeatureSectionProps) {
  const allCtas = [...(cta ? [cta] : []), ...(ctas ?? [])];
  const btnVariant = tone === "dark" ? "cream" : "solid";
  const chipCls =
    tone === "dark" ? "border-cream/30 text-cream/80" : "border-ink/20 text-ink/70";

  return (
    <section data-bg={tone === "light" ? "light" : "dark"} className={`overflow-hidden ${SECTION_BG[tone]}`}>
      <div className="grid md:grid-cols-2">
        {/* Image bleeds to the outer screen edge */}
        <div
          className={`relative min-h-[22rem] md:min-h-[40rem] ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover ${OBJECT_POS[imagePosition]}`}
          />
        </div>

        {/* Text column, padded */}
        <div
          className={`flex items-center px-6 py-14 md:px-16 md:py-24 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="w-full max-w-xl">
            <SectionHeading color={headingColor}>{heading}</SectionHeading>
            {lead && (
              <p className="mt-6 text-[17px] font-semibold leading-relaxed">{lead}</p>
            )}
            <div
              className={`${lead ? "mt-3" : "mt-6"} space-y-4 text-[17px] leading-relaxed`}
            >
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {chips && chips.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <li
                    key={c}
                    className={`border px-3 py-1.5 text-sm leading-none ${chipCls}`}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
            {allCtas.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {allCtas.map((c) => (
                  <Button key={c.label} href={c.href} external={c.external} variant={btnVariant}>
                    {c.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
