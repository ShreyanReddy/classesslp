'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function SceneExecution({ isActive, scrollProgress }: SceneProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const letterOrder = [0, 8, 1, 7, 2, 6, 3, 5, 4]
    const letters = document.querySelectorAll('.execution-letter')

    letterOrder.forEach((letterIndex, animOrder) => {
      if (!letters[letterIndex]) return
      gsap.fromTo(letters[letterIndex],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${60 + animOrder * 0.4}% top`,
            end: `${62 + animOrder * 0.4}% top`,
            scrub: 1,
          }
        }
      )
    })

    gsap.fromTo('.execution-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '63% top',
          end: '65% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.execution-copy', { opacity: 0 }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '#scroll-container',
        start: '64% top', end: '66% top', scrub: 1,
      }
    })

    gsap.fromTo('.execution-card', { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, stagger: 0.1,
      scrollTrigger: {
        trigger: '#scroll-container',
        start: '65% top', end: '67% top', scrub: 1,
      }
    })

  }, [])

  const show = scrollProgress >= 0.58 && scrollProgress < 0.70
  const opacity = show ? 1 : 0

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity, pointerEvents: isActive ? 'all' : 'none',
    }}>
      <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
        <div className="execution-word" style={{ display: 'flex', justifyContent: 'center', gap: '0.01em' }}>
          {'EXECUTION'.split('').map((char, i) => (
            <span key={i} className="execution-letter type-display" style={{
              fontSize: 'clamp(4rem, 13vw, 16rem)', color: '#F0F0F5',
              lineHeight: 0.88, fontStyle: 'italic', display: 'inline-block',
              textShadow: '1px 0 0 rgba(255,107,53,0.35), -1px 0 0 rgba(255,107,53,0.15)',
              opacity: 0,
            }}>
              {char}
            </span>
          ))}
        </div>
        <div className="execution-line signal-line" style={{
          position: 'absolute', top: '52%', left: '-10vw', right: '-10vw',
          height: 1, background: '#FF6B35',
        }} />
      </div>

      <div className="execution-copy" style={{
        position: 'absolute', bottom: 60, left: 0, right: 0, textAlign: 'center', opacity: 0,
      }}>
        <p className="type-label" style={{ color: '#FF6B35', marginBottom: 8 }}>EXECUTION</p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
          fontSize: 'clamp(0.85rem, 1.3vw, 1rem)', color: '#6B7280',
          maxWidth: 600, margin: '0 auto', lineHeight: 1.7,
        }}>
          Intelligence without execution is just potential. Classess transforms potential into extraordinary,
          measurable performance. Seamlessly. Automatically. Without exception.
        </p>
      </div>

      <div style={{
        position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: 12, pointerEvents: 'none',
      }}>
        <div className="execution-card">
          <OutcomeCard icon="⚡" iconColor="#FF6B35" accentColor="#FF6B35"
            primary="World-class preparation delivered"
            secondary="Everything handled · Automatically · Seamlessly"
            animationDelay={0}
          />
        </div>
        <div className="execution-card">
          <OutcomeCard icon="✓" iconColor="#00FFB3" accentColor="#00FFB3"
            primary="Operational perfection, maintained"
            secondary="Zero gaps · Zero delays · Zero exceptions"
            animationDelay={1}
          />
        </div>
      </div>
    </div>
  )
}
