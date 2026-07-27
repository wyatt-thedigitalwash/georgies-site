import Link from "next/link";

type Variant = "solid" | "outline" | "cream";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: Variant;
  className?: string;
};

const VARIANTS: Record<Variant, string> = {
  solid: "bg-brand text-cream hover:bg-ink",
  outline: "border border-cream text-cream hover:bg-cream hover:text-ink",
  cream: "bg-cream text-ink hover:bg-white",
};

// Sharp-cornered, generously padded button in the rounded button face,
// matching the live Georgie's buttons (green, white, no radius).
export default function Button({
  href,
  children,
  external = false,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const cls = `inline-block px-12 py-4 text-lg lowercase font-rounded transition-colors duration-300 ease-out ${VARIANTS[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
