# Radeion Web

Radeion.ai is a Next.js healthcare intelligence website for a B2B platform inspired by enterprise healthcare analytics, clinical decision support, risk adjustment, quality assurance, and governed AI workflows.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- CSS-only animation and theme handling
- JSON-driven product, solution, metric, case-study, and trust content

## Routes

- `/`
- `/products`
- `/products/[slug]`
- `/solutions`
- `/solutions/[slug]`
- `/resources`
- `/company`
- `/demo`
- `/security`
- `/privacy`

## Editable Content

Most site content lives in `src/data/site.json`.

Use that file to update:

- Brand copy
- Navigation
- Hero copy
- Metrics
- Product modules
- Solution segments
- Platform layers
- Sample case studies
- Trust and compliance placeholders

## Demo Requests

The demo form posts to `/api/demo-requests` and saves mock submissions to `data/demo-requests.json`.

This is for local prototyping only. Replace it with an email engine, CRM workflow, or database-backed submission flow before production.

## Future Content

See `docs/mdx-resources-setup.ts` for the commented MDX resource plan.

See `docs/extension-architecture.md` for a future browser extension architecture note. No extension code is included.

## Commands

```bash
npm run dev
npm run lint
npm run build
```
