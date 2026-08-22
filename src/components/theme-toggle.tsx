"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Both icons are always rendered and swapped with the `dark:` variant, so the
 * button is correct on the server render as well as after hydration — no
 * mounted flag, no flash, no state set from an effect.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle colour theme"
      className={`inline-flex size-9 items-center justify-center rounded-full border border-border-hair text-fg-muted transition-colors hover:border-border-strong hover:text-fg ${className ?? ""}`}
    >
      <Moon
        className="size-[1.05rem] dark:hidden"
        strokeWidth={1.6}
        aria-hidden="true"
      />
      <Sun
        className="hidden size-[1.05rem] dark:block"
        strokeWidth={1.6}
        aria-hidden="true"
      />
    </button>
  );
}
