import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { Figure } from "@/content/types";
import { cn } from "@/lib/utils";

interface Props {
  figure: Figure;
  className?: string;
  /** Rounded corner scale. Frames stay restrained — no pill-shaped cards. */
  radius?: "sm" | "md";
  priority?: boolean;
  sizes?: string;
}

/**
 * A presentation frame around project imagery.
 *
 * When `figure.placeholder` is true it renders a labelled slot instead of an
 * image, stating exactly which asset belongs there. That makes missing assets
 * impossible to miss and impossible to ship silently.
 */
export function FigureFrame({
  figure,
  className,
  radius = "md",
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px",
}: Props) {
  const rounded = radius === "sm" ? "rounded-md" : "rounded-lg";

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border-hair bg-bg-subtle",
        rounded,
        className
      )}
      style={{ aspectRatio: figure.ratio ?? "16/10" }}
    >
      {figure.placeholder ? (
        <div className="hairline-grid absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center opacity-90">
          <ImageOff
            className="size-4 text-fg-faint"
            aria-hidden="true"
            strokeWidth={1.5}
          />
          <span className="label-mono text-fg-faint">Image slot</span>
          {figure.note && (
            <span className="max-w-[26ch] text-[0.8125rem] leading-snug text-fg-muted">
              {figure.note}
            </span>
          )}
          <code className="mt-1 max-w-full truncate font-mono text-[0.6875rem] text-fg-faint">
            {figure.src}
          </code>
        </div>
      ) : (
        <Image
          src={figure.src}
          alt={figure.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          style={{ objectPosition: figure.position ?? "center" }}
          className={figure.fit === "contain" ? "object-contain" : "object-cover"}
        />
      )}
    </div>
  );
}

export function FigureBlock({
  figure,
  wide,
}: {
  figure: Figure;
  wide?: boolean;
}) {
  return (
    <figure className={cn("my-10", wide && "lg:-mx-24 xl:-mx-32")}>
      <FigureFrame
        figure={figure}
        sizes={wide ? "(max-width: 1024px) 100vw, 1100px" : "(max-width: 768px) 100vw, 720px"}
      />
      {figure.caption && (
        <figcaption className="label-mono mt-3 normal-case tracking-normal text-fg-muted">
          {figure.caption}
        </figcaption>
      )}
    </figure>
  );
}
