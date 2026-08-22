"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const mainNav = site.nav.filter((n) => n.label !== "Home" && n.label !== "Resume");

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border-hair bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/70"
          : "border-b border-transparent"
      )}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          <Link
            href="/"
            className="group flex items-baseline gap-2 rounded-sm text-[0.9375rem] font-medium tracking-[-0.01em]"
          >
            <span>Akshit Rana</span>
            <span
              className="label-mono hidden text-fg-faint transition-colors group-hover:text-brand sm:inline"
              aria-hidden="true"
            >
              Product · AI · Design
            </span>
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-1 md:flex"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors",
                  isActive(item.href)
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId={reduced ? undefined : "nav-active"}
                    className="absolute inset-x-3.5 -bottom-px h-px bg-brand"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/resume"
              className="hidden h-9 items-center gap-1.5 rounded-full border border-border-strong px-4 text-[0.875rem] font-medium transition-colors hover:border-fg hover:bg-bg-subtle sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border-hair text-fg md:hidden"
            >
              {open ? (
                <X className="size-4" strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Menu className="size-4" strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border-hair bg-bg md:hidden"
          >
            <nav aria-label="Mobile" className="container-page py-4">
              <ul className="flex flex-col">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between border-b border-border-hair py-3.5 text-lg",
                        isActive(item.href) ? "text-brand" : "text-fg"
                      )}
                    >
                      {item.label}
                      <ArrowUpRight
                        className="size-4 text-fg-faint"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="label-mono mt-5 pb-2">{site.hero.availability}</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
