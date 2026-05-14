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
RESEND_FROM_EMAIL=Radeion Website <onboarding@resend.dev>
RESEND_TO_EMAIL=your_verified_resend_recipient@example.com
```

Emails are sent to `RESEND_TO_EMAIL`. If it is not set, the app falls back to `admin@radeion.ai`.

For local or Vercel testing before `radeion.ai` is verified, use Resend's sandbox sender:

```bash
RESEND_FROM_EMAIL=Radeion Website <onboarding@resend.dev>
```

Resend may only allow sandbox emails to be sent to the email address verified in your Resend account. After verifying `radeion.ai`, switch to:

```bash
RESEND_FROM_EMAIL=Radeion Website <hello@radeion.ai>
RESEND_TO_EMAIL=admin@radeion.ai
```

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
