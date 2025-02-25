'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Head1 from "@/components/layouts/capabilities/h1"
import Sec1 from "@/components/layouts/capabilities/s1"
import Sec2 from "@/components/layouts/capabilities/s2"
import Sec3 from "@/components/layouts/capabilities/s3"
import Sec4 from "@/components/layouts/capabilities/s4"

import Cta from "@/components/layouts/capabilities/cta"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  
  const section1Ref = useRef<HTMLDivElement | null>(null)
  const section2Ref = useRef<HTMLDivElement | null>(null)

  const A1 = useRef<HTMLDivElement | null>(null)
  const A2 = useRef<HTMLDivElement | null>(null)
  const A3 = useRef<HTMLDivElement | null>(null)
  const A4 = useRef<HTMLDivElement | null>(null)
  const A5 = useRef<HTMLDivElement | null>(null)

  const S1 = useRef<HTMLDivElement | null>(null)
  const S2 = useRef<HTMLDivElement | null>(null)

  const wrapper1Ref = useRef<HTMLDivElement | null>(null)
  const wrapper2Ref = useRef<HTMLDivElement | null>(null)
  const wrapper3Ref = useRef<HTMLDivElement | null>(null)
  const wrapper4Ref = useRef<HTMLDivElement | null>(null)
  const wrapper5Ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    if (window.innerWidth < 500) return;

    if (
      !wrapper1Ref.current ||
      !wrapper2Ref.current ||
      !wrapper3Ref.current ||
      !A1.current ||
      !A2.current ||
      !A3.current ||
      !section2Ref.current
    ) return

    
    const ctx = gsap.context(() => {
      
      gsap.to(wrapper1Ref.current, {
        translateY: "100vh",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A1.current, {
        translateY: "-50vh",
      })

      gsap.to(A1.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper1Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A2.current, {
        translateY: "-50vh",
      })

      gsap.to(A2.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A3.current, {
        translateY: "-50vh",
      })

      gsap.to(A3.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper3Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A4.current, {
        translateY: "-50vh",
      })

      gsap.to(A4.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper4Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A5.current, {
        translateY: "-50vh",
      })

      gsap.to(A5.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper5Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

    }, A1)

    return () => ctx.revert()
    
  }, [])



  useEffect(() => {
    
    if (
      !section1Ref.current ||
      !S1.current ||
      !S2.current
    ) return

    const ctx = gsap.context(() => {
      gsap.to(S1.current, {
        scale: 0.65,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      gsap.to(S2.current, {
        autoAlpha: 1,
        trigger: {
          trigger: section1Ref.current,
          duration: 1,
          start: "top top",
          autoAlpha: 0,
          scrub: true,
        },
      })
    }, section1Ref)

    return () => {
      ctx.revert()
    }

  }, [])

  return (
    <main className="text-primary">
      <div ref={section1Ref} className="relative md:min-h-[200vh]">

        <div ref={S1} className="md:sticky top-0 z-10 min-h-[100vh]">
          <Head1 />
        </div>

        <div ref={S2} className="sticky bg-gray-50 top-[100vh] z-20"></div>

        <div ref={section2Ref} className="relative md:h-[450vh] overflow-hidden">
          
          <div ref={wrapper1Ref} className="relative md:h-[150vh] z-10 overflow-hidden">
            <div ref={A1} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
              <Sec1 />
            </div>
          </div>  

          <div ref={wrapper2Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
            <div ref={A2} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
              <Sec2 />
            </div>
          </div>  

          <div ref={wrapper3Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
            <div ref={A3} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
              <Sec3 />
            </div>
          </div>  

          <div ref={wrapper4Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
            <div ref={A4} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
              <Sec4 />
            </div>
          </div>  

          
        </div>  
      </div>
      <Cta />
    </main>
  )
}