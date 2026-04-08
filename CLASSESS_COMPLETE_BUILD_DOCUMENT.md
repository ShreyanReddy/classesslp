# CLASSESS.COM — COMPLETE TECHNICAL BUILD DOCUMENT
## The World's Most Advanced School Intelligence Platform
### Version: Final · For Claude Code · Zero Ambiguity

---

## CREATIVE VISION — READ THIS FIRST

This is not a website. This is a scroll-driven cinematic experience.

Imagine Mercedes-Benz designed an edtech product. Virgil Abloh art-directed it.
Kanye West approved the copy. The world's greatest interactive studios built it.
That is the standard. Not inspired by — that standard.

**The experience in one sentence:**
The visitor scrolls through a living, breathing, particle-filled atmosphere
and arrives at the end having felt — not read — what Classess does to a school.

**The only user action required:** Scroll.
**Mid-page buttons:** Zero.
**Section dividers:** Zero.
**Image-left-text-right layouts:** Zero.
**Generic edtech aesthetics:** Zero.

One continuous canvas. One story. One arrival point.

---

## PROJECT STRUCTURE — EXACT FILE TREE

```
classess/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── canvas/
│   │   └── ParticleField.tsx       ← Three.js WebGL particle system
│   ├── cursor/
│   │   └── CustomCursor.tsx        ← Full custom cursor with magnetic effects
│   ├── nav/
│   │   └── Nav.tsx                 ← Floating glass pill navigation
│   ├── scenes/
│   │   ├── SceneOpening.tsx        ← The void + line draw + wordmark
│   │   ├── SceneIdentity.tsx       ← CLASSESS deconstruction + nav formation
│   │   ├── SceneStatement.tsx      ← ELEVATED + stakeholder lines
│   │   ├── ScenePhilosophy.tsx     ← Circle + philosophy copy
│   │   ├── ScenePrediction.tsx     ← PREDICTION full viewport
│   │   ├── ScenePrevention.tsx     ← PREVENTION full viewport
│   │   ├── SceneExecution.tsx      ← EXECUTION full viewport
│   │   ├── SceneConstellation.tsx  ← 16 falling outcome cards
│   │   ├── SceneSuperschool.tsx    ← The peak moment
│   │   ├── SceneGuarantee.tsx      ← The guarantee card
│   │   └── SceneArrival.tsx        ← Light arrival + final CTA
│   ├── cards/
│   │   └── OutcomeCard.tsx         ← Reusable glass outcome card
│   └── footer/
│       └── Footer.tsx
├── hooks/
│   ├── useScrollProgress.ts        ← Global scroll percentage tracker
│   ├── useParticleScatter.ts       ← Cursor-particle interaction
│   └── useMagneticButton.ts        ← Magnetic cursor on CTA
├── lib/
│   ├── gsap.ts                     ← GSAP + ScrollTrigger registration
│   └── constants.ts                ← All design tokens as JS constants
├── public/
│   └── fonts/                      ← Self-hosted Bebas Neue + DM Sans
├── styles/
│   └── animations.css              ← Keyframe animations
└── next.config.js
```

---

## INSTALL — EXACT COMMANDS

```bash
npx create-next-app@latest classess --typescript --tailwind --app --src-dir=false
cd classess

# Core animation
npm install gsap @gsap/react

# 3D particle field
npm install three @types/three

# Utility
npm install clsx

# Font loading
npm install next/font
```

### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // IMPORTANT: prevents GSAP double-init in dev
  experimental: {
    optimizePackageImports: ['gsap', 'three'],
  },
}
module.exports = nextConfig
```

---

## DESIGN SYSTEM — lib/constants.ts

```typescript
export const COLORS = {
  // Background journey — dark to light
  void:      '#07080C',  // opening absolute darkness
  obsidian:  '#10111A',  // primary dark surface
  nebula:    '#1E1B4B',  // deep indigo — PPE section depth
  lunar:     '#F0F0F5',  // cool near-white — arrival surface
  silk:      '#FAFAFA',  // final clean landing

  // The three pops — used sparingly, maximum impact
  signal:    '#E8FF47',  // acid yellow-green — 3 uses only
  plasma:    '#FF6B35',  // burnt coral — Superschool peak + CTA
  aurora:    '#00FFB3',  // electric mint — particles + guarantee

  // Typography
  cream:     '#F0F0F5',  // primary text on dark
  muted:     '#6B7280',  // secondary text
  ink:       '#07080C',  // text on light backgrounds
} as const

export const FONTS = {
  display: "'Bebas Neue', sans-serif",    // monumental headlines
  body:    "'DM Sans', sans-serif",       // precise body copy
  // Editorial New Italic — loaded via @font-face for Superschool moment only
  editorial: "'EditorialNew-Italic', serif",
} as const

// Scroll trigger points — as percentage of total scroll height
export const SCROLL = {
  opening:        { start: 0,    end: 0.08  },
  identity:       { start: 0.08, end: 0.18  },
  statement:      { start: 0.18, end: 0.30  },
  philosophy:     { start: 0.30, end: 0.42  },
  prediction:     { start: 0.42, end: 0.52  },
  prevention:     { start: 0.52, end: 0.60  },
  execution:      { start: 0.60, end: 0.68  },
  constellation:  { start: 0.68, end: 0.78  },
  superschool:    { start: 0.78, end: 0.86  },
  guarantee:      { start: 0.86, end: 0.93  },
  arrival:        { start: 0.93, end: 1.00  },
} as const

export const GLASS = {
  // Dark section glass — cold crystal
  dark: {
    background: 'rgba(16, 17, 26, 0.45)',
    border: '1px solid rgba(232, 255, 71, 0.12)',
    borderTop: '1px solid rgba(232, 255, 71, 0.20)',
    backdropFilter: 'blur(40px) saturate(200%) brightness(115%)',
    boxShadow: '0 8px 32px rgba(7,8,12,0.5), 0 2px 8px rgba(7,8,12,0.3), inset 0 1px 0 rgba(232,255,71,0.10)',
  },
  // Card glass — floating outcome cards
  card: {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)',
    borderTop: '1px solid rgba(255,255,255,0.28)',
    borderLeft: '1px solid rgba(255,255,255,0.14)',
    borderRight: '1px solid rgba(255,255,255,0.04)',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    backdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
    boxShadow: '0 0 0 0.5px rgba(255,255,255,0.06), 0 20px 60px rgba(7,8,12,0.4), 0 4px 16px rgba(7,8,12,0.25), inset 0 1px 0 rgba(255,255,255,0.18)',
  },
} as const
```

---

## GLOBAL CSS — app/globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

/* Editorial New Italic — for Superschool moment only */
@font-face {
  font-family: 'EditorialNew-Italic';
  src: url('/fonts/EditorialNew-Italic.woff2') format('woff2');
  font-weight: normal;
  font-style: italic;
  font-display: block;
}

/* If Editorial New is unavailable, fallback gracefully */
/* Use: font-family: 'EditorialNew-Italic', 'Playfair Display', Georgia, serif */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: auto; /* GSAP controls all scrolling — disable native smooth */
  overflow-x: hidden;
}

body {
  background: #07080C;
  color: #F0F0F5;
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  overflow-x: hidden;
  cursor: none; /* Custom cursor takes over */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Scroll container — tall enough for all scenes */
/* Total scroll height = 11 × 100vh = 1100vh */
/* Each scene gets 100vh of scroll travel */
#scroll-container {
  height: 1100vh;
  position: relative;
}

/* Sticky canvas layer — stays fixed while scroll drives animations */
#sticky-layer {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* WebGL canvas — always behind everything */
#particle-canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

/* Background color layer — animated by GSAP */
#bg-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: #07080C;
  pointer-events: none;
  transition: none; /* GSAP handles all transitions */
}

/* All scene content sits here */
#scene-layer {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Nav sits above everything */
#nav-layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
}

/* Cursor layer — topmost */
#cursor-layer {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
}

/* Typography base classes */
.type-display {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400; /* Bebas only has one weight */
  letter-spacing: 0.02em;
  line-height: 0.92;
}

.type-body {
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  line-height: 1.65;
  letter-spacing: -0.01em;
}

.type-label {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6B7280;
}

.type-editorial {
  font-family: 'EditorialNew-Italic', 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
}

/* Signal line — the recurring visual element */
.signal-line {
  position: absolute;
  height: 1px;
  background: #E8FF47;
  transform-origin: left center;
  transform: scaleX(0);
}

/* Selection color */
::selection {
  background: rgba(232, 255, 71, 0.3);
  color: #F0F0F5;
}
```

