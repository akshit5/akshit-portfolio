import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { FigureFrame } from "./ui/figure-frame";
import { Reveal } from "./ui/reveal";

/** Compact card used for secondary work and the Projects index. */
export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const hasCase = Boolean(project.caseStudy?.length);
  const external = !hasCase ? project.links.find((l) => l.kind !== "case") : undefined;

  const body = (
    <>
      <FigureFrame
        figure={project.cover}
        radius="sm"
        className="transition-shadow duration-500 group-hover:shadow-[var(--shadow-card)]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="flex items-center gap-1.5 text-[1.0625rem] font-medium tracking-[-0.015em]">
            {project.title}
            <ArrowUpRight
              className="size-4 shrink-0 text-fg-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </h3>
          <p className="mt-1 text-[0.9375rem] text-fg-muted">{project.headline}</p>
        </div>
        <span className="label-mono shrink-0 pt-1">{project.year}</span>
      </div>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.facets.map((f) => (
          <li
            key={f}
            className="rounded-full border border-border-hair px-2.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wider text-fg-muted"
          >
            {f}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <Reveal as="article" delay={index} className="group">
      {hasCase ? (
        <Link href={`/projects/${project.slug}`} className="block rounded-lg">
          {body}
        </Link>
      ) : external ? (
        <a
          href={external.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg"
        >
          {body}
        </a>
      ) : (
        <div>{body}</div>
      )}
    </Reveal>
  );
}
