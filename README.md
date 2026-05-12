# Radeion Web

Radeion.ai is a Next.js healthcare intelligence website for a B2B platform inspired by enterprise healthcare analytics, clinical decision support, risk adjustment, quality assurance, and governed AI workflows.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- CSS-only animation and theme handling
- Normal page/component-based content with no JSON content dependency

## Routes

- `/`
- `/products`
- `/solutions`
- `/resources`
- `/company`
- `/demo`
- `/security`
- `/privacy`

## Editable Content

Edit content directly in page and component files:

- `src/app/page.tsx`
- `src/app/products/page.tsx`
- `src/app/solutions/page.tsx`
- `src/app/company/page.tsx`
- `src/components/sections.tsx`
- `src/components/site-header.tsx`

## Demo Requests

The demo form posts to `/api/demo-requests` and saves mock submissions to `data/demo-requests.json`.

This is for local prototyping only. Replace it with an email engine, CRM workflow, or database-backed submission flow before production.

## Future Content

See `docs/developer-walkthrough.md` for a complete codebase map and developer onboarding guide.

See `docs/mdx-resources-setup.ts` for the commented MDX resource plan.

See `docs/extension-architecture.md` for a future browser extension architecture note. No extension code is included.

## Commands

```bash
npm run dev
npm run lint
npm run build
```
