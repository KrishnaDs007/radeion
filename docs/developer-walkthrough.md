# Radeion Developer Walkthrough

This project is now structured like a normal static marketing website. There is no central JSON content file and no slug-based dynamic product or solution pages. Edit the page files and simple component files directly.

## Project Root

```text
Radeion/
  data/                         Local prototype form storage
  docs/                         Developer notes
  public/                       Public images and brand assets
  src/
  package.json
  next.config.ts
  README.md
```

## Main Commands

```bash
cd /Users/krishnadevashish/Documents/KD_Personal/Radeion
npm run dev
npm run lint
npm run build
```

- `npm run dev` starts the local website with webpack.
- `npm run dev:turbo` starts Next dev with Turbopack for testing only.
- `npm run clean` removes `.next` cache if local development becomes slow.
- `npm run lint` checks the code.
- `npm run build` verifies production output.

## App Pages

Routes live in `src/app`.

```text
src/app/
  page.tsx                    Home page
  layout.tsx                  Root layout, header, footer, metadata
  globals.css                 Global CSS, theme, menus, animations, forms
  icon.png                    Browser tab favicon
  products/page.tsx           Products page
  solutions/page.tsx          Solutions page
  resources/page.tsx          Resources page
  company/page.tsx            Company page and contact section
  demo/page.tsx               Demo request page
  security/page.tsx           Security page
  privacy/page.tsx            Privacy page
  api/demo-requests/route.ts  Demo request API and email sender
  api/contact-requests/route.ts Company contact API and email sender
```

There are no routes like `/products/[slug]` or `/solutions/[slug]` anymore.

## Where To Edit Content

- Home page layout: `src/app/page.tsx`
- Product page details: `src/app/products/page.tsx`
- Solution page details: `src/app/solutions/page.tsx`
- Company page: `src/app/company/page.tsx`
- Demo page text: `src/app/demo/page.tsx`
- Header menu: `src/components/site-header.tsx`
- Reusable homepage/product/solution sections: `src/components/sections.tsx`
- Footer text and metadata: `src/app/layout.tsx`

The simple product and solution lists are currently at the top of:

```text
src/components/sections.tsx
```

That file exports `products`, `solutions`, `caseStudies`, and `trustItems` as normal TypeScript arrays. They are not JSON. You can edit them directly, or move specific content into the page files later if you want even less sharing.

## Components

```text
src/components/
  animated-counter.tsx   Number animation used on homepage metrics
  contact-form.tsx       Company page contact form
  demo-form.tsx          Demo request form
  sections.tsx           Shared visual sections and simple content arrays
  site-header.tsx        Header, mega menu, logo, theme toggle, demo CTA
  theme-toggle.tsx       Sun/moon sliding theme switch
```

## Assets

Public assets live in:

```text
public/
```

Current important assets:

- `public/radeion-mark.png` transparent icon mark
- `public/radeion-wordmark.png` transparent long wordmark
- `public/radeion-logo.jpg` original combined logo reference

The browser tab icon is:

```text
src/app/icon.png
```

## Styling

Global styling lives in:

```text
src/app/globals.css
```

Use this file for:

- Light/dark theme variables
- Layout helpers
- Header and mega-menu styling
- Button styling
- Dashboard styling
- Counter animation
- Form field styling

Start color changes by editing the CSS variables in `:root` and `[data-theme="dark"]`.

## Forms

The demo request form posts to:

```text
src/app/api/demo-requests/route.ts
```

It saves local prototype submissions here:

```text
data/demo-requests.json
```

It also sends the request through Resend.

The Company page contact form posts to:

```text
src/app/api/contact-requests/route.ts
```

Both forms send email to `admin@radeion.ai` through:

```text
src/lib/email/resend-mailer.ts
```

Required environment variables:

```text
RESEND_API_KEY
RESEND_FROM_EMAIL
RESEND_TO_EMAIL
```

See `.env.example` for the expected format.

## Common Tasks

Add or update a product:

1. Open `src/components/sections.tsx`.
2. Edit the `products` array.
3. Open `src/app/products/page.tsx` if you want to adjust the product page layout.
4. Run `npm run lint`.

Add or update a solution:

1. Open `src/components/sections.tsx`.
2. Edit the `solutions` array.
3. Open `src/app/solutions/page.tsx` if you want to adjust the solution page layout.
4. Run `npm run lint`.

Change header menu:

1. Open `src/components/site-header.tsx`.
2. Edit `productLinks`, `solutionLinks`, or the menu JSX.
3. Run `npm run lint`.

Change homepage:

1. Open `src/app/page.tsx`.
2. Reorder sections or edit copy directly.
3. Open `src/components/sections.tsx` only if changing a shared section.

Change logos:

1. Replace `public/radeion-mark.png` or `public/radeion-wordmark.png`.
2. Replace `src/app/icon.png` if the browser tab icon should change.
