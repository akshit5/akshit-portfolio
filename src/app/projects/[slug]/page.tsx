import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Globe } from "lucide-react";

import { projects, getProject } from "@/content/projects";
import type { LinkKind } from "@/content/types";
import { site } from "@/content/site";
import { Blocks } from "@/components/case-study/blocks";
import { SectionNav } from "@/components/case-study/section-nav";
import { ReadingProgress } from "@/components/case-study/reading-progress";
import { CoverFigure } from "@/components/case-study/cover-figure";
import { Reveal } from "@/components/ui/reveal";
import { ContactSection } from "@/components/contact-section";
import { GithubIcon } from "@/components/ui/brand-icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title}: ${project.headline}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title}: ${project.headline}`,
      description: project.description,
      url: `${site.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

const linkIcon: Record<LinkKind, (p: { className?: string }) => React.ReactNode> = {
  demo: (p) => <ExternalLink className={p.className} strokeWidth={1.7} aria-hidden="true" />,
  repo: (p) => <GithubIcon className={`${p.className} fill-current`} />,
  site: (p) => <Globe className={p.className} strokeWidth={1.7} aria-hidden="true" />,
  case: (p) => <ArrowUpRight className={p.className} strokeWidth={1.7} aria-hidden="true" />,
  external: (p) => <ArrowUpRight className={p.className} strokeWidth={1.7} aria-hidden="true" />,
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = project.caseStudy ?? [];
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { term: "Year", value: project.year },
    { term: "Role", value: project.role },
    { term: "Context", value: project.context },
    { term: "Focus", value: project.facets.join(" · ") },
  ];

  return (
    <>
      {sections.length > 0 && <ReadingProgress />}

      <article>
        {/* ---------- Header ---------- */}
        <header className="container-page pb-12 pt-28 md:pt-36 lg:pt-40">
          <Reveal>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[0.875rem] text-fg-muted underline-offset-4 hover:text-fg hover:underline"
            >
              <ArrowLeft
                className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              All projects
            </Link>

            <p className="label-mono mt-8">{project.metaLine ?? project.category}</p>
            <h1 className="mt-4 max-w-4xl text-[2.25rem] font-medium leading-[1.06] tracking-[-0.035em] sm:text-[3rem] lg:text-[3.75rem]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[1.125rem] leading-relaxed text-fg-muted lg:text-[1.25rem]">
              {project.headline}
            </p>

            <dl className="mt-10 grid gap-x-8 gap-y-6 border-y border-border-hair py-6 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((m) => (
                <div key={m.term}>
                  <dt className="label-mono">{m.term}</dt>
                  <dd className="mt-2 text-[0.9375rem]">{m.value}</dd>
                </div>
              ))}
            </dl>

            {project.links.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {project.links.map((l) => {
                  const Icon = linkIcon[l.kind];
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
                      >
                        <Icon className="size-4 shrink-0" />
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}

            {project.tools.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border-hair px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-fg-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </header>

        {/* ---------- Cover ---------- */}
        <div className="container-page">
          <CoverFigure
            figure={project.cover}
            chromeLabel={
              project.links.find((l) => l.kind === "demo" || l.kind === "site")
                ?.href
            }
          />
        </div>

        {project.scopeNote && (
          <div className="container-page mt-6">
            <Reveal>
              <p className="rounded-lg border border-border-hair bg-bg-subtle px-5 py-4 text-[0.9375rem] leading-relaxed text-fg-muted">
                <span className="label-mono mr-2">Scope</span>
                {project.scopeNote}
              </p>
            </Reveal>
          </div>
        )}

        {/* ---------- Body ---------- */}
        {sections.length > 0 ? (
          <div className="container-page pb-20 pt-16 md:pt-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-3">
                <div className="sticky top-16 z-20 -mx-5 border-b border-border-hair bg-bg/85 px-5 py-3 backdrop-blur-xl md:top-[4.5rem] md:-mx-8 md:px-8 lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
                  <SectionNav
                    items={sections.map((s) => ({ id: s.id, nav: s.nav }))}
                  />
                </div>
              </div>

              <div className="lg:col-span-8 lg:col-start-5">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-t border-border-hair py-12 first:border-t-0 first:pt-0 md:py-14"
                  >
                    {section.kicker && (
                      <p className="label-mono mb-3">{section.kicker}</p>
                    )}
                    <h2 className="mb-6 text-[1.5rem] font-medium tracking-[-0.028em] sm:text-[1.875rem]">
                      {section.title}
                    </h2>
                    <Blocks blocks={section.blocks} />
                  </section>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="container-page pb-20 pt-16">
            <div className="container-prose mx-0 max-w-2xl">
              <p className="text-[1.125rem] leading-relaxed">
                {project.description}
              </p>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-fg-muted">
                A full write-up for this project isn&apos;t published yet. If it&apos;s
                relevant to what you&apos;re hiring for, ask me about it directly.
                I&apos;m happy to walk through it.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
              >
                Get in touch
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        )}

        {/* ---------- Next ---------- */}
        <div className="border-t border-border-hair">
          <div className="container-page py-12 md:py-16">
            <Link href={`/projects/${next.slug}`} className="group block">
              <p className="label-mono">Next project</p>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="text-[1.75rem] tracking-[-0.03em] transition-colors group-hover:text-brand sm:text-[2.25rem]">
                  {next.title}
                </h2>
                <span className="inline-flex items-center gap-2 text-[0.9375rem] text-fg-muted">
                  {next.headline}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </article>

      <ContactSection />
    </>
  );
}
