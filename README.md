# SetupFX

Marketing website for SetupFX — a software development company building AI analytics, ERP, CRM
and custom software. Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Requirements

- Node.js 20.9 or newer (Next.js 16 requires it)
- pnpm 10

## Getting started

```bash
pnpm install          # install dependencies
cp .env.example .env.local   # then fill in the values you need
pnpm dev              # start the dev server on http://localhost:3000
```

### Other commands

| Command            | What it does                                        |
| ------------------ | --------------------------------------------------- |
| `pnpm dev`         | Dev server with hot reload                          |
| `pnpm build`       | Production build                                    |
| `pnpm start`       | Serve the production build (run `pnpm build` first) |
| `pnpm lint`        | ESLint                                              |
| `pnpm lint:fix`    | ESLint with autofix                                 |
| `pnpm typecheck`   | `tsc --noEmit`                                      |
| `pnpm format`      | Prettier, writing changes                           |
| `pnpm format:check`| Prettier, checking only                             |

> `pnpm typecheck` relies on route types that Next.js generates into `.next/types`, so run
> `pnpm dev` or `pnpm build` at least once before using it on a fresh clone.

> The build downloads the Inter and Sora fonts from Google Fonts and self-hosts them in the
> output, so the machine running `pnpm build` needs network access the first time.

## Environment variables

Copy `.env.example` to `.env.local`. Nothing is required to run the site locally.

| Variable                  | Purpose                                                            |
| ------------------------- | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`    | Base URL for metadata, canonical URLs, sitemap and robots          |
| `RESEND_API_KEY`          | API key for sending contact enquiries                              |
| `CONTACT_RECIPIENT_EMAIL` | Inbox that receives enquiries                                      |
| `CONTACT_SENDER_EMAIL`    | Verified sender address                                            |

With the three email variables unset, `POST /api/contact` still validates the submission and
returns success, logging the enquiry to the server console instead of sending it. That keeps
local development usable without an email account.

## Folder structure

```
src/
  app/
    (marketing)/           Route group for the public pages; adds no URL segment
      page.tsx             Home
      services/page.tsx
      industries/page.tsx
      about/page.tsx
      contact/page.tsx
    api/contact/route.ts   Contact form handler (validate, then email)
    layout.tsx             Root layout: fonts, metadata, header, footer
    globals.css            Tailwind import, theme tokens, shared utilities
    sitemap.ts             Generated /sitemap.xml
    robots.ts              Generated /robots.txt
    not-found.tsx          404 page
  components/
    home/                  Home page sections, matching the reference design
      Hero.tsx             Headline, video card, intro paragraph, CTA
      HeroVideo.tsx        Autoplaying video with mute/play controls + progress bar
      Stats.tsx            Counting numbers between the two truss images
      CountUp.tsx          Counts up in view, blue while changing
      System.tsx           The three feature cards
      visuals/             Each card's animation: checklist, avatar cloud, screen grid
      Testimonials.tsx     Bento grid of highlight and quote cards
      PricingPanel.tsx     Collage-backed CTA panel
    layout/                Navbar (floating, scroll-aware), SiteFooter, NavLinks, ThemeToggle
    sections/              Reusable sections for /services, /industries, /about
    ui/                    Button, BookCallButton, Card, Input, Badge, AssetImage, Reveal
    forms/                 ContactForm
  config/
    site.ts                Name, description, URL, navigation, social links, contact details
  content/                 All page copy, kept out of the components
    home.ts                Every word on the home page, plus its asset paths
    shared.ts              Copy for the sections reused by the other pages
    services.ts            Services list and section headings
    process.ts             Process steps
    industries.ts          Industries list
    about.ts               About page story and values
    contact.ts             Contact details, form labels, status messages
    common.ts              Header and 404 copy
  lib/
    utils.ts               `cn` class merge, `absoluteUrl`
    assets.ts              Checks which image slots have real files yet
    validations.ts         Zod schema shared by the form and the API route
    constants.ts           Field limits, enquiry topics, endpoint, static dates
  types/
    index.ts               Shared types
  hooks/
    use-theme.ts           Reads and writes the colour theme
    use-active-section.ts  Tracks the section in view, for the navbar
    use-scroll-lock.ts     Locks page scroll behind the mobile menu
public/
  images/                  Image slots for the home page (see below)
  icons/
