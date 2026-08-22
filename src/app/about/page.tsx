import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactSection } from "@/components/contact-section";
import { ResumeCta } from "@/components/resume-cta";
import { Reveal } from "@/components/ui/reveal";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Akshit Rana moved from computer science and interface design in India to product, strategy and AI work in Germany, and what kind of problems he looks for.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I moved upstream from the interface, and stayed there."
      />

      <div className="container-page pb-20 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[1.1875rem] leading-relaxed lg:text-[1.25rem]">
                {about.intro}
              </p>
            </Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal key={p} delay={i + 1}>
                <p className="mt-6 leading-relaxed text-fg-muted">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={about.paragraphs.length + 1}>
              <div className="mt-10 border-l-2 border-brand pl-5">
                <p className="label-mono mb-2.5">What I&apos;m looking for</p>
                <p className="leading-relaxed">{about.looking}</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            {/* Intentionally photo-free. The work carries this page. */}
            <Reveal delay={1}>
              <p className="label-mono mb-4">At a glance</p>
              <dl className="divide-y divide-[color:var(--border)] border-y border-border-hair">
                {about.facts.map((f) => (
                  <div key={f.k} className="flex gap-5 py-3.5">
                    <dt className="label-mono w-24 shrink-0 pt-0.5">{f.k}</dt>
                    <dd className="text-[0.9375rem] text-fg-muted">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>

      <ResumeCta />
      <ContactSection />
    </>
  );
}