---

## PARTICLE FIELD — components/canvas/ParticleField.tsx

This is the most critical component. It creates the living atmosphere that underlies the entire experience. Three.js WebGL — three depth layers of particles with organic movement.

```typescript
'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ParticleFieldProps {
  scrollProgress: number // 0 to 1
}

export default function ParticleField({ scrollProgress }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const frameRef = useRef<number>(0)
  const timeRef = useRef<number>(0)
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  // Particle data refs — avoid re-creating geometry each frame
  const deepFieldRef = useRef<THREE.Points | null>(null)
  const midFieldRef = useRef<THREE.Points | null>(null)
  const surfaceSparkRef = useRef<THREE.Points | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // ─── RENDERER ───────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false, // performance — particles don't need AA
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer

    // ─── SCENE + CAMERA ─────────────────────────────────────
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    cameraRef.current = camera

    // ─── LAYER 1: DEEP FIELD ────────────────────────────────
    // Large, extremely slow, aurora-colored blobs
    // Simulated as large point sprites with high size + custom shader
    const deepCount = 80
    const deepPositions = new Float32Array(deepCount * 3)
    const deepSizes = new Float32Array(deepCount)
    const deepColors = new Float32Array(deepCount * 3)

    for (let i = 0; i < deepCount; i++) {
      deepPositions[i * 3]     = (Math.random() - 0.5) * 30
      deepPositions[i * 3 + 1] = (Math.random() - 0.5) * 20
      deepPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 8 // behind
      deepSizes[i] = Math.random() * 80 + 40 // 40–120px equivalent

      // Aurora green at low opacity — set in shader
      deepColors[i * 3]     = 0.0   // r
      deepColors[i * 3 + 1] = 1.0   // g — aurora #00FFB3
      deepColors[i * 3 + 2] = 0.7   // b
    }

    const deepGeo = new THREE.BufferGeometry()
    deepGeo.setAttribute('position', new THREE.BufferAttribute(deepPositions, 3))
    deepGeo.setAttribute('size', new THREE.BufferAttribute(deepSizes, 1))
    deepGeo.setAttribute('color', new THREE.BufferAttribute(deepColors, 3))

    const deepMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.06 },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vColor = color;
          vec3 pos = position;
          // Very slow organic drift using sine waves
          pos.x += sin(uTime * 0.08 + position.y * 0.3) * 0.4;
          pos.y += cos(uTime * 0.06 + position.x * 0.2) * 0.3;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        uniform float uOpacity;
        void main() {
          // Soft radial gradient — each point is a blurred blob
          float dist = distance(gl_PointCoord, vec2(0.5));
          float alpha = smoothstep(0.5, 0.0, dist) * uOpacity;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    deepFieldRef.current = new THREE.Points(deepGeo, deepMat)
    scene.add(deepFieldRef.current)

    // ─── LAYER 2: MID ATMOSPHERE ────────────────────────────
    // Medium particles, signal yellow + plasma orange
    const midCount = 120
    const midPositions = new Float32Array(midCount * 3)
    const midSizes = new Float32Array(midCount)
    const midColors = new Float32Array(midCount * 3)
    const midPhase = new Float32Array(midCount) // random phase offset

    // Color palette for mid layer
    const midPalette = [
      [0.91, 1.00, 0.28],  // signal yellow #E8FF47
      [1.00, 0.42, 0.21],  // plasma #FF6B35
      [0.0,  1.00, 0.70],  // aurora #00FFB3
    ]

    for (let i = 0; i < midCount; i++) {
      midPositions[i * 3]     = (Math.random() - 0.5) * 24
      midPositions[i * 3 + 1] = (Math.random() - 0.5) * 16
      midPositions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
      midSizes[i] = Math.random() * 30 + 10
      midPhase[i] = Math.random() * Math.PI * 2

      const palette = midPalette[Math.floor(Math.random() * midPalette.length)]
      midColors[i * 3]     = palette[0]
      midColors[i * 3 + 1] = palette[1]
      midColors[i * 3 + 2] = palette[2]
    }

    const midGeo = new THREE.BufferGeometry()
    midGeo.setAttribute('position', new THREE.BufferAttribute(midPositions, 3))
    midGeo.setAttribute('size', new THREE.BufferAttribute(midSizes, 1))
    midGeo.setAttribute('color', new THREE.BufferAttribute(midColors, 3))
    midGeo.setAttribute('phase', new THREE.BufferAttribute(midPhase, 1))

    const midMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.18 },
        uScrollProgress: { value: 0 },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        attribute float phase;
        varying vec3 vColor;
        varying float vAlphaMod;
        uniform float uTime;
        uniform float uScrollProgress;
        void main() {
          vColor = color;
          vec3 pos = position;
          // Organic drift — compound sine waves with phase offset
          pos.x += sin(uTime * 0.15 + phase) * 0.8;
          pos.y += cos(uTime * 0.12 + phase * 1.3) * 0.6;
          pos.y += sin(uTime * 0.05) * 1.2; // slow vertical drift
          // Wrap positions to keep particles in view
          pos.x = mod(pos.x + 12.0, 24.0) - 12.0;
          pos.y = mod(pos.y + 8.0, 16.0) - 8.0;
          // Pulse opacity based on time
          vAlphaMod = 0.7 + sin(uTime * 0.3 + phase) * 0.3;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlphaMod;
        uniform float uOpacity;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          float alpha = smoothstep(0.5, 0.05, dist) * uOpacity * vAlphaMod;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    midFieldRef.current = new THREE.Points(midGeo, midMat)
    scene.add(midFieldRef.current)

    // ─── LAYER 3: SURFACE SPARKS ────────────────────────────
    // Tiny, fast, sharp signal-yellow sparks
    // These scatter away from the cursor
    const sparkCount = 200
    const sparkPositions = new Float32Array(sparkCount * 3)
    const sparkVelocities = new Float32Array(sparkCount * 3)
    const sparkBasePositions = new Float32Array(sparkCount * 3)

    for (let i = 0; i < sparkCount; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 14
      sparkPositions[i * 3]     = x
      sparkPositions[i * 3 + 1] = y
      sparkPositions[i * 3 + 2] = 0
      sparkBasePositions[i * 3]     = x
      sparkBasePositions[i * 3 + 1] = y
      sparkBasePositions[i * 3 + 2] = 0
      sparkVelocities[i * 3]     = 0
      sparkVelocities[i * 3 + 1] = 0
      sparkVelocities[i * 3 + 2] = 0
    }

    const sparkGeo = new THREE.BufferGeometry()
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3))

    const sparkMat = new THREE.PointsMaterial({
      color: 0xE8FF47, // signal yellow
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })

    surfaceSparkRef.current = new THREE.Points(sparkGeo, sparkMat)
    scene.add(surfaceSparkRef.current)

    // ─── MOUSE TRACKING ─────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // ─── RESIZE ─────────────────────────────────────────────
    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current) return
      const w = window.innerWidth
      const h = window.innerHeight
      rendererRef.current.setSize(w, h)
      cameraRef.current.aspect = w / h
      cameraRef.current.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    // ─── ANIMATION LOOP ─────────────────────────────────────
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      timeRef.current += 0.016 // ~60fps delta

      const t = timeRef.current

      // Update deep field time
      if (deepFieldRef.current) {
        const mat = deepFieldRef.current.material as THREE.ShaderMaterial
        mat.uniforms.uTime.value = t
      }

      // Update mid field time + scroll
      if (midFieldRef.current) {
        const mat = midFieldRef.current.material as THREE.ShaderMaterial
        mat.uniforms.uTime.value = t
        mat.uniforms.uScrollProgress.value = scrollProgress
        // Increase opacity during superschool peak (scroll 0.78–0.86)
        const isSuperschool = scrollProgress > 0.78 && scrollProgress < 0.86
        const targetOpacity = isSuperschool ? 0.28 : 0.18
        mat.uniforms.uOpacity.value += (targetOpacity - mat.uniforms.uOpacity.value) * 0.05
      }

      // Cursor scatter for surface sparks
      if (surfaceSparkRef.current) {
        const positions = surfaceSparkRef.current.geometry.attributes.position.array as Float32Array
        const mx = mouseRef.current.x * 10
        const my = mouseRef.current.y * 7
        const scatterRadius = 1.5

        for (let i = 0; i < sparkCount; i++) {
          const bx = sparkBasePositions[i * 3]
          const by = sparkBasePositions[i * 3 + 1]

          // Drift base positions slowly
          sparkBasePositions[i * 3]     = bx + Math.sin(t * 0.2 + i * 0.5) * 0.005
          sparkBasePositions[i * 3 + 1] = by + Math.cos(t * 0.15 + i * 0.3) * 0.005

          // Wrap
          sparkBasePositions[i * 3]     = ((sparkBasePositions[i * 3] + 10) % 20) - 10
          sparkBasePositions[i * 3 + 1] = ((sparkBasePositions[i * 3 + 1] + 7) % 14) - 7

          // Cursor repulsion
          const dx = sparkBasePositions[i * 3] - mx
          const dy = sparkBasePositions[i * 3 + 1] - my
          const dist = Math.sqrt(dx * dx + dy * dy)

          let fx = 0, fy = 0
          if (dist < scatterRadius) {
            const force = (1 - dist / scatterRadius) * 0.08
            fx = (dx / dist) * force
            fy = (dy / dist) * force
          }

          sparkVelocities[i * 3]     = sparkVelocities[i * 3] * 0.88 + fx
          sparkVelocities[i * 3 + 1] = sparkVelocities[i * 3 + 1] * 0.88 + fy

          // Return to base when no force
          const returnForce = 0.015
          sparkVelocities[i * 3]     += (sparkBasePositions[i * 3] - positions[i * 3]) * returnForce
          sparkVelocities[i * 3 + 1] += (sparkBasePositions[i * 3 + 1] - positions[i * 3 + 1]) * returnForce

          positions[i * 3]     += sparkVelocities[i * 3]
          positions[i * 3 + 1] += sparkVelocities[i * 3 + 1]
        }
        surfaceSparkRef.current.geometry.attributes.position.needsUpdate = true
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, []) // Only run once on mount

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    />
  )
}
```

