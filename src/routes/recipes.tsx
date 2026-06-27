import { createFileRoute } from '@tanstack/react-router'
import { recipes } from '@/data/recipes'
import { AdSense } from '@/components/AdSense'
import { useState } from 'react'

export const Route = createFileRoute('/recipes')({
  component: RecipesPage,
})

const categories = ['All', 'Bowls', 'Salads', 'Breakfast', 'Mains']
const difficulties = ['All', 'Easy', 'Medium', 'Advanced']

function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeDifficulty, setActiveDifficulty] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = recipes.filter((r) => {
    const catMatch = activeCategory === 'All' || r.category === activeCategory
    const diffMatch = activeDifficulty === 'All' || r.difficulty === activeDifficulty
    const q = searchQuery.trim().toLowerCase()
    const searchMatch =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q))
    return catMatch && diffMatch && searchMatch
  })

  return (
    <main style={{ background: '#faf7f2', minHeight: '100vh' }}>
      {/* Page header */}
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
              'radial-gradient(circle at 80% 50%, rgba(212,168,83,0.12) 0%, transparent 50%)',
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
            Proven Recipes That Deliver Results
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
            All Recipes
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
            Every recipe is tested, nutritionist-approved, and designed to make
            you feel amazing every single day.
          </p>
        </div>
      </section>

      {/* AdSense */}
      <AdSense size="leaderboard" className="bg-white" />

      {/* Filters */}
      <section style={{ background: '#ffffff', padding: '1.75rem 1.5rem', borderBottom: '1px solid rgba(26,61,43,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search input */}
            <div style={{ position: 'relative', marginRight: '0.5rem' }}>
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="#8b8680"
                strokeWidth="1.5"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              >
                <circle cx="6.5" cy="6.5" r="4.5" />
                <path d="m10 10 3 3" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search recipes…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  paddingLeft: '32px',
                  paddingRight: '16px',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  borderRadius: '999px',
                  border: '1.5px solid rgba(26,61,43,0.15)',
                  background: '#faf7f2',
                  color: '#1c1c1c',
                  fontSize: '0.875rem',
                  outline: 'none',
                  minWidth: '180px',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#2d6a4f')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(26,61,43,0.15)')}
              />
            </div>

            <span
              style={{
                color: '#8b8680',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginRight: '0.5rem',
              }}
            >
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? '#2d6a4f' : 'rgba(26,61,43,0.15)',
                  background: activeCategory === cat ? '#2d6a4f' : 'transparent',
                  color: activeCategory === cat ? '#ffffff' : '#3d3d3d',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
            <span
              style={{
                color: '#8b8680',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginLeft: '1rem',
                marginRight: '0.5rem',
              }}
            >
              Level:
            </span>
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setActiveDifficulty(diff)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  border: '1.5px solid',
                  borderColor: activeDifficulty === diff ? '#d4a853' : 'rgba(26,61,43,0.15)',
                  background: activeDifficulty === diff ? '#d4a853' : 'transparent',
                  color: activeDifficulty === diff ? '#ffffff' : '#3d3d3d',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe grid */}
      <section style={{ padding: '3.5rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          {/* Result count */}
          {(activeCategory !== 'All' || activeDifficulty !== 'All' || searchQuery.trim()) && (
            <p
              style={{
                color: '#8b8680',
                fontSize: '0.875rem',
                marginBottom: '1.75rem',
              }}
            >
              Showing{' '}
              <strong style={{ color: '#1a3d2b' }}>{filtered.length}</strong>{' '}
              {filtered.length === 1 ? 'recipe' : 'recipes'}
              {searchQuery.trim() && (
                <> for <em>"{searchQuery.trim()}"</em></>
              )}
            </p>
          )}
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '5rem 1.5rem',
                color: '#8b8680',
              }}
            >
              <svg
                viewBox="0 0 48 48"
                width="48"
                height="48"
                fill="none"
                style={{ margin: '0 auto 1.5rem', display: 'block', opacity: 0.35 }}
              >
                <circle cx="20" cy="20" r="13" stroke="#1a3d2b" strokeWidth="2" />
                <path d="m30 30 8 8" stroke="#1a3d2b" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 20h10M20 15v10" stroke="#1a3d2b" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '1.5rem',
                  color: '#1a3d2b',
                  marginBottom: '0.5rem',
                }}
              >
                No recipes found
              </p>
              <p style={{ marginBottom: '1.5rem' }}>Try a different search term or adjust your filters.</p>
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setActiveDifficulty('All')
                  setSearchQuery('')
                }}
                style={{
                  background: '#1a3d2b',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '10px 24px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#2d6a4f')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#1a3d2b')}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function RecipeCard({ recipe }: { recipe: (typeof recipes)[0] }) {
  const difficultyColor: Record<string, string> = {
    Easy: '#2d6a4f',
    Medium: '#d4a853',
    Advanced: '#c4622d',
  }

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(26,61,43,0.07)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,61,43,0.14)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(26,61,43,0.07)'
      }}
    >
      {/* Image */}
      <div
        className="img-hover-scale"
        style={{ height: '220px', position: 'relative' }}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '0.875rem',
            right: '0.875rem',
            background: 'rgba(255,255,255,0.93)',
            backdropFilter: 'blur(8px)',
            borderRadius: '999px',
            padding: '3px 12px',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: difficultyColor[recipe.difficulty] || '#2d6a4f',
          }}
        >
          {recipe.difficulty}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '0.75rem' }}>
          {recipe.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                background: '#d8f3dc',
                color: '#1a3d2b',
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '2px 10px',
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
            color: '#1a3d2b',
            fontSize: '1.2rem',
            fontWeight: 700,
            margin: '0 0 0.625rem',
            lineHeight: 1.3,
          }}
        >
          {recipe.title}
        </h3>

        <p
          className="line-clamp-2"
          style={{
            color: '#6b6b6b',
            fontSize: '0.875rem',
            lineHeight: 1.65,
            margin: '0 0 1.25rem',
          }}
        >
          {recipe.description}
        </p>

        {/* Meta */}
        <div
          className="flex items-center justify-between"
          style={{
            paddingTop: '1rem',
            borderTop: '1px solid rgba(26,61,43,0.08)',
          }}
        >
          <div className="flex gap-4">
            <span style={{ fontSize: '0.8125rem', color: '#8b8680' }}>
              <strong style={{ color: '#1a3d2b' }}>{recipe.prepTime}</strong> prep
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#8b8680' }}>
              <strong style={{ color: '#1a3d2b' }}>{recipe.servings}</strong> servings
            </span>
          </div>
          <span
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              color: '#1a3d2b',
              fontWeight: 700,
              fontSize: '1.0625rem',
            }}
          >
            {recipe.calories}
            <span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#8b8680' }}> cal</span>
          </span>
        </div>

        {/* Nutrition quick view */}
        <div
          className="grid grid-cols-4 gap-2"
          style={{ marginTop: '1rem' }}
        >
          {Object.entries(recipe.nutritionFacts).map(([key, val]) => (
            <div
              key={key}
              style={{
                background: '#faf7f2',
                borderRadius: '10px',
                padding: '6px 4px',
                textAlign: 'center',
              }}
            >
              <div
                style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#1a3d2b' }}
              >
                {val}
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  color: '#8b8680',
                  textTransform: 'capitalize',
                }}
              >
                {key}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
