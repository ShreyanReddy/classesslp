'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

// All 16 outcome cards — final copy
const ALL_CARDS = [
  // Students — signal yellow accent
  { icon: '↑', iconColor: '#E8FF47', accentColor: '#E8FF47', primary: 'Exceptional outcome projected', secondary: 'Aryan · 91% · Performing beyond expectation', animationDelay: 0 },
  { icon: '🎯', iconColor: '#E8FF47', accentColor: '#E8FF47', primary: 'Outstanding growth this term', secondary: '+18% beyond projected trajectory ↑', animationDelay: 0.3 },
  { icon: '📍', iconColor: '#E8FF47', accentColor: '#E8FF47', primary: 'Precision intelligence activated', secondary: 'Learning gap identified · Resolved · Week 3', animationDelay: 0.6 },
  { icon: '🧭', iconColor: '#E8FF47', accentColor: '#E8FF47', primary: 'Personal excellence path active', secondary: 'Priya · 14-week trajectory · On course', animationDelay: 0.9 },

  // Teachers — aurora accent
  { icon: '⚡', iconColor: '#00FFB3', accentColor: '#00FFB3', primary: 'World-class preparation delivered', secondary: "Tomorrow's lessons · Perfected automatically · 11pm", animationDelay: 1.2 },
  { icon: '🕐', iconColor: '#00FFB3', accentColor: '#00FFB3', primary: 'Extraordinary time returned', secondary: 'Reclaimed today · 2hrs 40mins ↑', animationDelay: 1.5 },
  { icon: '✓', iconColor: '#00FFB3', accentColor: '#00FFB3', primary: 'Exceptional feedback delivered at scale', secondary: '38 assessments graded · Personalised feedback sent', animationDelay: 1.8 },
  { icon: '📋', iconColor: '#00FFB3', accentColor: '#00FFB3', primary: 'Intelligent workflow activated', secondary: 'Next 3 priorities · Prepared automatically', animationDelay: 2.1 },

  // Leadership — plasma accent
  { icon: '🏫', iconColor: '#FF6B35', accentColor: '#FF6B35', primary: 'Institutional excellence, rising', secondary: 'School-wide performance ↑ 22% above last term', animationDelay: 2.4 },
  { icon: '👥', iconColor: '#FF6B35', accentColor: '#FF6B35', primary: 'Operational perfection maintained', secondary: 'Period 3 covered · Zero disruption · Automatic', animationDelay: 2.7 },
  { icon: '📊', iconColor: '#FF6B35', accentColor: '#FF6B35', primary: 'Strategic intelligence, ready', secondary: '3 high-impact insights · Awaiting your review', animationDelay: 3.0 },
  { icon: '🔭', iconColor: '#FF6B35', accentColor: '#FF6B35', primary: 'Institutional pattern identified', secondary: 'Resolved before impact · Week 2', animationDelay: 3.3 },

  // Parents — cream/soft accent
  { icon: '✓', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.4)', primary: 'Rohan is excelling', secondary: 'Projected final outcome · 89% · Above target ↑', animationDelay: 3.6 },
  { icon: '💬', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.4)', primary: 'Your school, always present', secondary: 'Personal update from Ms. Sharma · Just now', animationDelay: 3.9 },
  { icon: '📈', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.4)', primary: 'Complete academic clarity', secondary: 'Progress · Forecast · Direction · Visible', animationDelay: 4.2 },
  { icon: '🌟', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.4)', primary: 'Confidence, complete', secondary: 'Informed · Connected · Assured · Always', animationDelay: 4.5 },
]

// Final resting positions for each card — percentage of viewport
// Designed as a natural cluster, not a grid
const FINAL_POSITIONS = [
  { left: '4%',  top: '15%' }, { left: '18%', top: '8%'  },
  { left: '8%',  top: '52%' }, { left: '15%', top: '70%' },
  { left: '32%', top: '12%' }, { left: '38%', top: '68%' },
  { left: '28%', top: '40%' }, { left: '42%', top: '28%' },
  { left: '58%', top: '10%' }, { left: '66%', top: '55%' },
  { left: '55%', top: '72%' }, { left: '72%', top: '30%' },
  { left: '78%', top: '12%' }, { left: '80%', top: '60%' },
  { left: '85%', top: '78%' }, { left: '88%', top: '35%' },
]

export default function SceneConstellation({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Cards fall from above — staggered by scroll
    ALL_CARDS.forEach((_, i) => {
      const card = cardRefs.current[i]
      if (!card) return

      // Use deterministic tilt values based on index
      const tiltStart = ((i * 37) % 12) - 6   // -6 to +6
      const tiltEnd = ((i * 13) % 8) - 4       // -4 to +4
      const yStart = -200 - ((i * 47) % 300)   // deterministic height

      gsap.fromTo(card,
        {
          y: yStart,
          opacity: 0,
          rotation: tiltStart,
        },
        {
          y: 0,
          opacity: 1,
          rotation: tiltEnd,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${68 + i * 0.5}% top`,
            end: `${70 + i * 0.5}% top`,
            scrub: 1.2,
          }
        }
      )
    })

  }, [])

  const show = scrollProgress >= 0.66 && scrollProgress < 0.80
  const opacity = show
    ? scrollProgress < 0.78
      ? 1
      : Math.max(0, 1 - (scrollProgress - 0.78) / 0.04)
    : 0

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      opacity,
      pointerEvents: isActive ? 'all' : 'none',
      transition: 'opacity 0.6s ease',
    }}>
      {ALL_CARDS.map((card, i) => (
        <div
          key={i}
          ref={el => { cardRefs.current[i] = el }}
          style={{
            position: 'absolute',
            left: FINAL_POSITIONS[i].left,
            top: FINAL_POSITIONS[i].top,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <OutcomeCard
            icon={card.icon}
            iconColor={card.iconColor}
            accentColor={card.accentColor}
            primary={card.primary}
            secondary={card.secondary}
            size="sm"
            animationDelay={card.animationDelay}
          />
        </div>
      ))}
    </div>
  )
}
