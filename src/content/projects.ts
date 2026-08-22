import type { Figure, Project } from "./types";

/**
 * Every project on the site.
 *
 * Rules I hold myself to here:
 * - Every number traces to something real: my CV, a memo, or a screenshot.
 * - Modelled figures say they're modelled. They aren't business results.
 * - A figure marked `placeholder: true` renders a labelled slot rather than a
 *   broken image, so an unfinished project can't ship looking broken.
 */

const A = "/images/projects/amealio";
const T = "/images/projects/taxhub";
const C = "/images/projects/cavrix";
const TR = "/images/projects/traffic";
const CC = "/images/projects/crafty";
const AN = "/images/projects/analytics";
const RS = "/images/projects/research";

/** Card covers crop tall screenshots from the top, where the header lives. */
const card = (src: string, alt: string): Figure => ({
  src,
  alt,
  ratio: "16/10",
  position: "top",
});

export const projects: Project[] = [
  /* ================================================================
     1 — AMEALIO
     ================================================================ */
  {
    slug: "amealio",
    title: "Amealio",
    headline: "Designing the operating console for a food & restaurant platform",
    description:
      "Research and interface design across the management side of a multi-sided food-tech platform: the dashboards, merchant tools and customer records that restaurant operators work in every day.",
    category: "UX/UI",
    facets: ["UX/UI", "Product"],
    year: "2021 – 2022",
    role: "UX/UI Designer & Product Support",
    context: "Envisionard Software Services Pvt. Ltd. · Pune, India",
    tools: [
      "Figma",
      "User research",
      "Competitive analysis",
      "Component library",
      "Prototyping",
    ],
    treatment: "interface",
    metaLine: "Multi-sided platform · Operations console",
    scopeNote:
      "Amealio is Envisionard's product, built by a full product and engineering team. I did research, UX/UI design and product support on specific surfaces while I was there. I'm not claiming I built the platform.",
    cover: card(`${A}/kpi-dashboard.webp`, "Amealio KPI dashboard"),
    thumbnails: [
      card(`${A}/staff-management.webp`, "Amealio staff management screen"),
      card(`${A}/offer-management.webp`, "Amealio merchant offer management screen"),
      card(`${A}/wallet-scan-pay.webp`, "Amealio customer wallet and payments record"),
    ],
    links: [
      { kind: "site", label: "amealio.com", href: "https://amealio.com/" },
      {
        kind: "external",
        label: "Behance",
        href: "https://www.behance.net/akshitrana2",
      },
    ],
    featured: true,
    caseStudy: [
      {
        nav: "Context",
        id: "context",
        title: "Context",
        kicker: "Where this sat",
        blocks: [
          {
            type: "lead",
            text: "Amealio tries to hold an entire dining experience in one system. Discovery, ordering, events and payments on the customer side; on the other side, all the tooling a restaurant needs to actually run that.",
          },
          {
            type: "prose",
            text: "The breadth is what makes it interesting and what makes it hard. A super admin, a merchant, a floor manager and a customer all touch the same data, and they have very different appetites for complexity. I worked on the management surfaces: dashboards, merchant tools, staff and customer records.",
          },
          {
            type: "callout",
            title: "Scope, stated plainly",
            text: "This was team product work. I did the research and design on specific surfaces and supported the product day to day. The honest version of what I contributed is more useful to you than an impressive one.",
          },
        ],
      },
      {
        nav: "Problem",
        id: "problem",
        title: "The problem",
        kicker: "What made it hard",
        blocks: [
          {
            type: "prose",
            text: "Restaurant software fails in a specific way. It gets designed for the demo instead of for a Friday night. Features pile up, screens fill, and the person who has to use it mid-service loses the thread.",
          },
          {
            type: "keyValue",
            items: [
              {
                term: "Density vs. clarity",
                description:
                  "Management screens genuinely need a lot of data on them. The design problem is ordering it, not cutting it.",
              },
              {
                term: "Many roles, one system",
                description:
                  "Super admin, merchant, staff and customer records all live in the same console, with different permissions and different first screens.",
              },
              {
                term: "Consistency at speed",
                description:
                  "New modules kept arriving. Without shared components each one drifted, and the console started to feel like several products stapled together.",
              },
            ],
          },
        ],
      },
      {
        nav: "Research",
        id: "research",
        title: "Research",
        kicker: "Evidence before opinion",
        blocks: [
          {
            type: "prose",
            text: "Before the console work I did consumer-side research on how people actually choose, order and pay. The operator tools exist to serve that behaviour, so designing them without it would have been guesswork.",
          },
          {
            type: "list",
            items: [
              "12+ user interviews and 2 survey analyses, mapped against an 8-metric behavioural framework.",
              "A competitive benchmark of 5 consumer e-commerce and food platforms, which fed the journey mapping and prototyping.",
              "Product support work alongside it, which meant I saw where real users got stuck rather than only where we assumed they would.",
            ],
          },
          {
            type: "callout",
            title: "What I'm not claiming",
            text: "I don't have verified adoption, conversion or revenue figures for my specific contribution, so there aren't any on this page.",
          },
        ],
      },
      {
        nav: "Decisions",
        id: "decisions",
        title: "Decisions I made",
        kicker: "The part that matters",
        blocks: [
          {
            type: "decision",
            label: "Information density",
            decision:
              "Keep management screens dense. Solve legibility with hierarchy instead of removing data.",
            because:
              "Managers came to the dashboard to answer a question, not to admire it. Splitting the data across more screens would have swapped one problem for a worse one: more navigation.",
            tradeoff:
              "Dense screens are unforgiving. It put a lot of weight on typography, spacing and consistent table behaviour to stop them turning into noise.",
          },
          {
            type: "decision",
            label: "One record, many lenses",
            decision:
              "Give each customer and merchant a single record with tabbed lenses (seating, ordering, events, wallet, nominations, favourites) rather than a separate screen per feature.",
            because:
              "Support and operations questions are almost always about a person or a business, not about a feature. Organising around the entity matches the way the question arrives.",
          },
          {
            type: "decision",
            label: "A component library, early",
            decision:
              "Systematise the interface into a library of 8 component families rather than designing each new module from scratch.",
            because:
              "Modules were arriving faster than they could be individually crafted. Shared components meant new screens inherited the behaviour of old ones instead of reinventing it.",
            tradeoff:
              "Up-front effort before anyone sees a benefit, plus a discipline cost. A library only works if people actually use it.",
          },
        ],
      },
      {
        nav: "Console",
        id: "console",
        title: "The console",
        blocks: [
          {
            type: "prose",
            text: "These are the real product screens. The KPI dashboard is the operator's entry point. The merchant modules handle ordering, events and offers; the people modules handle staff and customer records.",
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${A}/kpi-dashboard.webp`,
              alt: "Amealio KPI dashboard showing merchant, user and ticket metrics with weekly seating charts",
              caption:
                "KPI dashboard: active merchants, users and tickets, with weekly seating and merchant breakdowns",
              ratio: "1024/1261",
            },
          },
          { type: "heading", text: "Merchant operations" },
          {
            type: "figureGrid",
            columns: 2,
            figures: [
              {
                src: `${A}/ordering-reports.webp`,
                alt: "Merchant ordering summary reports table",
                caption: "Merchant ordering summary reports",
                ratio: "1024/913",
              },
              {
                src: `${A}/offer-management.webp`,
                alt: "Merchant offer management screen with discount rules",
                caption: "Offer management: discounts, usage limits, status",
                ratio: "1024/898",
              },
              {
                src: `${A}/event-management.webp`,
                alt: "Event management list with event types, timing and status",
                caption: "Event management",
                ratio: "1024/1151",
              },
              {
                src: `${A}/vendor-event-reports.webp`,
                alt: "Merchant event reports with ticket and RSVP counts",
                caption: "Merchant event reports",
                ratio: "1024/804",
              },
            ],
          },
          { type: "heading", text: "People" },
          {
            type: "figureGrid",
            columns: 2,
            figures: [
              {
                src: `${A}/staff-management.webp`,
                alt: "Staff management screen with roles, availability and contact actions",
                caption: "Staff management: roles, availability, contact",
                ratio: "1024/1309",
              },
              {
                src: `${A}/user-management.webp`,
                alt: "User management table with seating, events and profile completion",
                caption: "User management",
                ratio: "1024/994",
              },
              {
                src: `${A}/wallet-scan-pay.webp`,
                alt: "Customer record showing wallet transactions and payment methods",
                caption: "Customer record: wallet and scan & pay transactions",
                ratio: "1024/1062",
              },
              {
                src: `${A}/user-favourites.webp`,
                alt: "Customer record showing favourited restaurants",
                caption: "Customer record: favourites",
                ratio: "1024/1217",
              },
            ],
          },
        ],
      },
      {
        nav: "Collaboration",
        id: "collaboration",
        title: "Working with the team",
        blocks: [
          {
            type: "prose",
            text: "Design in a product this wide is mostly negotiation. I worked with engineering on what was feasible in the current build, which states existed in the data, and where an interaction would cost more than it returned. Handoff covered the states that get forgotten: loading, empty, error, permissions. That's where operational tools break.",
          },
          {
            type: "list",
            items: [
              "Wrote structured documentation across 25+ specifications, so the same questions stopped being asked twice.",
              "Built and maintained a component library of 8 families, used across 14 sprints and 6 releases.",
              "Presented 8 tracked KPIs across 14 management sessions, translating product data for non-technical stakeholders.",
            ],
          },
        ],
      },
      {
        nav: "Learnings",
        id: "learnings",
        title: "What I took from it",
        blocks: [
          {
            type: "list",
            items: [
              "In operational software the structure is the design. Get the step order wrong and no amount of visual polish rescues it.",
              "Organising around entities instead of features made the console easier to explain, which turned out to matter as much as making it easier to use.",
              "A component library is a communication tool before it's a design tool. It settles arguments that would otherwise come back every sprint.",
              "Sitting close to product support was the most useful research channel I had. Free, continuous, and unflattering.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================
     2 — TAXHUB
     ================================================================ */
  {
    slug: "taxhub",
    title: "TaxHub",
    headline: "An investment thesis, a wedge, and a shipped MVP",
    description:
      "A vertical-AI venture case built end to end: market analysis and ICP, a defensible wedge into German tax advisory, the unit economics behind it, and a working MVP that answers tax questions with citations.",
    category: "Strategy",
    facets: ["Strategy", "Product", "AI"],
    year: "2026",
    role: "Solo. Research, strategy, product and build",
    context: "Case study",
    tools: [
      "Market research",
      "Investment memo",
      "Unit economics",
      "Claude Code",
      "HTML/CSS/JS",
    ],
    treatment: "document",
    metaLine: "Venture case · Memo + live MVP",
    scopeNote:
      "TaxHub is a case study, not a funded company. The MVP is a proof of concept built to test the wedge. The market and revenue figures below are modelled in the memo, so treat them as projections rather than results.",
    cover: card(`${T}/knowledge-home.webp`, "TaxHub knowledge hub MVP"),
    thumbnails: [
      card(`${T}/practice-dashboard.webp`, "TaxHub practice dashboard"),
    ],
    links: [
      {
        kind: "demo",
        label: "Live MVP",
        href: "https://akshit5.github.io/taxhub-operating-hub/",
      },
      {
        kind: "repo",
        label: "GitHub",
        href: "https://github.com/akshit5/taxhub-operating-hub",
      },
    ],
    featured: true,
    caseStudy: [
      {
        nav: "Context",
        id: "context",
        title: "Context",
        kicker: "The brief I set myself",
        blocks: [
          {
            type: "lead",
            text: "The first of two venture cases I built. The task wasn't to design a screen. It was to pick a market, argue why it's worth entering, decide what to build first, and then actually build it.",
          },
          {
            type: "prose",
            text: "Two artefacts came out of it. An investment and strategy memo covering market structure, incumbents, ICP, wedge, moat, business model, unit economics and a go / no-go call. And a working MVP, so the argument had something running behind it.",
          },
        ],
      },
      {
        nav: "Market",
        id: "market",
        title: "Why tax advisors",
        kicker: "Choosing the beachhead",
        blocks: [
          {
            type: "prose",
            text: "German tax advisory is an unusually good beachhead for a vertical AI product. The work is high-volume and deadline-driven. The rules change constantly. The cost of being wrong is legally defined. And because the profession is regulated, the buyer is identifiable and the workflow is standardised in a way most SME software markets never are.",
          },
          {
            type: "keyValue",
            items: [
              {
                term: "Market structure",
                description:
                  "Fragmented, with a long tail of small and mid-sized firms sitting under a handful of entrenched incumbents.",
              },
              {
                term: "Incumbents",
                description:
                  "Deeply embedded and workflow-critical. That's the moat problem and the opening at the same time.",
              },
              {
                term: "ICP",
                description:
                  "Small to mid-sized advisory firms. Enough volume to feel the pain, not enough internal IT to build their way around it.",
              },
            ],
          },
        ],
      },
      {
        nav: "Wedge",
        id: "wedge",
        title: "The wedge",
        blocks: [
          {
            type: "decision",
            label: "Where to enter",
            decision:
              "Enter through knowledge retrieval, not through the accounting workflow.",
            because:
              "Replacing an incumbent's workflow system means asking a regulated firm to migrate the thing their business runs on. Sitting beside it and answering questions faster does not. Smaller promise, much shorter path to being used.",
            tradeoff:
              "A narrow wedge is easier to copy. That pushes defensibility onto the curated regulatory corpus and the workflow depth you build after you're inside, not onto the first feature.",
          },
          {
            type: "decision",
            label: "Grounding",
            decision:
              "Answer only from a curated set of real German tax regulations, and cite the source on every answer.",
            because:
              "In tax advisory a confident wrong answer is worse than no answer. A tool that occasionally invents a rule isn't something a Steuerberater can put in front of a client.",
            tradeoff:
              "Coverage starts narrow and every new area has to be curated by hand. In a domain where trust is the product, that's the right trade.",
          },
        ],
      },
      {
        nav: "MVP",
        id: "mvp",
        title: "The MVP",
        kicker: "Shipped, not mocked",
        blocks: [
          {
            type: "prose",
            text: "A browser-based operating hub with three modules: knowledge Q&A grounded in indexed German tax regulations, a client intake flow, and a practice dashboard tracking filing deadlines and activity.",
          },
          {
            type: "keyValue",
            items: [
              {
                term: "Corpus",
                description:
                  "45+ German tax regulations indexed across 6 tax law areas, including EStG, UStG, KStG, AO and GewStG.",
              },
              {
                term: "Answer format",
                description:
                  "Every answer cites the regulation it came from. The product says plainly that it isn't legal advice.",
              },
              {
                term: "Build",
                description:
                  "Shipped solo in roughly two hours with Claude Code, which is why the strategy and the prototype could inform each other in the same week instead of in sequence.",
              },
            ],
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${T}/knowledge-home.webp`,
              alt: "TaxHub knowledge hub landing screen showing 45+ regulations indexed and example questions",
              caption:
                "Knowledge Q&A: 45+ regulations indexed, 6 tax law areas, every answer source-cited",
              ratio: "1920/1050",
            },
          },
          {
            type: "figureGrid",
            columns: 2,
            figures: [
              {
                src: `${T}/knowledge-answer.webp`,
                alt: "A TaxHub answer about Homeoffice-Pauschale with cited regulation references",
                caption: "A grounded answer, with its sources",
                ratio: "1920/1052",
              },
              {
                src: `${T}/practice-dashboard.webp`,
                alt: "TaxHub practice dashboard with upcoming filing deadlines and recent activity",
                caption: "Practice dashboard: deadlines and activity",
                ratio: "1920/1047",
              },
            ],
          },
          {
            type: "callout",
            tone: "accent",
            title: "See it yourself",
            text: "The MVP is live and the repository is public. Clicking the links at the top of this page is the fastest way to judge any of this.",
          },
        ],
      },
      {
        nav: "Economics",
        id: "economics",
        title: "The business case",
        blocks: [
          {
            type: "prose",
            text: "The memo works forward from the wedge to a business: what the product becomes once it's inside the firm, how it's priced, and what would have to be true for the economics to hold.",
          },
          {
            type: "keyValue",
            items: [
              {
                term: "Modelled opportunity",
                description:
                  "A €216M revenue opportunity in the addressable segment, built bottom-up from firm counts and pricing.",
              },
              {
                term: "Modelled unit economics",
                description:
                  "6–12× LTV/CAC with a 2–4 month payback period at the assumed price point and churn.",
              },
              {
                term: "Recommendation",
                description:
                  "A go / no-go call with its conditions attached, rather than a number sitting on its own.",
              },
            ],
          },
          {
            type: "callout",
            title: "These are projections",
            text: "Everything in this section is modelled from stated assumptions. None of it is realised revenue, and the model is only as good as those assumptions, which is exactly why they're written down.",
          },
        ],
      },
      {
        nav: "Learnings",
        id: "learnings",
        title: "What I learned",
        blocks: [
          {
            type: "list",
            items: [
              "Picking the beachhead is most of the strategy. Pricing, moat and roadmap all get easier once the entry point is specific.",
              "A memo without a running artefact is an opinion. Building the MVP changed what I believed about the wedge.",
              "Constraining the AI made the product more credible rather than less. “It won't answer what it can't cite” is something you can sell in a regulated market.",
              "Two hours to a working prototype changes what counts as a cheap experiment. The bottleneck moved from building to deciding what to build.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================
     3 — CAVRIX
     ================================================================ */
  {
    slug: "cavrix",
    title: "CAVRIX",
    headline: "A traceable NIS2 readiness check for European SMEs",
    description:
      "A second venture case: an AI-era compliance product for the mid-market. Rule-based logic turns a company's own answers into a scope determination and a traceable gap list. Deliberately not a generative one.",
    category: "AI",
    facets: ["AI", "Product", "Strategy"],
    year: "2026",
    role: "Solo. Product thinking, positioning and build",
    context: "Case study · cybersecurity & compliance",
    tools: [
      "Product strategy",
      "Rule-based assessment logic",
      "HTML/CSS/Vanilla JS",
      "Vercel",
      "AI-assisted development",
    ],
    treatment: "build",
    metaLine: "Venture case · Live MVP",
    scopeNote:
      "CAVRIX was a case study and MVP, not a production compliance platform. The readiness check is a structured self-assessment. The product itself says its output is indicative and should be confirmed through formal legal and compliance review.",
    cover: card(`${C}/landing.webp`, "CAVRIX NIS2 readiness check landing screen"),
    thumbnails: [card(`${C}/result-gaps.webp`, "CAVRIX assessment result")],
    links: [
      {
        kind: "demo",
        label: "Live MVP",
        href: "https://cavrix-nis2-readiness-check.vercel.app",
      },
      {
        kind: "repo",
        label: "GitHub",
        href: "https://github.com/akshit5/cavrix-nis2-readiness-check",
      },
      {
        kind: "case",
        label: "Founder case study",
        href: "https://app.notion.com/p/CAVRIX-Founder-Case-Study-39fdcf4eb1c080de86a4eedf23f7ca54?source=copy_link",
      },
    ],
    featured: true,
    caseStudy: [
      {
        nav: "Context",
        id: "context",
        title: "Context",
        blocks: [
          {
            type: "lead",
            text: "NIS2 widened the set of European companies with binding cybersecurity obligations. A lot of mid-sized firms are now in scope, suspect they're in scope, and have nobody internally whose job it is to work out what that means.",
          },
          {
            type: "prose",
            text: "That gap is the opportunity. Not another compliance platform for enterprises that already have a CISO, but a first honest answer for a company that doesn't.",
          },
        ],
      },
      {
        nav: "Customer",
        id: "customer",
        title: "Customer & problem",
        blocks: [
          {
            type: "keyValue",
            items: [
              {
                term: "Who",
                description:
                  "European SMEs and mid-market firms newly in scope for NIS2, usually without a dedicated security or compliance team.",
              },
              {
                term: "What they need first",
                description:
                  "Not a full programme. A grounded read on whether they're in scope and what's missing, in language they can act on.",
              },
              {
                term: "Why it's unserved",
                description:
                  "Consultancies are priced and paced for bigger engagements. Enterprise GRC tooling assumes a maturity these firms haven't reached.",
              },
            ],
          },
        ],
      },
      {
        nav: "Decisions",
        id: "decisions",
        title: "Product decisions",
        kicker: "The core of this case",
        blocks: [
          {
            type: "decision",
            label: "Scope",
            decision: "Build a readiness check, not a compliance platform.",
            because:
              "The first thing a company in this position actually does is find out how bad it is. A readiness check is a complete, useful thing on its own, and it's the natural front door to everything after it.",
            tradeoff:
              "A narrow product with an obvious ceiling. Deliberately, because the ceiling is the roadmap.",
          },
          {
            type: "decision",
            label: "Engine",
            decision:
              "Use a rule-based evaluation engine rather than generative AI, and show the reasoning behind every flag.",
            because:
              "Compliance is a domain where an unsourced claim is worthless. If the tool says a control is missing, the user has to be able to see why, or they can't take it to a board or an auditor. Rules give the same answer every time, which is what defensible means here.",
            tradeoff:
              "Rules are more work to extend and they won't gracefully cover questions outside them. In this domain that's the right way to fail.",
          },
          {
            type: "decision",
            label: "Data",
            decision:
              "Run the whole assessment locally in the browser and store nothing.",
            because:
              "The input is a candid account of a company's security weaknesses. Asking a first-time visitor to upload that to a server they've never heard of is the fastest way to lose them, and keeping it local removes an entire class of objection from the sales conversation.",
          },
          {
            type: "decision",
            label: "Claims",
            decision:
              "State inside the product that the result is indicative and needs formal legal review.",
            because:
              "Overstating what a tool does is a fast way to lose a B2B buyer who knows the regulation better than you do. In this market honest scoping reads as competence, not weakness.",
          },
        ],
      },
      {
        nav: "MVP",
        id: "mvp",
        title: "The MVP",
        blocks: [
          {
            type: "prose",
            text: "Two steps, under five minutes. First an organisation profile: sector under NIS2 Annex I & II, headcount, revenue. Then a checklist of security measures that are formally documented and could be demonstrated in an audit. The engine applies NIS2 scope criteria and requirement areas to those answers and returns a scope determination plus an identified gap list.",
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${C}/landing.webp`,
              alt: "CAVRIX landing page: assess your organisation's NIS2 readiness in under five minutes",
              caption: "Landing: the promise, and the note that nothing is stored",
              ratio: "1920/1019",
            },
          },
          {
            type: "figureGrid",
            columns: 2,
            figures: [
              {
                src: `${C}/step-1-profile.webp`,
                alt: "Step one: organisation profile with sector, employee count and revenue",
                caption: "Step 1: organisation profile",
                ratio: "1920/1049",
              },
              {
                src: `${C}/step-2-security.webp`,
                alt: "Step two: checklist of documented and implemented security measures",
                caption: "Step 2: documented security measures",
                ratio: "1920/1068",
              },
            ],
          },
          {
            type: "figure",
            figure: {
              src: `${C}/result-gaps.webp`,
              alt: "Assessment result showing scope determination, summary and identified compliance gaps",
              caption:
                "Result: scope determination, assessment summary, identified compliance gaps",
              ratio: "1920/1051",
            },
          },
        ],
      },
      {
        nav: "Memo",
        id: "memo",
        title: "The founder memo",
        blocks: [
          {
            type: "prose",
            text: "Alongside the build I wrote a founder memo: the customer, the positioning, why this wedge and not an adjacent one, what the product becomes after the readiness check, and what would need to be true for it to work as a business.",
          },
          {
            type: "callout",
            tone: "accent",
            title: "Read the full case",
            text: "The complete founder case study is published on Notion. The link is at the top of this page.",
          },
        ],
      },
      {
        nav: "Learnings",
        id: "learnings",
        title: "What I learned",
        blocks: [
          {
            type: "list",
            items: [
              "In regulated B2B, restraint sells. Saying clearly what the tool doesn't do made the rest of it more believable.",
              "Traceability is a product feature. “Here's why we flagged this” is the difference between an output and something a person can take into a meeting.",
              "Choosing rules over generation was a positioning decision as much as a technical one.",
              "Learning a compliance framework well enough to encode it is normal product work. The domain being unfamiliar wasn't the hard part.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================
     4 — TRAFFIC MONITORING (secondary, full case study)
     ================================================================ */
  {
    slug: "traffic-monitoring",
    title: "Traffic Monitoring & Management",
    headline: "An operations console for a traffic police officer",
    description:
      "A UX/UI case study for a city traffic control system. Surveillance, incidents, parking enforcement and citizen complaints in one console, designed around one officer's actual day.",
    category: "UX/UI",
    facets: ["UX/UI", "Product", "Analytics"],
    year: "2023",
    role: "UX/UI. Research, wireframes, interface design",
    context: "Self-directed UX/UI case study",
    tools: ["Figma", "Personas", "Wireframing", "Dashboard design"],
    metaLine: "Civic systems · Operations console",
    scopeNote:
      "A self-directed design case study. It was never built or deployed, and the data in the screens is illustrative.",
    cover: {
      src: `${TR}/dashboard.webp`,
      alt: "Traffic monitoring dashboard with live map, congestion and camera feeds",
      ratio: "16/10",
      position: "top",
    },
    links: [
      {
        kind: "external",
        label: "Behance",
        href: "https://www.behance.net/akshitrana2",
      },
    ],
    featured: false,
    caseStudy: [
      {
        nav: "Context",
        id: "context",
        title: "Context",
        blocks: [
          {
            type: "lead",
            text: "City traffic management is a monitoring problem wearing a data-visualisation costume. The officer on duty doesn't need more charts. They need to know what's happening right now, where, and what they can do about it in the next ten minutes.",
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${TR}/cover.webp`,
              alt: "Traffic Monitoring and Management case study cover",
              ratio: "1376/662",
            },
          },
        ],
      },
      {
        nav: "User",
        id: "user",
        title: "The user",
        kicker: "One officer, not a persona archetype",
        blocks: [
          {
            type: "prose",
            text: "I built the system around one specific user: a traffic police officer responsible for congestion, incidents and enforcement across an area. His constraints set the design. He's often not at a desk, he's judged on response time, and information that arrives late is information that arrived useless.",
          },
          {
            type: "figure",
            figure: {
              src: `${TR}/persona.webp`,
              alt: "Persona: Rahul Singh, traffic police officer, with background, goals, needs and frustrations",
              caption: "The persona the console was designed around",
              ratio: "1343/913",
            },
          },
        ],
      },
      {
        nav: "Structure",
        id: "structure",
        title: "Structure before pixels",
        blocks: [
          {
            type: "prose",
            text: "The console splits into six modules: dashboard, surveillance, parking, accidents, maintenance and citizen reports. Those are the six things the officer is accountable for. I wireframed the flow before touching visual design.",
          },
          {
            type: "figureGrid",
            columns: 3,
            figures: [
              { src: `${TR}/wireframe-1.webp`, alt: "Hand-drawn wireframe", ratio: "675/507" },
              { src: `${TR}/wireframe-2.webp`, alt: "Hand-drawn wireframe", ratio: "675/506" },
              { src: `${TR}/wireframe-3.webp`, alt: "Hand-drawn wireframe", ratio: "675/507" },
              { src: `${TR}/wireframe-4.webp`, alt: "Hand-drawn wireframe", ratio: "675/506" },
              { src: `${TR}/wireframe-5.webp`, alt: "Hand-drawn wireframe", ratio: "675/507" },
            ],
          },
        ],
      },
      {
        nav: "Decisions",
        id: "decisions",
        title: "Decisions",
        blocks: [
          {
            type: "decision",
            label: "Dark interface",
            decision: "Design the console dark, not light.",
            because:
              "It's a monitoring surface that sits on screen for a full shift, often next to live camera feeds. Dark cuts glare, and it lets the map, the alerts and the video be the brightest things on screen, which is the right hierarchy for this job.",
          },
          {
            type: "decision",
            label: "Map as the primary object",
            decision:
              "Put the live map at the centre of the dashboard and hang the metrics around it.",
            because:
              "Every question this user has is spatial before it's numerical. Where comes before how many.",
          },
          {
            type: "decision",
            label: "Every incident ends in an action",
            decision:
              "Give each incident view an explicit next step: alert police, mark as resolved, assign officer.",
            because:
              "A monitoring tool that only reports is a tool someone has to leave in order to act. Closing the loop inside the screen is what makes it operational rather than informational.",
          },
        ],
      },
      {
        nav: "Interface",
        id: "interface",
        title: "The interface",
        blocks: [
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${TR}/dashboard.webp`,
              alt: "Dashboard with live map, CCTV and drone counts, congestion and traffic light violations",
              caption: "Dashboard: live map, asset counts, congestion, violations",
              ratio: "3/2",
            },
          },
          {
            type: "figureGrid",
            columns: 2,
            figures: [
              {
                src: `${TR}/surveillance.webp`,
                alt: "Surveillance grid of live camera feeds with status",
                caption: "Surveillance: camera grid with online status",
                ratio: "3/2",
              },
              {
                src: `${TR}/incidents.webp`,
                alt: "Incident management list with accident detail, impact and severity",
                caption: "Incidents: detail, impact, severity, action",
                ratio: "3/2",
              },
              {
                src: `${TR}/parking.webp`,
                alt: "Parking enforcement view with violation footage and report",
                caption: "Parking: violation evidence and report",
                ratio: "3/2",
              },
              {
                src: `${TR}/citizen-report.webp`,
                alt: "Citizen report queue with complaint status and assigned officer",
                caption: "Citizen reports: queue, status, assignment",
                ratio: "3/2",
              },
            ],
          },
        ],
      },
      {
        nav: "Learnings",
        id: "learnings",
        title: "What I learned",
        blocks: [
          {
            type: "list",
            items: [
              "Designing for one named user with real constraints produces sharper decisions than designing for a segment.",
              "Monitoring interfaces are about budgeting attention. Everything on screen is competing for a glance.",
              "The moment a dashboard can trigger an action, its information architecture has to change. You're designing a workflow, not a report.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================
     5 — CRAFTY CULTURE (secondary, full case study)
     ================================================================ */
  {
    slug: "crafty-culture",
    title: "Crafty Culture",
    headline: "A marketplace for Indian tribal artisans",
    description:
      "An end-to-end UX case study for an Android marketplace connecting Adivasi artisans with buyers. Desk research, field personas, empathy and journey maps, IA, wireframes and final visual design.",
    category: "UX/UI",
    facets: ["UX/UI", "Product"],
    year: "2022",
    role: "UX & UI, full process, solo",
    context: "Independent design project",
    tools: ["Figma", "User research", "Personas", "Service design"],
    metaLine: "Marketplace · Full UX process",
    scopeNote:
      "An independent design project. It was never shipped as a product. The deliverable was the case study and the prototype.",
    cover: {
      src: `${CC}/cover.webp`,
      alt: "Crafty Culture, a UX/UI design case study for an Android app for Indian tribes",
      ratio: "16/10",
      position: "top",
    },
    links: [
      {
        kind: "external",
        label: "Behance",
        href: "https://www.behance.net/akshitrana2",
      },
    ],
    featured: false,
    caseStudy: [
      {
        nav: "Context",
        id: "context",
        title: "Context",
        blocks: [
          {
            type: "lead",
            text: "Adivasi and Vanvasi communities make up a substantial minority population of India. The aim of this project was to protect the identity of Indian tribes and their culture by giving them an online platform to sell handloom products and to share their traditional dances and shows.",
          },
          {
            type: "prose",
            text: "The commercial problem and the cultural problem turn out to be the same problem. Loss of control over natural resources, displacement, erosion of identity: all of it pushes younger generations away from traditional occupations. A marketplace that only optimises for transactions speeds that up rather than slowing it down.",
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/process.webp`,
              alt: "Design process diagram: Discover, Define, Dream, Design, Dry Run",
              caption: "The process I ran: Discover, Define, Dream, Design, Dry Run",
              ratio: "1600/742",
            },
          },
        ],
      },
      {
        nav: "Research",
        id: "research",
        title: "Research",
        kicker: "Discover & Define",
        blocks: [
          {
            type: "prose",
            text: "I started with desk research on the demographics and the structural problems facing these communities, then interviewed 10 prospective users about the cultural and emotional motivations behind engagement. Less about what they'd buy or sell, more about why they'd trust a platform enough to try.",
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/discover.webp`,
              alt: "Desk research on Adivasi demographics and the problems faced by Indian tribes, plus the problem statement",
              caption: "Desk research and the problem statement",
              ratio: "1600/1275",
            },
          },
          {
            type: "prose",
            text: "Four personas came out of the interviews, including artisans in Himachal Pradesh and Rajasthan. Each one got an empathy map and a journey map, because the emotional curve mattered as much as the task sequence.",
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/personas.webp`,
              alt: "Two user personas with bio, needs, personality, goals, technology use and frustrations",
              caption: "Personas built from the interviews",
              ratio: "1600/2217",
            },
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/empathy.webp`,
              alt: "Empathy maps showing says, thinks, does and feels for two personas",
              caption: "Empathy maps",
              ratio: "1600/2317",
            },
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/journey.webp`,
              alt: "Customer journey map with stages, touchpoints and an emotional curve",
              caption: "Customer journey map, with the emotional curve underneath",
              ratio: "1600/1583",
            },
          },
        ],
      },
      {
        nav: "Decision",
        id: "decision",
        title: "The decision that shaped it",
        blocks: [
          {
            type: "decision",
            label: "What the product is for",
            decision:
              "Design the app around cultural storytelling (events, dances, donations), not only around a product catalogue.",
            because:
              "The interviews said the artisans' problem was recognition and fair price, not distribution on its own. A pure storefront reduces a craft with an origin story to a thumbnail and a price, and then competes head-on with platforms that will always win on logistics.",
            tradeoff:
              "A broader surface for a first version, and a harder pitch than “Etsy for tribal crafts”. It was the honest answer to what the research said.",
          },
        ],
      },
      {
        nav: "Structure",
        id: "structure",
        title: "Structure",
        kicker: "Dream",
        blocks: [
          {
            type: "prose",
            text: "Task flow first, then information architecture, then low-fidelity wireframes. Nothing visual until the structure held up.",
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/task-flow.webp`,
              alt: "Task flow diagram covering registration, shopping, booking and donation paths",
              caption: "Task flow",
              ratio: "1600/1417",
            },
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/ia.webp`,
              alt: "Information architecture tree from splash screen through categories, events, selling and donation",
              caption: "Information architecture",
              ratio: "1600/1550",
            },
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/wireframes.webp`,
              alt: "Low fidelity wireframes for four app screens",
              caption: "Low-fidelity wireframes",
              ratio: "1600/775",
            },
          },
        ],
      },
      {
        nav: "Design",
        id: "design",
        title: "Visual design",
        blocks: [
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/type-color.webp`,
              alt: "Typography set in Montserrat and the four-colour palette",
              caption: "Type and colour",
              ratio: "1600/1200",
            },
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/screens-1.webp`,
              alt: "Splash screen and login screen designs",
              caption: "Splash and login",
              ratio: "1600/1850",
            },
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/screens-2.webp`,
              alt: "Home screen and category browsing designs",
              caption: "Home and category",
              ratio: "1600/2183",
            },
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/screens-3.webp`,
              alt: "Product page and event page designs",
              caption: "Product and event pages",
              ratio: "1600/1583",
            },
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${CC}/screens-4.webp`,
              alt: "Event booking, donation page and cart designs",
              caption: "Booking, donation and cart",
              ratio: "1600/2125",
            },
          },
        ],
      },
      {
        nav: "Learnings",
        id: "learnings",
        title: "What I learned",
        blocks: [
          {
            type: "list",
            items: [
              "Research that asks about motivation rather than features changes the product, not only the copy.",
              "A marketplace has two users and one of them is usually under-designed. Here the seller side was the harder and more important half.",
              "Working in an unfamiliar cultural context means designing with people rather than for them, and being explicit about what you still don't know.",
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================
     6 — RESEARCH
     ================================================================ */
  {
    slug: "llm-frontline-research",
    title: "Locally-deployed LLMs on the factory floor",
    headline: "Peer-reviewed systematic literature review",
    description:
      "Co-authored SLR on running language models on-premise so frontline workers in manufacturing SMEs get real-time knowledge access. 27 studies screened, three deployment configurations benchmarked on latency, memory and hardware fit.",
    category: "AI",
    facets: ["AI", "Strategy", "Analytics"],
    year: "2025 – 2026",
    role: "Co-author",
    context: "Harz University of Applied Sciences · with Nishant Moond",
    tools: [
      "Systematic literature review",
      "PRISMA",
      "Edge AI",
      "LLM benchmarking",
    ],
    metaLine: "Peer-reviewed · Co-authored",
    cover: {
      src: `${RS}/paper-cover.webp`,
      alt: "First page of the peer-reviewed paper on locally deployed large language models in manufacturing SMEs",
      ratio: "16/10",
      position: "top",
    },
    links: [],
    featured: false,
    caseStudy: [
      {
        nav: "Question",
        id: "question",
        title: "The question",
        blocks: [
          {
            type: "lead",
            text: "“How do locally deployed Large Language Models provide real-time knowledge access to frontline workers in manufacturing SMEs?”",
          },
          {
            type: "prose",
            text: "Operations knowledge in a manufacturing SME (SOPs, troubleshooting procedures, operation reports) is often stranded. Connectivity on a factory floor is intermittent, and the effects of poor access are concrete: lost productivity, downtime, safety risk.",
          },
          {
            type: "prose",
            text: "The commercial relevance is direct. Cloud LLMs are the default, but for a mid-sized manufacturer the data-privacy and regulatory-compliance conversation often ends the project before it starts. On-premise and edge deployment removes that objection and introduces a different set of constraints, which is what the paper measures.",
          },
          {
            type: "figure",
            figure: {
              src: `${RS}/paper-p1.webp`,
              alt: "First page of the paper, showing title, authors and abstract",
              caption: "The paper, Harz University of Applied Sciences",
              ratio: "1075/1521",
              fit: "contain",
            },
          },
        ],
      },
      {
        nav: "Method",
        id: "method",
        title: "Method",
        blocks: [
          {
            type: "list",
            items: [
              "Systematic literature review following Kitchenham & Charters, reported with PRISMA.",
              "80 papers screened down to 27 qualifying peer-reviewed studies published between 2018 and 2025.",
              "Deployment strategies, technical benchmarks and practical applications analysed on three axes: latency, memory footprint and hardware fit.",
            ],
          },
          {
            type: "keyValue",
            items: [
              { term: "DistilBERT + FAISS", description: "290 ms" },
              { term: "TinyLLaMA 4-bit", description: "410 ms" },
              { term: "GPTQ LLaMA-7B", description: "670 ms" },
            ],
          },
        ],
      },
      {
        nav: "Why it matters",
        id: "relevance",
        title: "Why it sits in a product portfolio",
        blocks: [
          {
            type: "prose",
            text: "Same instinct as the TaxHub and CAVRIX cases, done academically: work out what's actually deployable under real constraints before deciding what to promise. It's peer-reviewed, which means the method survived review by people whose job was to find holes in it.",
          },
        ],
      },
    ],
  },

  /* ================================================================
     7 — ANALYTICS
     ================================================================ */
  {
    slug: "sales-analytics-dashboard",
    title: "Consumer Sales Analytics",
    headline: "A Tableau dashboard built to answer questions, not display charts",
    description:
      "An interactive sales analytics dashboard over an automotive transaction dataset. KPI design, segmentation and trend views for a leadership team, plus automation of the reporting workflows behind it.",
    category: "Analytics",
    facets: ["Analytics", "Product"],
    year: "2025",
    role: "Analysis, KPI design & dashboard build",
    context: "Data & BI project",
    tools: ["Tableau", "SQL", "Excel", "KPI design"],
    metaLine: "BI · Tableau",
    cover: {
      src: `${AN}/car-sales-dashboard.webp`,
      alt: "Car sales Tableau dashboard with YTD sales, trend, body style and dealer region views",
      ratio: "16/10",
      position: "top",
    },
    links: [],
    featured: false,
    caseStudy: [
      {
        nav: "Brief",
        id: "brief",
        title: "The brief",
        blocks: [
          {
            type: "lead",
            text: "A leadership team of six needed to answer commercial questions from a large automotive transaction dataset without going through an analyst every time.",
          },
          {
            type: "figure",
            wide: true,
            figure: {
              src: `${AN}/car-sales-dashboard.webp`,
              alt: "Car sales dashboard showing $371.19M YTD total sales, weekly trend, body style, colour, dealer region and company breakdowns",
              caption:
                "12 KPIs across 5 business dimensions, over $371M in transactions",
              ratio: "1280/711",
            },
          },
        ],
      },
      {
        nav: "Decisions",
        id: "decisions",
        title: "Decisions",
        blocks: [
          {
            type: "decision",
            label: "Start from the question",
            decision:
              "Design the KPI set around the questions the leadership team actually asked, then build views to answer them.",
            because:
              "Dashboards built from whatever fields happen to be available end up as a wall of charts nobody reads. Starting from the question is the difference between a report and a tool.",
          },
          {
            type: "decision",
            label: "Automate the boring half",
            decision:
              "Automate 3 recurring reporting workflows in SQL and Excel rather than only shipping the dashboard.",
            because:
              "The manual preparation was where the time and the inconsistency both lived. Fixing the pipeline made the dashboard trustworthy, and nobody uses a dashboard they don't trust.",
          },
        ],
      },
      {
        nav: "Outcome",
        id: "outcome",
        title: "Outcome",
        blocks: [
          {
            type: "list",
            items: [
              "12 KPIs across 5 business dimensions: trend, body style, colour, dealer region and company.",
              "A filter panel for date, engine, transmission, body style and customer segment, so a new question doesn't need a new view.",
              "Manual reporting time cut by roughly 60% through the automated workflows.",
            ],
          },
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const caseStudyProjects = projects.filter((p) => p.caseStudy?.length);

export const categories = [
  "All",
  "Product",
  "AI",
  "UX/UI",
  "Strategy",
  "Analytics",
] as const;
