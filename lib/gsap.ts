// Centralised GSAP registration — import this once in client components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function registerGSAP() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)

    // ScrollTrigger defaults
    ScrollTrigger.defaults({
      invalidateOnRefresh: true,
    })

    // Smooth scroll normalizer — prevents scroll jumps
    ScrollTrigger.normalizeScroll(true)
  }
}

export { gsap, ScrollTrigger }
