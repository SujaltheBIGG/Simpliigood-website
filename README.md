# SimpliiGood

A multi-page marketing site for **SimpliiGood** — a premium fresh-frozen spirulina brand with two divisions:

- **Simplii Green** — the consumer product (fresh-frozen spirulina cubes)
- **Simplii Texture** — the B2B / investor side (Kamu, the plant-based salmon alternative)

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. All photography is Unsplash placeholder stock, wired so you can swap in your own AI-generated campaign images from a single file.

---

## Quick start

```bash
npm install        # install dependencies
npm run dev        # start the dev server → http://localhost:3000
```

For a production build:

```bash
npm run build      # compile + type-check + prerender
npm start          # serve the production build
```

---

## Pages

| Route              | What it is                                                                 |
| ------------------ | -------------------------------------------------------------------------- |
| `/`                | Division chooser — split landing (Simplii Green vs Simplii Texture)        |
| `/simplii-green`   | Full consumer page: hero, marquee, what-is-it, frozen-vs-powder, how-to-use + recipes, store locator, shop, wholesale form, testimonials |
| `/simplii-texture` | B2B page: hero, technology process, Kamu Slices/Flakes, investor contact form |
| `/shop`            | Branded "launching soon" placeholder (stands in for the Shopify storefront) |

In-page navigation uses anchor links (e.g. `/simplii-green#store-locator`), and the sticky nav offset is handled with `scroll-padding-top` so headings never hide behind the bar.

---

## Project structure

```
app/
  layout.tsx              # <html>, Barlow Condensed font link, root SEO
  globals.css             # Tailwind layers, reveal animation, form field styles
  page.tsx                # / division chooser
  simplii-green/page.tsx  # consumer page (9 sections)
  simplii-texture/page.tsx# B2B page
  shop/page.tsx           # Shopify placeholder
components/
  Nav.tsx                 # 3 variants (root / green / texture) + mobile menu
  Logo.tsx                # SIMPLiiGOOD wordmark (note the intentional lowercase "ii")
  CTAButton.tsx           # pill buttons (primary / secondary / outline-white)
  MarqueeTicker.tsx       # yellow infinite scroll strip
  ComparisonTable.tsx     # fresh-frozen vs dried-powder table
  StoreLocator.tsx        # search + map placeholder + retailer logos
  InquiryForm.tsx         # reusable, config-driven form (wholesale + investor)
  TestimonialCard.tsx
  RecipeCard.tsx
  Reveal.tsx              # fade + rise on scroll (IntersectionObserver)
  Footer.tsx              # shared footer + newsletter signup
lib/
  images.ts               # ← every image URL on the site lives here
  stockists.json          # retailer + store data for the locator
```

---

## Swapping the placeholder images

Every photo is referenced from **`lib/images.ts`**, so you never have to hunt through components. To replace one:

1. **Local file:** drop your image in `/public` (e.g. `/public/hero-green.jpg`) and change the value to `"/hero-green.jpg"`.
2. **Remote URL:** paste a new URL and add its hostname to `images.remotePatterns` in `next.config.js`.

The keys are named by slot (`greenHero`, `whatProtein`, `kamuSlices`, …) so it's obvious which image goes where.

---

## Design system

All of it is encoded in `tailwind.config.ts` and `app/globals.css`:

- **Colors** — `simplii-yellow` `#FEE62D`, `spirulina-green` `#154048`, `starburst-green` `#31B278`, plus the accent palette.
- **Type** — display headlines are weight 900 uppercase with tight tracking; section headers 800; body 400 at 1.6 line-height; CTA labels 700 uppercase with `0.05em` tracking.
- **Motion** — sections fade in and rise on scroll via the `<Reveal>` wrapper (animates once), with children staggered by an incrementing `delay` prop. Respects `prefers-reduced-motion`.
- **Spacing** — 8px base; sections are `120px` vertical / `80px` horizontal on desktop, scaling down on mobile.

---

## Notable decisions & deviations

A few intentional calls worth knowing about:

1. **Dropped the redundant top-of-panel wordmark on `/`.** The brief mentioned a small wordmark at the top of each landing panel *in addition to* the nav logo. Two stacked logos in the top-left reads amateurish, so I kept the nav logo plus the eyebrow label inside each panel. One mark, cleaner.
2. **Tailwind token renamed `lime` → `lime-accent`.** Tailwind ships a built-in `lime-*` color scale; naming our brand color `lime` would have clobbered it. Use `bg-lime-accent` / `text-lime-accent`.
3. **Fonts load via a `<link>`, not `next/font`.** `next/font` downloads font files *at build time*. The build environment here can't reach Google's font hosts, so I load Barlow Condensed with a plain stylesheet `<link>` in `app/layout.tsx` and set `optimizeFonts: false` in `next.config.js` to keep the build clean. The browser pulls the font at runtime. In a normal environment you can switch to `next/font` if you'd prefer the font self-hosted.

---

## Front-end-only behaviours (no backend yet)

These are wired up on the client and show success states, but don't POST anywhere yet:

- **Wholesale & investor forms** — validate and show a thank-you state. Hook them up to your email/CRM (or an n8n webhook) when ready.
- **Newsletter signup** in the footer — same.
- **Store locator** — the search shows a placeholder message; the map is a styled placeholder card pending the Google Maps integration.
- **`/shop`** — placeholder for the Shopify storefront redirect.

---

## Heads-up: Next.js security update

This project pins `next@14.2.5`, and npm flags a security advisory for it. Before going live, bump to the latest patched 14.2.x:

```bash
npm install next@^14.2
```

(Left pinned here only so the exact versions used during the build are reproducible.)

---

## Tech

Next.js 14.2 · React 18.3 · TypeScript 5.5 · Tailwind CSS 3.4
