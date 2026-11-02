# Arisha Azmi — Portfolio

A rebuild of [arishaazmi.framer.website](https://arishaazmi.framer.website/) from the Figma design, as a fast, responsive Next.js site.

**Stack:** Next.js 16 (App Router, static export of every route) · React 19 · TypeScript · Tailwind CSS v4 · Motion (animations) · Lenis (smooth scrolling) · self-hosted fonts.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploy

Import the repo on [Vercel](https://vercel.com/new) — no configuration needed. Set `site.url` in `src/content/site.ts` to the final domain so Open Graph links are correct.

## Where things live

| Path | What |
| --- | --- |
| `src/content/site.ts` | Name, email, social links, résumé link, nav items |
| `src/content/home.ts` | Homepage copy: roles, about text, skills, word-search grid |
| `src/content/projects.ts` | Cards on the Product / Brand listing pages |
| `src/content/caseStudies.ts` | Esports, Illume, AUIS case-study content (block-based) |
| `src/content/posters.ts` | Poster gallery list (add `{ src, alt, w, h }` entries) |
| `src/components/` | Shared pieces: `Star`, `StarField`, `StarNav`, `Ticker`, `ScriptHeading`, `Nav`, `ProjectCard`, case-study blocks |
| `public/fonts` | Sloop, Alte Haas Grotesk, Satoshi, Inter, Poppins (woff2) |
| `public/images` | Site imagery, grouped by page |

### Adding a case study

Add a `CaseStudy` object in `src/content/caseStudies.ts` (title, meta, hero band colour, ticker word, and a list of blocks: `label`, `p`, `lead`, `bullets`, `quote`, `h`, `figure`, `figures`, `split`, `note`, `link`, `custom`) and a page under `src/app/projects/<area>/<slug>/page.tsx` that renders `<CaseStudy study={…} />`.

### Old URLs

The Framer paths (`/productpage`, `/brandgraphicpage/auis`, `/socialmedia`, …) permanently redirect to the new routes — see `next.config.ts`.

## Accessibility & motion

Every decorative star is `aria-hidden`; headings are real text (the script titles are the Sloop font, not images). All looping animation and smooth scrolling switch off under `prefers-reduced-motion`.
