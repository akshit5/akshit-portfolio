"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/** Thin progress indicator pinned under the header on case studies. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
      className="fixed inset-x-0 top-16 z-40 h-[2px] origin-left bg-brand md:top-[4.5rem]"
    />
  );
}
