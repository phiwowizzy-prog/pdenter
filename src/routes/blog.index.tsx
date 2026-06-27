import { Link, createFileRoute } from '@tanstack/react-router'
import { blogPosts } from '@/data/blog-posts'
import { AdSense } from '@/components/AdSense'
import { useState } from 'react'

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
})

const allCategories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  const [featured, ...rest] = filtered

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
              'radial-gradient(circle at 70% 30%, rgba(212,168,83,0.12) 0%, transparent 50%)',
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
            Knowledge Hub
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
            The NutriLife Blog
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
            Science-backed nutrition insights, meal prep strategies, and expert
            guides to help you feel amazing every single day.
          </p>
        </div>
      </section>

      {/* AdSense */}
      <AdSense size="leaderboard" className="bg-white" />

      {/* Category filters */}
      <section
        style={{
          background: '#ffffff',
          padding: '1.5rem',
          borderBottom: '1px solid rgba(26,61,43,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 18px',
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
          </div>
        </div>
      </section>

      <section style={{ padding: '3.5rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem', color: '#8b8680' }}>
              <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', color: '#1a3d2b' }}>
                No posts in this category yet.
              </p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  style={{ textDecoration: 'none', display: 'block', marginBottom: '3rem' }}
                >
                  <div
                    className="grid md:grid-cols-2 gap-0"
                    style={{
                      background: '#ffffff',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 24px rgba(26,61,43,0.08)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,61,43,0.14)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 24px rgba(26,61,43,0.08)'
                    }}
                  >
                    <div
                      className="img-hover-scale"
                      style={{ height: '360px' }}
                    >
                      <img
                        src={featured.image}
                        alt={featured.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div
                      style={{
                        padding: '2.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
                        <span
                          style={{
                            background: featured.categoryColor,
                            color: '#ffffff',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            padding: '3px 12px',
                            borderRadius: '999px',
                          }}
                        >
                          {featured.category}
                        </span>
                        <span
                          style={{
                            background: '#d8f3dc',
                            color: '#1a3d2b',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            padding: '3px 12px',
                            borderRadius: '999px',
                          }}
                        >
                          Featured
                        </span>
                      </div>
                      <h2
                        style={{
                          fontFamily: 'Playfair Display, Georgia, serif',
                          color: '#1a3d2b',
                          fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                          fontWeight: 800,
                          margin: '0 0 1rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {featured.title}
                      </h2>
                      <p
                        className="line-clamp-3"
                        style={{ color: '#6b6b6b', lineHeight: 1.7, fontSize: '0.9375rem', margin: '0 0 1.5rem' }}
                      >
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={featured.author.avatar}
                          alt={featured.author.name}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            objectFit: 'cover',
                          }}
                        />
                        <div>
                          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1a3d2b' }}>
                            {featured.author.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#8b8680' }}>
                            {featured.date} · {featured.readTime} read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Rest of posts grid */}
              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  )
}

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 2px 16px rgba(26,61,43,0.07)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 12px 36px rgba(26,61,43,0.13)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 2px 16px rgba(26,61,43,0.07)'
        }}
      >
        {/* Image */}
        <div
          className="img-hover-scale"
          style={{ height: '200px', position: 'relative' }}
        >
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '0.875rem',
              left: '0.875rem',
              background: post.categoryColor,
              color: '#ffffff',
              fontSize: '0.68rem',
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

        {/* Content */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ color: '#8b8680', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            {post.date} · {post.readTime} read
          </div>
          <h3
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              color: '#1a3d2b',
              fontSize: '1.1rem',
              fontWeight: 700,
              margin: '0 0 0.625rem',
              lineHeight: 1.35,
            }}
          >
            {post.title}
          </h3>
          <p
            className="line-clamp-2"
            style={{ color: '#6b6b6b', fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 1.25rem' }}
          >
            {post.excerpt}
          </p>
          {/* Author */}
          <div
            className="flex items-center gap-3"
            style={{
              paddingTop: '1rem',
              borderTop: '1px solid rgba(26,61,43,0.08)',
            }}
          >
            <img
              src={post.author.avatar}
              alt={post.author.name}
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#3d3d3d' }}>
              {post.author.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
