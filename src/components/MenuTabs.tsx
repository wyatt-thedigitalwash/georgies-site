"use client";

import { useState } from "react";
import MenuSection from "@/components/MenuSection";
import {
  COCKTAIL_SECTIONS,
  WINE_SECTIONS,
  WINE_BOTTLE_SECTIONS,
  BEER_SECTION,
  NOSH_SECTION,
  HAPPY_HOUR,
} from "@/lib/menu";

const TABS = [
  { id: "cocktails", label: "Cocktails & Nosh" },
  { id: "wine", label: "Wine" },
  { id: "happy-hour", label: "Happy Hour" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// The long bottle lists render full-width in two internal columns; the short
// ones sit two-up in a grid.
const WIDE_BOTTLE_IDS = ["red-wine-bottle", "white-wine-bottle", "champagne-bottle"];
const WIDE_BOTTLE = WINE_BOTTLE_SECTIONS.filter((s) =>
  WIDE_BOTTLE_IDS.includes(s.id),
);
const NARROW_BOTTLE = WINE_BOTTLE_SECTIONS.filter(
  (s) => !WIDE_BOTTLE_IDS.includes(s.id),
);

export default function MenuTabs() {
  const [active, setActive] = useState<TabId>("cocktails");

  return (
    <div>
      {/* Tab buttons */}
      <div
        role="tablist"
        aria-label="Menu"
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setActive(t.id)}
            className={`border border-brand px-5 py-2 text-sm uppercase tracking-wide transition-colors duration-300 ease-out ${
              active === t.id
                ? "bg-brand text-white"
                : "text-brand hover:bg-brand hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Cocktails & Nosh */}
      <div
        role="tabpanel"
        id="panel-cocktails"
        aria-labelledby="tab-cocktails"
        hidden={active !== "cocktails"}
        className="mt-12 md:mt-16"
      >
        <div className="columns-1 gap-x-12 md:columns-2 [&>section]:mb-12 [&>section]:break-inside-avoid">
          {COCKTAIL_SECTIONS.map((s) => (
            <MenuSection key={s.id} section={s} />
          ))}
          <MenuSection section={BEER_SECTION} />
          <MenuSection section={NOSH_SECTION} />
        </div>
      </div>

      {/* Wine */}
      <div
        role="tabpanel"
        id="panel-wine"
        aria-labelledby="tab-wine"
        hidden={active !== "wine"}
        className="mt-12 md:mt-16"
      >
        <div className="columns-1 gap-x-12 md:columns-2 [&>section]:mb-12 [&>section]:break-inside-avoid">
          {WINE_SECTIONS.map((s) => (
            <MenuSection key={s.id} section={s} />
          ))}
        </div>
        <p className="mb-10 mt-16 text-center text-sm uppercase tracking-[0.3em] text-ink/50">
          Wine by the Bottle
        </p>
        <div className="space-y-12">
          {WIDE_BOTTLE.map((s) => (
            <MenuSection key={s.id} section={s} columns />
          ))}
          <div className="columns-1 gap-x-12 md:columns-2 [&>section]:mb-12 [&>section]:break-inside-avoid">
            {NARROW_BOTTLE.map((s) => (
              <MenuSection key={s.id} section={s} />
            ))}
          </div>
        </div>
      </div>

      {/* Happy Hour */}
      <div
        role="tabpanel"
        id="panel-happy-hour"
        aria-labelledby="tab-happy-hour"
        hidden={active !== "happy-hour"}
        className="mt-12 md:mt-16"
      >
        <div className="mx-auto max-w-xl bg-ink px-8 py-14 text-center text-cream">
          <h2 className="font-display text-3xl uppercase tracking-tight text-cream md:text-4xl">
            {HAPPY_HOUR.title}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-cream/70">
            {HAPPY_HOUR.when}
          </p>
          <ul className="mt-8 space-y-3 text-base">
            {HAPPY_HOUR.deals.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
