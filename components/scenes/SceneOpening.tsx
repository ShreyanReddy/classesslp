'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function SceneOpening({ isActive, scrollProgress }: SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    // Page load sequence — runs once, not scroll-driven
    const tl = gsap.timeline({ delay: 1.2 })  // 1.2s void silence first

    // Signal line draws from left to right
    tl.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.6, ease: 'power2.inOut' }
    )

    // Letters assemble from random nearby positions to final position
    const letters = wordRef.current?.querySelectorAll('.letter')
    if (letters) {
      letters.forEach((letter, i) => {
        const randomX = (Math.random() - 0.5) * 40
        const randomY = (Math.random() - 0.5) * 30
        gsap.fromTo(letter,
          { x: randomX, y: randomY, opacity: 0 },
          {
            x: 0, y: 0, opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            delay: 1.8 + i * 0.04,
          }
        )
      })
    }

    // Sub-line after wordmark settles
    tl.fromTo('.opening-sub',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '+=0.3'
    )

  }, [])

  // Scene fades out as user scrolls into identity scene
  const sceneOpacity = isActive
    ? 1
    : scrollProgress < 0.08
      ? 1
      : Math.max(0, 1 - (scrollProgress - 0.08) / 0.04)

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'all' : 'none',
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Signal line — horizontal, full viewport width */}
      <div
        ref={lineRef}
        className="signal-line"
        style={{
          position: 'absolute',
          top: '48%',
          left: 0,
          right: 0,
          height: 1,
          background: '#E8FF47',
          transform: 'scaleX(0)',
          transformOrigin: 'left center',
        }}
      />

      {/* CLASSESS wordmark — each letter is its own span for individual animation */}
      <div
        ref={wordRef}
        style={{
          display: 'flex',
          gap: '0.02em',
          position: 'relative',
          zIndex: 2,
          marginTop: 8,
        }}
      >
        {'CLASSESS'.split('').map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 12vw, 12rem)',
              color: '#F0F0F5',
              lineHeight: 1,
              letterSpacing: '0.04em',
              display: 'inline-block',
              textShadow: '1px 0 0 rgba(0,255,179,0.4), -1px 0 0 rgba(255,107,53,0.3)',
              opacity: 0, // starts invisible, animated in useEffect
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Sub-line */}
      <p
        className="opening-sub type-label"
        style={{
          marginTop: 28,
          color: '#6B7280',
          letterSpacing: '0.2em',
          fontSize: '0.72rem',
          opacity: 0,
          textAlign: 'center',
        }}
      >
        EXTRAORDINARY SCHOOLS RUN ON CLASSESS
      </p>

      {/* Scroll indicator — breathing vertical line */}
      <div
        className="opening-sub"
        style={{
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: 0,
        }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6B7280', textTransform: 'uppercase' }}>
          SCROLL
        </span>
        <div style={{
          width: 1,
          height: 50,
          background: 'linear-gradient(to bottom, #6B7280, transparent)',
          animation: 'breathe 2s ease-in-out infinite',
        }} />
      </div>
    </div>
  )
}
