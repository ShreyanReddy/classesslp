'use client'

import { useEffect, useRef, useState } from 'react'

type CursorState = 'default' | 'card-hover' | 'button-hover' | 'text-hover' | 'light-section'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])
  const posRef = useRef({ x: -100, y: -100 })
  const ringPosRef = useRef({ x: -100, y: -100 })
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="button"]')) {
        setCursorState('button-hover')
      } else if (target.closest('[data-cursor="card"]')) {
        setCursorState('card-hover')
      } else if (target.closest('p, h1, h2, h3')) {
        setCursorState('text-hover')
      } else if (target.closest('[data-section="light"]')) {
        setCursorState('light-section')
      } else {
        setCursorState('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    // Spring animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      // Ring follows with spring delay
      const springX = 0.10
      const springY = 0.10
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * springX
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * springY

      // Dot follows cursor exactly
      if (dot) {
        dot.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`
      }
      if (ring) {
        ring.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px) translate(-50%, -50%)`
      }

      // Update trail positions (comet tail effect)
      trailRefs.current.forEach((trail, i) => {
        if (!trail) return
        const delay = (i + 1) * 0.06
        const tx = posRef.current.x + (ringPosRef.current.x - posRef.current.x) * delay
        const ty = posRef.current.y + (ringPosRef.current.y - posRef.current.y) * delay
        trail.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`
        trail.style.opacity = String((1 - (i + 1) * 0.22) * 0.4)
      })
    }

    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  const dotSize = cursorState === 'button-hover' ? 0
                : cursorState === 'text-hover' ? 2
                : 6

  const ringSize = cursorState === 'button-hover' ? 0
                 : cursorState === 'card-hover' ? 28
                 : 44

  const dotColor = cursorState === 'light-section' ? '#07080C' : '#E8FF47'
  const ringColor = cursorState === 'light-section' ? 'rgba(7,8,12,0.4)' : 'rgba(232,255,71,0.5)'
  const dotShape = cursorState === 'text-hover' ? '2px' : '50%'

  return (
    <div id="cursor-layer">
      {/* Comet trail — 4 ghost dots */}
      {[0,1,2,3].map((i) => (
        <div
          key={i}
          ref={el => { if (el) trailRefs.current[i] = el }}
          style={{
            position: 'fixed',
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: '#E8FF47',
            pointerEvents: 'none',
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: `1px solid ${ringColor}`,
          pointerEvents: 'none',
          willChange: 'transform, width, height',
          transition: 'width 0.3s cubic-bezier(0.23,1,0.32,1), height 0.3s cubic-bezier(0.23,1,0.32,1)',
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: dotSize,
          height: dotSize,
          borderRadius: dotShape,
          background: dotColor,
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'width 0.2s ease, height 0.2s ease, border-radius 0.2s ease, background 0.3s ease',
        }}
      />
    </div>
  )
}
