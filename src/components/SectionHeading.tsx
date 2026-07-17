import Image from "next/image";

type SectionHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  color?: "green" | "white" | "dark";
  brush?: boolean;
  className?: string;
};

const COLOR = {
  green: "text-brand",
  white: "text-cream",
  dark: "text-ink",
};

// Uppercase grotesque section heading (Archivo ~= the site's RatioModern),
// weight 500, with the optional hand-drawn brush underline.
export default function SectionHeading({
  children,
  as: Tag = "h2",
  align = "left",
  color = "green",
  brush = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Tag
        className={`font-display text-4xl uppercase leading-[1.02] sm:text-5xl ${COLOR[color]} ${className}`}
      >
        {children}
      </Tag>
      {brush && (
        <Image
          src="/images/brush-underline.svg"
          alt=""
          width={487}
          height={24}
          className={`mt-3 h-3 w-64 max-w-full sm:w-80 ${align === "center" ? "mx-auto" : ""}`}
        />
      )}
    </div>
  );
}
