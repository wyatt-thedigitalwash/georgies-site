"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const btnBase =
  "inline-block px-12 py-4 text-lg lowercase font-rounded transition-colors duration-300 ease-out";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      data-bg="light"
      className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-24 text-center md:py-32"
    >
      <SectionHeading as="h1" align="center" color="green">
        Something went wrong
      </SectionHeading>
      <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/80">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className={`${btnBase} bg-brand text-cream hover:bg-ink`}
        >
          try again
        </button>
        <Link
          href="/"
          className={`${btnBase} border border-brand text-brand hover:bg-brand hover:text-cream`}
        >
          go home
        </Link>
      </div>
    </section>
  );
}
