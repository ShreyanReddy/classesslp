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
  const scrollRef = useRef<number>(0)

  // Particle data refs — avoid re-creating geometry each frame
  const deepFieldRef = useRef<THREE.Points | null>(null)
  const midFieldRef = useRef<THREE.Points | null>(null)
  const surfaceSparkRef = useRef<THREE.Points | null>(null)

  // Keep scroll progress in a ref so the animation loop can read it without re-mounting
  useEffect(() => {
    scrollRef.current = scrollProgress
  }, [scrollProgress])

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
    const deepCount = 80
    const deepPositions = new Float32Array(deepCount * 3)
    const deepSizes = new Float32Array(deepCount)
    const deepColors = new Float32Array(deepCount * 3)

    for (let i = 0; i < deepCount; i++) {
      deepPositions[i * 3]     = (Math.random() - 0.5) * 30
      deepPositions[i * 3 + 1] = (Math.random() - 0.5) * 20
      deepPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 8 // behind
      deepSizes[i] = Math.random() * 80 + 40 // 40–120px equivalent

      // Aurora green at low opacity
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
    const midPhase = new Float32Array(midCount)

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
          pos.x += sin(uTime * 0.15 + phase) * 0.8;
          pos.y += cos(uTime * 0.12 + phase * 1.3) * 0.6;
          pos.y += sin(uTime * 0.05) * 1.2;
          pos.x = mod(pos.x + 12.0, 24.0) - 12.0;
          pos.y = mod(pos.y + 8.0, 16.0) - 8.0;
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
    // Tiny, fast, sharp signal-yellow sparks — scatter from cursor
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
      const sp = sparkPositions
      const sb = sparkBasePositions
      const sv = sparkVelocities

      // Update deep field time
      if (deepFieldRef.current) {
        const mat = deepFieldRef.current.material as THREE.ShaderMaterial
        mat.uniforms.uTime.value = t
      }

      // Update mid field time + scroll
      if (midFieldRef.current) {
        const mat = midFieldRef.current.material as THREE.ShaderMaterial
        mat.uniforms.uTime.value = t
        mat.uniforms.uScrollProgress.value = scrollRef.current
        const isSuperschool = scrollRef.current > 0.78 && scrollRef.current < 0.86
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
          const bx = sb[i * 3]
          const by = sb[i * 3 + 1]

          // Drift base positions slowly
          sb[i * 3]     = bx + Math.sin(t * 0.2 + i * 0.5) * 0.005
          sb[i * 3 + 1] = by + Math.cos(t * 0.15 + i * 0.3) * 0.005

          // Wrap
          sb[i * 3]     = ((sb[i * 3] + 10) % 20) - 10
          sb[i * 3 + 1] = ((sb[i * 3 + 1] + 7) % 14) - 7

          // Cursor repulsion
          const dx = sb[i * 3] - mx
          const dy = sb[i * 3 + 1] - my
          const dist = Math.sqrt(dx * dx + dy * dy)

          let fx = 0, fy = 0
          if (dist < scatterRadius && dist > 0) {
            const force = (1 - dist / scatterRadius) * 0.08
            fx = (dx / dist) * force
            fy = (dy / dist) * force
          }

          sv[i * 3]     = sv[i * 3] * 0.88 + fx
          sv[i * 3 + 1] = sv[i * 3 + 1] * 0.88 + fy

          const returnForce = 0.015
          sv[i * 3]     += (sb[i * 3] - sp[i * 3]) * returnForce
          sv[i * 3 + 1] += (sb[i * 3 + 1] - sp[i * 3 + 1]) * returnForce

          sp[i * 3]     += sv[i * 3]
          sp[i * 3 + 1] += sv[i * 3 + 1]

          positions[i * 3]     = sp[i * 3]
          positions[i * 3 + 1] = sp[i * 3 + 1]
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