---

## CUSTOM CURSOR — components/cursor/CustomCursor.tsx

```typescript
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

  const ringSize = cursorState === 'button-hover' ? 0  // ring becomes button outline separately
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
```

---

## NAVIGATION — components/nav/Nav.tsx

```typescript
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface NavProps {
  scrollProgress: number
}

export default function Nav({ scrollProgress }: NavProps) {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Nav enters with page load — after 2s opening void sequence
    if (!navRef.current) return
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 2.2 }
    )
  }, [])

  // Determine if over light section (arrival scene 0.93+)
  const isLight = scrollProgress >= 0.93

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 20,
    left: 40,
    right: 40,
    height: 52,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    pointerEvents: 'all',
    willChange: 'background, border-color',
    transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
    // Dynamic glass based on section
    background: isLight
      ? 'rgba(240, 240, 245, 0.80)'
      : 'rgba(16, 17, 26, 0.50)',
    backdropFilter: 'blur(60px) saturate(200%) brightness(115%)',
    WebkitBackdropFilter: 'blur(60px) saturate(200%) brightness(115%)',
    borderTop: `1px solid ${isLight ? 'rgba(7,8,12,0.08)' : 'rgba(232,255,71,0.18)'}`,
    borderLeft: `1px solid ${isLight ? 'rgba(7,8,12,0.05)' : 'rgba(232,255,71,0.10)'}`,
    borderRight: `1px solid ${isLight ? 'rgba(7,8,12,0.04)' : 'rgba(232,255,71,0.06)'}`,
    borderBottom: `1px solid ${isLight ? 'rgba(7,8,12,0.04)' : 'rgba(7,8,12,0.80)'}`,
    boxShadow: isLight
      ? '0 8px 32px rgba(7,8,12,0.06), inset 0 1px 0 rgba(255,255,255,0.9)'
      : '0 0 0 0.5px rgba(232,255,71,0.06), 0 20px 60px rgba(7,8,12,0.6), inset 0 1px 0 rgba(232,255,71,0.10)',
  }

  const linkColor = isLight ? '#07080C' : '#F0F0F5'
  const linkStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: '0.78rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: linkColor,
    textDecoration: 'none',
    opacity: 0.7,
    transition: 'opacity 0.2s ease',
    cursor: 'none',
  }

  const ctaStyle: React.CSSProperties = {
    background: '#FF6B35',  // plasma — consistent across all states
    color: '#07080C',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: '0.78rem',
    letterSpacing: '0.04em',
    padding: '8px 20px',
    borderRadius: 100,
    border: 'none',
    cursor: 'none',
    transition: 'background 0.2s ease, transform 0.2s ease',
  }

  return (
    <div id="nav-layer">
      <div ref={navRef} style={navStyle} data-cursor="nav">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 8, height: 8,
            borderRadius: 2,
            background: '#E8FF47',
            display: 'inline-block',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.2rem',
            letterSpacing: '0.06em',
            color: linkColor,
            transition: 'color 0.5s ease',
          }}>
            CLASSESS
          </span>
        </div>

        {/* Center links */}
        <nav style={{ display: 'flex', gap: 32 }}>
          {['The Platform', 'Elite Schools', 'Invest', 'Our Vision'].map((link) => (
            <a key={link} href="#" style={linkStyle}>{link}</a>
          ))}
        </nav>

        {/* CTA */}
        <button style={ctaStyle} data-cursor="button">
          Elevate Your School
        </button>
      </div>
    </div>
  )
}
```
# CLASSESS BUILD DOCUMENT — PART 2
## Scenes, Scroll Architecture, Outcome Cards, Main Page

---

## SCROLL ARCHITECTURE — app/page.tsx

This is the master orchestrator. One tall scroll container. One sticky viewport. GSAP ScrollTrigger drives everything.

```typescript
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
      // Note: The plasma glow is a radial gradient overlay handled in SceneSuperschool
      // BG layer goes to deep dark for contrast
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
```

---

## SCENE BASE PATTERN — All scenes follow this exact pattern

Every scene component receives `isActive` and `scrollProgress`.
When not active: `opacity: 0, pointerEvents: 'none'`
When active: fades in, animates via GSAP ScrollTrigger

```typescript
// Base interface all scene components implement
interface SceneProps {
  isActive: boolean
  scrollProgress: number  // global 0–1
}
```

---

## SCENE 1 — SceneOpening.tsx
### Scroll: 0% → 8%
### The void. The line. The wordmark.

