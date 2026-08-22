import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Positioning } from "@/components/positioning";
import { ThinkingMap } from "@/components/thinking-map";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { MoreWork } from "@/components/more-work";
import { AboutPreview } from "@/components/about-preview";
import { ResumeCta } from "@/components/resume-cta";
import { ContactSection } from "@/components/contact-section";
import { Section, SectionHeader } from "@/components/ui/section";
import { experience } from "@/content/experience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Positioning />
      <ThinkingMap />

      <Section id="experience">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've done the work"
          align="between"
          action={
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium underline-offset-4 hover:text-brand hover:underline"
            >
              Full timeline
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          }
        />
        <ExperienceTimeline entries={experience.slice(0, 4)} />
      </Section>

      <CapabilitiesSection />
      <MoreWork />
      <AboutPreview />
      <ResumeCta />
      <ContactSection />
    </>
  );
}
