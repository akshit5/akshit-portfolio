import Link from "next/link";
import { site } from "@/content/site";

const social = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Behance", href: site.links.behance },
  { label: "Email", href: `mailto:${site.links.email}` },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border-hair">
      <div className="container-page py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[1.0625rem] font-medium">{site.name}</p>
            <p className="mt-1 text-fg-muted">{site.role}</p>
            <p className="mt-1 text-fg-muted">{site.location}</p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="label-mono mb-4">Pages</p>
              <ul className="flex flex-col gap-2.5">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.9375rem] text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="label-mono mb-4">Elsewhere</p>
              <ul className="flex flex-col gap-2.5">
                {social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-[0.9375rem] text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-hair pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono normal-case tracking-normal">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="label-mono">Next.js · TypeScript · Tailwind · Vercel</p>
        </div>
      </div>
    </footer>
  );
}