```typescript
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function SceneOpening({ isActive, scrollProgress }: SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    // Page load sequence — runs once, not scroll-driven
    const tl = gsap.timeline({ delay: 1.2 })  // 1.2s void silence first

    // Signal line draws from left to right
    tl.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.6, ease: 'power2.inOut' }
    )

    // Letters assemble from random nearby positions to final position
    const letters = wordRef.current?.querySelectorAll('.letter')
    if (letters) {
      letters.forEach((letter, i) => {
        const randomX = (Math.random() - 0.5) * 40
        const randomY = (Math.random() - 0.5) * 30
        gsap.fromTo(letter,
          { x: randomX, y: randomY, opacity: 0 },
          {
            x: 0, y: 0, opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            delay: 1.8 + i * 0.04,
          }
        )
      })
    }

    // Sub-line after wordmark settles
    tl.fromTo('.opening-sub',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '+=0.3'
    )

  }, [])

  // Scene fades out as user scrolls into identity scene
  const sceneOpacity = isActive
    ? 1
    : scrollProgress < 0.08
      ? 1
      : Math.max(0, 1 - (scrollProgress - 0.08) / 0.04)

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'all' : 'none',
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Signal line — horizontal, full viewport width */}
      <div
        ref={lineRef}
        className="signal-line"
        style={{
          position: 'absolute',
          top: '48%',
          left: 0,
          right: 0,
          height: 1,
          background: '#E8FF47',
          transform: 'scaleX(0)',
          transformOrigin: 'left center',
        }}
      />

      {/* CLASSESS wordmark — each letter is its own span for individual animation */}
      <div
        ref={wordRef}
        style={{
          display: 'flex',
          gap: '0.02em',
          position: 'relative',
          zIndex: 2,
          marginTop: 8,
        }}
      >
        {'CLASSESS'.split('').map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 12vw, 12rem)',
              color: '#F0F0F5',
              lineHeight: 1,
              letterSpacing: '0.04em',
              display: 'inline-block',
              // Chromatic aberration effect via text-shadow
              textShadow: '1px 0 0 rgba(0,255,179,0.4), -1px 0 0 rgba(255,107,53,0.3)',
              opacity: 0, // starts invisible, animated in useEffect
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Sub-line */}
      <p
        className="opening-sub type-label"
        style={{
          marginTop: 28,
          color: '#6B7280',
          letterSpacing: '0.2em',
          fontSize: '0.72rem',
          opacity: 0,
          textAlign: 'center',
        }}
      >
        EXTRAORDINARY SCHOOLS RUN ON CLASSESS
      </p>

      {/* Scroll indicator — breathing vertical line */}
      <div
        className="opening-sub"
        style={{
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: 0,
        }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6B7280', textTransform: 'uppercase' }}>
          SCROLL
        </span>
        <div style={{
          width: 1,
          height: 50,
          background: 'linear-gradient(to bottom, #6B7280, transparent)',
          animation: 'breathe 2s ease-in-out infinite',
        }} />
      </div>
    </div>
  )
}
```

---

## SCENE 3 — SceneStatement.tsx
### Scroll: 18% → 30%
### ELEVATED + the four lines

```typescript
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function SceneStatement({ isActive, scrollProgress }: SceneProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // ELEVATED arrives at 18% scroll
    gsap.fromTo('.statement-elevated',
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1, scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '18% top',
          end: '22% top',
          scrub: 1,
        }
      }
    )

    // Signal line through ELEVATED
    gsap.fromTo('.elevated-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '20% top',
          end: '23% top',
          scrub: 1,
        }
      }
    )

    // Each stakeholder line — staggered by scroll position
    const lines = [
      '.line-students',
      '.line-teachers',
      '.line-leaders',
      '.line-parents',
    ]

    lines.forEach((selector, i) => {
      const startPct = 22 + i * 2
      gsap.fromTo(selector,
        { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${startPct}% top`,
            end: `${startPct + 2}% top`,
            scrub: 1,
          }
        }
      )
    })

    // Hero cards bloom
    gsap.fromTo('.hero-card',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '24% top',
          end: '27% top',
          scrub: 1,
        }
      }
    )

  }, [])

  const show = scrollProgress >= 0.18 && scrollProgress < 0.30
  const opacity = show ? 1 : 0

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      opacity,
      pointerEvents: show ? 'all' : 'none',
      transition: 'opacity 0.5s ease',
    }}>

      {/* ELEVATED — full viewport presence */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <h1
          className="statement-elevated type-display"
          style={{
            fontSize: 'clamp(6rem, 16vw, 18rem)',
            color: '#F0F0F5',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            position: 'relative',
            textShadow: '1px 0 0 rgba(0,255,179,0.2), -1px 0 0 rgba(255,107,53,0.15)',
          }}
        >
          ELEVATED
        </h1>

        {/* Signal line dissecting ELEVATED */}
        <div
          className="elevated-line signal-line"
          style={{
            position: 'absolute',
            top: '54%',
            left: '-5vw',
            right: '-5vw',
            height: 1,
            background: '#E8FF47',
            transformOrigin: 'left center',
          }}
        />
      </div>

      {/* Four stakeholder lines — alternating alignment */}
      <div style={{
        marginTop: 'clamp(2rem, 4vw, 4rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        width: '100%',
        maxWidth: 800,
        padding: '0 40px',
      }}>
        {[
          { text: 'Every extraordinary student with precise direction.', align: 'flex-start', selector: 'line-students' },
          { text: 'Every world-class teacher with unrivalled leverage.', align: 'center', selector: 'line-teachers' },
          { text: 'Every visionary leader with absolute clarity.', align: 'flex-end', selector: 'line-leaders' },
          { text: 'Every informed parent with complete confidence.', align: 'center', selector: 'line-parents' },
        ].map(({ text, align, selector }) => (
          <p
            key={selector}
            className={`${selector} type-body`}
            style={{
              fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)',
              color: '#6B7280',
              alignSelf: align as React.CSSProperties['alignSelf'],
              textAlign: align === 'flex-start' ? 'left' : align === 'flex-end' ? 'right' : 'center',
              maxWidth: 520,
            }}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Floating hero outcome cards */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}>
        <div className="hero-card" style={{ position: 'absolute', top: '18%', left: '8%' }}>
          <OutcomeCard
            icon="↑"
            iconColor="#E8FF47"
            primary="Exceptional outcome projected"
            secondary="Aryan · Performing beyond expectation · 91%"
          />
        </div>
        <div className="hero-card" style={{ position: 'absolute', top: '22%', right: '6%' }}>
          <OutcomeCard
            icon="⚡"
            iconColor="#00FFB3"
            primary="World-class preparation delivered"
            secondary="Tomorrow's lessons · Perfected automatically"
          />
        </div>
        <div className="hero-card" style={{ position: 'absolute', bottom: '28%', left: '5%' }}>
          <OutcomeCard
            icon="✓"
            iconColor="#00FFB3"
            primary="Outstanding growth this term"
            secondary="+18% beyond projected trajectory ↑"
          />
        </div>
        <div className="hero-card" style={{ position: 'absolute', bottom: '22%', right: '10%' }}>
          <OutcomeCard
            icon="🏫"
            iconColor="#E8FF47"
            primary="Institutional excellence, rising"
            secondary="School-wide performance ↑ 22% above last term"
          />
        </div>
      </div>

    </div>
  )
}
```

---

## SCENE 5/6/7 — PPE Scenes Pattern (Prediction, Prevention, Execution)

All three follow the exact same pattern. Only the word, color, copy, and cards change.

```typescript
// ScenePrediction.tsx — Scroll 42%–52%

'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

interface SceneProps { isActive: boolean; scrollProgress: number }

