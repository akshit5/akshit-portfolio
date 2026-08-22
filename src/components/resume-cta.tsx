import Link from "next/link";
import { Download, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";

export function ResumeCta() {
  return (
    <Section>
      <Reveal>
        <div className="flex flex-col gap-8 rounded-xl border border-border-hair bg-bg-subtle p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="label-mono mb-4">Resume</p>
            <h2 className="text-[1.5rem] leading-tight tracking-[-0.03em] sm:text-[1.875rem]">
              The one-page version
            </h2>
            <p className="mt-3 text-fg-muted">
              Education, experience and the projects above, condensed. Available
              as a PDF or as a page you can read here.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={site.links.resume} download>
              Download resume
              <Download className="size-4" strokeWidth={1.8} aria-hidden="true" />
            </Button>
            <Link
              href="/resume"
              className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
            >
              View resume
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
