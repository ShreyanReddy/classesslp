'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function SceneStatement({ isActive, scrollProgress }: SceneProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // ELEVATED arrives at 18% scroll
    gsap.fromTo('.statement-elevated',
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1, scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '18% top',
          end: '22% top',
          scrub: 1,
        }
      }
    )

    // Signal line through ELEVATED
    gsap.fromTo('.elevated-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '20% top',
          end: '23% top',
          scrub: 1,
        }
      }
    )

    // Each stakeholder line — staggered by scroll position
    const lines = [
      '.line-students',
      '.line-teachers',
      '.line-leaders',
      '.line-parents',
    ]

    lines.forEach((selector, i) => {
      const startPct = 22 + i * 2
      gsap.fromTo(selector,
        { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${startPct}% top`,
            end: `${startPct + 2}% top`,
            scrub: 1,
          }
        }
      )
    })

    // Hero cards bloom
    gsap.fromTo('.hero-card',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '24% top',
          end: '27% top',
          scrub: 1,
        }
      }
    )

  }, [])

  const show = scrollProgress >= 0.18 && scrollProgress < 0.30
  const opacity = show ? 1 : 0

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      opacity,
      pointerEvents: show ? 'all' : 'none',
      transition: 'opacity 0.5s ease',
    }}>

      {/* ELEVATED — full viewport presence */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <h1
          className="statement-elevated type-display"
          style={{
            fontSize: 'clamp(6rem, 16vw, 18rem)',
            color: '#F0F0F5',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            position: 'relative',
            textShadow: '1px 0 0 rgba(0,255,179,0.2), -1px 0 0 rgba(255,107,53,0.15)',
          }}
        >
          ELEVATED
        </h1>

        {/* Signal line dissecting ELEVATED */}
        <div
          className="elevated-line signal-line"
          style={{
            position: 'absolute',
            top: '54%',
            left: '-5vw',
            right: '-5vw',
            height: 1,
            background: '#E8FF47',
            transformOrigin: 'left center',
          }}
        />
      </div>

      {/* Four stakeholder lines — alternating alignment */}
      <div style={{
        marginTop: 'clamp(2rem, 4vw, 4rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        width: '100%',
        maxWidth: 800,
        padding: '0 40px',
      }}>
        {[
          { text: 'Every extraordinary student with precise direction.', align: 'flex-start', selector: 'line-students' },
          { text: 'Every world-class teacher with unrivalled leverage.', align: 'center', selector: 'line-teachers' },
          { text: 'Every visionary leader with absolute clarity.', align: 'flex-end', selector: 'line-leaders' },
          { text: 'Every informed parent with complete confidence.', align: 'center', selector: 'line-parents' },
        ].map(({ text, align, selector }) => (
          <p
            key={selector}
            className={`${selector} type-body`}
            style={{
              fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)',
              color: '#6B7280',
              alignSelf: align as React.CSSProperties['alignSelf'],
              textAlign: align === 'flex-start' ? 'left' : align === 'flex-end' ? 'right' : 'center',
              maxWidth: 520,
            }}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Floating hero outcome cards */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="hero-card" style={{ position: 'absolute', top: '18%', left: '8%' }}>
          <OutcomeCard
            icon="↑"
            iconColor="#E8FF47"
            primary="Exceptional outcome projected"
            secondary="Aryan · Performing beyond expectation · 91%"
            animationDelay={0}
          />
        </div>
        <div className="hero-card" style={{ position: 'absolute', top: '22%', right: '6%' }}>
          <OutcomeCard
            icon="⚡"
            iconColor="#00FFB3"
            primary="World-class preparation delivered"
            secondary="Tomorrow's lessons · Perfected automatically"
            animationDelay={0.8}
          />
        </div>
        <div className="hero-card" style={{ position: 'absolute', bottom: '28%', left: '5%' }}>
          <OutcomeCard
            icon="✓"
            iconColor="#00FFB3"
            primary="Outstanding growth this term"
            secondary="+18% beyond projected trajectory ↑"
            animationDelay={1.6}
          />
        </div>
        <div className="hero-card" style={{ position: 'absolute', bottom: '22%', right: '10%' }}>
          <OutcomeCard
            icon="🏫"
            iconColor="#E8FF47"
            primary="Institutional excellence, rising"
            secondary="School-wide performance ↑ 22% above last term"
            animationDelay={2.4}
          />
        </div>
      </div>

    </div>
  )
}
