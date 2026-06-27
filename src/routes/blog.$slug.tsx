import { Link, createFileRoute } from '@tanstack/react-router'
import { blogPosts } from '@/data/blog-posts'
import { AdSense } from '@/components/AdSense'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <main
        style={{
          background: '#faf7f2',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            color: '#1a3d2b',
            fontSize: '2.5rem',
            marginBottom: '1rem',
          }}
        >
          Article Not Found
        </h1>
        <p style={{ color: '#8b8680', marginBottom: '2rem' }}>
          This article doesn't exist or may have moved.
        </p>
        <Link
          to="/blog"
          style={{
            background: '#1a3d2b',
            color: '#ffffff',
            padding: '12px 28px',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Back to Blog
        </Link>
      </main>
    )
  }

  return (
    <main style={{ background: '#faf7f2', minHeight: '100vh' }}>
      {/* Hero image */}
      <div
        style={{
          height: 'clamp(320px, 45vw, 520px)',
          position: 'relative',
          overflow: 'hidden',
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
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(26,61,43,0.35) 0%, rgba(26,61,43,0.65) 100%)',
          }}
        />
        {/* Back link */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            zIndex: 10,
          }}
        >
          <Link
            to="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')
            }
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All Articles
          </Link>
        </div>
      </div>

      {/* Article layout */}
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <article style={{ gridColumn: 'span 2' }}>
            {/* Category + meta */}
            <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  background: post.categoryColor,
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '4px 14px',
                  borderRadius: '999px',
                }}
              >
                {post.category}
              </span>
              <span style={{ color: '#8b8680', fontSize: '0.875rem' }}>
                {post.date} · {post.readTime} read
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 900,
                color: '#1a3d2b',
                lineHeight: 1.2,
                margin: '0 0 1.5rem',
              }}
            >
              {post.title}
            </h1>

            {/* Author */}
            <div
              className="flex items-center gap-4"
              style={{
                padding: '1rem 1.25rem',
                background: '#ffffff',
                borderRadius: '14px',
                border: '1px solid rgba(26,61,43,0.1)',
                marginBottom: '2.5rem',
              }}
            >
              <img
                src={post.author.avatar}
                alt={post.author.name}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #d8f3dc',
                }}
              />
              <div>
                <div
                  style={{ fontWeight: 700, color: '#1a3d2b', fontSize: '0.9375rem' }}
                >
                  {post.author.name}
                </div>
                <div style={{ color: '#8b8680', fontSize: '0.8125rem' }}>
                  {post.author.title}
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#2d3d2b',
                fontStyle: 'italic',
                borderLeft: '3px solid #95d5b2',
                paddingLeft: '1.25rem',
                marginBottom: '2rem',
                background: '#f0faf4',
                padding: '1rem 1.25rem',
                borderRadius: '0 12px 12px 0',
              }}
            >
              {post.excerpt}
            </p>

            {/* Prose content */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div
              className="flex flex-wrap gap-2"
              style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(26,61,43,0.1)' }}
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: '#d8f3dc',
                    color: '#1a3d2b',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    padding: '5px 14px',
                    borderRadius: '999px',
                    border: '1px solid rgba(45,106,79,0.15)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            {/* AdSense */}
            <div
              style={{
                marginBottom: '2rem',
                position: 'sticky',
                top: '6rem',
              }}
            >
              <AdSense size="large-rectangle" />

              {/* Newsletter CTA */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1a3d2b 0%, #2d6a4f 100%)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  marginTop: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    color: '#ffffff',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    margin: '0 0 0.625rem',
                  }}
                >
                  Get the Free Meal Plan
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                  }}
                >
                  Join 50,000+ wellness warriors and receive our 7-day plan free.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1.5px solid rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      outline: 'none',
                      marginBottom: '0.75rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: '#d4a853',
                      color: '#ffffff',
                      fontWeight: 600,
                      padding: '11px',
                      borderRadius: '10px',
                      border: 'none',
                      fontSize: '0.9375rem',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = '#c4622d')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = '#d4a853')
                    }
                  >
                    Claim Free Plan
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section style={{ marginTop: '5rem' }}>
            <h2
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                color: '#1a3d2b',
                fontSize: '2rem',
                fontWeight: 800,
                marginBottom: '2rem',
              }}
            >
              Continue Reading
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  to="/blog/$slug"
                  params={{ slug: relPost.slug }}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 16px rgba(26,61,43,0.07)',
                      transition: 'transform 0.25s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = 'translateY(-3px)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = 'translateY(0)')
                    }
                  >
                    <div
                      className="img-hover-scale"
                      style={{ height: '160px' }}
                    >
                      <img
                        src={relPost.image}
                        alt={relPost.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '1.125rem' }}>
                      <div style={{ color: '#8b8680', fontSize: '0.75rem', marginBottom: '0.4rem' }}>
                        {relPost.readTime} read
                      </div>
                      <h3
                        style={{
                          fontFamily: 'Playfair Display, Georgia, serif',
                          color: '#1a3d2b',
                          fontSize: '1rem',
                          fontWeight: 700,
                          margin: 0,
                          lineHeight: 1.35,
                        }}
                      >
                        {relPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
