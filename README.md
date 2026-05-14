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

The demo form posts to `/api/demo-requests`, sends an email through Resend, and saves a local development copy to `data/demo-requests.json`.

The company contact form posts to `/api/contact-requests` and sends an email through Resend.

Required environment variables:

```bash
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM_EMAIL=Radeion Website <admin@radeion.ai>
RESEND_TO_EMAIL=admin@radeion.ai
```

Emails are sent to `RESEND_TO_EMAIL`. If it is not set, the app falls back to `admin@radeion.ai`.

Use the same values locally and in Vercel once `radeion.ai` is verified in Resend DNS:

```bash
RESEND_FROM_EMAIL=Radeion Website <admin@radeion.ai>
RESEND_TO_EMAIL=admin@radeion.ai
```

The website host can be `localhost`, `radeion.vercel.app`, or `www.radeion.ai`; Resend only requires the sender domain in `RESEND_FROM_EMAIL` to be verified. The demo form also saves a local development copy to `data/demo-requests.json`, but skips that JSON save on Vercel because production functions should send email instead of writing runtime files.

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
