import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { about } from "@/content/about";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";

export function AboutPreview() {
  return (
    <Section id="about" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="label-mono mb-6 flex items-center gap-2.5">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-border-strong" />
            About
          </p>
          <h2 className="text-[1.75rem] leading-[1.15] tracking-[-0.03em] sm:text-[2.125rem]">
            Design first, then the decisions behind it.
          </h2>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-8">
          <p className="text-[1.125rem] leading-relaxed lg:text-[1.1875rem]">
            {about.intro}
          </p>
          <p className="mt-5 text-fg-muted">{about.paragraphs[0]}</p>
          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
          >
            More about me
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
