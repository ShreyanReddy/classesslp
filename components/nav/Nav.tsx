'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface NavProps {
  scrollProgress: number
}

export default function Nav({ scrollProgress }: NavProps) {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Nav enters with page load — after 2.2s opening void sequence
    if (!navRef.current) return
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 2.2 }
    )
  }, [])

  // Determine if over light section (arrival scene 0.93+)
  const isLight = scrollProgress >= 0.93

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 20,
    left: 40,
    right: 40,
    height: 52,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    pointerEvents: 'all',
    willChange: 'background, border-color',
    transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
    background: isLight
      ? 'rgba(240, 240, 245, 0.80)'
      : 'rgba(16, 17, 26, 0.50)',
    backdropFilter: 'blur(60px) saturate(200%) brightness(115%)',
    WebkitBackdropFilter: 'blur(60px) saturate(200%) brightness(115%)',
    borderTop: `1px solid ${isLight ? 'rgba(7,8,12,0.08)' : 'rgba(232,255,71,0.18)'}`,
    borderLeft: `1px solid ${isLight ? 'rgba(7,8,12,0.05)' : 'rgba(232,255,71,0.10)'}`,
    borderRight: `1px solid ${isLight ? 'rgba(7,8,12,0.04)' : 'rgba(232,255,71,0.06)'}`,
    borderBottom: `1px solid ${isLight ? 'rgba(7,8,12,0.04)' : 'rgba(7,8,12,0.80)'}`,
    boxShadow: isLight
      ? '0 8px 32px rgba(7,8,12,0.06), inset 0 1px 0 rgba(255,255,255,0.9)'
      : '0 0 0 0.5px rgba(232,255,71,0.06), 0 20px 60px rgba(7,8,12,0.6), inset 0 1px 0 rgba(232,255,71,0.10)',
  }

  const linkColor = isLight ? '#07080C' : '#F0F0F5'
  const linkStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: '0.78rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: linkColor,
    textDecoration: 'none',
    opacity: 0.7,
    transition: 'opacity 0.2s ease',
    cursor: 'none',
  }

  const ctaStyle: React.CSSProperties = {
    background: '#FF6B35',  // plasma — consistent across all states
    color: '#07080C',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: '0.78rem',
    letterSpacing: '0.04em',
    padding: '8px 20px',
    borderRadius: 100,
    border: 'none',
    cursor: 'none',
    transition: 'background 0.2s ease, transform 0.2s ease',
  }

  return (
    <div id="nav-layer">
      <div ref={navRef} style={{ ...navStyle, opacity: 0 }} data-cursor="nav">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 8, height: 8,
            borderRadius: 2,
            background: '#E8FF47',
            display: 'inline-block',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.2rem',
            letterSpacing: '0.06em',
            color: linkColor,
            transition: 'color 0.5s ease',
          }}>
            CLASSESS
          </span>
        </div>

        {/* Center links */}
        <nav style={{ display: 'flex', gap: 32 }}>
          {['The Platform', 'Elite Schools', 'Invest', 'Our Vision'].map((link) => (
            <a key={link} href="#" style={linkStyle}>{link}</a>
          ))}
        </nav>

        {/* CTA */}
        <button style={ctaStyle} data-cursor="button">
          Elevate Your School
        </button>
      </div>
    </div>
  )
}
