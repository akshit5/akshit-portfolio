import type { ReactNode } from "react";
import { Reveal } from "./ui/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="container-page pb-14 pt-28 md:pb-20 md:pt-36 lg:pt-40">
      <Reveal>
        <p className="label-mono flex items-center gap-2.5">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-border-strong" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-[2.25rem] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[3rem] lg:text-[3.5rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-fg-muted lg:text-[1.125rem]">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Reveal>
    </div>
  );
}
