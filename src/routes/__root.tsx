import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title:
          'NutriLife — Healthy Recipes, Smoothies & Science-Backed Nutrition',
      },
      {
        name: 'description',
        content:
          'Transform your body and mind with NutriLife. Discover 500+ proven healthy recipes, energizing smoothies, and science-backed nutrition guides. Join 50,000+ wellness warriors today.',
      },
      { name: 'theme-color', content: '#1a3d2b' },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap',
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ margin: 0, background: '#faf7f2' }}>
        <Nav />
        <Outlet />
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