export default function ScenePrediction({ isActive, scrollProgress }: SceneProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Word crystallizes — letters assemble outside-in
    // P and N first, then working inward to center C
    const letterOrder = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5]
    const letters = document.querySelectorAll('.prediction-letter')

    letterOrder.forEach((letterIndex, animOrder) => {
      if (!letters[letterIndex]) return
      gsap.fromTo(letters[letterIndex],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${42 + animOrder * 0.5}% top`,
            end: `${44 + animOrder * 0.5}% top`,
            scrub: 1,
          }
        }
      )
    })

    // Signal line draws across at 45% scroll
    gsap.fromTo('.prediction-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '45% top',
          end: '47% top',
          scrub: 1,
        }
      }
    )

    // Sub-copy fades in at bottom
    gsap.fromTo('.prediction-copy',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '46% top',
          end: '49% top',
          scrub: 1,
        }
      }
    )

    // Cards emerge from right edge
    gsap.fromTo('.prediction-card',
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '47% top',
          end: '51% top',
          scrub: 1,
        }
      }
    )

    // Ghost transition — PREDICTION scales up and drops opacity as PREVENTION arrives
    gsap.fromTo('.prediction-word',
      { scale: 1, opacity: 1 },
      {
        scale: 1.08, opacity: 0.04,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '50% top',
          end: '54% top',
          scrub: 1,
        }
      }
    )

  }, [])

  const show = scrollProgress >= 0.40 && scrollProgress < 0.56
  const opacity = show
    ? scrollProgress < 0.54 ? 1 : Math.max(0.04, 1 - (scrollProgress - 0.54) / 0.04)
    : 0

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity,
      pointerEvents: isActive ? 'all' : 'none',
    }}>

      {/* PREDICTION — viewport-spanning word */}
      <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
        <div
          className="prediction-word"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.01em',
          }}
        >
          {'PREDICTION'.split('').map((char, i) => (
            <span
              key={i}
              className="prediction-letter type-display"
              style={{
                fontSize: 'clamp(4rem, 13vw, 15rem)',
                color: '#F0F0F5',
                lineHeight: 0.88,
                display: 'inline-block',
                fontStyle: 'italic',
                textShadow: '1px 0 0 rgba(0,255,179,0.3), -1px 0 0 rgba(0,255,179,0.1)',
                opacity: 0,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Signal line through word */}
        <div
          className="prediction-line signal-line"
          style={{
            position: 'absolute',
            top: '52%',
            left: '-10vw',
            right: '-10vw',
            height: 1,
            background: '#00FFB3', // aurora for prediction
          }}
        />
      </div>

      {/* Sub-copy — bottom of screen */}
      <div
        className="prediction-copy"
        style={{
          position: 'absolute',
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: 'center',
        }}
      >
        <p className="type-label" style={{ color: '#00FFB3', marginBottom: 8 }}>
          PREDICTION
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
          color: '#6B7280',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Before a single student falls behind — Classess already knows.
          Before a pattern becomes a problem — your school already has the answer.
        </p>
      </div>

      {/* Cards emerge from right edge */}
      <div style={{
        position: 'absolute',
        right: '6%',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        pointerEvents: 'none',
      }}>
        <div className="prediction-card">
          <OutcomeCard
            icon="↑"
            iconColor="#00FFB3"
            primary="Exceptional outcome projected"
            secondary="Aryan · Final score: 91% · 14 weeks out"
            accentColor="#00FFB3"
          />
        </div>
        <div className="prediction-card">
          <OutcomeCard
            icon="📍"
            iconColor="#E8FF47"
            primary="Precision intelligence activated"
            secondary="Learning gap identified and resolved · Week 3"
            accentColor="#E8FF47"
          />
        </div>
      </div>

    </div>
  )
}

// ScenePrevention.tsx — Scroll 52%–60%
// EXACT SAME STRUCTURE — change:
// Word: 'PREVENTION'
// className prefix: 'prevention-'
// Scroll positions: 52%–60%
// Line color: '#E8FF47' (signal yellow)
// Cards: prevention outcome cards (see card list below)
// Sub-copy: "The world's highest-performing schools share one defining quality. They never react. They anticipate. Classess elevates every school to that standard."

// SceneExecution.tsx — Scroll 60%–68%
// Word: 'EXECUTION'
// className prefix: 'execution-'
// Scroll positions: 60%–68%
// Line color: '#FF6B35' (plasma)
// Cards: execution outcome cards
// Sub-copy: "Intelligence without execution is just potential. Classess transforms potential into extraordinary, measurable performance. Seamlessly. Automatically. Without exception."
```

---

## OUTCOME CARD — components/cards/OutcomeCard.tsx

The floating glass outcome card. Used throughout the entire experience.

```typescript
'use client'

interface OutcomeCardProps {
  icon: string
  iconColor: string
  primary: string
  secondary: string
  accentColor?: string        // optional top border accent
  size?: 'sm' | 'md' | 'lg'  // optional size variant
  style?: React.CSSProperties // positional override
  className?: string
}

export default function OutcomeCard({
  icon,
  iconColor,
  primary,
  secondary,
  accentColor = '#E8FF47',
  size = 'md',
  style = {},
  className = '',
}: OutcomeCardProps) {

  const sizes = {
    sm: { padding: '10px 14px', maxWidth: 200, fontSize: '11px', primarySize: '12px' },
    md: { padding: '14px 18px', maxWidth: 250, fontSize: '12px', primarySize: '13px' },
    lg: { padding: '18px 22px', maxWidth: 300, fontSize: '13px', primarySize: '15px' },
  }

  const s = sizes[size]

  return (
    <div
      className={`outcome-card ${className}`}
      data-cursor="card"
      style={{
        // Asymmetric glass borders — physically accurate
        background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)',
        backdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
        borderTop: `1px solid ${accentColor}`,      // accent top border
        borderLeft: '1px solid rgba(255,255,255,0.14)',
        borderRight: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        borderRadius: 14,
        padding: s.padding,
        maxWidth: s.maxWidth,
        boxShadow: '0 0 0 0.5px rgba(255,255,255,0.06), 0 20px 60px rgba(7,8,12,0.4), 0 4px 16px rgba(7,8,12,0.25), inset 0 1px 0 rgba(255,255,255,0.14)',
        // Float animation
        animation: 'float 5s ease-in-out infinite',
        animationDelay: `${Math.random() * 3}s`, // each card floats at different phase
        willChange: 'transform',
        cursor: 'none',
        ...style,
      }}
    >
      {/* Icon row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
      }}>
        <span style={{ color: iconColor, fontSize: 14, lineHeight: 1 }}>{icon}</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: s.primarySize,
          color: '#F0F0F5',
          lineHeight: 1.3,
        }}>
          {primary}
        </span>
      </div>

      {/* Secondary line */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: s.fontSize,
        color: 'rgba(240,240,245,0.55)',
        lineHeight: 1.4,
        paddingLeft: 22,
      }}>
        {secondary}
      </p>
    </div>
  )
}
```

---

## SCENE 8 — SceneConstellation.tsx
### Scroll: 68% → 78%
### 16 cards fall from above and self-organize

```typescript
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

// All 16 outcome cards — final copy
const ALL_CARDS = [
  // Students — signal yellow accent
  { icon: '↑', iconColor: '#E8FF47', accentColor: '#E8FF47', primary: 'Exceptional outcome projected', secondary: 'Aryan · 91% · Performing beyond expectation', group: 'students' },
  { icon: '🎯', iconColor: '#E8FF47', accentColor: '#E8FF47', primary: 'Outstanding growth this term', secondary: '+18% beyond projected trajectory ↑', group: 'students' },
  { icon: '📍', iconColor: '#E8FF47', accentColor: '#E8FF47', primary: 'Precision intelligence activated', secondary: 'Learning gap identified · Resolved · Week 3', group: 'students' },
  { icon: '🧭', iconColor: '#E8FF47', accentColor: '#E8FF47', primary: 'Personal excellence path active', secondary: 'Priya · 14-week trajectory · On course', group: 'students' },

  // Teachers — aurora accent
  { icon: '⚡', iconColor: '#00FFB3', accentColor: '#00FFB3', primary: 'World-class preparation delivered', secondary: "Tomorrow's lessons · Perfected automatically · 11pm", group: 'teachers' },
  { icon: '🕐', iconColor: '#00FFB3', accentColor: '#00FFB3', primary: 'Extraordinary time returned', secondary: 'Reclaimed today · 2hrs 40mins ↑', group: 'teachers' },
  { icon: '✓', iconColor: '#00FFB3', accentColor: '#00FFB3', primary: 'Exceptional feedback delivered at scale', secondary: '38 assessments graded · Personalised feedback sent', group: 'teachers' },
  { icon: '📋', iconColor: '#00FFB3', accentColor: '#00FFB3', primary: 'Intelligent workflow activated', secondary: 'Next 3 priorities · Prepared automatically', group: 'teachers' },

  // Leadership — plasma accent
  { icon: '🏫', iconColor: '#FF6B35', accentColor: '#FF6B35', primary: 'Institutional excellence, rising', secondary: 'School-wide performance ↑ 22% above last term', group: 'leadership' },
  { icon: '👥', iconColor: '#FF6B35', accentColor: '#FF6B35', primary: 'Operational perfection maintained', secondary: 'Period 3 covered · Zero disruption · Automatic', group: 'leadership' },
  { icon: '📊', iconColor: '#FF6B35', accentColor: '#FF6B35', primary: 'Strategic intelligence, ready', secondary: '3 high-impact insights · Awaiting your review', group: 'leadership' },
  { icon: '🔭', iconColor: '#FF6B35', accentColor: '#FF6B35', primary: 'Institutional pattern identified', secondary: 'Resolved before impact · Week 2', group: 'leadership' },

  // Parents — cream/soft accent
  { icon: '✓', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.4)', primary: 'Rohan is excelling', secondary: 'Projected final outcome · 89% · Above target ↑', group: 'parents' },
  { icon: '💬', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.4)', primary: 'Your school, always present', secondary: 'Personal update from Ms. Sharma · Just now', group: 'parents' },
  { icon: '📈', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.4)', primary: 'Complete academic clarity', secondary: 'Progress · Forecast · Direction · Visible', group: 'parents' },
  { icon: '🌟', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.4)', primary: 'Confidence, complete', secondary: 'Informed · Connected · Assured · Always', group: 'parents' },
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

      gsap.fromTo(card,
        {
          y: -200 - Math.random() * 300, // Different heights above viewport
          opacity: 0,
          rotation: (Math.random() - 0.5) * 12,
        },
        {
          y: 0,
          opacity: 1,
          rotation: (Math.random() - 0.5) * 4, // slight tilt at rest
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
          />
        </div>
      ))}
    </div>
  )
}
```

---

## SCENE 9 — SceneSuperschool.tsx
### Scroll: 78% → 86%
### The peak. Editorial italic. Terracotta. The question.

```typescript
'use client'
import { useEffect, useRef } from 'react'
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
          // Subtle glow
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
```

---

## SCENE 10 — SceneGuarantee.tsx
### Scroll: 86% → 93%
### The most important card on the page.

```typescript
'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SceneGuarantee({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.guarantee-card',
      {
        rotateX: 12,
        rotateY: -6,
        opacity: 0,
        y: 40,
        transformPerspective: 1000,
      },
      {
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '87% top',
          end: '90% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.guarantee-sub',
      { opacity: 0, y: 12 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '91% top',
          end: '93% top',
          scrub: 1,
        }
      }
    )

    // Breathing animation
    gsap.to('.guarantee-card', {
      scale: 1.003,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    })

  }, [])

  const show = scrollProgress >= 0.84 && scrollProgress < 0.95
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
    }}>

      {/* Guarantee card */}
      <div
        className="guarantee-card"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)',
          backdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
          borderTop: '1px solid #00FFB3',
          borderLeft: '1px solid rgba(255,255,255,0.14)',
          borderRight: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          borderRadius: 20,
          padding: '40px 48px',
          maxWidth: 520,
          width: '90%',
          boxShadow: '0 0 0 0.5px rgba(0,255,179,0.15), 0 40px 80px rgba(7,8,12,0.5), 0 8px 24px rgba(7,8,12,0.3), inset 0 1px 0 rgba(0,255,179,0.15)',
          opacity: 0,
          textAlign: 'center',
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 24,
          padding: '6px 14px',
          borderRadius: 100,
          border: '1px solid rgba(0,255,179,0.3)',
          background: 'rgba(0,255,179,0.08)',
        }}>
          <span style={{ color: '#00FFB3', fontSize: 12 }}>✓</span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#00FFB3',
          }}>
            The World's Most Confident Guarantee in Education
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          color: '#F0F0F5',
          lineHeight: 1,
          marginBottom: 20,
          letterSpacing: '0.02em',
        }}>
          PERFORMANCE<br />GUARANTEED.
        </h3>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: '1rem',
          color: 'rgba(240,240,245,0.7)',
          lineHeight: 1.75,
          marginBottom: 24,
        }}>
          Classess is so certain of your school's elevation that we offer a complete academic year refund if any student fails to meet or exceed their individually predicted performance.
        </p>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: '0.9rem',
          color: '#F0F0F5',
          letterSpacing: '0.04em',
        }}>
          No conditions. No exceptions. No hesitation.
        </p>
      </div>

      {/* Sub line */}
      <p
        className="guarantee-sub"
        style={{
          marginTop: 24,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: '0.85rem',
          color: '#6B7280',
          textAlign: 'center',
          maxWidth: 420,
          opacity: 0,
        }}
      >
        The only school intelligence platform in the world with the absolute confidence to guarantee your school's extraordinary performance.
      </p>

    </div>
  )
}
```

---

## SCENE 11 — SceneArrival.tsx
### Scroll: 93% → 100%
### The dawn. Clean. Earned. One CTA.

```typescript
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SceneArrival({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.arrival-headline',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '94% top',
          end: '96% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.arrival-sub',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '95.5% top',
          end: '97% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.arrival-cta',
      { opacity: 0, scale: 0.95, y: 16 },
      {
        opacity: 1, scale: 1, y: 0,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '96.5% top',
          end: '98% top',
          scrub: 1,
        }
      }
    )

  }, [])

  const show = scrollProgress >= 0.92
  const opacity = show ? 1 : 0

  return (
    <div
      data-section="light"
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        opacity,
        pointerEvents: isActive ? 'all' : 'none',
        transition: 'opacity 0.8s ease',
        padding: '0 40px',
      }}
    >
      {/* Headline — ink on light, architectural weight */}
      <h2
        className="arrival-headline type-display"
        style={{
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          color: '#07080C',
          lineHeight: 0.88,
          letterSpacing: '0.01em',
          marginBottom: '1.5rem',
          opacity: 0,
        }}
      >
        YOUR SCHOOL'S<br />
        MOST EXTRAORDINARY<br />
        CHAPTER BEGINS HERE.
      </h2>

      {/* Sub-line */}
      <p
        className="arrival-sub type-body"
        style={{
          fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
          color: '#6B7280',
          maxWidth: 520,
          marginBottom: '3rem',
          lineHeight: 1.75,
          opacity: 0,
        }}
      >
        Join the world's most ambitious schools. Operate at the highest level — with absolute clarity, unrivalled intelligence, and the most powerful guarantee in modern education.
      </p>

      {/* The one CTA — plasma/terracotta, echoing Superschool moment */}
      <div
        className="arrival-cta"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          opacity: 0,
        }}
      >
        <button
          data-cursor="button"
          style={{
            background: '#FF6B35',
            color: '#07080C',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: '1rem',
            letterSpacing: '0.04em',
            padding: '18px 48px',
            borderRadius: 100,
            border: 'none',
            cursor: 'none',
            boxShadow: '0 8px 32px rgba(255,107,53,0.35), 0 2px 8px rgba(255,107,53,0.2)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            const t = e.currentTarget
            t.style.transform = 'scale(1.04)'
            t.style.boxShadow = '0 12px 40px rgba(255,107,53,0.5), 0 4px 12px rgba(255,107,53,0.3)'
          }}
          onMouseLeave={e => {
            const t = e.currentTarget
            t.style.transform = 'scale(1)'
            t.style.boxShadow = '0 8px 32px rgba(255,107,53,0.35), 0 2px 8px rgba(255,107,53,0.2)'
          }}
        >
          Elevate Your School
        </button>

        <a
          href="#"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: '0.82rem',
            color: '#6B7280',
            letterSpacing: '0.04em',
            textDecoration: 'none',
            cursor: 'none',
            transition: 'color 0.2s ease',
          }}
        >
          or speak with our school intelligence experts →
        </a>
      </div>

    </div>
  )
}
```
# CLASSESS BUILD DOCUMENT — PART 3
## Footer, Animations CSS, GSAP Setup, Hooks, Layout, Final Instructions

---

## ANIMATIONS CSS — styles/animations.css

```css
/* Float animation — used by all outcome cards */
@keyframes float {
  0%   { transform: translateY(0px) rotate(var(--card-tilt, 0deg)); }
  50%  { transform: translateY(-8px) rotate(var(--card-tilt, 0deg)); }
  100% { transform: translateY(0px) rotate(var(--card-tilt, 0deg)); }
}

/* Breathe — used by scroll indicator and guarantee card */
@keyframes breathe {
  0%, 100% { transform: scaleY(1); opacity: 0.6; }
  50%       { transform: scaleY(1.2); opacity: 1; }
}

/* Signal line draw */
@keyframes drawLine {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* Subtle pulse — nav CTA */
@keyframes ctaPulse {
  0%, 100% { box-shadow: 0 8px 32px rgba(255,107,53,0.35); }
  50%       { box-shadow: 0 8px 40px rgba(255,107,53,0.55); }
}

/* Chromatic shift — wordmark hover */
@keyframes chromaticShift {
  0%, 100% { text-shadow: 1px 0 0 rgba(0,255,179,0.4), -1px 0 0 rgba(255,107,53,0.3); }
  50%       { text-shadow: 2px 0 0 rgba(0,255,179,0.5), -2px 0 0 rgba(255,107,53,0.4); }
}

/* Letter stagger reveal — used in philosophy scene */
@keyframes letterReveal {
  from { opacity: 0; filter: blur(4px); }
  to   { opacity: 1; filter: blur(0px); }
}

/* Card hover lift */
.outcome-card {
  transition: transform 0.3s cubic-bezier(0.23,1,0.32,1),
              box-shadow 0.3s cubic-bezier(0.23,1,0.32,1),
              backdrop-filter 0.3s ease;
}

.outcome-card:hover {
  transform: translateY(-4px) rotate(1deg);
  box-shadow:
    0 0 0 0.5px rgba(255,255,255,0.10),
    0 28px 70px rgba(7,8,12,0.5),
    0 8px 24px rgba(7,8,12,0.3),
    inset 0 1px 0 rgba(255,255,255,0.22);
}

/* Nav link hover */
nav a:hover {
  opacity: 1 !important;
}

/* Signal line animation helper */
.signal-line {
  transform: scaleX(0);
  transform-origin: left center;
}

/* Scrollbar — minimal, matches brand */
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: #07080C; }
::-webkit-scrollbar-thumb { background: rgba(232,255,71,0.3); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: rgba(232,255,71,0.6); }
```

---

## GSAP SETUP — lib/gsap.ts

```typescript
// Centralised GSAP registration — import this once in layout.tsx
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
```

---

## HOOKS

### hooks/useScrollProgress.ts
```typescript
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
```

### hooks/useMagneticButton.ts
```typescript
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
```

---

## LAYOUT — app/layout.tsx

```typescript
import type { Metadata } from 'next'
import './globals.css'
import '../styles/animations.css'
import { registerGSAP } from '@/lib/gsap'

export const metadata: Metadata = {
  title: 'Classess — The World\'s Most Advanced School Intelligence Platform',
  description: 'Extraordinary schools run on Classess. Predictive intelligence, seamless execution, and the world\'s most confident performance guarantee.',
  keywords: 'school intelligence platform, AI education, K-12, predictive analytics, school performance',
  openGraph: {
    title: 'Classess — Extraordinary Schools Run On Classess',
    description: 'The world\'s most advanced school intelligence platform. Prediction. Prevention. Execution. Guaranteed.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

---

## SCENE 4 — ScenePhilosophy.tsx
### Scroll: 30% → 42%
### The circle. The philosophical conviction moment.

```typescript
'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScenePhilosophy({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Circle draws itself — SVG stroke dashoffset animation
    gsap.fromTo('.philosophy-circle',
      { strokeDashoffset: 1200 },
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
            strokeDasharray="1382"  /* 2 * PI * 220 */
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
```

---

## SCENE 2 — SceneIdentity.tsx
### Scroll: 8% → 18%
### CLASSESS letters separate. Nav forms. Manifesto assembles.

```typescript
'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SceneIdentity({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

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

  const letterStyle = (extraClass: string): React.CSSProperties => ({
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(5rem, 14vw, 16rem)',
    color: '#F0F0F5',
    lineHeight: 0.88,
    display: 'inline-block',
    willChange: 'transform',
    textShadow: '1px 0 0 rgba(0,255,179,0.25), -1px 0 0 rgba(255,107,53,0.2)',
  })

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
          <span key={cls} className={cls} style={letterStyle(cls)}>{char}</span>
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
```

---

## FOOTER — components/footer/Footer.tsx

```typescript
export default function Footer() {
  const links = {
    Platform: ['Predictive Intelligence', 'Student Outcomes', 'Teacher Leverage', 'Admin Intelligence', 'Parent Portal', 'The Guarantee'],
    Schools: ['For K-12 Schools', 'Elite Schools India', 'Elite Schools USA', 'Book a Demo', 'Partnership Enquiry'],
    Company: ['Our Vision', 'About Classess', 'Dot eVentures', 'Careers', 'Press'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Data Protection', 'FERPA Compliance', 'Student Privacy Pledge'],
  }

  return (
    <footer style={{
      background: '#07080C',
      borderTop: '1px solid #E8FF47',
      padding: '60px 80px 40px',
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Top row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr repeat(4, 1fr)',
        gap: 48,
        marginBottom: 60,
      }}>

        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: '#E8FF47', display: 'inline-block' }} />
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.4rem',
              letterSpacing: '0.06em',
              color: '#F0F0F5',
            }}>
              CLASSESS
            </span>
          </div>
          <p style={{
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6B7280',
            lineHeight: 1.6,
            marginBottom: 24,
          }}>
            Extraordinary Schools.<br />
            Extraordinary Outcomes.<br />
            Guaranteed.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#3D3D3D' }}>
            Prediction. Prevention. Execution.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <h4 style={{
              fontSize: '0.65rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E8FF47',
              marginBottom: 20,
              fontWeight: 500,
            }}>
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map(item => (
                <li key={item}>
                  <a href="#" style={{
                    fontSize: '0.8rem',
                    color: '#6B7280',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    cursor: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F0F0F5')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div style={{
        borderTop: '1px solid rgba(240,240,245,0.06)',
        paddingTop: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <p style={{ fontSize: '0.72rem', color: '#3D3D3D' }}>
          © 2025 Classess · Dot eVentures Private Limited · Hyderabad, India
        </p>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: '#3D3D3D',
        }}>
          The World's Most Advanced School Intelligence Platform
        </p>
      </div>

    </footer>
  )
}
```

---

## COMPLETE OUTCOME CARDS REFERENCE

All cards used across the entire experience. Copy is final and approved.

```typescript
// STUDENT CARDS
export const STUDENT_CARDS = [
  { icon: '↑', iconColor: '#E8FF47', accentColor: '#E8FF47',
    primary: 'Exceptional outcome projected',
    secondary: 'Aryan · 91% · Performing beyond expectation' },

  { icon: '🎯', iconColor: '#E8FF47', accentColor: '#E8FF47',
    primary: 'Outstanding growth this term',
    secondary: '+18% beyond projected trajectory ↑' },

  { icon: '📍', iconColor: '#E8FF47', accentColor: '#E8FF47',
    primary: 'Precision intelligence activated',
    secondary: 'Learning gap identified · Resolved · Week 3' },

  { icon: '🧭', iconColor: '#E8FF47', accentColor: '#E8FF47',
    primary: 'Personal excellence path active',
    secondary: 'Priya · 14-week trajectory · On course' },
]

// TEACHER CARDS
export const TEACHER_CARDS = [
  { icon: '⚡', iconColor: '#00FFB3', accentColor: '#00FFB3',
    primary: 'World-class preparation delivered',
    secondary: "Tomorrow's lessons · Perfected automatically · 11pm" },

  { icon: '🕐', iconColor: '#00FFB3', accentColor: '#00FFB3',
    primary: 'Extraordinary time returned',
    secondary: 'Reclaimed today · 2hrs 40mins ↑' },

  { icon: '✓', iconColor: '#00FFB3', accentColor: '#00FFB3',
    primary: 'Exceptional feedback delivered at scale',
    secondary: '38 assessments graded · Personalised feedback sent' },

  { icon: '📋', iconColor: '#00FFB3', accentColor: '#00FFB3',
    primary: 'Intelligent workflow activated',
    secondary: 'Next 3 priorities · Prepared automatically' },
]

// LEADERSHIP CARDS
export const LEADERSHIP_CARDS = [
  { icon: '🏫', iconColor: '#FF6B35', accentColor: '#FF6B35',
    primary: 'Institutional excellence, rising',
    secondary: 'School-wide performance ↑ 22% above last term' },

  { icon: '👥', iconColor: '#FF6B35', accentColor: '#FF6B35',
    primary: 'Operational perfection maintained',
    secondary: 'Period 3 covered · Zero disruption · Automatic' },

  { icon: '📊', iconColor: '#FF6B35', accentColor: '#FF6B35',
    primary: 'Strategic intelligence, ready',
    secondary: '3 high-impact insights · Awaiting your review' },

  { icon: '🔭', iconColor: '#FF6B35', accentColor: '#FF6B35',
    primary: 'Institutional pattern identified',
    secondary: 'Resolved before impact · Week 2' },
]

// PARENT CARDS
export const PARENT_CARDS = [
  { icon: '✓', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.35)',
    primary: 'Rohan is excelling',
    secondary: 'Projected final outcome · 89% · Above target ↑' },

  { icon: '💬', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.35)',
    primary: 'Your school, always present',
    secondary: 'Personal update from Ms. Sharma · Just now' },

  { icon: '📈', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.35)',
    primary: 'Complete academic clarity',
    secondary: 'Progress · Forecast · Direction · Visible' },

  { icon: '🌟', iconColor: '#F0F0F5', accentColor: 'rgba(240,240,245,0.35)',
    primary: 'Confidence, complete',
    secondary: 'Informed · Connected · Assured · Always' },
]
```

---

## PREVENTION SCENE — Full Implementation

```typescript
// ScenePrevention.tsx — Scroll 52%–60%

