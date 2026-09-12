"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Project index as a list, with a preview that trails the cursor.
 *
 * Position comes from viewport coordinates straight into a fixed-position
 * element, so it stays correct through scroll and resize. The follow is done
 * with motion values rather than React state: a spring driving a transform
 * never re-renders the tree, where a per-frame setState on a list this size
 * would drop frames.
 *
 * Touch devices have no hover, so instead of a floating preview each row
 * carries its own thumbnail. Neither layer is rendered until the pointer type
 * is known, which keeps the unused images off the wire.
 */
export function ProjectIndexList({ projects }: { projects: Project[] }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [isFinePointer, setIsFinePointer] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setIsFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springs = { stiffness: 180, damping: 26, mass: 0.5 };
  const x = useTransform(useSpring(mx, springs), (v) => v + 28);
  const y = useTransform(useSpring(my, springs), (v) => v - 96);

  const showFloating = isFinePointer === true && !reduced;

  return (
    <div
      onPointerMove={(e) => {
        if (!showFloating) return;
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      {showFloating && (
        <motion.div
          aria-hidden="true"
          style={{ x, y }}
          className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
        >
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={projects[active]?.slug}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[190px] w-[290px] overflow-hidden rounded-lg border border-border-hair bg-bg-subtle shadow-[var(--shadow-lift)]"
              >
                {!projects[active].cover.placeholder && (
                  <Image
                    src={projects[active].cover.src}
                    alt=""
                    fill
                    sizes="290px"
                    style={{ objectPosition: projects[active].cover.position ?? "center" }}
                    className="object-cover"
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      <ul className="border-t border-border-hair">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              onPointerEnter={() => setActive(i)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(null)}
              className="group relative block border-b border-border-hair py-6 md:py-7"
            >
              {/* Row wash on hover. Bleeds past the container so the highlight
                  reads as a full-width band rather than a boxed card. */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -inset-x-4 -z-10 rounded-lg bg-bg-subtle opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:-inset-x-6"
              />

              <div className="flex items-start gap-5">
                {isFinePointer === false && !project.cover.placeholder && (
                  <span className="relative aspect-[16/10] w-20 shrink-0 sm:w-24 overflow-hidden rounded-md border border-border-hair bg-bg-subtle">
                    <Image
                      src={project.cover.src}
                      alt=""
                      fill
                      sizes="96px"
                      style={{ objectPosition: project.cover.position ?? "center" }}
                      className="object-cover"
                    />
                  </span>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-[1.125rem] font-medium tracking-[-0.02em] sm:text-[1.375rem]">
                      <span className="relative">
                        {project.title}
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={cn(
                        "size-4 shrink-0 text-fg-faint transition-all duration-300 ease-out",
                        "-translate-x-2 translate-y-1 opacity-0",
                        "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand group-hover:opacity-100",
                        "group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                      )}
                      strokeWidth={1.8}
                    />
                    <span className="label-mono ml-auto shrink-0 tabular-nums sm:hidden">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-fg-muted">
                    {project.headline}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.facets.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-border-hair px-2.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wider text-fg-muted"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="label-mono hidden shrink-0 pt-1 tabular-nums sm:block">
                  {project.year}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
