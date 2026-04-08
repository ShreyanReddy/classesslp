'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function ScenePhilosophy({ isActive, scrollProgress }: SceneProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Circle draws itself — SVG stroke dashoffset animation
    gsap.fromTo('.philosophy-circle',
      { strokeDashoffset: 1382 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '31% top',
          end: '36% top',
          scrub: 1.5,
        }
      }
    )

    // First line inside circle
    gsap.fromTo('.phil-line-1',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '34% top',
          end: '36% top',
          scrub: 1,
        }
      }
    )

    // Second line
    gsap.fromTo('.phil-line-2',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '36% top',
          end: '38% top',
          scrub: 1,
        }
      }
    )

    // Outcome cards orbit in
    gsap.fromTo('.phil-card',
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1, scale: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '38% top',
          end: '41% top',
          scrub: 1,
        }
      }
    )

  }, [])

  const show = scrollProgress >= 0.28 && scrollProgress < 0.44
  const opacity = show ? 1 : 0

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity,
      pointerEvents: isActive ? 'all' : 'none',
      transition: 'opacity 0.5s ease',
    }}>

      {/* SVG circle + text inside */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Circle SVG */}
        <svg
          width="520"
          height="520"
          viewBox="0 0 520 520"
          style={{ position: 'absolute' }}
        >
          <circle
            className="philosophy-circle"
            cx="260"
            cy="260"
            r="220"
            fill="none"
            stroke="#E8FF47"
            strokeWidth="1"
            strokeDasharray="1382"
            strokeDashoffset="1382"
            strokeLinecap="round"
          />
        </svg>

        {/* Text inside circle */}
        <div style={{
          width: 380,
          textAlign: 'center',
          padding: '40px',
        }}>
          <p
            className="phil-line-1"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              color: 'rgba(240,240,245,0.55)',
              lineHeight: 1.6,
              marginBottom: 16,
              opacity: 0,
            }}
          >
            Your school generates extraordinary intelligence every single day.
          </p>
          <p
            className="phil-line-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              color: '#F0F0F5',
              lineHeight: 1.6,
              opacity: 0,
            }}
          >
            Classess transforms that intelligence into{' '}
            <span style={{ color: '#E8FF47' }}>absolute clarity</span>{' '}
            and{' '}
            <span style={{ color: '#00FFB3' }}>precise direction.</span>
          </p>
        </div>

      </div>

    </div>
  )
}
