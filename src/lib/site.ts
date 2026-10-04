// Injected at build time from Netlify's `URL` env var (see vite.config.ts)
declare const __SITE_URL__: string

export const SITE_URL = __SITE_URL__.replace(/\/$/, '')
export const SITE_NAME = 'NutriLife'
export const SITE_TAGLINE = 'Affordable healthy recipes & smoothies for South African kitchens'
export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80'

// Content is written and edited by the NutriLife team. Do not add
// professional credentials here unless they can be verified.
export const EDITORIAL_AUTHOR = {
  name: 'NutriLife Editorial Team',
  title: 'Recipe development & research',
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

interface SeoOptions {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function seo({ title, description, path, image = DEFAULT_IMAGE, type = 'website', noindex }: SeoOptions) {
  const url = absoluteUrl(path)
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'en_ZA' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      ...(noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []),
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

// '15 min' -> 'PT15M', used for Recipe schema durations
export function toIsoDuration(time: string) {
  const minutes = parseInt(time, 10) || 0
  return `PT${minutes}M`
}

export function minutesOf(time: string) {
  return parseInt(time, 10) || 0
}
