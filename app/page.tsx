'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'

import Nav from '@/components/nav/Nav'
import CustomCursor from '@/components/cursor/CustomCursor'
import SceneOpening from '@/components/scenes/SceneOpening'
import SceneIdentity from '@/components/scenes/SceneIdentity'
import SceneStatement from '@/components/scenes/SceneStatement'
import ScenePhilosophy from '@/components/scenes/ScenePhilosophy'
import ScenePrediction from '@/components/scenes/ScenePrediction'
import ScenePrevention from '@/components/scenes/ScenePrevention'
import SceneExecution from '@/components/scenes/SceneExecution'
import SceneConstellation from '@/components/scenes/SceneConstellation'
import SceneSuperschool from '@/components/scenes/SceneSuperschool'
import SceneGuarantee from '@/components/scenes/SceneGuarantee'
import SceneArrival from '@/components/scenes/SceneArrival'
import Footer from '@/components/footer/Footer'

// Dynamic import — Three.js is client-only
const ParticleField = dynamic(
  () => import('@/components/canvas/ParticleField'),
  { ssr: false }
)

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const bgRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Master scroll progress tracker
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setScrollProgress(current / total)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })

    // Background color journey — tied precisely to scroll
    // This is the single most important visual system on the page
    if (bgRef.current) {
      const bgTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#scroll-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5, // slight smoothing — feels cinematic not mechanical
        }
      })

      // 0% → 8%: Stay void
      bgTl.to(bgRef.current, { backgroundColor: '#07080C', duration: 0.08 }, 0)

      // 8% → 30%: Void stays
      bgTl.to(bgRef.current, { backgroundColor: '#07080C', duration: 0.22 }, 0.08)

      // 30% → 42%: Shift to obsidian
      bgTl.to(bgRef.current, { backgroundColor: '#10111A', duration: 0.12 }, 0.30)

      // 42% → 60%: Deepen to nebula for PPE
      bgTl.to(bgRef.current, { backgroundColor: '#1E1B4B', duration: 0.18 }, 0.42)

      // 60% → 68%: Back to obsidian
      bgTl.to(bgRef.current, { backgroundColor: '#10111A', duration: 0.08 }, 0.60)

      // 68% → 78%: Constellation — obsidian stays
      bgTl.to(bgRef.current, { backgroundColor: '#0F0E1C', duration: 0.10 }, 0.68)

      // 78% → 86%: Superschool peak — plasma center glow
      bgTl.to(bgRef.current, { backgroundColor: '#06050F', duration: 0.08 }, 0.78)

      // 86% → 93%: Guarantee — void
      bgTl.to(bgRef.current, { backgroundColor: '#07080C', duration: 0.07 }, 0.86)

      // 93% → 100%: The dawn — dark to lunar
      bgTl.to(bgRef.current, { backgroundColor: '#F0F0F5', duration: 0.07 }, 0.93)
    }

    return () => {
      window.removeEventListener('scroll', updateProgress)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  // Determine current scene based on scroll for conditional rendering
  const getActiveScene = () => {
    if (scrollProgress < 0.08)  return 'opening'
    if (scrollProgress < 0.18)  return 'identity'
    if (scrollProgress < 0.30)  return 'statement'
    if (scrollProgress < 0.42)  return 'philosophy'
    if (scrollProgress < 0.52)  return 'prediction'
    if (scrollProgress < 0.60)  return 'prevention'
    if (scrollProgress < 0.68)  return 'execution'
    if (scrollProgress < 0.78)  return 'constellation'
    if (scrollProgress < 0.86)  return 'superschool'
    if (scrollProgress < 0.93)  return 'guarantee'
    return 'arrival'
  }

  const activeScene = getActiveScene()

  return (
    <>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation — fixed, always visible after load */}
      <Nav scrollProgress={scrollProgress} />

      {/* The tall scroll container — 1100vh gives each scene 100vh of scroll travel */}
      <div id="scroll-container" ref={containerRef} style={{ height: '1100vh', position: 'relative' }}>

        {/* Sticky layer — this is the actual viewport the user sees */}
        <div id="sticky-layer">

          {/* Background color — animated by GSAP timeline above */}
          <div id="bg-layer" ref={bgRef} />

          {/* Particle field — always present, Three.js WebGL */}
          <ParticleField scrollProgress={scrollProgress} />

          {/* Scene layer — all content, z-index 2 */}
          <div id="scene-layer">

            {/* All scenes are always mounted but opacity/pointer-events controlled */}
            {/* This prevents GSAP ScrollTrigger from losing context on unmount */}

            <SceneOpening
              isActive={activeScene === 'opening'}
              scrollProgress={scrollProgress}
            />
            <SceneIdentity
              isActive={activeScene === 'identity'}
              scrollProgress={scrollProgress}
            />
            <SceneStatement
              isActive={activeScene === 'statement'}
              scrollProgress={scrollProgress}
            />
            <ScenePhilosophy
              isActive={activeScene === 'philosophy'}
              scrollProgress={scrollProgress}
            />
            <ScenePrediction
              isActive={activeScene === 'prediction'}
              scrollProgress={scrollProgress}
            />
            <ScenePrevention
              isActive={activeScene === 'prevention'}
              scrollProgress={scrollProgress}
            />
            <SceneExecution
              isActive={activeScene === 'execution'}
              scrollProgress={scrollProgress}
            />
            <SceneConstellation
              isActive={activeScene === 'constellation'}
              scrollProgress={scrollProgress}
            />
            <SceneSuperschool
              isActive={activeScene === 'superschool'}
              scrollProgress={scrollProgress}
            />
            <SceneGuarantee
              isActive={activeScene === 'guarantee'}
              scrollProgress={scrollProgress}
            />
            <SceneArrival
              isActive={activeScene === 'arrival'}
              scrollProgress={scrollProgress}
            />

          </div>
        </div>
      </div>

      {/* Footer — below scroll container, normal document flow */}
      <Footer />
    </>
  )
}
