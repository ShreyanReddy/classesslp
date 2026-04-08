'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SceneSuperschool({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Plasma radial glow — the background event
    gsap.fromTo('.superschool-glow',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1, scale: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '78% top',
          end: '81% top',
          scrub: 1,
        }
      }
    )

    // The word SUPERSCHOOL grows in — spring physics
    gsap.fromTo('.superschool-word',
      { scale: 0.88, opacity: 0 },
      {
        scale: 1, opacity: 1,
        duration: 1.2,
        ease: 'elastic.out(0.8, 0.5)',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '79% top',
          end: '82% top',
          scrub: false, // NOT scrubbed — spring plays once
          toggleActions: 'play none none reverse',
        }
      }
    )

    // The setup lines before the question
    gsap.fromTo('.superschool-setup',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '81% top',
          end: '83% top',
          scrub: 1,
        }
      }
    )

    // The question line
    gsap.fromTo('.superschool-question',
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '83% top',
          end: '85% top',
          scrub: 1,
        }
      }
    )

    // Breathing pulse on SUPERSCHOOL word — subtle scale
    gsap.to('.superschool-word', {
      scale: 1.004,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    })

  }, [])

  const show = scrollProgress >= 0.76 && scrollProgress < 0.88
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
      overflow: 'hidden',
    }}>

      {/* Plasma radial glow — the background event */}
      <div
        className="superschool-glow"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,53,0.22) 0%, rgba(255,107,53,0.06) 50%, transparent 75%)',
          pointerEvents: 'none',
          opacity: 0,
        }}
      />

      {/* The setup lines */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {[
          'The most extraordinary schools in the world',
          'share one defining difference.',
        ].map((line, i) => (
          <p
            key={i}
            className="superschool-setup type-body"
            style={{
              color: 'rgba(240,240,245,0.5)',
              fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
              lineHeight: 1.6,
            }}
          >
            {line}
          </p>
        ))}
        <p
          className="superschool-setup"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
            color: '#FF6B35',
            marginTop: 4,
          }}
        >
          They chose Classess.
        </p>
      </div>

      {/* SUPERSCHOOL — editorial italic, plasma/terracotta */}
      <h2
        className="superschool-word type-editorial"
        style={{
          fontSize: 'clamp(5rem, 13vw, 15rem)',
          color: '#FF6B35',
          lineHeight: 0.88,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          opacity: 0,
          textShadow: '0 0 80px rgba(255,107,53,0.4), 0 0 160px rgba(255,107,53,0.15)',
        }}
      >
        Superschool.
      </h2>

      {/* The question */}
      <p
        className="superschool-question type-body"
        style={{
          marginTop: '2rem',
          color: 'rgba(240,240,245,0.65)',
          fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
          letterSpacing: '0.02em',
          textAlign: 'center',
          opacity: 0,
        }}
      >
        Ready to become a Classess Superschool?
      </p>

    </div>
  )
}
