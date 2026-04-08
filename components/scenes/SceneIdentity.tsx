'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function SceneIdentity({ isActive, scrollProgress }: SceneProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Each letter gets individual scroll-linked parallax — the Virgil deconstruction
    const letterParallax = [
      { selector: '.id-C', xFactor: -0.8, yFactor: -1.2 },
      { selector: '.id-L', xFactor: -0.4, yFactor: -0.8 },
      { selector: '.id-A', xFactor: -0.2, yFactor: -1.0 },
      { selector: '.id-S1', xFactor:  0.0, yFactor: -0.6 },
      { selector: '.id-S2', xFactor:  0.1, yFactor: -0.9 },
      { selector: '.id-E',  xFactor:  0.3, yFactor: -0.7 },
      { selector: '.id-S3', xFactor:  0.5, yFactor: -1.1 },
      { selector: '.id-S4', xFactor:  0.8, yFactor: -0.8 },
    ]

    letterParallax.forEach(({ selector, xFactor, yFactor }) => {
      gsap.to(selector, {
        x: `${xFactor * 120}px`,
        y: `${yFactor * 80}px`,
        opacity: 0.15,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '8% top',
          end: '18% top',
          scrub: 2,
        }
      })
    })

    // Manifesto words assemble between the separating letters
    const words = document.querySelectorAll('.manifesto-word')
    words.forEach((word, i) => {
      gsap.fromTo(word,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1,
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${10 + i * 1.5}% top`,
            end: `${12 + i * 1.5}% top`,
            scrub: 1,
          }
        }
      )
    })

  }, [])

  const show = scrollProgress >= 0.06 && scrollProgress < 0.20
  const opacity = show ? 1 : 0

  const letterStyle: React.CSSProperties = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(5rem, 14vw, 16rem)',
    color: '#F0F0F5',
    lineHeight: 0.88,
    display: 'inline-block',
    willChange: 'transform',
    textShadow: '1px 0 0 rgba(0,255,179,0.25), -1px 0 0 rgba(255,107,53,0.2)',
  }

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity,
      pointerEvents: isActive ? 'all' : 'none',
      transition: 'opacity 0.4s ease',
      overflow: 'hidden',
    }}>

      {/* Deconstructing letters */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.02em',
      }}>
        {[
          { char: 'C', cls: 'id-C' }, { char: 'L', cls: 'id-L' },
          { char: 'A', cls: 'id-A' }, { char: 'S', cls: 'id-S1' },
          { char: 'S', cls: 'id-S2' }, { char: 'E', cls: 'id-E' },
          { char: 'S', cls: 'id-S3' }, { char: 'S', cls: 'id-S4' },
        ].map(({ char, cls }) => (
          <span key={cls} className={cls} style={letterStyle}>{char}</span>
        ))}
      </div>

      {/* Manifesto words — appear between separating letters */}
      <div style={{
        position: 'absolute',
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '60vw',
        zIndex: 2,
      }}>
        {[
          'Intelligence', '·', 'that', '·', 'grows', '·', 'with', '·', 'your', '·', 'school'
        ].map((word, i) => (
          <span
            key={i}
            className="manifesto-word"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: word === '·' ? '#E8FF47' : 'rgba(240,240,245,0.8)',
              opacity: 0,
            }}
          >
            {word}
          </span>
        ))}
      </div>

    </div>
  )
}
