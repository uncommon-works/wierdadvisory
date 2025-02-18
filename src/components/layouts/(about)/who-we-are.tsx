"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function WhoWeAre() {

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const companyRef = useRef<HTMLDivElement | null>(null)
  const phoneticRef = useRef<HTMLDivElement | null>(null)
  const definitionsRef = useRef<HTMLDivElement | null>(null)
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (
      !sectionRef.current
    ) return

    const ctx = gsap.context(() => {
      
      gsap.set([companyRef.current, phoneticRef.current], {
        autoAlpha: 0,
        y: 50,
      })
      gsap.set(".definition", {
        autoAlpha: 0,
        y: 50,
      })
      gsap.set(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top'
      })

      // Timeline for main animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      })

      tl.to(lineRef.current, {
        scaleY: 1,
        duration: 1,
        ease: "power3.inOut",
      })
      .to([companyRef.current, phoneticRef.current], {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }, "-=0.5")

      .to(".definition", {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.05,
      }, "-=1")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6">
      <div className="grid grid-cols-3 h-full top-0 w-full max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col justify-center col-span-2 w-full h-full py-[12rem] space-y-8">
          <div className="max-w-3xl mx-auto flex flex-col relative l-12">
            {/* Vertical Line */}
            <div 
              ref={lineRef}
              className="absolute left-0 top-0 w-[4px] h-full bg-primary -translate-x-12"
            />

            <div ref={companyRef} className="baskerville text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              Wierd(A)dvisory
            </div>

            <div ref={phoneticRef} className="flex items-baseline gap-4 text-xl md:text-2xl text-gray-700 mb-16">
              <span>[wierd ad-vis-or-y]</span>
              <span className="baskerville italic">noun</span>
            </div>

            <div ref={definitionsRef} className="space-y-8">
              <div className="definition flex gap-4">
                <span className="text-lg md:text-xl font-medium">1.</span>
                <span className="text-lg md:text-xl">
                  A strategy consultancy bringing{" "}
                  <span className="highlight text-primary font-medium">craftsmanship</span> back to problem-solving.
                </span>
              </div>

              <div className="definition flex gap-4">
                <span className="text-lg md:text-xl font-medium">2.</span>
                <span className="text-lg md:text-xl">
                  A <span className="highlight text-primary font-medium">trusted partner</span> for executives who value
                  bold thinking and{" "}
                  <span className="underline decoration-2 underline-offset-4">meticulous execution</span>.
                </span>
              </div>

              <div className="definition flex gap-4">
                <span className="text-lg md:text-xl font-medium">3.</span>
                <span className="text-lg md:text-xl">
                  A team of{" "}
                  <span className="highlight text-primary font-medium">interdisciplinary thinkers and doers</span> with
                  a meticulous eye for quality.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-1 col-start-2 h-full" />
      </div>
    </section>
  )
}
