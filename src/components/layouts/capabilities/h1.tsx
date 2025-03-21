'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroLayout() {

  const textRef1 = useRef<HTMLHeadingElement | null>(null)
  const textRef2 = useRef<HTMLHeadingElement | null>(null)
  const textRef3 = useRef<HTMLHeadingElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {

    if (
      !textRef1.current ||
      !textRef2.current ||
      !textRef3.current ||
      !containerRef.current ||
      !subtitleRef.current 
    ) return

    const tl = gsap.timeline()
    const mm = gsap.matchMedia()

    const textChildren1 = textRef1.current?.children
    const textChildren2 = textRef2.current?.children
    const textChildren3 = textRef3.current?.children

    mm.add(
      {
        isMobile: "(max-width: 768px)", // Mobile breakpoint
        isDesktop: "(min-width: 769px)", // Desktop breakpoint
      },
      (context) => {

        gsap.set(textChildren1, { 
          y: context.conditions?.isMobile ? "100%" : "150%" 
        })

        gsap.set(textChildren2, { 
          y: context.conditions?.isMobile ? "100%" : "150%" 
        })

        gsap.set(textChildren3, { 
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
          textChildren2, { 
            y: 0, 
            duration: 1, 
            stagger: 0.05, 
            ease: "power4.out",
          },"-=0.5",
        )

        tl.to(
          textChildren3, { 
            y: 0, 
            duration: 1, 
            stagger: 0.05, 
            ease: "power4.out",
          },"-=1.0",
        )

        tl.to(
          textChildren1, { 
            y: 0, 
            duration: 1, 
            stagger: 0.05, 
            ease: "power4.out",
          },"-=1.5",
        )

        tl.to(
          [subtitleRef.current], {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.5,
            ease: "power2.out",
          }, "-=1.0",
        )


        
      },
    )
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center relative bg-white text-red-950 px-8">
      <div className="texmd:text-center space-y-4 md:space-y-8">
        <div ref={containerRef}>
          
          <h1 ref={textRef1} className="hidden sm:inline-block text-3xl md:text-7xl h-[36px] md:h-[86px] overflow-hidden"> 
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

          <h1 ref={textRef2} className="inline-block sm:hidden text-5xl overflow-hidden"> 
            <span className="relative inline-block">Where</span>
          </h1>
          <h1 ref={textRef3} className="inline-block sm:hidden text-5xl overflow-hidden"> 
            <span className="relative inline-block">Weird</span>
            <span className="relative inline-block">&nbsp;</span>
            <span className="relative inline-block">Wins</span>
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
