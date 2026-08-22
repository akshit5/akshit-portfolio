import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akshit Rana about product, AI, innovation and early-stage technology roles in Germany and across Europe.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Have a problem worth solving?"
        description="Open to conversations around product, AI, innovation and early-stage technology. Email is the fastest route. I reply to everything that isn't automated."
      />
      <ContactSection
        eyebrow="Direct"
        title="Pick a channel."
        description="Email for anything substantive. LinkedIn if that's easier. GitHub and Behance if you'd rather look at the work first."
      />
    </>
  );
}
