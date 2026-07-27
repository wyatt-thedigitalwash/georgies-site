import SectionHeading from "@/components/SectionHeading";
import MenuTabs from "@/components/MenuTabs";
import JsonLd from "@/components/JsonLd";
import { MENU_DISCLAIMER } from "@/lib/menu";
import { pageMeta, breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata = pageMeta({
  pageName: "Menu",
  description:
    "Explore the Georgie's Social House menu in Lexington, KY: traditional and house craft cocktails, zero proof, wine, bourbon, beer, nosh, and happy hour.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Craft Cocktails, Wine, Bourbon & Nosh",
          description:
            "Traditional and house craft cocktails, zero-proof drinks, wine, bourbon, beer, and shared nosh at a modern Lexington, KY social house.",
          path: "/menu",
        })}
      />
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
          <p className="text-center text-xs italic text-ink/70">
            {MENU_DISCLAIMER}
          </p>
        </div>
      </section>
    </div>
  );
}
