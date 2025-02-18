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

        gsap.set(textChildren, { autoAlpha: 0 }) // init all children
        gsap.set(textChildren[0], { // init 'w'
          y: "130%",
          marginLeft: context.conditions?.isMobile ? "140px" : "300px",
        })
        gsap.set(textChildren[5], { // init "(A)"
          y: "130%",
          marginLeft: context.conditions?.isMobile ? "-72px" : "-145px",
        })

        
        gsap.set([subtitleRef.current, scrollIndicatorRef.current], { // init states for subtitle and scroll indicator
          autoAlpha: 0, y: 24 
        })

        tl.to(containerRef.current, { 
          duration: 1, 
          ease: "power2.inOut" 
        })

        tl.to(
          [textChildren[0], textChildren[5]],{ 
            autoAlpha: 1,
            duration: 0,
          },"-=0.5",
        )

        tl.to(
          [textChildren[0], textChildren[5]],{ 
            y: 0,
            duration: 1, 
            stagger: 0.1,
            ease: "power4.out",
          },"-=0.5",
        )
        
        tl.to(
          [textChildren[0], textChildren[5]],{ 
              
              marginLeft: "0px", 
              duration: 1, 
              ease: "power4.out" 
          }, "+=0.25",
        )

        tl.to(
          textChildren, { 
              autoAlpha: 1, 
              duration: 0.2, 
              stagger: 0.05, 
              ease: "power4.in",
          },"-=0.5",
        )
          
        tl.to(
          [subtitleRef.current, scrollIndicatorRef.current], {
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
    <section className="h-screen flex flex-col items-center justify-center relative bg-white">
      <div className="text-center space-y-4 md:space-y-8">
        <div ref={containerRef}>
          <h1 ref={textRef} className="text-4xl md:text-7xl h-[44px] md:h-[86px] inline-block overflow-hidden"> 
            <span className="relative inline-block">W</span>
            <span>i</span>
            <span>e</span>
            <span>r</span>
            <span>d</span>
            <span className="relative inline-block font-bold">(A)</span>
            <span>d</span>
            <span>v</span>
            <span>i</span>
            <span>s</span>
            <span>o</span>
            <span>r</span>
            <span>y</span>
          </h1>
        </div>
        <p ref={subtitleRef} className="text-xl md:text-3xl mt-4">Strategy For a Weird World.</p>
      </div>
      <div ref={scrollIndicatorRef} className="absolute bottom-12 flex flex-col items-center gap-2">
        <div className="relative w-[28px] h-[50px]">
          <svg
            width="28"
            height="50"
            viewBox="0 0 28 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute text-muted-foreground"
          >
            <rect
              x="1"
              y="1"
              width="26"
              height="40"
              rx="13"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="14"
              y1="10"
              x2="14"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div
            ref={scrollDotRef}
            className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-gray-400 rounded-full"
          />
        </div>
        <div className="text-xs md:text-sm text-muted-foreground">Scroll ↓</div>
      </div>
    </section>
  )
}
