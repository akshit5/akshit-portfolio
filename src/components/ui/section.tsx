import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  children,
  className,
  id,
  bleed,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
  tone?: "default" | "subtle";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-border-hair py-20 md:py-28 lg:py-32",
        tone === "subtle" && "bg-bg-subtle",
        className
      )}
    >
      <div className={bleed ? undefined : "container-page"}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "between";
}) {
  return (
    <Reveal>
      <div
        className={cn(
          "mb-12 gap-6 md:mb-16",
          align === "between"
            ? "flex flex-col md:flex-row md:items-end md:justify-between"
            : "flex flex-col"
        )}
      >
        <div className="max-w-2xl">
          <p className="label-mono mb-4 flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="inline-block h-px w-6 bg-border-strong"
            />
            {eyebrow}
          </p>
          <h2 className="text-[1.75rem] leading-[1.15] tracking-[-0.028em] sm:text-[2.125rem] lg:text-[2.5rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-xl text-fg-muted">{description}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </Reveal>
  );
}
