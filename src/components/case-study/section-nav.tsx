"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Item {
  id: string;
  nav: string;
}

/** Sticky in-page navigation with scroll spy. */
export function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Case study sections" className="lg:sticky lg:top-28">
      <p className="label-mono mb-4 hidden lg:block">Contents</p>
      <ul
        className={cn(
          "scrollbar-none flex gap-2 overflow-x-auto",
          "lg:flex-col lg:gap-0 lg:overflow-visible"
        )}
      >
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "block whitespace-nowrap rounded-full border px-3 py-1.5 text-[0.8125rem] transition-colors",
                  "lg:rounded-none lg:border-0 lg:border-l lg:px-4 lg:py-2 lg:text-[0.875rem]",
                  isActive
                    ? "border-transparent bg-fg text-bg lg:border-brand lg:bg-transparent lg:text-brand"
                    : "border-border-hair text-fg-muted hover:text-fg lg:border-border-hair"
                )}
              >
                {item.nav}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
