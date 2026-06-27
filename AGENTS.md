# AGENTS.md — NutriLife Project Guide

This document provides an overview of the NutriLife healthy eating website for developers and AI agents working on this codebase.

## Project Overview

A professional healthy eating lifestyle website featuring recipes, smoothies, a blog, and Google AdSense placements. Built with TanStack Start (React SSR) and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 with `@theme` custom tokens |
| Typography | Playfair Display + DM Sans (Google Fonts) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── routes/
│   ├── __root.tsx       # Root layout: full HTML shell, Nav + Outlet + Footer
│   ├── index.tsx        # Homepage — hero, recipes, smoothies, newsletter, blog
│   ├── recipes.tsx      # Filterable recipe grid with nutrition facts
│   ├── smoothies.tsx    # Smoothie catalogue with expandable ingredient cards
│   ├── blog.index.tsx   # Blog listing at /blog (featured + grid)
│   └── blog.$slug.tsx   # Dynamic blog post with sidebar + related articles
├── components/
│   ├── Nav.tsx          # Sticky nav with mobile hamburger (React state)
│   ├── Footer.tsx       # 4-column footer with social icons
│   └── AdSense.tsx      # AdSense placeholder — replace div with <ins> tag
├── data/
│   ├── recipes.ts       # 6 typed recipe objects with full ingredients/instructions
│   ├── smoothies.ts     # 6 typed smoothie objects with goal-targeting metadata
│   └── blog-posts.ts    # 6 blog posts with raw HTML `content` field
└── styles.css           # Tailwind v4 @theme tokens + global base styles
```

## Routing Conventions

- Flat file naming with dot notation: `blog.index.tsx` → `/blog`, `blog.$slug.tsx` → `/blog/:slug`
- Dynamic params accessed via `Route.useParams()` inside the component
- `createRootRoute` in `__root.tsx` uses `component` (not `shellComponent`) — renders full HTML shell including `<html>`, `<head>`, `<HeadContent />`, `<body>`, `<Scripts />`

## Styling Conventions

- Tailwind CSS v4 with `@theme` custom tokens in `styles.css`
- Custom tokens: `--color-forest` (#1a3d2b), `--color-cream` (#faf7f2), `--color-sage` (#95d5b2), `--color-terracotta` (#c4622d), `--color-gold` (#d4a853)
- `font-display` class applies `font-family: var(--font-display)` (Playfair Display) for all headings
- Inline `style` props used for custom colors and layout-critical values
- `img-hover-scale` class in `styles.css` wraps images with `overflow:hidden` + CSS scale transition on hover

## AdSense Placements

`AdSense.tsx` exports `<AdSense size="leaderboard|rectangle|large-rectangle|banner" />`. Replace the placeholder `<div>` with your `<ins class="adsbygoogle">` tag. Inline comments in the file guide the exact replacement. Placements:
- Pages top: leaderboard (728×90)
- Homepage newsletter sidebar: rectangle (300×250)
- Blog post sidebar: large-rectangle (336×280)

## Non-Obvious Decisions

- **Root renders full HTML shell**: TanStack Start requires the root `component` to render `<html>`, `<head>`, and `<body>` with `<Scripts />` for SSR hydration to work correctly.
- **Blog post HTML content**: Raw HTML stored in data files rendered with `dangerouslySetInnerHTML`. Safe because all content is author-controlled static data.
- **Smoothie `bgColor` + `mix-blend-mode: multiply`**: Each smoothie card uses the smoothie's colour as a background with image blended on top to create a tinted photographic effect.
- **Viral sales keywords**: 7 specific high-conversion phrases are embedded in the copy: "Transform Your Body & Mind", "Feel Amazing Every Single Day", "Proven Recipes That Deliver Results", "Boost Energy Naturally", "Science-Backed Nutrition", "Join 50,000+ Wellness Warriors", "Claim Your Free Meal Plan".

## Development Commands

```bash
npm run dev    # Start dev server on port 3000
npm run build  # Production build
```
