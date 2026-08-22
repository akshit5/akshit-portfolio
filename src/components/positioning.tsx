import { site } from "@/content/site";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";

const pillars = [
  { k: "Business", v: "Market, model, and the case for building it" },
  { k: "Technology", v: "Enough depth to build it and to argue about it" },
  { k: "Design", v: "The part where it becomes usable" },
];

export function Positioning() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="label-mono mb-6 flex items-center gap-2.5">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-border-strong" />
            Positioning
          </p>
          <p className="text-[1.375rem] leading-[1.45] tracking-[-0.02em] sm:text-[1.625rem] lg:text-[1.75rem]">
            {site.positioning}
          </p>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-5 lg:pt-16">
          <dl className="divide-y divide-[color:var(--border)] border-y border-border-hair">
            {pillars.map((p) => (
              <div key={p.k} className="flex gap-6 py-4">
                <dt className="w-28 shrink-0 text-[0.9375rem] font-medium">{p.k}</dt>
                <dd className="text-[0.9375rem] text-fg-muted">{p.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
