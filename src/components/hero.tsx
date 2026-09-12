"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "./ui/button";
import { ProductCanvas } from "./product-canvas";
import { HeroBackdrop } from "./hero-backdrop";

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay: 0.06 * i,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36 lg:pt-44">
      <HeroBackdrop />
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-20">
          <div>
            <motion.p {...rise(0)} className="label-mono flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rounded-full bg-brand"
              />
              {site.hero.eyebrow}
            </motion.p>

            {/* Per-word mask reveal. Each word sits in an overflow-hidden
                sleeve and slides up, which reads as typesetting rather than
                as an animation. The padding/negative-margin pair stops the
                sleeve clipping descenders. */}
            <h1 className="mt-6 text-[2.625rem] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[3.5rem] xl:text-[4.25rem] 2xl:text-[4.75rem]">
              {(() => {
                let index = 0;
                return site.hero.headline.map((line, lineIndex) => {
                  const words = line.split(" ");
                  const isLastLine = lineIndex === site.hero.headline.length - 1;
                  return (
                    <span key={line} className="block">
                      {words.map((word, wordIndex) => {
                        const i = index++;
                        const isLastWord = isLastLine && wordIndex === words.length - 1;
                        return (
                          <span
                            key={`${word}-${i}`}
                            className="-mb-[0.14em] mr-[0.22em] inline-block overflow-hidden pb-[0.14em] align-bottom"
                          >
                            <motion.span
                              className="inline-block"
                              initial={reduced ? undefined : { y: "115%" }}
                              animate={reduced ? undefined : { y: 0 }}
                              transition={{
                                duration: 0.9,
                                delay: 0.08 + i * 0.05,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            >
                              {isLastWord ? (
                                <>
                                  {word.replace(/\.$/, "")}
                                  <span className="text-brand">.</span>
                                </>
                              ) : (
                                word
                              )}
                            </motion.span>
                          </span>
                        );
                      })}
                    </span>
                  );
                });
              })()}
            </h1>

            <motion.p
              {...rise(3)}
              className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-fg-muted lg:text-[1.125rem]"
            >
              {site.hero.subhead}
            </motion.p>

            <motion.div {...rise(4)} className="mt-9 flex flex-wrap items-center gap-3">
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
              {...rise(5)}
              className="mt-8 flex items-center gap-2.5 text-[0.875rem] text-fg-muted"
            >
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full rounded-full bg-brand opacity-40 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              {site.hero.availability}
            </motion.p>
          </div>

          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProductCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