```

### Conventions

- **Server components by default.** The client components are the ones that need state, the
  DOM or an animation loop: `Navbar`, `NavLinks`, `MobileNav`, `ThemeToggle`, `ContactForm`,
  `HeroVideo`, `CountUp`, `Reveal` and the three card visuals. Each section wrapper stays on
  the server and passes resolved data down.
- **Copy lives in `src/content`.** Components take text from there rather than hard-coding it,
  so wording can change without touching markup. Validation messages are the one exception:
  they sit next to the schema in `src/lib/validations.ts`.
- **One source of truth for form rules.** `contactFormSchema` is used by the browser form and
  again in the route handler, so a request that skips the UI is held to the same rules.
- **PascalCase for component files**, kebab-case for everything else.

## Theming

Colours are CSS variables in `src/app/globals.css`, exposed to Tailwind through
`@theme inline`. Components use semantic utilities — `bg-surface`, `text-muted`,
`border-border` — so they need no `dark:` prefix for colour.

- Dark is the default, as the design intends: pure black ground (`#000`), off-white type
  (`#F5F5F5`), grey muted text (`#9A9A9A`) and a single soft blue accent (`#7CBCF0`) used
  for glows, the counting digits and the "winning" state.
- A light palette is kept for visitors who ask for one, through the operating system or
  `ThemeToggle`, which sets `data-theme="light" | "dark"` on `<html>` and remembers it.
- A small inline script in the root layout applies a stored choice before first paint, so an
  explicit preference never flashes the wrong theme.

Two custom utilities carry the look: `shell` (the 1200px column with 24px gutters) and
`card-surface` (the dark gradient fill and inner glow). Borders stay on the utility classes
so individual cards can tint their own edge, as the two glowing highlight cards do.

To restyle the site, change the variables in `:root` and in the light blocks below it.

## SEO

- Metadata, Open Graph and Twitter card tags are built from `src/config/site.ts` in
  `src/app/layout.tsx`; each page adds its own title, description and canonical URL.
- `sitemap.ts` lists the routes from `siteRoutes`, derived from the navigation.
- `robots.ts` allows everything except `/api/`, and points at the sitemap.
- `NEXT_PUBLIC_SITE_URL` must be set in production, or metadata URLs fall back to
  `http://localhost:3000`.

## Accessibility notes

Worth preserving as the site grows:

- A skip link to `#main` is the first focusable element on the page.
- One `<h1>` per page; sections use `<h2>` and card titles `<h3>`.
- Lists of items are real lists, stats are a `<dl>`, process steps are an `<ol>`.
- Form controls have labels, and errors are tied to their input with `aria-describedby`
  plus `aria-invalid`. Submission status is announced through an `aria-live` region.
- The mobile menu button exposes `aria-expanded` / `aria-controls`, closes on `Escape`, and
  locks background scroll while open.
- The current page or section is marked with `aria-current="page"`.
- The video controls are real buttons with labels that change with state, and the progress
  bar is a labelled `role="progressbar"`.
- Counting numbers expose their final value to screen readers once, rather than announcing
  every tick.
- Every animation is skipped under `prefers-reduced-motion`: `Reveal` renders a plain div,
  the checklist jumps to its finished state, and the floating and pulsing loops stop.
- `html` is `overflow-x: hidden` and the layout is checked at 375px, so nothing scrolls
  sideways.

## Image slots

The home page references these files before they exist. `src/lib/assets.ts` checks at build
time whether each one is present: until it is, `AssetImage` renders a dashed dark block of
the same shape, labelled with the filename and the size it expects, so no section ever
collapses and it is obvious what belongs where. Slots too small to carry a label (the
avatars, the quote portraits, the logos) and the blurred collage tiles pass `hideSlotLabel`;
their sizes are in the table below. Drop a file in with the exact name below and the next
build picks it up — no code change needed.

| Path                                          | Shape                        |
| --------------------------------------------- | ---------------------------- |
| `public/images/hero-video.mp4`                | 16:9 video                   |
| `public/images/hero-poster.jpg`               | 16:9 poster frame            |
| `public/images/stats-left.png`                | tall, transparent, 400×1200  |
| `public/images/stats-right.png`               | tall, transparent, 400×1200  |
| `public/images/avatars/avatar-01…12.jpg`      | square, 200×200              |
| `public/images/partners/person-1…2.jpg`       | square, 200×200              |
| `public/images/partners/logo-1…2.svg`         | white logo (placeholder set) |
| `public/images/bg_img.png`                    | 2848 x 1472, panel collage   |
| `public/images/footer_img.png`                | 2076 x 757, transparent      |

Without `hero-video.mp4` the hero shows a dark 16:9 card and its mute and play buttons are
disabled; the moment the file lands, it autoplays muted on loop with a blue progress bar.

## Things left as placeholders

- All copy in `src/content` is sample text. The testimonials are deliberately marked
  (`Client Name`, `Company A`, `[Result goes here]`) and need real quotes before launch.
- Contact details and social links in `src/config/site.ts` are invented.
- Only the two partner logos are real files, and they are plain wordmarks.
- `public/images/og-image.png` is a flat black card at the right size (1200x630).
- `COPYRIGHT_YEAR` and `SITE_LAST_MODIFIED` in `src/lib/constants.ts` are fixed strings, not
  read from the clock, so every page stays statically prerendered. Update them on release.
