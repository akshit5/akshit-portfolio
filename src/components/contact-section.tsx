import { Mail, FileText } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";
import { BehanceIcon, GithubIcon, LinkedinIcon } from "./ui/brand-icons";

const iconClass = "size-[1.15rem] shrink-0 fill-current";

const channels = [
  {
    label: "Email",
    href: `mailto:${site.links.email}`,
    Icon: () => <Mail className={iconClass.replace("fill-current", "")} strokeWidth={1.5} aria-hidden="true" />,
    note: site.links.email,
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    Icon: () => <LinkedinIcon className={iconClass} />,
    note: "Professional",
  },
  {
    label: "GitHub",
    href: site.links.github,
    Icon: () => <GithubIcon className={iconClass} />,
    note: "Code & MVPs",
  },
  {
    label: "Behance",
    href: site.links.behance,
    Icon: () => <BehanceIcon className={iconClass} />,
    note: "Design work",
  },
  {
    label: "Resume",
    href: site.links.resume,
    Icon: () => <FileText className={iconClass.replace("fill-current", "")} strokeWidth={1.5} aria-hidden="true" />,
    note: "PDF",
  },
];

export function ContactSection({
  eyebrow = "Contact",
  title = "Have a problem worth solving?",
  description = "Open to conversations around product, AI, innovation and early-stage technology.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="label-mono mb-6 flex items-center gap-2.5">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-border-strong" />
            {eyebrow}
          </p>
          <h2 className="text-[2rem] leading-[1.1] tracking-[-0.033em] sm:text-[2.5rem] lg:text-[3rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-[1.0625rem] text-fg-muted">
            {description}
          </p>
          <p className="mt-6 text-[0.9375rem] text-fg-muted">
            {site.hero.availability}
          </p>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-6">
          <ul className="divide-y divide-[color:var(--border)] border-y border-border-hair">
            {channels.map(({ label, href, Icon, note }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-brand"
                >
                  <span className="text-fg-faint transition-colors group-hover:text-brand">
                    <Icon />
                  </span>
                  <span className="flex-1 text-[1.0625rem] font-medium">{label}</span>
                  <span className="label-mono normal-case tracking-normal transition-colors group-hover:text-brand">
                    {note}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
