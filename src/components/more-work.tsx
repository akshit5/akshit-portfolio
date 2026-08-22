import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { moreProjects } from "@/content/projects";
import { site } from "@/content/site";
import { ProjectCard } from "./project-list";
import { Section, SectionHeader } from "./ui/section";

export function MoreWork() {
  return (
    <Section id="more-work" tone="subtle">
      <SectionHeader
        eyebrow="More work"
        title="Research, analytics and earlier design"
        description="Selected rather than exhaustive. Deeper archives live on Behance and GitHub."
        align="between"
        action={
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Behance", href: site.links.behance },
              { label: "GitHub", href: site.links.github },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
              >
                {l.label}
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        }
      />

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.slice(0, 3).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
        >
          See all projects
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      </div>
    </Section>
  );
}
