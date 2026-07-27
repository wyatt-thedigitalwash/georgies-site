import type { MenuSection as MenuSectionType, MenuItem } from "@/lib/menu";

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-body text-lg lowercase text-ink">{item.name}</h3>
        {item.price && (
          <span className="font-body text-lg text-ink/80">{item.price}</span>
        )}
      </div>
      {item.desc && (
        <p className="mt-1 text-sm italic text-ink/70">{item.desc}</p>
      )}
      {item.ingredients && (
        <p className="mt-1 text-sm leading-relaxed text-ink/70">
          {item.ingredients}
        </p>
      )}
      {item.detail && (
        <p className="mt-1 text-sm text-ink/70">{item.detail}</p>
      )}
    </li>
  );
}

export default function MenuSection({
  section,
  className = "",
  columns = false,
}: {
  section: MenuSectionType;
  className?: string;
  columns?: boolean;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className={`scroll-mt-32 ${className}`}
    >
      <div className="border-b border-ink/15 pb-3">
        <h2
          id={`${section.id}-heading`}
          className="font-display text-2xl uppercase tracking-tight text-brand md:text-3xl"
        >
          {section.title}
        </h2>
        {section.note && (
          <p className="mt-2 text-sm italic text-ink/70">{section.note}</p>
        )}
      </div>
      <ul
        className={
          columns
            ? "mt-6 gap-x-12 [&>li]:mb-6 [&>li]:break-inside-avoid sm:columns-2"
            : "mt-6 space-y-6"
        }
      >
        {section.items.map((item) => (
          <ItemRow key={`${item.name}-${item.price}`} item={item} />
        ))}
      </ul>
    </section>
  );
}
