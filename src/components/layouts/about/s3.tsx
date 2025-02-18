'use client'

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
    <section ref={sectionRef} className="relative h-[100vh] py-[30vh] px-6 bg-green-50 text-green-900">
      <div className="grid grid-cols-3 h-full top-0 w-full max-w-[1440px] mx-auto px-6 ">
        <div className="flex flex-col justify-center col-span-2 w-full h-full py-[2rem] space-y-8">
          <div className="max-w-4xl mx-auto flex flex-col relative pl-12 py-8">
            {/* Vertical Line */}
            <div 
              ref={lineRef}
              className="absolute left-0 top-0 w-[4px] h-full bg-green-900 -translate-x-6"
            />

            <div ref={companyRef} className="baskerville text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              Who We Are: W<span className="font-bold">(A)</span>
            </div>

            <p className="text-xl mb-2">Wierd(A)dvisory, or as our friends like to call us, “W(A)”. </p>
            <div ref={phoneticRef} className="flex flex-col items-baseline gap-4 text-xl md:text-2xl text-green-900/60 mb-16">
              <div className="flex items-baseline gap-4">
                <span>[wierd ad-vis-or-y]</span>
                <span className="baskerville italic">noun</span>
              </div>
            </div>

            <div ref={definitionsRef} className="space-y-6 font-medium">
              <div className="definition flex gap-4">
                <span className="text-lg md:text-xl font-medium">1.</span>
                <span className="text-lg md:text-xl">
                  A strategy consultancy bringing craftsmanship back to problem-solving. 
                </span>
              </div>

              <div className="definition flex gap-4">
                <span className="text-lg md:text-xl font-medium">2.</span>
                <span className="text-lg md:text-xl">
                  Where ambitious leaders come when the usual approaches stop working. 
                </span>
              </div>

              <div className="definition flex gap-4">
                <span className="text-lg md:text-xl font-medium">3.</span>
                <span className="text-lg md:text-xl">
                  A collection of curious minds who solve problems others can&apos;t see. 
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
