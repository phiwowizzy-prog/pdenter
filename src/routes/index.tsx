import { Link, createFileRoute } from '@tanstack/react-router'
import { recipes } from '@/data/recipes'
import { smoothies } from '@/data/smoothies'
import { blogPosts } from '@/data/blog-posts'
import { AdSense } from '@/components/AdSense'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
)

function HomePage() {
  const featuredRecipes = recipes.filter((r) => r.featured)
  const latestPosts = blogPosts.slice(0, 3)
  const featuredSmoothies = smoothies.slice(0, 4)

  return (
    <main>
      {/* ─── HERO ─── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a3d2b 0%, #2d6a4f 100%)',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Ambient orbs */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 15% 85%, rgba(149,213,178,0.15) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(212,168,83,0.1) 0%, transparent 45%)',
          }}
        />

        {/* Right image panel */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '55%',
            height: '100%',
          }}
          className="hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80"
            alt="Vibrant healthy food bowl"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, #1a3d2b 0%, rgba(26,61,43,0.35) 50%, transparent 100%)',
            }}
          />
          {/* Floating social proof card */}
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              bottom: '12rem',
              right: '3rem',
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              padding: '1rem 1.25rem',
              boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              minWidth: '230px',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '12px',
                background: 'rgba(45,106,79,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 20 20" width="20" height="20" fill="none">
                <path d="M10 2l2.2 4.5 5 .7-3.6 3.5.85 5-4.45-2.34L5.54 15.7l.85-5L2.8 7.2l5-.7z" fill="#2d6a4f" />
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '3px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 10 10" width="10" height="10" fill="#d4a853">
                    <path d="M5 1l1.1 2.2 2.5.4-1.8 1.75.42 2.45L5 6.7 2.78 7.8l.42-2.45L1.4 3.6l2.5-.4z" />
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#1a3d2b' }}>
                4.9 average rating
              </div>
              <div style={{ fontSize: '0.72rem', color: '#8b8680' }}>
                from 50,000+ members
              </div>
            </div>
          </div>
          {/* Floating recipe count card */}
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              top: '8rem',
              right: '5rem',
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(12px)',
              borderRadius: '12px',
              padding: '0.75rem 1rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              animationDelay: '1.2s',
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: 'rgba(212,168,83,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
                <path d="M3 4h10M3 8h10M3 12h6" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1a3d2b' }}>500+ Free Recipes</div>
              <div style={{ fontSize: '0.68rem', color: '#8b8680' }}>All nutritionist-approved</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="relative max-w-7xl mx-auto px-6 w-full"
          style={{ paddingTop: '8rem', paddingBottom: '8rem', zIndex: 10 }}
        >
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '999px',
                padding: '6px 16px',
              }}
            >
              <span
                className="animate-pulse-slow"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#95d5b2',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                }}
              >
                Science-Backed Nutrition
              </span>
            </div>

            {/* Headline — Viral Keyword #1 */}
            <h1
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.08,
                margin: '0 0 1.5rem',
              }}
            >
              Transform Your
              <br />
              <em
                style={{ color: '#95d5b2', fontStyle: 'normal' }}
              >
                Body & Mind
              </em>
            </h1>

            {/* Subheadline — Viral Keyword #4 */}
            <p
              style={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: '1.2rem',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '34rem',
              }}
            >
              Feel amazing every single day with proven recipes, energizing
              smoothies, and expert nutrition guidance — all completely free.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/recipes"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#d4a853',
                  color: '#ffffff',
                  fontWeight: 600,
                  padding: '14px 28px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 8px 24px rgba(212,168,83,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#c4622d'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(196,98,45,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#d4a853'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,168,83,0.3)'
                }}
              >
                Explore Recipes <ArrowRight />
              </Link>

              {/* Viral Keyword #7 */}
              <Link
                to="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  color: '#ffffff',
                  fontWeight: 600,
                  padding: '14px 28px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Claim Your Free Meal Plan
              </Link>
            </div>

            {/* Stats — Viral Keyword #5 */}
            <div
              className="flex flex-wrap gap-8"
              style={{
                marginTop: '3.5rem',
                paddingTop: '2.5rem',
                borderTop: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {[
                { num: '50K+', label: 'Wellness Warriors' },
                { num: '500+', label: 'Free Recipes' },
                { num: '100%', label: 'Natural Ingredients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.8125rem',
                      marginTop: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: '3rem',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
            }}
          />
        </div>
      </section>

      {/* ─── ADSENSE LEADERBOARD ─── */}
      <AdSense size="leaderboard" className="bg-white" />

      {/* ─── BROWSE BY HEALTH GOAL ─── */}
      <section
        style={{
          background: '#ffffff',
          padding: '3.5rem 1.5rem',
          borderBottom: '1px solid rgba(26,61,43,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span
              style={{
                color: '#c4622d',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Find Your Path
            </span>
            <h2
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#1a3d2b',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              What's Your Health Goal?
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                to: '/smoothies' as const,
                color: '#2d6a4f',
                bg: 'rgba(45,106,79,0.07)',
                hoverBg: 'rgba(45,106,79,0.13)',
                title: 'Detox & Cleanse',
                desc: 'Reset your system',
                icon: (
                  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
                    <circle cx="16" cy="13" r="7" stroke="#2d6a4f" strokeWidth="1.75" />
                    <path d="M16 20v7M13 25h6" stroke="#2d6a4f" strokeWidth="1.75" strokeLinecap="round" />
                    <path d="M11 9c1.5-3 9-3 10 0" stroke="#95d5b2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                to: '/smoothies' as const,
                color: '#d4a853',
                bg: 'rgba(212,168,83,0.08)',
                hoverBg: 'rgba(212,168,83,0.16)',
                title: 'Boost Energy',
                desc: 'Fuel every day',
                icon: (
                  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
                    <path d="M18 4l-8 12h8l-6 12" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                to: '/recipes' as const,
                color: '#c4622d',
                bg: 'rgba(196,98,45,0.07)',
                hoverBg: 'rgba(196,98,45,0.13)',
                title: 'Build Muscle',
                desc: 'Protein-rich meals',
                icon: (
                  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
                    <rect x="4" y="13" width="4" height="6" rx="2" stroke="#c4622d" strokeWidth="1.75" />
                    <rect x="24" y="13" width="4" height="6" rx="2" stroke="#c4622d" strokeWidth="1.75" />
                    <rect x="8" y="11" width="4" height="10" rx="2" stroke="#c4622d" strokeWidth="1.75" />
                    <rect x="20" y="11" width="4" height="10" rx="2" stroke="#c4622d" strokeWidth="1.75" />
                    <path d="M12 16h8" stroke="#c4622d" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                to: '/recipes' as const,
                color: '#1a3d2b',
                bg: 'rgba(26,61,43,0.06)',
                hoverBg: 'rgba(26,61,43,0.11)',
                title: 'Lose Weight',
                desc: 'Smart calorie meals',
                icon: (
                  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
                    <circle cx="16" cy="16" r="9" stroke="#1a3d2b" strokeWidth="1.75" />
                    <path d="M16 11v5.5l3 1.5" stroke="#1a3d2b" strokeWidth="1.75" strokeLinecap="round" />
                    <path d="M9 6l2 2M23 6l-2 2" stroke="#95d5b2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                to: '/blog' as const,
                color: '#5b7fa6',
                bg: 'rgba(91,127,166,0.08)',
                hoverBg: 'rgba(91,127,166,0.15)',
                title: 'Brain Power',
                desc: 'Cognitive nutrition',
                icon: (
                  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
                    <path d="M11 9c-4.5 0-6.5 3.5-5.5 7 1 3.5 3.5 4.5 5 5.5 1 .75 2 2.5 5.5 2.5s4.5-1.75 5.5-2.5c1.5-1 4-2 5-5.5 1-3.5-1-7-5.5-7-1.5 0-3 .75-5 2.5-1.75-1.75-3.5-2.5-5-2.5z" stroke="#5b7fa6" strokeWidth="1.75" strokeLinejoin="round" />
                    <path d="M16 11v9M13 15h6" stroke="#5b7fa6" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                to: '/blog' as const,
                color: '#8b5cf6',
                bg: 'rgba(139,92,246,0.07)',
                hoverBg: 'rgba(139,92,246,0.13)',
                title: 'Anti-Aging',
                desc: 'Glow from inside',
                icon: (
                  <svg viewBox="0 0 32 32" width="36" height="36" fill="none">
                    <circle cx="16" cy="16" r="8" stroke="#8b5cf6" strokeWidth="1.75" />
                    <path d="M16 8V6M16 26v-2M8 16H6M26 16h-2M10.93 10.93 9.51 9.51M22.49 22.49l-1.42-1.42M21.07 10.93l1.42-1.42M9.51 22.49l1.42-1.42" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="16" cy="16" r="3" fill="#d4a853" />
                  </svg>
                ),
              },
            ].map((goal) => (
              <Link
                key={goal.title}
                to={goal.to}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  style={{
                    background: goal.bg,
                    borderRadius: '16px',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.1)'
                    e.currentTarget.style.background = goal.hoverBg
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.background = goal.bg
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '0.875rem',
                    }}
                  >
                    {goal.icon}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: '#1a3d2b',
                      fontSize: '0.9rem',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {goal.title}
                  </div>
                  <div style={{ color: '#8b8680', fontSize: '0.78rem' }}>
                    {goal.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED RECIPES ─── */}
      <section
        style={{ background: '#faf7f2', padding: '6rem 1.5rem' }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between"
            style={{ marginBottom: '3.5rem', gap: '1.5rem' }}
          >
            <div>
              <span
                style={{
                  color: '#c4622d',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                What's Cooking
              </span>
              {/* Viral Keyword #3 */}
              <h2
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#1a3d2b',
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Proven Recipes That
                <br />
                Deliver Results
              </h2>
            </div>
            <Link
              to="/recipes"
              style={{
                color: '#2d6a4f',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                whiteSpace: 'nowrap',
                transition: 'gap 0.2s ease',
              }}
            >
              View All Recipes <ArrowRight />
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
          >
            {/* Large card */}
            {featuredRecipes[0] && (
              <div
                className="img-hover-scale"
                style={{
                  gridColumn: 'span 3',
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#1a3d2b',
                  height: '500px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={featuredRecipes[0].image}
                  alt={featuredRecipes[0].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, #1a3d2b 0%, rgba(26,61,43,0.1) 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2rem',
                  }}
                >
                  <div
                    className="flex flex-wrap gap-2"
                    style={{ marginBottom: '0.75rem' }}
                  >
                    {featuredRecipes[0].tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: 'rgba(255,255,255,0.18)',
                          backdropFilter: 'blur(8px)',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          padding: '3px 12px',
                          borderRadius: '999px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, Georgia, serif',
                      color: '#ffffff',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      margin: '0 0 0.5rem',
                    }}
                  >
                    {featuredRecipes[0].title}
                  </h3>
                  <p
                    className="line-clamp-2"
                    style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}
                  >
                    {featuredRecipes[0].description}
                  </p>
                  <div
                    className="flex items-center gap-5"
                    style={{
                      marginTop: '1rem',
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.8125rem',
                    }}
                  >
                    <span>{featuredRecipes[0].prepTime} prep</span>
                    <span>{featuredRecipes[0].calories} cal</span>
                    <span
                      style={{
                        background: 'rgba(149,213,178,0.2)',
                        color: '#95d5b2',
                        padding: '2px 10px',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {featuredRecipes[0].difficulty}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Right column: 2 smaller cards */}
            <div
              style={{
                gridColumn: 'span 2',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {featuredRecipes.slice(1, 3).map((recipe) => (
                <div
                  key={recipe.id}
                  className="img-hover-scale"
                  style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#1a3d2b',
                    flex: 1,
                    minHeight: '230px',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.8,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(26,61,43,0.95) 0%, transparent 60%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1.25rem 1.5rem',
                    }}
                  >
                    <span
                      style={{
                        color: '#95d5b2',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {recipe.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        color: '#ffffff',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        margin: '4px 0 8px',
                      }}
                    >
                      {recipe.title}
                    </h3>
                    <div
                      className="flex items-center gap-4"
                      style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}
                    >
                      <span>{recipe.prepTime}</span>
                      <span>{recipe.calories} cal</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section
        style={{ background: '#1a3d2b', padding: '6rem 1.5rem' }}
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                color: '#95d5b2',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Our Philosophy
            </span>
            {/* Viral Keywords #2 & #6 */}
            <h2
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                margin: '0 0 1.25rem',
              }}
            >
              Boost Energy Naturally with
              <br />
              Science-Backed Nutrition
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '1.0625rem',
                maxWidth: '38rem',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Every recipe and guide is crafted by registered dietitians and
              backed by peer-reviewed research in nutritional science.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 48 48" style={{ width: 44, height: 44 }} fill="none">
                    <circle cx="24" cy="24" r="20" stroke="#95d5b2" strokeWidth="2" />
                    <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="#95d5b2" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="4" fill="#95d5b2" />
                    <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Whole Foods First',
                desc: 'Every ingredient serves a purpose. No fillers, no ultra-processed shortcuts — just real food that nourishes your cells and respects your body.',
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" style={{ width: 44, height: 44 }} fill="none">
                    <path d="M10 38c5-10 15-20 30-20" stroke="#95d5b2" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 10c0 9-5 19-14 24" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="34" cy="16" r="5" stroke="#95d5b2" strokeWidth="2" />
                  </svg>
                ),
                title: 'Seasonal & Sustainable',
                desc: 'Eating in harmony with the seasons amplifies nutrient density and keeps your diet naturally varied, vibrant, and planet-friendly.',
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" style={{ width: 44, height: 44 }} fill="none">
                    <path d="M24 6l4.9 9.9 10.9 1.6-7.9 7.7 1.9 10.9L24 31.5l-9.8 5.1 1.9-10.9L8.2 17.5l10.9-1.6z" stroke="#95d5b2" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="24" cy="24" r="4" fill="#d4a853" />
                  </svg>
                ),
                title: 'Expert-Verified',
                desc: 'Reviewed by registered dietitians and board-certified nutritionists. Our content meets the highest standards for accuracy, safety, and practical application.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '24px',
                  padding: '2rem',
                  transition: 'background 0.25s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = 'rgba(255,255,255,0.09)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')
                }
              >
                <div style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    color: '#ffffff',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    margin: '0 0 0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.58)',
                    lineHeight: 1.75,
                    fontSize: '0.9375rem',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SMOOTHIES ─── */}
      <section style={{ background: '#faf7f2', padding: '6rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between"
            style={{ marginBottom: '3.5rem', gap: '1.5rem' }}
          >
            <div>
              <span
                style={{
                  color: '#c4622d',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Liquid Gold
              </span>
              <h2
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#1a3d2b',
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Energizing Smoothies
                <br />
                for Every Goal
              </h2>
            </div>
            <Link
              to="/smoothies"
              style={{
                color: '#2d6a4f',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'gap 0.2s ease',
              }}
            >
              All Smoothies <ArrowRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSmoothies.map((smoothie) => (
              <Link
                to="/smoothies"
                key={smoothie.id}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="img-hover-scale"
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    aspectRatio: '3/4',
                    marginBottom: '1rem',
                    background: smoothie.bgColor,
                    position: 'relative',
                  }}
                >
                  <img
                    src={smoothie.image}
                    alt={smoothie.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      mixBlendMode: 'multiply',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '999px',
                      padding: '3px 11px',
                    }}
                  >
                    <span
                      style={{
                        color: '#1a3d2b',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {smoothie.calories} cal
                    </span>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    color: '#1a3d2b',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    margin: '0 0 4px',
                  }}
                >
                  {smoothie.title}
                </h3>
                <p
                  style={{
                    color: '#8b8680',
                    fontSize: '0.875rem',
                    margin: 0,
                  }}
                >
                  {smoothie.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER + ADSENSE ─── */}
      <section style={{ background: '#ffffff', padding: '5rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
          {/* Newsletter — Viral Keyword #5 */}
          <div
            style={{
              gridColumn: 'span 3',
              background: 'linear-gradient(135deg, #1a3d2b 0%, #2d6a4f 100%)',
              borderRadius: '28px',
              padding: '2.5rem',
            }}
          >
            <span
              style={{
                color: '#95d5b2',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Free Meal Plan
            </span>
            <h2
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                margin: '0 0 1rem',
              }}
            >
              Join 50,000+ Wellness
              <br />
              Warriors Today
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '1.75rem',
                lineHeight: 1.7,
                fontSize: '0.9375rem',
              }}
            >
              Get our free 7-day meal plan, exclusive recipes, and weekly
              nutrition insights delivered straight to your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  borderRadius: '999px',
                  padding: '12px 20px',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = '#95d5b2')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')
                }
              />
              <button
                type="submit"
                style={{
                  background: '#d4a853',
                  color: '#ffffff',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '999px',
                  border: 'none',
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#c4622d'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#d4a853'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Claim Free Plan
              </button>
            </form>
          </div>

          {/* AdSense rectangle */}
          <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center' }}>
            <AdSense size="rectangle" />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ background: '#faf7f2', padding: '6rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                color: '#c4622d',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Real Results
            </span>
            <h2
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 800,
                color: '#1a3d2b',
                lineHeight: 1.2,
                margin: '0 0 1rem',
              }}
            >
              Feel Amazing Every
              <br />
              Single Day
            </h2>
            <p
              style={{
                color: '#8b8680',
                fontSize: '1.0625rem',
                maxWidth: '36rem',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Thousands of wellness warriors have transformed their health with
              NutriLife. Here's what they say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah K.',
                result: 'Lost 15 lbs in 3 months',
                quote:
                  "After just 3 weeks of following NutriLife recipes, my energy transformed completely. I'm down 15 lbs and feeling better than I have in years!",
                avatar:
                  'https://images.unsplash.com/photo-1494790108755-2616b612b367?auto=format&fit=crop&w=80&h=80',
                tagColor: '#2d6a4f',
                tagBg: 'rgba(45,106,79,0.1)',
              },
              {
                name: 'Marcus T.',
                result: 'Improved performance 40%',
                quote:
                  'The protein-packed smoothies and science-backed meal plans are incredible. My recovery time halved and I genuinely enjoy every single meal now.',
                avatar:
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80',
                tagColor: '#c4622d',
                tagBg: 'rgba(196,98,45,0.1)',
              },
              {
                name: 'Elena R.',
                result: 'Resolved digestive issues',
                quote:
                  "I had IBS for 8 years. After 6 weeks on the anti-inflammatory meal plan, my symptoms are almost completely gone. This site changed my life.",
                avatar:
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&h=80',
                tagColor: '#d4a853',
                tagBg: 'rgba(212,168,83,0.1)',
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  border: '1px solid rgba(26,61,43,0.07)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,61,43,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 16 16" width="16" height="16" fill="#d4a853">
                      <path d="M8 1l1.8 3.6 4.2.6-3 2.9.7 4.1L8 10.4l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    color: '#3d3d3d',
                    fontSize: '0.9375rem',
                    lineHeight: 1.78,
                    margin: 0,
                    flex: 1,
                    fontStyle: 'italic',
                  }}
                >
                  "{t.quote}"
                </p>

                {/* Result tag */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: t.tagBg,
                    color: t.tagColor,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    alignSelf: 'flex-start',
                  }}
                >
                  {t.result}
                </div>

                {/* Author */}
                <div
                  className="flex items-center gap-3"
                  style={{
                    paddingTop: '0.875rem',
                    borderTop: '1px solid rgba(26,61,43,0.08)',
                  }}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: '#1a3d2b',
                        fontSize: '0.9375rem',
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ color: '#8b8680', fontSize: '0.8125rem' }}>
                      NutriLife Member
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section style={{ background: '#faf7f2', padding: '6rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between"
            style={{ marginBottom: '3.5rem', gap: '1.5rem' }}
          >
            <div>
              <span
                style={{
                  color: '#c4622d',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Knowledge Hub
              </span>
              <h2
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#1a3d2b',
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Latest from
                <br />
                the Blog
              </h2>
            </div>
            <Link
              to="/blog"
              style={{
                color: '#2d6a4f',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              All Articles <ArrowRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                key={post.slug}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="img-hover-scale"
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    aspectRatio: '16/10',
                    marginBottom: '1.25rem',
                    position: 'relative',
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: post.categoryColor,
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '3px 12px',
                      borderRadius: '999px',
                    }}
                  >
                    {post.category}
                  </div>
                </div>
                <div
                  style={{
                    color: '#8b8680',
                    fontSize: '0.8rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {post.date} · {post.readTime} read
                </div>
                <h3
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    color: '#1a3d2b',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    margin: '0 0 0.75rem',
                    lineHeight: 1.35,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#2d6a4f')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = '#1a3d2b')
                  }
                >
                  {post.title}
                </h3>
                <p
                  className="line-clamp-2"
                  style={{ color: '#8b8680', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}
                >
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section
        style={{
          background: '#d8f3dc',
          padding: '3.5rem 1.5rem',
          borderTop: '1px solid rgba(45,106,79,0.12)',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { num: '4.9★', label: 'Average Rating' },
              { num: '500+', label: 'Tested Recipes' },
              { num: '47', label: 'Countries Reached' },
              { num: '0', label: 'Artificial Additives' },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '2.25rem',
                    fontWeight: 800,
                    color: '#1a3d2b',
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    color: '#2d6a4f',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
