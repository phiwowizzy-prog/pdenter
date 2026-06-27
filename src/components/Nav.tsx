import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const LeafIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 3C14 3 6 8 6 16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16C22 8 14 3 14 3Z"
      fill="#95d5b2"
    />
    <path
      d="M14 24C14 24 14 16 14 10"
      stroke="#1a3d2b"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 18C14 18 10 14 8 12"
      stroke="#1a3d2b"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/recipes' as const, label: 'Recipes' },
  { to: '/smoothies' as const, label: 'Smoothies' },
  { to: '/blog' as const, label: 'Blog' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250,247,242,0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(26,61,43,0.08)',
        boxShadow: '0 2px 24px rgba(26,61,43,0.06)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline"
          onClick={() => setOpen(false)}
        >
          <LeafIcon />
          <span
            className="font-display text-xl font-bold"
            style={{ color: '#1a3d2b', fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            NutriLife
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#3d3d3d', textDecoration: 'none' }}
              activeProps={{ style: { color: '#2d6a4f', fontWeight: '600' } }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/blog"
            className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300"
            style={{
              background: '#1a3d2b',
              color: '#ffffff',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = '#2d6a4f')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = '#1a3d2b')
            }
          >
            Free Meal Plan
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: '#1a3d2b',
              transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: '#1a3d2b',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: '#1a3d2b',
              transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '280px' : '0',
          background: 'rgba(250,247,242,0.98)',
          borderTop: open ? '1px solid rgba(26,61,43,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-base font-medium py-3 px-4 rounded-xl transition-colors duration-200"
              style={{ color: '#1c1c1c', textDecoration: 'none' }}
              activeProps={{
                style: {
                  color: '#2d6a4f',
                  background: 'rgba(45,106,79,0.08)',
                  fontWeight: '600',
                },
              }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/blog"
            className="mt-3 text-center text-sm font-semibold px-5 py-3 rounded-full"
            style={{
              background: '#1a3d2b',
              color: '#ffffff',
              textDecoration: 'none',
            }}
            onClick={() => setOpen(false)}
          >
            Free Meal Plan
          </Link>
        </div>
      </div>
    </header>
  )
}
