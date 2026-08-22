import { capabilities } from "@/content/experience";
import { Reveal } from "./ui/reveal";
import { Section, SectionHeader } from "./ui/section";

export function CapabilitiesSection() {
  return (
    <Section id="capabilities">
      <SectionHeader
        eyebrow="Capabilities"
        title="What I actually do"
        description="Grouped by the kind of work rather than listed as a skills cloud. Everything here is backed by something on this site or on my CV."
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border-hair bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((group, i) => (
          <Reveal key={group.title} delay={i} className="bg-bg p-6 sm:p-7">
            <h3 className="text-[1.0625rem] font-medium">{group.title}</h3>
            <p className="mt-1.5 text-[0.9375rem] text-fg-muted">
              {group.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border-hair px-2.5 py-1 font-mono text-[0.75rem] text-fg-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal delay={capabilities.length} className="bg-bg-subtle p-6 sm:p-7">
          <h3 className="text-[1.0625rem] font-medium">Languages</h3>
          <p className="mt-1.5 text-[0.9375rem] text-fg-muted">
            Working across teams and markets.
          </p>
          <dl className="mt-5 space-y-2.5">
            {[
              { k: "English", v: "C1" },
              { k: "German", v: "B1, actively improving" },
              { k: "Hindi", v: "Native" },
            ].map((l) => (
              <div key={l.k} className="flex justify-between gap-4 font-mono text-[0.8125rem]">
                <dt className="text-fg">{l.k}</dt>
                <dd className="text-fg-muted">{l.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
