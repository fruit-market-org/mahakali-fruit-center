# Shree Mahakali Fruit Center — Website

Marketing website for **Shree Mahakali Fruit Center** (श्री महाकाली फ्रुट सेन्टर),
a family-run fruit business trading since 1 January 1990.

Built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Pages

| Route       | Contents                                                              |
| ----------- | --------------------------------------------------------------------- |
| `/`         | Hero, stats, featured fruits, why choose us, story, services, reviews |
| `/about`    | Full story, key figures, timeline, values, services                   |
| `/products` | Every fruit, grouped by category                                      |
| `/gallery`  | Shop and fruit photographs                                            |
| `/contact`  | Contact details and a WhatsApp button — **no enquiry form**           |

## Editing the content

**Everything lives in [`src/lib/constants.ts`](src/lib/constants.ts).** No business
information is hard-coded anywhere else, so copy, contact details, products,
statistics and gallery items can all be changed from that one file.

Common edits:

- **Phone / WhatsApp number** — `CONTACT.whatsappNumber` (digits with country
  code, used to build the `wa.me` link), plus `phoneDisplay` and `phoneHref`.
- **Email** — `CONTACT.email`.
- **Shop address and opening hours** — `COMPANY.address` and `COMPANY.hours`.
  Both are `null` today; set a string and they appear automatically on the
  contact page, in the footer and in the page's structured data.
- **Instagram / Facebook** — `SOCIAL.instagram` and `SOCIAL.facebook`. Set a URL
  and the link appears in the footer.
- **Products** — add or remove entries in `PRODUCTS`.
- **Live domain** — `SEO.siteUrl`, used for metadata, `sitemap.xml` and
  `robots.txt`.

## Images

Product and gallery photographs are loaded from a remote CDN
(`images.unsplash.com`). If a photo ever fails to load, the card falls back to
hand-drawn SVG artwork (`src/components/FruitArt.tsx`) rather than showing a
broken image.

To use your own photograph instead:

1. Drop the file in `public/images/`.
2. Point the product's `image` field at it, e.g. `image: "/images/mango.jpg"`.

To pull photos from a different remote host, add that hostname to
`images.remotePatterns` in [`next.config.ts`](next.config.ts).

## Logo and favicon

The logo is a hand-built SVG, not an exported image:

- `src/components/Logo.tsx` — `<LogoMark />` (badge) and `<Logo />` (badge + name)
- `src/app/icon.svg` — favicon, picked up automatically by Next.js
- `public/logo.svg` — standalone copy for sharing or print

## Deploying

The whole site is statically generated, so it can be hosted anywhere that runs
Next.js — Vercel, Netlify, or a Node server via `npm run build && npm start`.
Remember to set `SEO.siteUrl` to the live domain before going live.
