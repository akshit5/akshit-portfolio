import type { CapabilityGroup, ExperienceEntry, ThinkingStage } from "./types";

export const experience: ExperienceEntry[] = [
  {
    kind: "venture",
    organisation: "CAVRIX",
    role: "Product & build, solo",
    period: "2026",
    location: "Germany",
    summary:
      "A case study in cybersecurity compliance: a traceable NIS2 readiness check for European SMEs, with a founder memo behind it.",
    points: [
      "Framed the customer, the wedge and the positioning, then built and shipped the MVP to a live URL.",
      "Chose a rule-based evaluation engine over generative AI so every assessment path produces a traceable, defensible result.",
      "Built a two-step assessment covering organisational profiling and security checklisting, running entirely in the browser with nothing stored.",
    ],
    href: "/projects/cavrix",
  },
  {
    kind: "venture",
    organisation: "TaxHub",
    role: "Strategy & build, solo",
    period: "2026",
    location: "Germany",
    summary:
      "A case study on German tax advisory: an investment and strategy memo, plus a working AI knowledge platform as the entry product.",
    points: [
      "Shipped a working MVP solo in roughly two hours with Claude Code, indexing 45+ German tax regulations with citations across 3 modules.",
      "Modelled the business case (a €216M revenue opportunity, 6–12× LTV/CAC, 2–4 month payback) and made an explicit go / no-go call.",
      "Covered market structure, incumbents, ICP, wedge and moat in a single investment and strategy memo.",
    ],
    href: "/projects/taxhub",
  },
  {
    kind: "research",
    organisation: "Hochschule Harz",
    role: "Research Assistant, Urban Mobility & System Design",
    period: "Mar 2025 – Aug 2025",
    location: "Wernigerode, Germany",
    summary:
      "Research and reporting across urban mobility and system design for institutional stakeholders.",
    points: [
      "Consolidated data from 4+ live sources into one reporting structure serving 6 institutional stakeholders.",
      "Delivered a 35-page technical report turning operational data into structured recommendations, on a fixed six-month timeline.",
      "Tracked 8 project milestones against deadlines with consistent documentation standards throughout.",
    ],
  },
  {
    kind: "education",
    organisation: "Hochschule Harz",
    role: "M.Eng. Technology & Innovation Management",
    period: "Mar 2024 – Present",
    location: "Wernigerode, Germany",
    summary:
      "Strategic innovation management and operations research. The reason I moved from building interfaces to building the case for what gets built.",
  },
  {
    kind: "work",
    organisation: "Envisionard Software Services Pvt. Ltd.",
    role: "UX/UI Designer & Product Support",
    period: "Jun 2021 – Dec 2022",
    location: "Pune, India",
    summary:
      "Research and interface design on Amealio, a multi-sided food-tech platform. Specifically the operating console that restaurants and merchants work in.",
    points: [
      "Ran 12+ user interviews and 2 survey analyses against an 8-metric behavioural framework, plus a competitive benchmark of 5 platforms.",
      "Systematised the interface into a component library of 8 families, used across 14 sprints and 6 releases.",
      "Wrote structured documentation across 25+ specifications and presented 8 tracked KPIs across 14 management sessions.",
    ],
    href: "/projects/amealio",
  },
  {
    kind: "education",
    organisation: "Chitkara University",
    role: "B.Eng. Computer Science & Engineering",
    period: "Graduated 2022",
    location: "Punjab, India",
    summary:
      "Database systems and data structures. The reason I can hold a technical conversation rather than translate one.",
  },
];

/** Research and co-authored academic work, shown separately from employment. */
export const research = [
  {
    title:
      "Investigating the Impact of Locally Deployed Large Language Models on Enhancing Real-Time Knowledge Access for Frontline Workers in Manufacturing SMEs",
    type: "Peer-reviewed systematic literature review · Harz University of Applied Sciences",
    detail:
      "Co-authored with Nishant Moond. 80 papers screened to 27 qualifying studies (2018–2025) using Kitchenham & Charters with PRISMA, then three deployment configurations benchmarked on latency, memory footprint and hardware fit.",
    href: "/projects/llm-frontline-research",
  },
];

