import { Link } from '@tanstack/react-router'

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
    <path
      d="M14 3C14 3 6 8 6 16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16C22 8 14 3 14 3Z"
      fill="#95d5b2"
    />
    <path
      d="M14 24C14 24 14 16 14 10"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const footerLinks = {
  Explore: [
    { label: 'All Recipes', to: '/recipes' },
    { label: 'Smoothies', to: '/smoothies' },
    { label: 'Blog', to: '/blog' },
  ],
  Categories: [
    { label: 'Breakfast', to: '/recipes' },
    { label: 'Salads', to: '/recipes' },
    { label: 'Main Dishes', to: '/recipes' },
    { label: 'Snacks', to: '/recipes' },
  ],
  Learn: [
    { label: 'Nutrition Science', to: '/blog' },
    { label: 'Meal Planning', to: '/blog' },
    { label: 'Gut Health', to: '/blog' },
    { label: 'Anti-Inflammatory', to: '/blog' },
  ],
}

export function Footer() {
  return (
    <footer style={{ background: '#1a3d2b', color: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <LeafIcon />
              <span
                className="text-xl font-bold"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                NutriLife
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.75', fontSize: '0.875rem' }}>
              Science-backed nutrition, proven recipes, and expert guidance for
              everyone committed to feeling their best every single day.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {['instagram', 'pinterest', 'youtube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = 'rgba(149,213,178,0.2)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
                  }
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    {platform === 'instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    )}
                    {platform === 'pinterest' && (
                      <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                    )}
                    {platform === 'youtube' && (
                      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-sm font-semibold uppercase tracking-widest mb-5"
                style={{ color: '#95d5b2' }}
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to as '/recipes' | '/smoothies' | '/blog'}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = '#ffffff')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              © 2025 NutriLife. All rights reserved. Information is for educational purposes and is not medical advice.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
