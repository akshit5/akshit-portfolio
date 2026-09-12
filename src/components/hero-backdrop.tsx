"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

/**
 * Hero backdrop: a blueprint grid that draws itself in, with a faint
 * accent wash trailing the cursor.
 *
 * Deliberately monochrome and geometric. The grid is the same hairline used
 * for borders across the site, so it reads as an extension of the system
 * rather than as decoration dropped on top. The cursor wash sits at 7%
 * opacity over a 480px radius: enough to feel alive on a large screen,
 * not enough to register as a coloured blob.
 *
 * Everything here is inert under prefers-reduced-motion, and the wash never
 * runs on touch devices, where there is no cursor to follow.
 */
export function HeroBackdrop() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(-1000);
  const rawY = useMotionValue(-1000);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      rawX.set(e.clientX - r.left);
      rawY.set(e.clientY - r.top);
    };
    const onLeave = () => {
      rawX.set(-1000);
      rawY.set(-1000);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced, rawX, rawY]);

  const wash = useMotionTemplate`radial-gradient(480px circle at ${x}px ${y}px, var(--hero-wash), transparent 65%)`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Grid. Masked so it dissolves before it reaches the copy. */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(120% 85% at 50% 0%, #000 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(120% 85% at 50% 0%, #000 20%, transparent 75%)",
        }}
        initial={reduced ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Accent wash following the cursor. */}
      {!reduced && (
        <motion.div
          className="absolute inset-0"
          style={{ background: wash }}
        />
      )}
    </div>
  );
}
