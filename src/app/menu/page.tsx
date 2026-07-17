import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import MenuTabs from "@/components/MenuTabs";
import { MENU_DISCLAIMER } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The Georgie's Social House menu: traditional and house crafted cocktails, zero proof, wine by the glass and bottle, beer, nosh, and happy hour in Lexington, KY.",
};

export default function MenuPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section data-bg="light" className="bg-white pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
          <SectionHeading align="center" as="h1">
            Menu
          </SectionHeading>
        </div>
      </section>

      {/* Tabbed menus */}
      <section data-bg="light" className="bg-white pb-16">
        <div className="mx-auto max-w-5xl px-5">
          <MenuTabs />
        </div>
      </section>

      {/* Disclaimer */}
      <section data-bg="light" className="bg-white pb-8">
        <div className="mx-auto max-w-4xl px-5">
          <p className="text-center text-xs italic text-ink/50">
            {MENU_DISCLAIMER}
          </p>
        </div>
      </section>
    </div>
  );
}
