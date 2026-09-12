"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { site } from "@/content/site";
import { ProductCanvas } from "./product-canvas";

/**
 * Second screen. Carries the positioning headline and the product canvas,
 * which used to live in the hero before the name took that space.
 *
 * The words animate from a parent trigger through variants rather than each
 * one watching the viewport itself. Each word sits inside an overflow-hidden
 * sleeve, and a word that starts translated out of its sleeve is clipped,
 * which means an IntersectionObserver on the word never fires: it can't come
 * into view because it's hidden, and it's hidden until it comes into view.
 * Observing the uncut parent avoids that deadlock.
 */

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const word: Variants = {
  hidden: { y: "115%" },
  visible: {
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ProductBand() {
  const reduced = useReducedMotion();

  return (
    <section className="border-t border-border-hair py-20 md:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
          <motion.div
            initial={reduced ? undefined : "hidden"}
            whileInView={reduced ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-[2.125rem] font-medium leading-[1.05] tracking-[-0.035em] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem]">
              {site.hero.headline.map((line, lineIndex) => {
                const words = line.split(" ");
                const isLastLine =
                  lineIndex === site.hero.headline.length - 1;
                return (
                  <span key={line} className="block">
                    {words.map((w, wordIndex) => (
                      <span
                        key={`${w}-${wordIndex}`}
                        className="-mb-[0.14em] mr-[0.22em] inline-block overflow-hidden pb-[0.14em] align-bottom"
                      >
                        <motion.span variants={word} className="inline-block">
                          {isLastLine && wordIndex === words.length - 1 ? (
                            <>
                              {w.replace(/\.$/, "")}
                              <span className="text-brand">.</span>
                            </>
                          ) : (
                            w
                          )}
                        </motion.span>
                      </span>
                    ))}
                  </span>
                );
              })}
            </h2>

            <motion.p
              variants={fade}
              className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-fg-muted lg:text-[1.125rem]"
            >
              {site.hero.subhead}
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProductCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
