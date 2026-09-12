"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FigureFrame } from "./ui/figure-frame";
import { getProject, projects } from "@/content/projects";

/**
 * Hero visual — a "product canvas".
 *
 * Not a decorative graphic: real fragments of real work. An interface, a
 * decision quoted from the strategy memo, a shipped MVP. Cursor-aware
 * parallax at three depths, capped at ~10px so it reads as responsiveness
 * rather than novelty. Static under prefers-reduced-motion and on touch.
 */
export function ProductCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const amealio = getProject("amealio")!;
  const taxhub = getProject("taxhub")!;
  const cavrix = getProject("cavrix")!;

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) / r.width,
      y: (e.clientY - (r.top + r.height / 2)) / r.height,
    });
  }

  const depth = (d: number) => ({ x: pos.x * d, y: pos.y * d });
  const spring = {
    type: "spring" as const,
    stiffness: 120,
    damping: 20,
    mass: 0.6,
  };

  const caption =
    "label-mono mt-2 flex items-center gap-1.5 normal-case tracking-normal transition-colors group-hover:text-brand";

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="relative select-none rounded-xl border border-border-hair bg-bg-subtle p-3 shadow-[var(--shadow-card)] sm:p-4"
    >
      {/* Panel chrome — reads as a tool, not a decoration */}
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="label-mono">Product canvas</span>
        <span className="label-mono text-fg-faint">
          3 of {projects.length} projects
        </span>
      </div>

      <motion.div animate={depth(8)} transition={spring}>
        <Link href="/projects/amealio" className="group block rounded-lg">
          <FigureFrame
            figure={amealio.cover}
            chrome
            chromeLabel={amealio.cover.chromeLabel}
            hoverZoom
            className="shadow-[var(--shadow-card)]"
            priority
            sizes="(max-width: 1024px) 92vw, 520px"
          />
          <span className={caption}>
            Amealio · operations console
            <ArrowUpRight className="size-3" strokeWidth={2} aria-hidden="true" />
          </span>
        </Link>
      </motion.div>

      <div className="mt-4 grid grid-cols-12 items-stretch gap-3">
        <motion.div
          animate={depth(18)}
          transition={spring}
          className="col-span-12 rounded-lg border border-border-hair bg-bg p-4 shadow-[var(--shadow-card)] sm:col-span-5"
        >
          <span className="label-mono text-brand">Decision</span>
          <p className="mt-2 text-[0.8125rem] leading-relaxed text-fg">
            Enter through knowledge retrieval, not the accounting workflow.
          </p>
          <p className="mt-2 text-[0.75rem] leading-relaxed text-fg-muted">
            A smaller promise, and a far shorter path to being used.
          </p>
          <Link
            href="/projects/taxhub"
            className="label-mono mt-3 inline-flex items-center gap-1.5 normal-case tracking-normal text-fg-muted transition-colors hover:text-brand"
          >
            {taxhub.title}
            <ArrowUpRight className="size-3" strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          animate={depth(28)}
          transition={spring}
          className="col-span-12 flex flex-col justify-end sm:col-span-7"
        >
          <Link href="/projects/cavrix" className="group block rounded-lg">
            <FigureFrame
              figure={cavrix.cover}
              radius="sm"
              chrome
              hoverZoom
              className="shadow-[var(--shadow-lift)]"
              sizes="(max-width: 1024px) 55vw, 300px"
            />
            <span className={caption}>
              CAVRIX · live MVP
              <ArrowUpRight className="size-3" strokeWidth={2} aria-hidden="true" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
