"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { Figure } from "@/content/types";
import { FigureFrame } from "../ui/figure-frame";

/**
 * Case-study cover. Settles into place as it enters the viewport rather than
 * popping, which makes the top of a long page feel less abrupt. Scroll-linked
 * rather than time-linked, so it tracks the reader instead of running on its
 * own clock. Static under prefers-reduced-motion.
 */
export function CoverFigure({
  figure,
  chromeLabel,
}: {
  figure: Figure;
  chromeLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.25"],
  });
  const eased = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  const scale = useTransform(eased, [0, 1], [0.975, 1]);
  const y = useTransform(eased, [0, 1], [18, 0]);

  return (
    <motion.div
      ref={ref}
      style={reduced ? undefined : { scale, y }}
      className="origin-bottom will-change-transform"
    >
      <FigureFrame
        figure={figure}
        priority
        chrome={figure.chrome}
        chromeLabel={chromeLabel ?? figure.chromeLabel}
        sizes="(max-width: 1280px) 100vw, 1200px"
        className="shadow-[var(--shadow-card)]"
      />
    </motion.div>
  );
}
