'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SceneGuarantee({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.guarantee-card',
      {
        rotateX: 12,
        rotateY: -6,
        opacity: 0,
        y: 40,
        transformPerspective: 1000,
      },
      {
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '87% top',
          end: '90% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.guarantee-sub',
      { opacity: 0, y: 12 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '91% top',
          end: '93% top',
          scrub: 1,
        }
      }
    )

    // Breathing animation
    gsap.to('.guarantee-card', {
      scale: 1.003,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    })

  }, [])

  const show = scrollProgress >= 0.84 && scrollProgress < 0.95
  const opacity = show ? 1 : 0

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity,
      pointerEvents: isActive ? 'all' : 'none',
      transition: 'opacity 0.6s ease',
    }}>

      {/* Guarantee card */}
      <div
        className="guarantee-card"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)',
          backdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
          borderTop: '1px solid #00FFB3',
          borderLeft: '1px solid rgba(255,255,255,0.14)',
          borderRight: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          borderRadius: 20,
          padding: '40px 48px',
          maxWidth: 520,
          width: '90%',
          boxShadow: '0 0 0 0.5px rgba(0,255,179,0.15), 0 40px 80px rgba(7,8,12,0.5), 0 8px 24px rgba(7,8,12,0.3), inset 0 1px 0 rgba(0,255,179,0.15)',
          opacity: 0,
          textAlign: 'center',
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 24,
          padding: '6px 14px',
          borderRadius: 100,
          border: '1px solid rgba(0,255,179,0.3)',
          background: 'rgba(0,255,179,0.08)',
        }}>
          <span style={{ color: '#00FFB3', fontSize: 12 }}>✓</span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#00FFB3',
          }}>
            The World&apos;s Most Confident Guarantee in Education
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          color: '#F0F0F5',
          lineHeight: 1,
          marginBottom: 20,
          letterSpacing: '0.02em',
        }}>
          PERFORMANCE<br />GUARANTEED.
        </h3>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: '1rem',
          color: 'rgba(240,240,245,0.7)',
          lineHeight: 1.75,
          marginBottom: 24,
        }}>
          Classess is so certain of your school&apos;s elevation that we offer a complete academic year refund if any student fails to meet or exceed their individually predicted performance.
        </p>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: '0.9rem',
          color: '#F0F0F5',
          letterSpacing: '0.04em',
        }}>
          No conditions. No exceptions. No hesitation.
        </p>
      </div>

      {/* Sub line */}
      <p
        className="guarantee-sub"
        style={{
          marginTop: 24,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: '0.85rem',
          color: '#6B7280',
          textAlign: 'center',
          maxWidth: 420,
          opacity: 0,
        }}
      >
        The only school intelligence platform in the world with the absolute confidence to guarantee your school&apos;s extraordinary performance.
      </p>

    </div>
  )
}