'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

export default function ScenePrevention({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const letterOrder = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5]
    const letters = document.querySelectorAll('.prevention-letter')

    letterOrder.forEach((letterIndex, animOrder) => {
      if (!letters[letterIndex]) return
      gsap.fromTo(letters[letterIndex],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: '#scroll-container',
            start: `${52 + animOrder * 0.4}% top`,
            end: `${54 + animOrder * 0.4}% top`,
            scrub: 1,
          }
        }
      )
    })

    gsap.fromTo('.prevention-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '55% top',
          end: '57% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.prevention-copy',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '56% top',
          end: '58% top',
          scrub: 1,
        }
      }
    )

    gsap.fromTo('.prevention-card',
      { opacity: 0, x: -60 },  // Cards come from LEFT this time — alternating
      {
        opacity: 1, x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: '57% top',
          end: '59% top',
          scrub: 1,
        }
      }
    )

    // Ghost transition
    gsap.to('.prevention-word', {
      scale: 1.08, opacity: 0.04,
      scrollTrigger: {
        trigger: '#scroll-container',
        start: '58% top',
        end: '62% top',
        scrub: 1,
      }
    })

  }, [])

  const show = scrollProgress >= 0.50 && scrollProgress < 0.64
  const opacity = show
    ? scrollProgress < 0.62 ? 1 : Math.max(0.04, 1 - (scrollProgress - 0.62) / 0.04)
    : 0

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity, pointerEvents: isActive ? 'all' : 'none',
    }}>
      <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
        <div className="prevention-word" style={{ display: 'flex', justifyContent: 'center', gap: '0.01em' }}>
          {'PREVENTION'.split('').map((char, i) => (
            <span key={i} className="prevention-letter type-display" style={{
              fontSize: 'clamp(4rem, 12vw, 14rem)', color: '#F0F0F5',
              lineHeight: 0.88, fontStyle: 'italic', display: 'inline-block',
              textShadow: '1px 0 0 rgba(232,255,71,0.3), -1px 0 0 rgba(232,255,71,0.1)',
              opacity: 0,
            }}>
              {char}
            </span>
          ))}
        </div>
        <div className="prevention-line signal-line" style={{
          position: 'absolute', top: '52%', left: '-10vw', right: '-10vw',
          height: 1, background: '#E8FF47',
        }} />
      </div>

      <div className="prevention-copy" style={{
        position: 'absolute', bottom: 60, left: 0, right: 0, textAlign: 'center', opacity: 0,
      }}>
        <p className="type-label" style={{ color: '#E8FF47', marginBottom: 8 }}>PREVENTION</p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
          fontSize: 'clamp(0.85rem, 1.3vw, 1rem)', color: '#6B7280',
          maxWidth: 600, margin: '0 auto', lineHeight: 1.7,
        }}>
          The world's highest-performing schools share one defining quality. They never react. They anticipate.
          Classess elevates every school to that standard.
        </p>
      </div>

      <div style={{
        position: 'absolute', left: '6%', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: 12, pointerEvents: 'none',
      }}>
        <div className="prevention-card">
          <OutcomeCard icon="🛡" iconColor="#E8FF47" accentColor="#E8FF47"
            primary="Operational perfection maintained"
            secondary="Gap resolved · Before it became visible" />
        </div>
        <div className="prevention-card">
          <OutcomeCard icon="✓" iconColor="#00FFB3" accentColor="#00FFB3"
            primary="Zero reactive decisions this term"
            secondary="Every issue anticipated · Every solution ready" />
        </div>
      </div>
    </div>
  )
}
```

---

## EXECUTION SCENE — Full Implementation

```typescript
// SceneExecution.tsx — Scroll 60%–68%

