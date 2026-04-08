'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function ScenePrediction({ isActive, scrollProgress }: SceneProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Word crystallizes — letters assemble outside-in
    // P and N first, then working inward to center C
    const letterOrder = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5]
    const letters = document.querySelectorAll('.prediction-letter')

    letterOrder.forEach((letterIndex, animOrder) => {
      if (!letters[letterIndex]) return
      gsap.fromTo(letters[letterIndex],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${42 + animOrder * 0.5}% top`,
            end: `${44 + animOrder * 0.5}% top`,
            scrub: 1,
          }
        }
      )
    })

    // Signal line draws across at 45% scroll
    gsap.fromTo('.prediction-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '45% top',
          end: '47% top',
          scrub: 1,
        }
      }
    )

    // Sub-copy fades in at bottom
    gsap.fromTo('.prediction-copy',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '46% top',
          end: '49% top',
          scrub: 1,
        }
      }
    )

    // Cards emerge from right edge
    gsap.fromTo('.prediction-card',
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '47% top',
          end: '51% top',
          scrub: 1,
        }
      }
    )

    // Ghost transition — PREDICTION scales up and drops opacity as PREVENTION arrives
    gsap.fromTo('.prediction-word',
      { scale: 1, opacity: 1 },
      {
        scale: 1.08, opacity: 0.04,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '50% top',
          end: '54% top',
          scrub: 1,
        }
      }
    )

  }, [])

  const show = scrollProgress >= 0.40 && scrollProgress < 0.56
  const opacity = show
    ? scrollProgress < 0.54 ? 1 : Math.max(0.04, 1 - (scrollProgress - 0.54) / 0.04)
    : 0

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity,
      pointerEvents: isActive ? 'all' : 'none',
    }}>

      {/* PREDICTION — viewport-spanning word */}
      <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
        <div
          className="prediction-word"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.01em',
          }}
        >
          {'PREDICTION'.split('').map((char, i) => (
            <span
              key={i}
              className="prediction-letter type-display"
              style={{
                fontSize: 'clamp(4rem, 13vw, 15rem)',
                color: '#F0F0F5',
                lineHeight: 0.88,
                display: 'inline-block',
                fontStyle: 'italic',
                textShadow: '1px 0 0 rgba(0,255,179,0.3), -1px 0 0 rgba(0,255,179,0.1)',
                opacity: 0,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Signal line through word */}
        <div
          className="prediction-line signal-line"
          style={{
            position: 'absolute',
            top: '52%',
            left: '-10vw',
            right: '-10vw',
            height: 1,
            background: '#00FFB3', // aurora for prediction
          }}
        />
      </div>

      {/* Sub-copy — bottom of screen */}
      <div
        className="prediction-copy"
        style={{
          position: 'absolute',
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: 'center',
          opacity: 0,
        }}
      >
        <p className="type-label" style={{ color: '#00FFB3', marginBottom: 8 }}>
          PREDICTION
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
          color: '#6B7280',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Before a single student falls behind — Classess already knows.
          Before a pattern becomes a problem — your school already has the answer.
        </p>
      </div>

      {/* Cards emerge from right edge */}
      <div style={{
        position: 'absolute',
        right: '6%',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        pointerEvents: 'none',
      }}>
        <div className="prediction-card">
          <OutcomeCard
            icon="↑"
            iconColor="#00FFB3"
            primary="Exceptional outcome projected"
            secondary="Aryan · Final score: 91% · 14 weeks out"
            accentColor="#00FFB3"
            animationDelay={0}
          />
        </div>
        <div className="prediction-card">
          <OutcomeCard
            icon="📍"
            iconColor="#E8FF47"
            primary="Precision intelligence activated"
            secondary="Learning gap identified and resolved · Week 3"
            accentColor="#E8FF47"
            animationDelay={1}
          />
        </div>
      </div>

    </div>
  )
}
