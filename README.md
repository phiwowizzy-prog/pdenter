# NutriLife — Healthy Eating Lifestyle Website

A professional, production-grade healthy eating and nutrition website built with TanStack Start and Tailwind CSS v4. Features healthy food recipes, energizing smoothies, a blog section, and reserved Google AdSense placements.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React SSR)
- **Router**: TanStack Router (file-based routing)
- **Styling**: Tailwind CSS v4
- **Typography**: Playfair Display (display) + DM Sans (body) via Google Fonts
- **Deployment**: Netlify

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, featured recipes, smoothies, blog preview, newsletter signup |
| `/recipes` | Filterable grid of all recipes with nutrition facts |
| `/smoothies` | Smoothie catalogue with expandable ingredient/method cards |
| `/blog` | Blog listing with featured post layout |
| `/blog/:slug` | Full blog post with sidebar AdSense + newsletter CTA |

## Running Locally

```bash
npm install
npm run dev
```

Visits [http://localhost:3000](http://localhost:3000)

## Google AdSense Integration

AdSense placeholders are clearly marked in `src/components/AdSense.tsx`. Replace the placeholder `<div>` with your `<ins class="adsbygoogle">` tag and the corresponding `(adsbygoogle = window.adsbygoogle || []).push({})` script. Comments in the component file guide the exact replacement location.

Placement sizes used:
- **Leaderboard** (728×90): Top of recipes, smoothies, and blog pages
- **Medium Rectangle** (300×250): Homepage newsletter section sidebar
- **Large Rectangle** (336×280): Blog post sidebar

## Content Data

All content is in `src/data/`:
- `recipes.ts` — 6 nutritionist-reviewed recipes with full ingredients and instructions
- `smoothies.ts` — 6 goal-targeted smoothie recipes
- `blog-posts.ts` — 6 expert nutrition articles with full HTML content