'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OutcomeCard from '@/components/cards/OutcomeCard'

export default function SceneExecution({ isActive, scrollProgress }: { isActive: boolean; scrollProgress: number }) {

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
            secondary="Everything handled · Automatically · Seamlessly" />
        </div>
        <div className="execution-card">
          <OutcomeCard icon="✓" iconColor="#00FFB3" accentColor="#00FFB3"
            primary="Operational perfection, maintained"
            secondary="Zero gaps · Zero delays · Zero exceptions" />
        </div>
      </div>
    </div>
  )
}
```

---

## CLAUDE CODE — FINAL INSTRUCTIONS

Read this before writing a single line of code.

### The Build Philosophy

This website must feel like it was made by the greatest design studio on earth — applied to school software. Every pixel deliberate. Every animation intentional. Every word carrying weight.

Do not simplify. Do not cut corners. Build every component exactly as specified.

### Critical Rules

1. `reactStrictMode: false` in next.config.js — prevents GSAP double-firing in dev
2. All Three.js / Canvas code must be wrapped in `dynamic(() => import(...), { ssr: false })`
3. ScrollTrigger `scrub` values are intentional — do not change them
4. The scroll container is `1100vh` tall — this is correct and intentional
5. `cursor: none` on body — the custom cursor handles all visual feedback
6. Never add `scroll-behavior: smooth` to html — GSAP ScrollTrigger handles smoothness
7. All scene components are always mounted — only opacity and pointerEvents change
8. The background color journey is driven by a single GSAP timeline on the `#bg-layer` div

