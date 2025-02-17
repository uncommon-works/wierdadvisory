'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from "@/components/layouts/(about)/hero"
import About from "@/components/layouts/(about)/about"

import Cta from "@/components/layouts/(home)/cta"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {

  const section1Ref = useRef<HTMLDivElement | null>(null)
  const section2Ref = useRef<HTMLDivElement | null>(null)
  const S1 = useRef<HTMLDivElement | null>(null)
  const S2 = useRef<HTMLDivElement | null>(null)

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
          trigger: section2Ref.current,
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
      <div ref={section1Ref} className="relative min-h-[200vh]">
        <div ref={S1} className="sticky top-0 z-10">
          <Hero />
        </div>
        <div ref={S2} className="sticky bg-gray-50 top-[100vh] z-20">
          <About />
        </div>
        
      </div>
      <div></div>


      <Cta />
    </main>
  )
}