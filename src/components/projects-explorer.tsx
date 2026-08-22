"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects, categories } from "@/content/projects";
import { ProjectCard } from "./project-list";
import { cn } from "@/lib/utils";

type Filter = (typeof categories)[number];

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduced = useReducedMotion();

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.facets.includes(filter)),
    [filter]
  );

  const counts = useMemo(() => {
    const map = new Map<Filter, number>();
    for (const c of categories) {
      map.set(
        c,
        c === "All"
          ? projects.length
          : projects.filter((p) => p.facets.includes(c)).length
      );
    }
    return map;
  }, []);

  return (
    <>
      <div className="sticky top-16 z-30 -mx-5 border-y border-border-hair bg-bg/85 px-5 py-3 backdrop-blur-xl md:top-[4.5rem] md:-mx-8 md:px-8">
        <div
          role="group"
          aria-label="Filter projects by focus"
          className="scrollbar-none flex gap-2 overflow-x-auto"
        >
          {categories.map((c) => {
            const active = c === filter;
            const count = counts.get(c) ?? 0;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={active}
                disabled={count === 0}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.875rem] transition-colors disabled:opacity-40",
                  active
                    ? "border-transparent bg-fg text-bg"
                    : "border-border-hair text-fg-muted hover:border-border-strong hover:text-fg"
                )}
              >
                {c}
                <span
                  className={cn(
                    "font-mono text-[0.6875rem]",
                    active ? "text-bg/60" : "text-fg-faint"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="label-mono mt-6">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter !== "All" && ` · ${filter}`}
      </p>

      <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
