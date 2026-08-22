"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { thinkingStages } from "@/content/experience";
import { Section, SectionHeader } from "./ui/section";
import { Reveal } from "./ui/reveal";
import { cn } from "@/lib/utils";

/**
 * Signature interaction — the Product Thinking Map.
 *
 * Implemented as a real tablist: arrow keys move between stages, Home/End
 * jump to the ends, and the panel is properly associated. It behaves like a
 * small piece of product UI, which is the point.
 */
export function ThinkingMap() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = thinkingStages[active];

  function onKeyDown(e: React.KeyboardEvent) {
    const last = thinkingStages.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  const progress = (active / (thinkingStages.length - 1)) * 100;

  return (
    <Section id="how-i-think" tone="subtle">
      <SectionHeader
        eyebrow="How I think"
        title="From ambiguity to something testable"
        description="I like starting with the problem rather than the solution. Research, product strategy, user experience and rapid prototyping are one loop, not six departments. Every stage below is tied to real work, so pick one."
      />

      <Reveal>
        <div className="rounded-xl border border-border-hair bg-bg p-4 sm:p-6 lg:p-8">
          {/* Rail */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[13px] hidden h-px bg-border-hair md:block"
            />
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-[13px] hidden h-px bg-brand md:block"
              animate={{ width: `${progress}%` }}
              initial={false}
              transition={
                reduced ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
              }
            />

            <div
              role="tablist"
              aria-label="Product thinking stages"
              onKeyDown={onKeyDown}
              className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-4"
            >
              {thinkingStages.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabsRef.current[i] = el;
                    }}
                    role="tab"
                    id={`stage-tab-${s.id}`}
                    aria-selected={isActive}
                    aria-controls={`stage-panel-${s.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "group relative rounded-lg px-3 py-2.5 text-left transition-colors md:rounded-none md:px-0 md:pb-0 md:pt-0",
                      isActive
                        ? "bg-bg-subtle md:bg-transparent"
                        : "hover:bg-bg-subtle md:hover:bg-transparent"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mb-3 hidden size-[7px] rounded-full ring-4 ring-bg transition-colors md:block",
                        isActive ? "bg-brand" : "bg-border-strong group-hover:bg-fg-muted"
                      )}
                    />
                    <span
                      className={cn(
                        "label-mono block transition-colors",
                        isActive ? "text-brand" : "text-fg-faint"
                      )}
                    >
                      {s.index}
                    </span>
                    <span
                      className={cn(
                        "mt-1 block whitespace-nowrap text-[0.9375rem] font-medium transition-colors md:text-base",
                        isActive ? "text-fg" : "text-fg-muted group-hover:text-fg"
                      )}
                    >
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel */}
          <div className="mt-8 border-t border-border-hair pt-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={stage.id}
                role="tabpanel"
                id={`stage-panel-${stage.id}`}
                aria-labelledby={`stage-tab-${stage.id}`}
                tabIndex={0}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-5">
                  <p className="label-mono">
                    Stage {stage.index} · {stage.verb}
                  </p>
                  <h3 className="mt-3 text-[1.5rem] tracking-[-0.03em] sm:text-[1.75rem]">
                    {stage.name}
                  </h3>
                  <p className="mt-3 text-fg-muted">{stage.description}</p>
                </div>

                <div className="lg:col-span-7">
                  <p className="label-mono mb-4">From my work</p>
                  <ul className="flex flex-col gap-3">
                    {stage.evidence.map((e) => (
                      <li key={e.project}>
                        <Link
                          href={e.slug ? `/projects/${e.slug}` : "/projects"}
                          className="group flex gap-4 rounded-lg border border-border-hair bg-bg-subtle p-4 transition-colors hover:border-border-strong"
                        >
                          <span className="flex-1">
                            <span className="flex items-center gap-1.5 text-[0.9375rem] font-medium">
                              {e.project}
                              <ArrowUpRight
                                className="size-3.5 text-fg-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                                strokeWidth={1.8}
                                aria-hidden="true"
                              />
                            </span>
                            <span className="mt-1.5 block text-[0.875rem] leading-relaxed text-fg-muted">
                              {e.detail}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
