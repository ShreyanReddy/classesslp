'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function ScenePrevention({ isActive, scrollProgress }: SceneProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const letterOrder = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5]
    const letters = document.querySelectorAll('.prevention-letter')

    letterOrder.forEach((letterIndex, animOrder) => {
      if (!letters[letterIndex]) return
      gsap.fromTo(letters[letterIndex],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${52 + animOrder * 0.4}% top`,
            end: `${54 + animOrder * 0.4}% top`,
            scrub: 1,
          }
        }
      )
    })

    gsap.fromTo('.prevention-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '55% top',
          end: '57% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.prevention-copy',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '56% top',
          end: '58% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.prevention-card',
      { opacity: 0, x: -60 },  // Cards come from LEFT this time — alternating
      {
        opacity: 1, x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '57% top',
          end: '59% top',
          scrub: 1,
        }
      }
    )

    // Ghost transition
    gsap.to('.prevention-word', {
      scale: 1.08, opacity: 0.04,
      scrollTrigger: {
        trigger: '#scroll-container',
        start: '58% top',
        end: '62% top',
        scrub: 1,
      }
    })

  }, [])

  const show = scrollProgress >= 0.50 && scrollProgress < 0.64
  const opacity = show
    ? scrollProgress < 0.62 ? 1 : Math.max(0.04, 1 - (scrollProgress - 0.62) / 0.04)
    : 0

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity, pointerEvents: isActive ? 'all' : 'none',
    }}>
      <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
        <div className="prevention-word" style={{ display: 'flex', justifyContent: 'center', gap: '0.01em' }}>
          {'PREVENTION'.split('').map((char, i) => (
            <span key={i} className="prevention-letter type-display" style={{
              fontSize: 'clamp(4rem, 12vw, 14rem)', color: '#F0F0F5',
              lineHeight: 0.88, fontStyle: 'italic', display: 'inline-block',
              textShadow: '1px 0 0 rgba(232,255,71,0.3), -1px 0 0 rgba(232,255,71,0.1)',
              opacity: 0,
            }}>
              {char}
            </span>
          ))}
        </div>
        <div className="prevention-line signal-line" style={{
          position: 'absolute', top: '52%', left: '-10vw', right: '-10vw',
          height: 1, background: '#E8FF47',
        }} />
      </div>

      <div className="prevention-copy" style={{
        position: 'absolute', bottom: 60, left: 0, right: 0, textAlign: 'center', opacity: 0,
      }}>
        <p className="type-label" style={{ color: '#E8FF47', marginBottom: 8 }}>PREVENTION</p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
          fontSize: 'clamp(0.85rem, 1.3vw, 1rem)', color: '#6B7280',
          maxWidth: 600, margin: '0 auto', lineHeight: 1.7,
        }}>
          The world&apos;s highest-performing schools share one defining quality. They never react. They anticipate.
          Classess elevates every school to that standard.
        </p>
      </div>

      <div style={{
        position: 'absolute', left: '6%', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: 12, pointerEvents: 'none',
      }}>
        <div className="prevention-card">
          <OutcomeCard icon="🛡" iconColor="#E8FF47" accentColor="#E8FF47"
            primary="Operational perfection maintained"
            secondary="Gap resolved · Before it became visible"
            animationDelay={0}
          />
        </div>
        <div className="prevention-card">
          <OutcomeCard icon="✓" iconColor="#00FFB3" accentColor="#00FFB3"
            primary="Zero reactive decisions this term"
            secondary="Every issue anticipated · Every solution ready"
            animationDelay={1}
          />
        </div>
      </div>
    </div>
  )
}
