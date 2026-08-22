import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/content/experience";
import type { ExperienceEntry } from "@/content/types";
import { Reveal } from "./ui/reveal";
import { cn } from "@/lib/utils";

const kindLabel: Record<ExperienceEntry["kind"], string> = {
  work: "Experience",
  education: "Education",
  venture: "Venture case",
  research: "Research",
};

export function ExperienceTimeline({
  entries = experience,
  detailed = false,
}: {
  entries?: ExperienceEntry[];
  detailed?: boolean;
}) {
  return (
    <ol className="relative">
      {entries.map((entry, i) => (
        <Reveal as="li" key={`${entry.organisation}-${entry.role}`} delay={i}>
          <div
            className={cn(
              "grid gap-x-8 gap-y-3 border-t border-border-hair py-7 md:grid-cols-12 md:py-8",
              i === entries.length - 1 && "border-b"
            )}
          >
            <div className="md:col-span-3">
              <p className="label-mono">{kindLabel[entry.kind]}</p>
              <p className="mt-2 font-mono text-[0.8125rem] text-fg-muted">
                {entry.period}
              </p>
            </div>

            <div className="md:col-span-9">
              <h3 className="text-[1.125rem] font-medium tracking-[-0.015em] sm:text-[1.25rem]">
                {entry.organisation}
              </h3>
              <p className="mt-1 text-[0.9375rem] text-fg-muted">
                <span className="text-fg">{entry.role}</span> · {entry.location}
              </p>
              <p className="mt-3 max-w-2xl text-fg-muted">{entry.summary}</p>

              {detailed && entry.points && (
                <ul className="mt-4 flex max-w-2xl flex-col gap-2">
                  {entry.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.9375rem] text-fg-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] size-1 shrink-0 rounded-full bg-border-strong"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              )}

              {entry.href && (
                <Link
                  href={entry.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-[0.875rem] font-medium underline-offset-4 hover:text-brand hover:underline"
                >
                  View the work
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
