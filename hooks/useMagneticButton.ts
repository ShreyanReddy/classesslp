import { useEffect, useRef } from 'react'

export function useMagneticButton<T extends HTMLElement>(strength = 0.4) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    }

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0, 0)'
      el.style.transition = 'transform 0.4s cubic-bezier(0.23,1,0.32,1)'
    }

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.1s ease'
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    el.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
      el.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [strength])

  return ref
}
