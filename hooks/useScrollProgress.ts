import { useState, useEffect } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      setProgress(window.scrollY / total)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}
