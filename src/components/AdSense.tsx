interface AdSenseProps {
  size?: 'leaderboard' | 'rectangle' | 'large-rectangle' | 'banner'
  className?: string
}

const sizeConfig = {
  leaderboard: { width: 728, height: 90, label: '728 × 90 — Leaderboard' },
  rectangle: { width: 300, height: 250, label: '300 × 250 — Medium Rectangle' },
  'large-rectangle': { width: 336, height: 280, label: '336 × 280 — Large Rectangle' },
  banner: { width: 468, height: 60, label: '468 × 60 — Banner' },
}

export function AdSense({ size = 'leaderboard', className = '' }: AdSenseProps) {
  const config = sizeConfig[size]

  return (
    <div className={`flex justify-center items-center py-4 px-4 ${className}`}>
      {/*
       * ─────────────────────────────────────────────────────────────────
       * GOOGLE ADSENSE PLACEMENT
       * Replace the div below with your <ins class="adsbygoogle"> tag.
       *
       * Example:
       *   <ins class="adsbygoogle"
       *     style={{ display: 'block', width: config.width, height: config.height }}
       *     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       *     data-ad-slot="XXXXXXXXXX"
       *     data-ad-format="auto"
       *     data-full-width-responsive="true">
       *   </ins>
       *   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
       * ─────────────────────────────────────────────────────────────────
       */}
      <div
        style={{
          width: Math.min(config.width, typeof window !== 'undefined' ? window.innerWidth - 32 : config.width),
          maxWidth: '100%',
          height: config.height,
          background: 'linear-gradient(135deg, #f0f4f1 0%, #e8f0eb 100%)',
          border: '1.5px dashed rgba(45,106,79,0.25)',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          boxSizing: 'border-box',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" opacity="0.4">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2d6a4f" strokeWidth="1.5"/>
          <path d="M3 9h18M9 21V9" stroke="#2d6a4f" strokeWidth="1.5"/>
        </svg>
        <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'rgba(26,61,43,0.45)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Advertisement
        </span>
        <span
          style={{
            fontSize: '10px',
            color: 'rgba(26,61,43,0.3)',
            letterSpacing: '0.05em',
          }}
        >
          {config.label}
        </span>
      </div>
    </div>
  )
}
