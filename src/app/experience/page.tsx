import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ResumeCta } from "@/components/resume-cta";
import { Reveal } from "@/components/ui/reveal";
import { research } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Education, professional experience, venture cases and research. Akshit Rana's route from computer science in India to product and innovation work in Germany.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Computer science, then design, then the decisions upstream of both."
        description="The CV has the full employment history. This is the part that explains how I got to product work, plus the evidence behind it."
      />

      <div className="container-page pb-20 md:pb-24">
        <ExperienceTimeline detailed />
      </div>

      <section className="container-page pb-24 md:pb-32">
        <Reveal>
          <h2 className="label-mono mb-6 flex items-center gap-2.5">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-border-strong" />
            Research
          </h2>
          <ul className="border-y border-border-hair">
            {research.map((r) => (
              <li key={r.title} className="py-6">
                <p className="label-mono">{r.type}</p>
                <h3 className="mt-2.5 max-w-3xl text-[1.125rem] font-medium leading-snug tracking-[-0.015em]">
                  {r.title}
                </h3>
                <p className="mt-2 text-fg-muted">{r.detail}</p>
                {r.href && (
                  <Link
                    href={r.href}
                    className="group mt-3 inline-flex items-center gap-1.5 text-[0.875rem] font-medium underline-offset-4 hover:text-brand hover:underline"
                  >
                    Details
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CapabilitiesSection />
      <ResumeCta />
    </>
  );
}
