import { createFileRoute } from '@tanstack/react-router'
import { smoothies } from '@/data/smoothies'
import { AdSense } from '@/components/AdSense'
import { useState } from 'react'

export const Route = createFileRoute('/smoothies')({
  component: SmoothiesPage,
})

const goalFilters = ['All', 'Detox', 'Post-Workout', 'Brain Food', 'Anti-Inflammatory', 'Gut Health']

function SmoothiesPage() {
  const [activeGoal, setActiveGoal] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = smoothies.filter((s) => {
    if (activeGoal === 'All') return true
    return s.tags.some((t) => t.toLowerCase().includes(activeGoal.toLowerCase())) ||
      s.benefits.some((b) => b.toLowerCase().includes(activeGoal.toLowerCase()))
  })

  return (
    <main style={{ background: '#faf7f2', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a3d2b 0%, #2d6a4f 100%)',
          padding: '5rem 1.5rem 4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(149,213,178,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,168,83,0.12) 0%, transparent 50%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
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
            Boost Energy Naturally
          </span>
          <h1
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 900,
              color: '#ffffff',
              margin: '0 0 1rem',
              lineHeight: 1.1,
            }}
          >
            Energizing Smoothies
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.0625rem',
              maxWidth: '32rem',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Six goal-targeted blends crafted to boost energy, fight
            inflammation, and transform the way you feel — naturally.
          </p>
        </div>
      </section>

      {/* AdSense */}
      <AdSense size="leaderboard" className="bg-white" />

      {/* Goal filters */}
      <section
        style={{
          background: '#ffffff',
          padding: '1.5rem',
          borderBottom: '1px solid rgba(26,61,43,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {goalFilters.map((goal) => (
              <button
                key={goal}
                onClick={() => setActiveGoal(goal)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '999px',
                  border: '1.5px solid',
                  borderColor: activeGoal === goal ? '#2d6a4f' : 'rgba(26,61,43,0.15)',
                  background: activeGoal === goal ? '#2d6a4f' : 'transparent',
                  color: activeGoal === goal ? '#ffffff' : '#3d3d3d',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Smoothie cards */}
      <section style={{ padding: '3.5rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((smoothie) => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                expanded={expandedId === smoothie.id}
                onToggle={() =>
                  setExpandedId((prev) =>
                    prev === smoothie.id ? null : smoothie.id
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section
        style={{
          background: '#1a3d2b',
          padding: '5rem 1.5rem',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 1rem',
              }}
            >
              Why Whole-Food Smoothies
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
              Unlike commercial juices, our smoothies retain every gram of
              fibre, preserving the nutrients that feed your gut microbiome and
              stabilise your blood sugar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🌿', stat: '3–8g', label: 'Dietary Fibre per serve' },
              { icon: '⚡', stat: '< 5 min', label: 'Prep time' },
              { icon: '🧬', stat: '100%', label: 'Whole-food ingredients' },
              { icon: '✓', stat: 'Zero', label: 'Added refined sugars' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '1.75rem 1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#95d5b2',
                  }}
                >
                  {item.stat}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginTop: '4px' }}>
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

function SmoothieCard({
  smoothie,
  expanded,
  onToggle,
}: {
  smoothie: (typeof smoothies)[0]
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(26,61,43,0.07)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,61,43,0.13)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(26,61,43,0.07)'
      }}
    >
      {/* Image */}
      <div
        style={{
          height: '240px',
          background: smoothie.bgColor,
          position: 'relative',
          overflow: 'hidden',
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
            transition: 'transform 0.6s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255,255,255,0.92)',
            borderRadius: '999px',
            padding: '3px 12px',
          }}
        >
          <span style={{ color: '#1a3d2b', fontSize: '0.75rem', fontWeight: 700 }}>
            {smoothie.calories} cal
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: smoothie.accentColor,
            color: '#ffffff',
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '3px 12px',
            borderRadius: '999px',
          }}
        >
          {smoothie.tagline}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <h3
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            color: '#1a3d2b',
            fontSize: '1.3rem',
            fontWeight: 700,
            margin: '0 0 0.625rem',
          }}
        >
          {smoothie.title}
        </h3>
        <p
          className="line-clamp-2"
          style={{ color: '#6b6b6b', fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 1rem' }}
        >
          {smoothie.description}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '1.25rem' }}>
          {smoothie.benefits.map((benefit) => (
            <span
              key={benefit}
              style={{
                background: '#d8f3dc',
                color: '#1a3d2b',
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: '999px',
              }}
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Toggle ingredients */}
        <button
          onClick={onToggle}
          style={{
            width: '100%',
            background: expanded ? '#1a3d2b' : '#faf7f2',
            color: expanded ? '#ffffff' : '#1a3d2b',
            border: `1.5px solid ${expanded ? '#1a3d2b' : 'rgba(26,61,43,0.15)'}`,
            borderRadius: '12px',
            padding: '10px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          {expanded ? 'Hide' : 'View'} Ingredients & Method
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </button>

        {/* Expanded content */}
        {expanded && (
          <div
            style={{
              marginTop: '1rem',
              borderTop: '1px solid rgba(26,61,43,0.1)',
              paddingTop: '1rem',
            }}
          >
            <h4
              style={{
                color: '#1a3d2b',
                fontSize: '0.875rem',
                fontWeight: 700,
                marginBottom: '0.625rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Ingredients
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem' }}>
              {smoothie.ingredients.map((ing, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.875rem',
                    color: '#3d3d3d',
                    padding: '3px 0 3px 1.25rem',
                    position: 'relative',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '0.55em',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#95d5b2',
                      display: 'inline-block',
                    }}
                  />
                  {ing}
                </li>
              ))}
            </ul>
            <h4
              style={{
                color: '#1a3d2b',
                fontSize: '0.875rem',
                fontWeight: 700,
                marginBottom: '0.625rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Method
            </h4>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {smoothie.instructions.map((step, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.875rem',
                    color: '#3d3d3d',
                    padding: '4px 0 4px 1.75rem',
                    position: 'relative',
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '0.2em',
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: '#1a3d2b',
                      color: '#ffffff',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}
