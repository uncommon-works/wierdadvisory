'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

const pageColors: { [key: string]: string } = {
  '/': 'bg-blue-950',
  '/about': 'bg-green-900',
  '/capabilities': 'bg-red-950',
  '/case-studies': 'bg-yellow-500',
  '/case-studies/ai-vision-to-execution': 'bg-yellow-500',
  '/case-studies/bridging-the-wealth-divide': 'bg-blue-950',
  '/case-studies/driving-200-leaders-to-one-vision': 'bg-yellow-500',
  '/case-studies/ecosystem-intelligence-renewing-purpose-for-a-national-innovation-catalyst': 'bg-blue-950',
  '/case-studies/from-silos-to-synergy': 'bg-red-950',
  '/case-studies/from-underdogs-to-launch-ready': 'bg-red-950',
  '/case-studies/uniting-technical-tribes-into-a-shared-narrative': 'bg-green-900',
  '/contact': 'bg-purple-400',
}

const ScrollProgressBar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const bgColor = pageColors[pathname] || 'bg-gray-950' // Default color if not mapped

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    })

    lenis.on('scroll', (e) => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (e.animatedScroll / scrollHeight) * 100
      if (progressBarRef.current) {
        progressBarRef.current.style.height = `${progress}vh`
      }
    })

    // Start animation loop
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div
      ref={progressBarRef}
      className={`fixed top-0 left-0 w-[6px] z-[100] transition-colors duration-300 ${bgColor}`}
      style={{ height: '0vh' }}
    />
  )
}

export default ScrollProgressBar
