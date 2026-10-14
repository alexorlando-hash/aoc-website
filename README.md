# AOC | Alex Orlando Counselling Website

Production-ready Astro codebase for [Alex Orlando Counselling](https://www.alexorlando.com) (Calgary, Alberta).

## Tech Stack & Architecture

- **Framework**: [Astro](https://astro.build/) (Static Site Generation, zero-JS overhead by default)
- **Styling**: Modular CSS custom properties, responsive grid/flexbox, typography via Google Fonts (DM Sans & Libre Caslon Display)
- **Deployment**: Optimized for Vercel, Cloudflare Pages, or Netlify with automatic CI/CD from GitHub

## Project Structure

```text
├── astro.config.mjs         # Astro site configuration
├── package.json             # Scripts & Astro dependencies
├── public/
│   ├── favicon.svg          # SVG brand icon
│   └── nature.jpg           # Lake Louise banner asset
└── src/
    ├── components/
    │   ├── Header.astro     # Brand monogram, desktop & mobile nav
    │   ├── Footer.astro     # Practice links, legal notice & credit
    │   └── Cta.astro        # Reusable dark consultation prompt banner
    ├── layouts/
    │   └── Layout.astro     # Core document layout, meta tags & mobile drawer script
    ├── pages/
    │   ├── index.astro            # Home / Landing page
    │   ├── about/index.astro      # About Alex
    │   ├── services/index.astro   # Counselling Services
    │   ├── addictions/index.astro # Addictions & Substance Use
    │   ├── mental-health/index.astro # Mental Health & Wellbeing
    │   ├── approach/index.astro   # My Approach
    │   ├── resources/index.astro  # Learning Space / Resource Library
    │   ├── faq/index.astro        # Frequently Asked Questions
    │   ├── contact/index.astro    # Consultation Booking & Contact Info
    │   └── 404.astro              # Custom 404 page
    └── styles/
        └── styles.css       # Complete design tokens, typography & media queries
```

## Cloud Deployment (GitHub + Vercel)

1. Create a new repository on your free GitHub account (e.g., `aoc-website`).
2. Push this project to GitHub:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/aoc-website.git
   git branch -M main
   git push -u origin main
   ```
3. Sign into [Vercel](https://vercel.com) with GitHub.
4. Click **Add New Project**, select `aoc-website`, and click **Deploy**. Vercel will auto-detect Astro and build the site instantly.
5. In Vercel Project Settings > **Domains**, enter `alexorlando.com` and `www.alexorlando.com`.
6. Update your domain DNS settings (at your registrar) with the A and CNAME records provided by Vercel.

## Local Development (Optional)

If you wish to test locally on your Mac:
```bash
npm install
npm run dev
```
