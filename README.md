# AOC | Alex Orlando Counselling Website

Production-ready Astro codebase for [Alex Orlando Counselling](https://www.alexorlando.com) (Calgary, Alberta), synchronized with the live **Charcoal & Marigold (`#111111` / `#F7F7F5` / `#F2C230`) Editorial Edge** design system.

## Tech Stack & Architecture

- **Framework**: [Astro](https://astro.build/) (Static Site Generation, zero-JS overhead by default)
- **Styling**: Modular CSS custom properties (`styles.css`), responsive editorial grid/flexbox, typography via Google Fonts (`DM Sans` & `Libre Caslon Display`), Georgia lowercase `aoc` monogram
- **Palette (Option 1: Charcoal & Marigold)**:
  - `--ink`: `#111111` (Charcoal / Near-Black)
  - `--deep`: `#111111` (Dark CTA & Portrait Containers)
  - `--paper`: `#f7f7f5` (Warm Off-White Canvas)
  - `--muted`: `#62625e` (Secondary Copy & Captions)
  - `--line`: `#d4d4cf` (Hairline Dividers)
  - `--mint`: `#e7e7e3` (Pale Editorial Surface Tint)
  - `--accent`: `#f2c230` (Restrained Marigold Yellow Accent)
- **Deployment**: Optimized for Vercel, Cloudflare Pages, or Netlify with automatic CI/CD from GitHub

## Project Structure

```text
├── astro.config.mjs                 # Astro site configuration
├── package.json                     # Scripts & Astro dependencies
├── public/
│   ├── alex-orlando-portrait.jpg    # Editorial black-and-white portrait (Home hero & About bio)
│   ├── favicon.svg                  # SVG brand icon
│   └── nature.jpg                   # Lake Louise landscape banner asset
└── src/
    ├── components/
    │   ├── Header.astro             # Brand monogram, desktop & mobile nav + email consultation CTA
    │   ├── Footer.astro             # Practice links, email-consultation notice & credit
    │   └── Cta.astro                # Reusable dark consultation prompt banner
    ├── layouts/
    │   └── Layout.astro             # Core document layout, meta tags & accessible mobile drawer script
    ├── pages/
    │   ├── index.astro              # Home / Landing page (Portrait hero + Lake Louise learning figure)
    │   ├── about/index.astro        # About Alex (with bio portrait card)
    │   ├── services/index.astro     # Counselling Services
    │   ├── addictions/index.astro   # Addictions & Substance Use
    │   ├── mental-health/index.astro# Mental Health & Wellbeing
    │   ├── approach/index.astro     # My Approach
    │   ├── resources/index.astro    # Learning Space / Resource Library
    │   ├── faq/index.astro          # Frequently Asked Questions
    │   ├── contact/index.astro      # Consultation Requests by Email
    │   └── 404.astro                # Custom 404 page
    ├── scripts/
    │   └── site.js                  # Standalone navigation & drawer script
    └── styles/
        └── styles.css               # Complete Charcoal & Marigold + Editorial Edge stylesheet
```

## Cloud Deployment (GitHub + Vercel)

1. Push updates to your GitHub repository (`aoc-website`):
   ```bash
   git add .
   git commit -m "Sync Charcoal & Marigold Editorial Edge design and content"
   git push
   ```
2. Vercel will automatically build and deploy the updated Astro site to `alexorlando.com`.

## Local Development (Optional)

If you wish to test locally on your Mac:
```bash
npm install
npm run dev
```
