import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { Figure } from "@/content/types";
import { cn } from "@/lib/utils";

interface Props {
  figure: Figure;
  className?: string;
  /** Rounded corner scale. Frames stay restrained, no pill-shaped cards. */
  radius?: "sm" | "md";
  priority?: boolean;
  sizes?: string;
  /** Wraps the image in browser chrome so screenshots read as products. */
  chrome?: boolean;
  /** Shown in the chrome address pill. Falls back to a neutral label. */
  chromeLabel?: string;
  /** Slow zoom on hover of the nearest `.group` ancestor. */
  hoverZoom?: boolean;
}

/**
 * A presentation frame around project imagery.
 *
 * `figure.placeholder` renders a labelled slot instead of an image, naming the
 * file that belongs there, so a missing asset can't ship as a broken image.
 */
export function FigureFrame({
  figure,
  className,
  radius = "md",
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px",
  chrome,
  chromeLabel,
  hoverZoom,
}: Props) {
  const rounded = radius === "sm" ? "rounded-md" : "rounded-lg";

  const surface = (
    <div
      className={cn(
        "relative overflow-hidden bg-bg-subtle",
        chrome ? "border-t border-border-hair" : cn("border border-border-hair", rounded),
        !chrome && className
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
          className={cn(
            figure.fit === "contain" ? "object-contain" : "object-cover",
            hoverZoom &&
              "motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.035]"
          )}
        />
      )}
    </div>
  );

  if (!chrome) return surface;

  return (
    <div
      className={cn(
        "overflow-hidden border border-border-hair bg-bg-subtle",
        rounded,
        className
      )}
    >
      <div className="flex h-8 items-center gap-2 px-3 sm:h-9 sm:px-3.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
          <span className="size-2 rounded-full bg-border-strong" />
        </span>
        <span
          aria-hidden="true"
          className="mx-auto hidden max-w-[60%] truncate rounded-full bg-bg px-3 py-0.5 font-mono text-[0.625rem] text-fg-faint sm:block"
        >
          {chromeLabel ?? " "}
        </span>
        <span className="w-[38px] shrink-0" aria-hidden="true" />
      </div>
      {surface}
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
        chrome={figure.chrome}
        chromeLabel={figure.chromeLabel}
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
