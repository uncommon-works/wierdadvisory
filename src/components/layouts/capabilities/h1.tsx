'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroLayout() {

  const textRef = useRef<HTMLHeadingElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null)
  const scrollDotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (
      !scrollIndicatorRef.current ||
      !scrollDotRef.current
    ) { return }

    const tl = gsap.timeline({ repeat: -1 })

    gsap.set(scrollDotRef.current, { 
      autoAlpha: 1,
      y: 0,
    })

    tl.to(scrollDotRef.current, { 
      autoAlpha: 0,
      y: 12,
      duration: 1.5, 
      ease: "power4.out" 
    })
    
      .to(scrollDotRef.current, { 
        y: 0,
        duration: 0.25, 
      })

      .to(scrollDotRef.current, { 
        autoAlpha: 1,
        duration: 1, 
        ease: "power2.out"
      }, "+=0.25")
    
  }, [])


  useEffect(() => {

    if (
      !textRef.current ||
      !containerRef.current ||
      !subtitleRef.current 
    ) return

    const tl = gsap.timeline()
    const mm = gsap.matchMedia()

    const textChildren = textRef.current?.children

    mm.add(
      {
        isMobile: "(max-width: 768px)", // Mobile breakpoint
        isDesktop: "(min-width: 769px)", // Desktop breakpoint
      },
      (context) => {

        gsap.set(textChildren, { 
          y: context.conditions?.isMobile ? "100%" : "150%" 
        })

        gsap.set([subtitleRef.current], { 
          autoAlpha: 0, y: 24 
        })

        tl.to(containerRef.current, { 
          duration: 1, 
          ease: "power2.inOut" 
        })

        tl.to(
          textChildren, { 
            y: 0, 
            duration: 1, 
            stagger: 0.05, 
            ease: "power4.out",
          },"-=0.5",
        )
          
        tl.to(
          [subtitleRef.current], {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.5,
            ease: "power2.out",
          }, "-=0.5",
        )
      },
    )
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center relative bg-white text-red-950 px-8">
      <div className="text-center space-y-4 md:space-y-8">
        <div ref={containerRef}>
          <h1 ref={textRef} className="text-3xl md:text-7xl h-[40px] md:h-[86px] inline-block overflow-hidden"> 
            <span className="relative inline-block">W</span>
            <span className="relative inline-block">h</span>
            <span className="relative inline-block">e</span>
            <span className="relative inline-block">r</span>
            <span className="relative inline-block">e</span>
            <span className="relative inline-block">&nbsp;</span>
            <span className="relative inline-block">W</span>
            <span className="relative inline-block">e</span>
            <span className="relative inline-block">i</span>
            <span className="relative inline-block">r</span>
            <span className="relative inline-block">d</span>
            <span className="relative inline-block">&nbsp;</span>
            <span className="relative inline-block">W</span>
            <span className="relative inline-block">i</span>
            <span className="relative inline-block">n</span>
            <span className="relative inline-block">s</span>
          </h1>
        </div>
        <p ref={subtitleRef} className="text-lg md:text-2xl max-w-3xl mt-4">
          At Wierd(A)dvisory, we seek out the problems that make others nervous - the ones where there isn&apos;t an obvious playbook to follow. We focus on challenges where thinking differently isn&apos;t just helpful—it&apos;s necessary. 
          <br /><br />
          Whether you&apos;re starting something new, stuck because conventional approaches aren&apos;t working, or navigating complexity that doesn&apos;t fit into neat boxes, we help you see a path forward that others miss. 
        </p>
        
      </div>
      
    </section>
  )
}
