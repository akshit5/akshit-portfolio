"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "./ui/button";
import { HeroBackdrop } from "./hero-backdrop";
import { cn } from "@/lib/utils";

/**
 * Statement hero: the name at display scale, revealed letter by letter.
 *
 * Left-aligned rather than centred, because "AKSHIT" and "RANA" are six and
 * four characters. Centred lines of unequal length read as accidental at this
 * size; a shared left edge reads as typesetting.
 */

function BlurLetters({
  text,
  className,
  baseDelay = 0,
  step = 0.032,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  step?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <span className={cn("block", className)}>
      {/* One accessible copy of the word for assistive tech and for search,
          then the animated letters hidden from both. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {text.split("").map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            className="inline-block"
            initial={
              reduced ? undefined : { opacity: 0, filter: "blur(12px)", y: "-0.14em" }
            }
            animate={
              reduced ? undefined : { opacity: 1, filter: "blur(0px)", y: 0 }
            }
            transition={{
              duration: 0.6,
              delay: baseDelay + i * step,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export function StatementHero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative isolate flex min-h-[92svh] flex-col justify-center overflow-hidden pt-24 md:min-h-svh md:pt-28">
      <HeroBackdrop />

      <div className="container-page">
        <motion.p {...rise(0.05)} className="label-mono flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="inline-block size-1.5 rounded-full bg-brand"
          />
          {site.hero.eyebrow}
        </motion.p>

        {/* The name, at display scale. Geist Mono is already self-hosted, so
            this costs no extra font request. To try the acid-accent look from
            the reference, swap `text-fg` for an arbitrary colour here. */}
        <h1 className="mt-6 font-mono text-[clamp(3rem,17vw,15rem)] font-bold uppercase leading-[0.82] tracking-[-0.055em] text-fg md:mt-8">
          <BlurLetters text="Akshit" baseDelay={0.08} />
          <BlurLetters text="Rana" baseDelay={0.28} />
        </h1>

        <motion.p
          {...rise(0.5)}
          className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-fg-muted md:mt-10 lg:text-[1.1875rem]"
        >
          {site.hero.statement}
        </motion.p>

        <motion.div {...rise(0.58)} className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="#selected-work">
            View selected work
            <ArrowDown className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </Button>
          <Button href={site.links.resume} variant="secondary" download>
            Download resume
            <Download className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </Button>
        </motion.div>

        <motion.p
          {...rise(0.66)}
          className="mt-8 flex items-center gap-2.5 text-[0.875rem] text-fg-muted"
        >
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full rounded-full bg-brand opacity-40 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          {site.hero.availability}
        </motion.p>
      </div>

      {/* Scroll cue. Flows with the content rather than pinning to the
          bottom of the viewport: at display type sizes the centred block
          grows tall enough that a pinned cue collides with it. */}
      <motion.div
        {...rise(0.74)}
        className="container-page mt-12 md:mt-16"
      >
        <a
          href="#selected-work"
          className="label-mono inline-flex items-center gap-2 text-fg-faint transition-colors hover:text-brand"
        >
          <ArrowDown
            className="size-3.5 motion-safe:animate-bounce"
            strokeWidth={2}
            aria-hidden="true"
          />
          Scroll
        </a>
      </motion.div>
    </section>
  );
}
