'use client'

import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { Noto_Emoji } from "next/font/google"

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  dx: number
  dy: number
  size: number
  color: string
}

export function Dots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | null>(null)
  const blurRef = useRef(50) // Reduced initial blur for a cleaner effect

  const createTextPoints = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save()
    const fontSize = Math.min(width * 0.1, 120) // Adjust for better scaling

    // Step 1: Draw with a default font first (prevents missing emoji issue)
    ctx.font = `bold ${fontSize}px sans-serif`
    ctx.fillStyle = '#000000'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    
    const text = '🦝' 
    ctx.fillText(text, width / 2, height / 2)

    // Step 2: Wait for the Noto Emoji font to load
    document.fonts.ready.then(() => {
      ctx.clearRect(0, 0, width, height)
      ctx.font = `bold ${fontSize}px '${notoEmoji.style}', sans-serif`
      ctx.fillText(text, width / 2, height / 2)
    })

    const imageData = ctx.getImageData(0, 0, width, height)
    const pixels = imageData.data
    const points: { x: number; y: number }[] = []

    const density = 1 // Higher density for better shape definition
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < width; x += density) {
        const index = (y * width + x) * 4
        if (pixels[index + 3] > 128) {
          points.push({ x, y })
        }
      }
    }

    ctx.restore()
    return points
  }, [])

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const points = createTextPoints(ctx, canvas.width, canvas.height)
    particlesRef.current = points.map((point) => ({
      x: point.x + (Math.random() - 0.5) * 50, // Keep particles near their target
      y: point.y + (Math.random() - 0.5) * 50,
      targetX: point.x,
      targetY: point.y,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      size: Math.random() * 2 + 1, // Slight size variation
      color: `rgb(69, 10, 10)` // Hardcoded to your desired color
    }))
  }, [createTextPoints])

  const animate = useCallback((isFloating: boolean) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const offscreenCanvas = new OffscreenCanvas(canvas.width, canvas.height)
    const offscreenCtx = offscreenCanvas.getContext('2d')
    if (!offscreenCtx) return

    particlesRef.current.forEach((particle) => {
      if (isFloating) {
        particle.x += particle.dx * 0.5 // Slow down movement
        particle.y += particle.dy * 0.5

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.dx *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.dy *= -1
      } else {
        // Move towards target faster
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y
        particle.dx = dx * 0.1
        particle.dy = dy * 0.1
        particle.x += particle.dx
        particle.y += particle.dy
      }

      offscreenCtx.fillStyle = particle.color
      offscreenCtx.beginPath()
      offscreenCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      offscreenCtx.fill()
    })

    ctx.filter = `blur(${blurRef.current}px)`
    ctx.drawImage(offscreenCanvas, 0, 0)
    ctx.filter = 'none'

    animationFrameRef.current = requestAnimationFrame(() => animate(isFloating))
  }, [])

  useEffect(() => {
    document.fonts.ready.then(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const setCanvasSize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        initParticles()
      }

      setCanvasSize()
      animate(true)

      setTimeout(() => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        animate(false)

        gsap.to(particlesRef.current, {
          duration: 2,
          x: (i) => particlesRef.current[i].targetX,
          y: (i) => particlesRef.current[i].targetY,
          ease: 'power4.out',
        })

        gsap.to(blurRef, {
          current: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      }, 500)

      const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY }
      }

      window.addEventListener('resize', setCanvasSize)
      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('resize', setCanvasSize)
        window.removeEventListener('mousemove', handleMouseMove)
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    })
  }, [initParticles, animate])

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}
