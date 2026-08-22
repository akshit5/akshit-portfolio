import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Product, AI, strategy, UX and analytics work by Akshit Rana. Venture cases with live MVPs, product design for a multi-sided platform, research and data work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Work, filtered by what it actually demonstrates."
        description="Three deep case studies and a set of shorter pieces. Each one is tagged by what it shows rather than by the tools used to make it."
      />
      <div className="container-page pb-24 md:pb-32">
        <ProjectsExplorer />
      </div>
      <ContactSection />
    </>
  );
}
