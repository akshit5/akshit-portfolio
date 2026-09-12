import Link from "next/link";
import { ArrowUpRight, ExternalLink, Circle } from "lucide-react";
import { GithubIcon } from "./ui/brand-icons";
import { featuredProjects } from "@/content/projects";
import type { Project } from "@/content/types";
import { FigureFrame } from "./ui/figure-frame";
import { Reveal } from "./ui/reveal";
import { Section, SectionHeader } from "./ui/section";
import { cn } from "@/lib/utils";

function Meta({ project, className }: { project: Project; className?: string }) {
  return (
    <dl className={cn("flex flex-wrap gap-x-8 gap-y-3", className)}>
      {[
        { term: "Year", value: project.year },
        { term: "Role", value: project.role },
        { term: "Focus", value: project.facets.join(" · ") },
      ].map((item) => (
        <div key={item.term}>
          <dt className="label-mono">{item.term}</dt>
          <dd className="mt-1.5 text-[0.9375rem] text-fg">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Index({ n }: { n: number }) {
  return (
    <span className="label-mono text-fg-faint" aria-hidden="true">
      {String(n).padStart(2, "0")}
    </span>
  );
}

function TitleBlock({ project, n }: { project: Project; n: number }) {
  return (
    <>
      <div className="mb-5 flex items-center gap-3">
        <Index n={n} />
        <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
        <span className="label-mono">{project.metaLine}</span>
      </div>
      <h3 className="text-[1.75rem] leading-tight tracking-[-0.03em] sm:text-[2rem]">
        <Link
          href={`/projects/${project.slug}`}
          className="group inline-flex items-start gap-1.5 underline-offset-[6px] hover:underline"
        >
          {project.title}
          <ArrowUpRight
            className="mt-1.5 size-5 shrink-0 text-fg-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </Link>
      </h3>
      <p className="mt-2 text-[1.0625rem] text-fg-muted">{project.headline}</p>
    </>
  );
}

function ReadCase({ slug }: { slug: string }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-fg underline-offset-4 hover:text-brand hover:underline"
    >
      Read the case study
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </Link>
  );
}

/* ---------------------------------------------------------------- */
/* Treatment A — interface work. The imagery carries it.             */
/* ---------------------------------------------------------------- */
function InterfaceTreatment({ project, n }: { project: Project; n: number }) {
  return (
    <Reveal as="article" className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4 lg:pt-2">
        <TitleBlock project={project} n={n} />
        <p className="mt-5 text-fg-muted">{project.description}</p>
        <Meta project={project} className="mt-8" />
        <ReadCase slug={project.slug} />
      </div>

      <div className="lg:col-span-8">
        <Link href={`/projects/${project.slug}`} className="group block">
          <FigureFrame
            figure={project.cover}
            chrome={project.cover.chrome}
            chromeLabel={project.cover.chromeLabel}
            hoverZoom
            className="shadow-[var(--shadow-card)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-lift)]"
            sizes="(max-width: 1024px) 100vw, 720px"
          />
        </Link>
        {project.thumbnails && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            {project.thumbnails.map((t) => (
              <FigureFrame key={t.src} figure={t} radius="sm" sizes="240px" />
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------- */
/* Treatment B — strategy work. The document carries it.             */
/* ---------------------------------------------------------------- */
const memoSections = [
  "Market structure",
  "Incumbents",
  "ICP",
  "Wedge",
  "Moat",
  "Business model",
  "Unit economics",
  "Go / No-Go",
];

function DocumentTreatment({ project, n }: { project: Project; n: number }) {
  return (
    <Reveal as="article" className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="order-2 lg:order-1 lg:col-span-8">
        <div className="rounded-xl border border-border-hair bg-bg-subtle p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="label-mono">Investment & strategy memo</span>
            <span className="label-mono text-fg-faint">{project.year}</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-0 sm:grid-cols-4">
            {memoSections.map((s) => (
              <p
                key={s}
                className="border-b border-border-hair py-2.5 text-[0.8125rem] text-fg-muted"
              >
                {s}
              </p>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:items-center">
            <blockquote className="border-l-2 border-brand pl-4">
              <p className="text-[0.9375rem] leading-relaxed text-fg">
                “Enter through knowledge retrieval, not through the accounting
                workflow.”
              </p>
              <footer className="label-mono mt-2.5 normal-case tracking-normal">
                The wedge, from the memo
              </footer>
            </blockquote>
            <Link href={`/projects/${project.slug}`} className="group block">
              <FigureFrame
                figure={project.cover}
                radius="sm"
                chrome={project.cover.chrome}
                chromeLabel={project.cover.chromeLabel}
                hoverZoom
                className="transition-shadow duration-500 group-hover:shadow-[var(--shadow-card)]"
                sizes="(max-width: 640px) 90vw, 340px"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 lg:col-span-4 lg:pt-2">
        <TitleBlock project={project} n={n} />
        <p className="mt-5 text-fg-muted">{project.description}</p>
        <Meta project={project} className="mt-8" />
        <ReadCase slug={project.slug} />
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------- */
/* Treatment C — a shipped build. The artefact carries it.           */
/* ---------------------------------------------------------------- */
function BuildTreatment({ project, n }: { project: Project; n: number }) {
  const demo = project.links.find((l) => l.kind === "demo");
  const repo = project.links.find((l) => l.kind === "repo");

  return (
    <Reveal as="article">
      <div className="dark overflow-hidden rounded-xl border border-border-hair bg-bg text-fg">
        <div className="grid grid-cols-1 gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="lg:col-span-5">
            <TitleBlock project={project} n={n} />
            <p className="mt-5 text-fg-muted">{project.description}</p>

            <div className="mt-8 space-y-2.5 border-t border-border-hair pt-6">
              {[
                { k: "Stack", v: "HTML · CSS · Vanilla JS · Vercel" },
                { k: "Logic", v: "Rule-based NIS2 assessment" },
                { k: "Status", v: "Live venture-case MVP" },
              ].map((row) => (
                <div key={row.k} className="flex gap-4 font-mono text-[0.75rem]">
                  <span className="w-16 shrink-0 text-fg-faint">{row.k}</span>
                  <span className="text-fg-muted">{row.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              {demo && (
                <a
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
                >
                  <Circle
                    className="size-2 fill-brand text-brand"
                    aria-hidden="true"
                  />
                  Open live MVP
                  <ExternalLink className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
                </a>
              )}
              {repo && (
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.9375rem] text-fg-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  <GithubIcon className="size-4 shrink-0 fill-current" />
                  Repository
                </a>
              )}
            </div>

            <ReadCase slug={project.slug} />
          </div>

          <div className="lg:col-span-7">
            <Link href={`/projects/${project.slug}`} className="group block">
              <FigureFrame
                figure={project.cover}
                chrome={project.cover.chrome}
                chromeLabel={project.cover.chromeLabel}
                hoverZoom
                sizes="(max-width: 1024px) 100vw, 620px"
              />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function SelectedWork() {
  return (
    <Section id="selected-work">
      <SectionHeader
        eyebrow="Featured"
        title="Selected Work"
        description="Projects where product thinking meets design, technology and execution."
        align="between"
        action={
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
          >
            All projects
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>
        }
      />

      <div className="flex flex-col gap-20 md:gap-28">
        {featuredProjects.map((project, i) => {
          if (project.treatment === "document")
            return <DocumentTreatment key={project.slug} project={project} n={i + 1} />;
          if (project.treatment === "build")
            return <BuildTreatment key={project.slug} project={project} n={i + 1} />;
          return <InterfaceTreatment key={project.slug} project={project} n={i + 1} />;
        })}
      </div>
    </Section>
  );
}
