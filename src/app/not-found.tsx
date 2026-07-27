import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Georgie's Social House" },
};

export default function NotFound() {
  return (
    <section
      data-bg="light"
      className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-24 text-center md:py-32"
    >
      <SectionHeading as="h1" align="center" color="green">
        Page Not Found
      </SectionHeading>
      <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/80">
        Sorry, we could not find the page you were looking for. It may have
        moved or no longer exists.
      </p>
      <Button href="/" variant="solid" className="mt-8">
        go home
      </Button>
    </section>
  );
}
