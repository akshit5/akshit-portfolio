"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "./ui/button";
import { ProductCanvas } from "./product-canvas";

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
    <section className="relative overflow-hidden pt-28 md:pt-36 lg:pt-44">
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

            <h1 className="mt-6 text-[2.625rem] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[3.5rem] xl:text-[4.25rem] 2xl:text-[4.75rem]">
              {site.hero.headline.map((line, i) => (
                <motion.span key={line} {...rise(i + 1)} className="block">
                  {i === site.hero.headline.length - 1 ? (
                    <>
                      {line.replace(/\.$/, "")}
                      <span className="text-brand">.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
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
