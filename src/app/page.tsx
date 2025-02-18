'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// HERO
import Hero from "@/components/layouts/home/h1"

// INTRO SECTIONS
import About from "@/components/layouts/home/about"
import F1 from "@/components/layouts/home/f1"
import Solution from "@/components/layouts/home/solution"

// BODY SECTIONS
import Sec1 from "@/components/layouts/home/s1"
import Sec2 from "@/components/layouts/home/s2"
import Sec3 from '@/components/layouts/home/s3'
import Sec4 from '@/components/layouts/home/s4'

// CTA
import Cta from "@/components/layouts/home/cta"


gsap.registerPlugin(ScrollTrigger)

export default function Page() {



  const section1Ref = useRef<HTMLDivElement | null>(null)
  const section2Ref = useRef<HTMLDivElement | null>(null)
  const section3Ref = useRef<HTMLDivElement | null>(null)
  const S1 = useRef<HTMLDivElement | null>(null)
  const S2 = useRef<HTMLDivElement | null>(null)
  const S3 = useRef<HTMLDivElement | null>(null)  

  const wrapper1Ref = useRef<HTMLDivElement | null>(null)
  const wrapper2Ref = useRef<HTMLDivElement | null>(null)
  const wrapper3Ref = useRef<HTMLDivElement | null>(null)
  const wrapper4Ref = useRef<HTMLDivElement | null>(null)

  const A1 = useRef<HTMLDivElement | null>(null)
  const A2 = useRef<HTMLDivElement | null>(null)
  const A3 = useRef<HTMLDivElement | null>(null)
  const section4Ref = useRef<HTMLDivElement | null>(null)




  useEffect(() => {

    if (
      !wrapper1Ref.current ||
      !wrapper2Ref.current ||
      !wrapper3Ref.current ||
      !wrapper4Ref.current ||
      !A1.current ||
      !A2.current ||
      !A3.current ||
      !section4Ref.current
    ) return

    
    const ctx = gsap.context(() => {
      
      gsap.to(wrapper1Ref.current, {
        translateY: "100vh",
        scrollTrigger: {
          trigger: section4Ref.current,
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
          trigger: wrapper2Ref.current,
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
          trigger: wrapper3Ref.current,
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
          trigger: wrapper4Ref.current,
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
      !section2Ref.current ||
      !section3Ref.current ||
      !S1.current ||
      !S2.current ||
      !S3.current
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

      gsap.to(S3.current, {
        width: "100%",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top -30%",
          end: "bottom 200%",
          scrub: true,
        },
      })

      gsap.to(S3.current, {
        width: "100%",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top -30%",
          end: "bottom 200%",
          scrub: true,
          onUpdate: (self) => {
            // Check if S3 width is fully expanded
            if (self.progress >= 1) {
              gsap.to(S2.current, { backgroundColor: "rgb(191, 219, 254)", duration: 0 })
            } else {
              gsap.to(S2.current, { backgroundColor: "rgb(239, 246, 255)", duration: 0 }) // Reset to original color
            }
          }
        },
      })

      gsap.to(S3.current, {
        scale: 0.75,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      
    })

    return () => {
      ctx.revert()
    }

  }, [])

  return (
    <main className="text-primary">
      <div ref={section1Ref} className="relative min-h-[300vh]">
        <div ref={S1} className="sticky top-0"><Hero /></div>
        <div ref={section2Ref} className="relative bg-white z-10 min-h-[400vh]">
          <div ref={S2} className="sticky top-0 bg-blue-50"><About /></div>
          <div className="absolute inset-0 z-20 h-[400vh]">
            <div ref={S3} className="sticky w-[0%] top-0 h-screen z-30 bg-blue-200 overflow-hidden text-[#051241]">
              <div className="absolute inset-0 w-screen h-screen flex flex-col items-center justify-center "><F1 /></div>
            </div>
          </div>
        </div>
        
        <div ref={section3Ref} className="relative z-10 -mt-[100vh] bg-white">
          <div ref={wrapper1Ref} className="overflow-hidden">
            <Solution />
          </div>
        
          <div ref={section4Ref} className="relative h-[300vh] overflow-hidden">
              
            <div ref={wrapper2Ref} className="relative h-[100vh] z-10 overflow-hidden">
              <div ref={A1} className="relative h-[200vh] -mt-[25vh] z-10">
                <Sec1 />
              </div>
            </div>  

            <div ref={wrapper3Ref} className="relative h-[100vh] z-10 overflow-hidden">
              <div ref={A2} className="relative h-[200vh] -mt-[25vh] z-10">
                <Sec2 />
              </div>
            </div>  

            <div ref={wrapper4Ref} className="relative h-[100vh] z-10 overflow-hidden">
              <div ref={A3} className="relative h-[200vh] -mt-[25vh] z-10">
                <Sec3 />
              </div>
            </div>  
          </div>

        <Sec4 />
        </div>


      </div>
      <Cta />
    </main>
  )
}
