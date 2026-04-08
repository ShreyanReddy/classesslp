'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SceneArrival({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.arrival-headline',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '94% top',
          end: '96% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.arrival-sub',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '95.5% top',
          end: '97% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.arrival-cta',
      { opacity: 0, scale: 0.95, y: 16 },
      {
        opacity: 1, scale: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '96.5% top',
          end: '98% top',
          scrub: 1,
        }
      }
    )

  }, [])

  const show = scrollProgress >= 0.92
  const opacity = show ? 1 : 0

  return (
    <div
      data-section="light"
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        opacity,
        pointerEvents: isActive ? 'all' : 'none',
        transition: 'opacity 0.8s ease',
        padding: '0 40px',
      }}
    >
      {/* Headline — ink on light, architectural weight */}
      <h2
        className="arrival-headline type-display"
        style={{
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          color: '#07080C',
          lineHeight: 0.88,
          letterSpacing: '0.01em',
          marginBottom: '1.5rem',
          opacity: 0,
        }}
      >
        YOUR SCHOOL&apos;S<br />
        MOST EXTRAORDINARY<br />
        CHAPTER BEGINS HERE.
      </h2>

      {/* Sub-line */}
      <p
        className="arrival-sub type-body"
        style={{
          fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
          color: '#6B7280',
          maxWidth: 520,
          marginBottom: '3rem',
          lineHeight: 1.75,
          opacity: 0,
        }}
      >
        Join the world&apos;s most ambitious schools. Operate at the highest level — with absolute clarity, unrivalled intelligence, and the most powerful guarantee in modern education.
      </p>

      {/* The one CTA — plasma/terracotta, echoing Superschool moment */}
      <div
        className="arrival-cta"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          opacity: 0,
        }}
      >
        <button
          data-cursor="button"
          style={{
            background: '#FF6B35',
            color: '#07080C',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: '1rem',
            letterSpacing: '0.04em',
            padding: '18px 48px',
            borderRadius: 100,
            border: 'none',
            cursor: 'none',
            boxShadow: '0 8px 32px rgba(255,107,53,0.35), 0 2px 8px rgba(255,107,53,0.2)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            const t = e.currentTarget
            t.style.transform = 'scale(1.04)'
            t.style.boxShadow = '0 12px 40px rgba(255,107,53,0.5), 0 4px 12px rgba(255,107,53,0.3)'
          }}
          onMouseLeave={e => {
            const t = e.currentTarget
            t.style.transform = 'scale(1)'
            t.style.boxShadow = '0 8px 32px rgba(255,107,53,0.35), 0 2px 8px rgba(255,107,53,0.2)'
          }}
        >
          Elevate Your School
        </button>

        <a
          href="#"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: '0.82rem',
            color: '#6B7280',
            letterSpacing: '0.04em',
            textDecoration: 'none',
            cursor: 'none',
            transition: 'color 0.2s ease',
          }}
        >
          or speak with our school intelligence experts →
        </a>
      </div>

    </div>
  )
}
