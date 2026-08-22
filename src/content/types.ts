/**
 * Content model.
 *
 * Everything the site renders is described here as data. Adding a project
 * means adding one object to `projects.ts` — no layout code changes.
 */

export type Category =
  | "Product"
  | "AI"
  | "UX/UI"
  | "Strategy"
  | "Analytics";

export type LinkKind = "demo" | "repo" | "site" | "case" | "external";

export interface ProjectLink {
  kind: LinkKind;
  label: string;
  href: string;
}

/** An image slot. `placeholder: true` renders a labelled frame instead of an
 *  <img>, so it is impossible to ship a broken image by accident. */
export interface Figure {
  src: string;
  alt: string;
  /** Caption shown under the figure. Keep it factual. */
  caption?: string;
  /** Intrinsic aspect ratio, e.g. "16/10". Drives layout before load. */
  ratio?: string;
  /** True until the real asset is dropped in at `src`. */
  placeholder?: boolean;
  /** What the real asset should be, shown inside the placeholder frame. */
  note?: string;
  /** object-position, e.g. "top" for tall screenshots cropped into cards. */
  position?: string;
  /** "contain" letterboxes instead of cropping. Default "cover". */
  fit?: "cover" | "contain";
}

export type Block =
  | { type: "prose"; text: string }
  | { type: "lead"; text: string }
  | { type: "heading"; text: string; id?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | {
      type: "keyValue";
      items: { term: string; description: string }[];
    }
  /** The unit that carries this portfolio: an explicit decision + reasoning. */
  | {
      type: "decision";
      label?: string;
      decision: string;
      because: string;
      tradeoff?: string;
    }
  | { type: "callout"; tone?: "neutral" | "accent"; title?: string; text: string }
  | { type: "figure"; figure: Figure; wide?: boolean }
  | { type: "figureGrid"; figures: Figure[]; columns?: 2 | 3 }
  | { type: "quote"; text: string; attribution?: string };

export interface CaseSection {
  /** Short label used by the sticky in-page navigation. */
  nav: string;
  id: string;
  title: string;
  /** Optional kicker above the section title. */
  kicker?: string;
  blocks: Block[];
}

export interface Project {
  slug: string;
  title: string;
  /** One line. Appears on cards and as the case-study subtitle. */
  headline: string;
  /** 2–3 sentences for cards and list views. */
  description: string;
  category: Category;
  /** Extra filter facets — a project can legitimately be several things. */
  facets: Category[];
  year: string;
  role: string;
  context: string;
  tools: string[];
  cover: Figure;
  /** Small images used in the card treatments on the homepage. */
  thumbnails?: Figure[];
  links: ProjectLink[];
  featured: boolean;
  /** Homepage treatment. Each featured project gets a different one. */
  treatment?: "interface" | "document" | "build";
  /** Present on deep case studies. Absent projects render as list entries. */
  caseStudy?: CaseSection[];
  /** Scope note shown verbatim at the top of the case study. */
  scopeNote?: string;
  /** Accent word pair shown in the card metadata rail. */
  metaLine?: string;
}

export interface ExperienceEntry {
  kind: "work" | "education" | "venture" | "research";
  organisation: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points?: string[];
  href?: string;
}

export interface CapabilityGroup {
  title: string;
  description: string;
  items: string[];
}

export interface ThinkingStage {
  id: string;
  index: string;
  name: string;
  verb: string;
  description: string;
  /** Real evidence from real work. Never invented. */
  evidence: { project: string; slug?: string; detail: string }[];
}
