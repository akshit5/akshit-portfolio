"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-200 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:bg-brand hover:text-brand-contrast border border-transparent",
  secondary:
    "border border-border-strong text-fg hover:border-fg hover:bg-bg-subtle",
  ghost: "text-fg-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  sm: "h-9 px-4 text-[0.875rem]",
};

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
}

/**
 * Magnetic button. The pull is small (max 4px) — enough to feel responsive,
 * not enough to look like a gimmick. Disabled entirely for reduced motion
 * and never applied on touch, where there is no hover to respond to.
 */
export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  download,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: (x / rect.width) * 8, y: (y / rect.height) * 6 });
  }

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <motion.span
      ref={ref}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.4 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external || download || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          aria-label={ariaLabel}
          download={download}
          {...(external || href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex rounded-full"
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-flex rounded-full">
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="inline-flex rounded-full">
      {inner}
    </button>
  );
}
