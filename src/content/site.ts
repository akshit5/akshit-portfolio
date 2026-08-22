/** Site-level identity, navigation and metadata. */

export const site = {
  name: "Akshit Rana",
  role: "Product · AI · Design · Innovation",
  location: "Germany",

  /**
   * The live deployment. Drives canonical tags, the sitemap and Open Graph
   * URLs, so update it if you move to a custom domain.
   */
  url: "https://akshit-portfolio-chi.vercel.app",

  title: "Akshit Rana — Product, AI & Innovation",
  description:
    "Akshit Rana is a Technology & Innovation Management Master's student in Germany building AI-powered products, digital experiences and product strategies.",

  /**
   * Hero copy. `headline` answers the question a founder actually has;
   * the eyebrow and subhead carry the keywords a recruiter scans for.
   */
  hero: {
    eyebrow: "Akshit Rana · Product, Strategy & AI · Germany",
    headline: ["From ambiguous problem", "to working product."],
    subhead:
      "I'm a Technology & Innovation Management Master's student in Germany. I work across product strategy, business analysis, user experience and AI-assisted development, usually on problems nobody has framed properly yet.",
    availability:
      "Based in Germany · Open to Product, Strategy, AI & Innovation opportunities",
  },

  positioning:
    "I don't stop at the interface. I work the problem: research the market and the user, form a strategy, decide what to build, then build it and put it in front of someone. Business, design and engineering conversations are all part of the same job.",

  links: {
    email: "ranaakshit23@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshit-rana-912863144",
    github: "https://github.com/akshit5",
    behance: "https://www.behance.net/akshitrana2",
    resume: "/akshit-rana-resume.pdf",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