export const capabilities: CapabilityGroup[] = [
  {
    title: "Product",
    description: "Deciding what to build, and why that and not something else.",
    items: [
      "Product discovery",
      "Product strategy",
      "MVP development",
      "Prioritisation",
      "Roadmapping",
      "Market research",
    ],
  },
  {
    title: "Business",
    description: "The commercial argument behind a product decision.",
    items: [
      "Competitive analysis",
      "Business models",
      "Unit economics",
      "Go-to-market thinking",
      "Business analysis",
      "Investment thinking",
    ],
  },
  {
    title: "Design",
    description: "From an unclear task to an interface someone can finish it in.",
    items: [
      "UX research",
      "Personas & journey maps",
      "User flows",
      "Wireframing",
      "Prototyping",
      "UI design",
      "Figma",
      "Design systems",
    ],
  },
  {
    title: "AI & Technology",
    description: "Building the thing, not just specifying it.",
    items: [
      "AI-assisted development",
      "AI product prototyping",
      "Claude & Claude Code",
      "Cursor",
      "React",
      "JavaScript",
      "GitHub",
    ],
  },
  {
    title: "Analytics",
    description: "Turning a dataset into a decision.",
    items: [
      "Tableau",
      "SQL",
      "Excel (advanced)",
      "KPI design & tracking",
      "Data analysis",
    ],
  },
];

/**
 * The signature interaction. Every stage is tied to real work. No stage exists
 * here that isn't backed by something on this site.
 */
export const thinkingStages: ThinkingStage[] = [
  {
    id: "problem",
    index: "01",
    name: "Problem",
    verb: "Understand",
    description:
      "Start with the situation, not the solution. Who has this problem, what do they do about it today, and what does being wrong cost them?",
    evidence: [
      {
        project: "CAVRIX",
        slug: "cavrix",
        detail:
          "Mid-sized firms newly in scope for NIS2, with nobody internally whose job it is to work out what that means.",
      },
      {
        project: "Traffic Monitoring",
        slug: "traffic-monitoring",
        detail:
          "An officer judged on response time, for whom information that arrives late is information that arrived useless.",
      },
    ],
  },
  {
    id: "research",
    index: "02",
    name: "Research",
    verb: "Frame",
    description:
      "Get evidence before opinion. Market structure, incumbents, and how the work actually gets done.",
    evidence: [
      {
        project: "Amealio",
        slug: "amealio",
        detail:
          "12+ user interviews and 2 survey analyses against an 8-metric behavioural framework, plus a 5-platform competitive benchmark.",
      },
      {
        project: "LLM research",
        slug: "llm-frontline-research",
        detail:
          "80 papers screened to 27 qualifying studies using Kitchenham & Charters with PRISMA, then three deployment configurations benchmarked.",
      },
    ],
  },
  {
    id: "strategy",
    index: "03",
    name: "Strategy",
    verb: "Decide",
    description:
      "Choose the entry point. A wedge you can defend beats a roadmap you can't start.",
    evidence: [
      {
        project: "TaxHub",
        slug: "taxhub",
        detail:
          "Enter through knowledge retrieval rather than the accounting workflow. Smaller promise, much shorter path to being used.",
      },
      {
        project: "CAVRIX",
        slug: "cavrix",
        detail: "Ship a readiness check, not a compliance platform. The ceiling is the roadmap.",
      },
    ],
  },
  {
    id: "design",
    index: "04",
    name: "Design",
    verb: "Explore",
    description:
      "Structure first. Most of the confusion in dense products comes from step order, not visual design.",
    evidence: [
      {
        project: "Amealio",
        slug: "amealio",
        detail:
          "One record per customer or merchant with tabbed lenses, because support questions arrive about people rather than about features.",
      },
      {
        project: "Crafty Culture",
        slug: "crafty-culture",
        detail:
          "Personas, empathy maps and journey maps for both sides of a marketplace where the seller side was the harder half.",
      },
    ],
  },
  {
    id: "build",
    index: "05",
    name: "Build",
    verb: "Ship",
    description:
      "Get it running. A live link changes the conversation in a way a deck never does.",
    evidence: [
      {
        project: "CAVRIX",
        slug: "cavrix",
        detail:
          "Rule-based NIS2 assessment logic and front end, deployed and publicly clickable.",
      },
      {
        project: "TaxHub",
        slug: "taxhub",
        detail:
          "Working MVP shipped solo in roughly two hours with Claude Code, with a public repository.",
      },
    ],
  },
  {
    id: "measure",
    index: "06",
    name: "Measure",
    verb: "Learn",
    description:
      "Look at what happened honestly, including when the answer is that you don't know yet.",
    evidence: [
      {
        project: "Consumer Sales Analytics",
        slug: "sales-analytics-dashboard",
        detail:
          "12 KPIs across 5 business dimensions over $371M+ in transactions, with 3 automated reporting workflows behind them.",
      },
      {
        project: "Amealio",
        slug: "amealio",
        detail:
          "8 tracked KPIs presented across 14 management sessions, translating product data for non-technical stakeholders.",
      },
    ],
  },
];