### Build Order

1. Install dependencies
2. Set up globals.css and animations.css
3. Build ParticleField.tsx (Three.js) — test in isolation first
4. Build CustomCursor.tsx — test cursor movement and states
5. Build Nav.tsx — test glass adaptation light/dark
6. Build OutcomeCard.tsx — test glass material and float animation
7. Build all Scene components in order 1–11
8. Assemble page.tsx with scroll architecture
9. Build Footer.tsx
10. Full integration test — scroll from 0% to 100%
11. Performance check — target 60fps on mid-range hardware

### Performance Targets

- Initial load: < 3 seconds
- ScrollTrigger updates: < 16ms (60fps)
- Three.js particle loop: < 8ms per frame
- Total bundle: < 400KB gzipped

### If Editorial New font is unavailable

Use `'Playfair Display'` from Google Fonts as direct replacement.
Add to font import: `&family=Playfair+Display:ital,wght@1,400;1,700`
The italic weight at large scale is visually identical in impact.

### Deployment

```bash
npm run build
npx vercel --prod
```

The site will be live. Test at full scroll speed on desktop and mobile.
On mobile: disable custom cursor, use touch scroll, reduce particle count to 60% for performance.

---

## WHAT THIS WEBSITE IS — FINAL STATEMENT

A school platform website that feels like walking into the future.

Dark, atmospheric, alive with particle light. Typography that fills viewports like architecture. Glass cards that float with outcomes. A story told in scroll. A conviction delivered in silence. A guarantee backed by absolute confidence.

The kind of website that makes people forward the URL with one message: *"look at this."*

Built for Classess. For education. For the schools that refuse to be ordinary.
For a father's dream that his son and an AI refused to let be anything less than extraordinary.

Build it exactly as specified. It will be unlike anything the education industry has ever seen.

---

*Document complete. Every component specified. Every animation defined. Every word approved.*
*Zero ambiguity. Zero compromises. Build it.*
