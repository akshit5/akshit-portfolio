# Personal portfolio

**Live:** [akshit-portfolio-chi.vercel.app](https://akshit-portfolio-chi.vercel.app)

My portfolio site. Product, strategy, AI and design work, with the case studies
written around the decisions rather than the screenshots.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4 and Motion.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Deployed on Vercel from `main`. Every push to `main` triggers a production
build. No environment variables.

There's also a static export path for hosting anywhere without a Node server:

```bash
STATIC_EXPORT=1 npm run build   # emits ./out
```

That switches off Next.js image optimisation, so leave the flag unset on Vercel.

---

## How it's put together

All copy and project data lives in `src/content` as typed objects. Nothing is
hardcoded into a component. Adding a project means adding one object to
`projects.ts`, and it shows up on the Projects page, in the category filters, in
the sitemap and, if I flag it as featured, on the homepage.

```ts
{
  slug: "my-project",           // becomes /projects/my-project
  title: "My Project",
  headline: "One line.",
  description: "Two or three sentences.",
  category: "Product",
  facets: ["Product", "AI"],    // drives the filter chips
  year: "2026",
  role: "What I did",
  context: "Where it happened",
  tools: ["Figma", "React"],
  cover: card("/images/projects/my-project/cover.webp", "Alt text"),
  links: [{ kind: "demo", label: "Live", href: "https://…" }],
  featured: false,
  caseStudy: [ /* optional */ ],
}
```

Leave `caseStudy` off and the project renders as a short overview page instead
of a full write-up. Either way the layout code stays untouched.

### Case-study blocks

A case study is an array of sections, each holding typed blocks. The block
types are defined in `src/content/types.ts`:

`lead` · `prose` · `heading` · `list` · `keyValue` · `decision` · `callout` ·
`figure` · `figureGrid` · `quote`

`decision` is the one the whole site is built around. A choice, the reasoning,
and what it cost:

```ts
{
  type: "decision",
  label: "Scope",
  decision: "Build a readiness check, not a compliance platform.",
  because: "The first thing a company in this position does is find out how bad it is.",
  tradeoff: "A narrow product with an obvious ceiling. Deliberately.",
}
```

I wanted the format to make it hard to write a case study without saying what I
actually decided, so the reasoning field isn't optional.

### Images

Files go in `public/images/projects/<slug>/` as WebP, 1920px wide at most.

Each figure carries its real aspect ratio (`"1024/1261"`) so nothing gets
cropped inside a case study and there's no layout shift while it loads. Card
covers use a `card()` helper that frames at 16:10 and crops from the top, which
is the right choice for app screenshots because the header is the part worth
seeing at thumbnail size.

Setting `placeholder: true` on a figure renders a labelled slot naming the
missing file rather than a broken image, so an unfinished project can't ship
looking broken.

---

## Structure

```
src/
├─ app/                     routes (App Router)
│  ├─ page.tsx              homepage
│  ├─ projects/[slug]/      case-study template
│  ├─ opengraph-image.tsx   generated social card
│  ├─ sitemap.ts robots.ts
│  └─ globals.css           design tokens
├─ components/
│  ├─ ui/                   Button, Reveal, Section, FigureFrame
│  ├─ case-study/           block renderer, section nav, progress bar
│  ├─ hero.tsx product-canvas.tsx
│  ├─ selected-work.tsx     three card treatments, one per project type
│  └─ thinking-map.tsx      the Product Thinking Map
└─ content/                 all copy and data
   ├─ site.ts               identity, nav, hero copy, links
   ├─ projects.ts           every project
   ├─ experience.ts         timeline, capabilities, thinking stages
   ├─ about.ts              About page copy
   └─ types.ts              the content model
```

---

## Design system

Tokens are CSS custom properties in `src/app/globals.css`. Components read
semantic names (`--fg`, `--bg-subtle`, `--accent`) and never raw hex, so dark
mode is a palette I designed separately rather than an inversion of the light
one.

- Light: `#111111` on `#FFFFFF`, surfaces `#F7F7F5`, hairlines `#E8E8E8`
- Dark: `#F2F2F3` on `#0A0A0B`, surfaces `#111113`, hairlines `#26262B`
- Accent: `#2F4BF0` light, `#8B9BFF` dark. Links, active states, small details.

Type is Geist Sans, with Geist Mono for labels and metadata. Both self-hosted
through the `geist` package, so there are no external font requests.

---

## Accessibility

Audited with axe-core across all nine routes in both themes: zero WCAG 2.1 AA
violations.

Semantic landmarks, a skip link, visible focus rings, a real tablist with arrow
key and Home/End support for the Thinking Map, an `aria-live` region on the
project filter, and `prefers-reduced-motion` respected everywhere. Under reduced
motion every animation is either switched off or cut back to a fade.
