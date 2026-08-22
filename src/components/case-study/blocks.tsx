import { Info, CornerDownRight } from "lucide-react";
import type { Block } from "@/content/types";
import { FigureBlock, FigureFrame } from "../ui/figure-frame";
import { cn } from "@/lib/utils";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="mb-6 text-[1.1875rem] leading-relaxed tracking-[-0.01em] lg:text-[1.3125rem]">
          {block.text}
        </p>
      );

    case "prose":
      return (
        <p className="mb-5 leading-relaxed text-fg-muted">{block.text}</p>
      );

    case "heading":
      return (
        <h3
          id={block.id}
          className="mb-4 mt-10 text-[1.25rem] font-medium tracking-[-0.02em]"
        >
          {block.text}
        </h3>
      );

    case "list":
      return block.ordered ? (
        <ol className="mb-6 flex flex-col gap-3 counter-reset">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-4 leading-relaxed text-fg-muted">
              <span className="mt-[0.15em] shrink-0 font-mono text-[0.75rem] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="mb-6 flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4 leading-relaxed text-fg-muted">
              <span
                aria-hidden="true"
                className="mt-[0.65em] size-1 shrink-0 rounded-full bg-border-strong"
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "keyValue":
      return (
        <dl className="mb-8 divide-y divide-[color:var(--border)] border-y border-border-hair">
          {block.items.map((item) => (
            <div key={item.term} className="grid gap-1.5 py-4 sm:grid-cols-3 sm:gap-6">
              <dt className="text-[0.9375rem] font-medium">{item.term}</dt>
              <dd className="text-[0.9375rem] leading-relaxed text-fg-muted sm:col-span-2">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      );

    case "decision":
      return (
        <div className="my-8 overflow-hidden rounded-lg border border-border-hair">
          <div className="flex items-center gap-2.5 border-b border-border-hair bg-bg-subtle px-5 py-2.5">
            <CornerDownRight
              className="size-3.5 text-brand"
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="label-mono text-brand">
              Decision{block.label ? `: ${block.label}` : ""}
            </span>
          </div>
          <div className="px-5 py-5">
            <p className="text-[1.0625rem] font-medium leading-relaxed">
              {block.decision}
            </p>
            <div className="mt-4 space-y-3">
              <p className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg-muted">
                <span className="label-mono shrink-0 pt-[0.28em]">Why</span>
                {block.because}
              </p>
              {block.tradeoff && (
                <p className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg-muted">
                  <span className="label-mono shrink-0 pt-[0.28em]">Cost</span>
                  {block.tradeoff}
                </p>
              )}
            </div>
          </div>
        </div>
      );

    case "callout":
      return (
        <aside
          className={cn(
            "my-8 rounded-lg border p-5",
            block.tone === "accent"
              ? "border-dashed border-brand/60 bg-brand-soft"
              : "border-border-hair bg-bg-subtle"
          )}
        >
          <div className="flex gap-3">
            <Info
              className="mt-0.5 size-4 shrink-0 text-fg-muted"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <div>
              {block.title && (
                <p className="text-[0.9375rem] font-medium">{block.title}</p>
              )}
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-fg-muted">
                {block.text}
              </p>
            </div>
          </div>
        </aside>
      );

    case "figure":
      return <FigureBlock figure={block.figure} wide={block.wide} />;

    case "figureGrid":
      return (
        <div
          className={cn(
            "my-10 grid gap-4",
            block.columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "sm:grid-cols-2"
          )}
        >
          {block.figures.map((f) => (
            <figure key={f.src}>
              <FigureFrame figure={f} radius="sm" sizes="(max-width: 640px) 50vw, 340px" />
              {f.caption && (
                <figcaption className="label-mono mt-2 normal-case tracking-normal">
                  {f.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-brand pl-5">
          <p className="text-[1.0625rem] leading-relaxed">{block.text}</p>
          {block.attribution && (
            <footer className="label-mono mt-2.5">{block.attribution}</footer>
          )}
        </blockquote>
      );

    default:
      return null;
  }
}
