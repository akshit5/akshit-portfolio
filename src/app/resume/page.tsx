import type { Metadata } from "next";
import { Download } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ContactSection } from "@/components/contact-section";
import { site } from "@/content/site";
import { capabilities, experience, research } from "@/content/experience";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Akshit Rana's resume. Technology & Innovation Management Master's student in Germany working across product, strategy, AI and design.",
  alternates: { canonical: "/resume" },
};

const groups = [
  { key: "venture" as const, label: "Venture cases" },
  { key: "work" as const, label: "Experience" },
  { key: "research" as const, label: "Research" },
  { key: "education" as const, label: "Education" },
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Akshit Rana"
        description={`${site.role} · ${site.location}. Readable here, downloadable as a PDF. Same content either way.`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button href={site.links.resume} download>
            Download PDF
            <Download className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </Button>
          <Button href={`mailto:${site.links.email}`} variant="secondary">
            {site.links.email}
          </Button>
        </div>
      </PageHeader>

      <div className="container-page pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            {groups.map((group) => {
              const entries = experience.filter((e) => e.kind === group.key);
              if (!entries.length) return null;
              return (
                <Reveal key={group.key}>
                  <section className="mb-12">
                    <h2 className="label-mono mb-5 flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className="inline-block h-px w-6 bg-border-strong"
                      />
                      {group.label}
                    </h2>
                    <ul className="border-t border-border-hair">
                      {entries.map((e) => (
                        <li
                          key={`${e.organisation}-${e.role}`}
                          className="border-b border-border-hair py-5"
                        >
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                            <h3 className="text-[1.0625rem] font-medium">{e.role}</h3>
                            <p className="shrink-0 font-mono text-[0.75rem] text-fg-muted">
                              {e.period}
                            </p>
                          </div>
                          <p className="mt-1 text-[0.9375rem] text-fg-muted">
                            {e.organisation} · {e.location}
                          </p>
                          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">
                            {e.summary}
                          </p>
                          {e.points && (
                            <ul className="mt-3 flex flex-col gap-1.5">
                              {e.points.map((p) => (
                                <li
                                  key={p}
                                  className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg-muted"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-[0.62em] size-1 shrink-0 rounded-full bg-border-strong"
                                  />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </section>
                </Reveal>
              );
            })}

            <Reveal>
              <section>
                <h2 className="label-mono mb-5 flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="inline-block h-px w-6 bg-border-strong"
                  />
                  Publications
                </h2>
                <ul className="border-t border-border-hair">
                  {research.map((r) => (
                    <li key={r.title} className="border-b border-border-hair py-5">
                      <h3 className="max-w-2xl text-[1.0625rem] font-medium leading-snug">
                        {r.title}
                      </h3>
                      <p className="mt-1.5 text-[0.9375rem] text-fg-muted">
                        {r.type} · {r.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <Reveal delay={1}>
              <div className="lg:sticky lg:top-28">
                <h2 className="label-mono mb-4">Selected projects</h2>
                <ul className="mb-10 divide-y divide-[color:var(--border)] border-y border-border-hair">
                  {projects
                    .filter((p) => p.featured)
                    .map((p) => (
                      <li key={p.slug} className="py-3.5">
                        <p className="text-[0.9375rem] font-medium">{p.title}</p>
                        <p className="mt-0.5 text-[0.875rem] text-fg-muted">
                          {p.headline}
                        </p>
                      </li>
                    ))}
                </ul>

                <h2 className="label-mono mb-4">Skills</h2>
                <div className="space-y-5">
                  {capabilities.map((g) => (
                    <div key={g.title}>
                      <p className="text-[0.9375rem] font-medium">{g.title}</p>
                      <p className="mt-1 text-[0.875rem] leading-relaxed text-fg-muted">
                        {g.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                  <div>
                    <p className="text-[0.9375rem] font-medium">Languages</p>
                    <p className="mt-1 text-[0.875rem] text-fg-muted">
                      English C1 · German B1 · Hindi native
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>

      <ContactSection />
    </>
  );
}
