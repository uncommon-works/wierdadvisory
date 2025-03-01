'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

gsap.registerPlugin(ScrollTrigger)

export default function AboutLayout() {

  const words = [
    "How",
    "We",
    "Work"
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const emoji1 = useRef<HTMLDivElement | null>(null)
  const emoji2 = useRef<HTMLDivElement | null>(null)
  const emoji3 = useRef<HTMLDivElement | null>(null)
  const emoji4 = useRef<HTMLDivElement | null>(null)
  const emoji5 = useRef<HTMLDivElement | null>(null)
  const emoji6 = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    if (window.innerWidth < 500) return;

    if (
      !sectionRef.current ||
      !headingRef.current ||
      !textRef.current ||
      !emoji1.current ||
      !emoji2.current ||
      !emoji3.current ||
      !emoji4.current ||
      !emoji5.current ||
      !emoji6.current
    ) {
      return
    }

    const ctx = gsap.context(() => {
      
      gsap.set(sectionRef.current, { })
      gsap.set(
        [
          emoji1.current,
          emoji2.current,
          emoji3.current,
          emoji4.current,
          emoji5.current,
          emoji6.current,
        ],
        { autoAlpha: 0.05 }
      )
      gsap.set(textRef.current, { autoAlpha: 0.05 })

      const fullSpans = headingRef.current?.querySelectorAll('.full') || []
      
      gsap.set(fullSpans, { y: '100%' })

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          toggleActions: 'play reverse play reverse',
        },
      })
        
      .to(fullSpans, {
        y: '0%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
      })
      
      .to([emoji1.current, emoji3.current, emoji4.current, emoji2.current, emoji5.current, emoji6.current], { 
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power4.inOut',
      }, "-=1")

      .to(textRef.current, { 
        autoAlpha: 1 
      }, "-=0.75")

    }, sectionRef)

    return () => ctx.revert()
    
  }, [])

  return (
    <section ref={sectionRef} className="relative h-auto py-[8rem] md:py-0 md:h-[100vh] bg-green-200 text-green-900 ">
      <div className="md:sticky top-0 flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-8">
        
        <div className={`${notoEmoji.variable} font-noto absolute inset-0 text-5xl md:text-7xl select-none`}>
          <div ref={emoji1} className="absolute left-[12%] top-[15%] md:top-[22%]">♟</div>
          <div ref={emoji2} className="absolute left-[43%] top-[8%] md:top-[10%]">🎯</div>
          <div ref={emoji3} className="absolute right-[10%] top-[12%] md:top-[20%]">✍🏻</div>
          <div ref={emoji4} className="absolute left-[10%] bottom-[15%] md:bottom-[20%]">🌐</div>
          <div ref={emoji5} className="absolute left-[42%] md:left-[50%] bottom-[10%]">🌴</div>
          <div ref={emoji6} className="absolute right-[10%] bottom-[15%] md:bottom-[22%]">🛹</div>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-start text-left">
          <h2 ref={headingRef} className="text-4xl md:text-6xl leading-[1.15] max-w-3xl select-none">
            {words.map((word, i) => {
              
              const isBold = word === "Work";

              return (
                <span key={i} className="relative inline-block leading-auto md:pb-1 overflow-hidden">
                  <span className={`faint inline-block opacity-10 ${isBold ? "font-bold" : ""}`}>
                    {word}{i !== words.length - 1 && "\u00A0"}
                  </span>
                  <span className={`full inline-block absolute top-0 left-0 ${isBold ? "font-bold" : ""}`}>
                    {word}{i !== words.length - 1 && "\u00A0"}
                  </span>
                </span>
              );
            })}
          </h2>
          <div ref={textRef} className="text-lg md:text-xl max-w-xl mt-12">
  
            <h2 className="font-bold text-2xl mb-2">Hands-On</h2>
            <p className="mb-8 text-base">
            Senior principals lead from the front, embedding themselves in the work to ensure quality and alignment.
            </p>

            <h2 className="font-bold text-2xl mb-2">Bespoke</h2>
            <p className="mb-8 text-base">
            We apply first principles thinking and use the familiar tools to unfamiliar solutions unique to each situation.
            </p>

            <h2 className="font-bold text-2xl mb-2">Industry Agnostic</h2>
            <p className="mb-8 text-base">
            The best insights often come from seeing patterns where others see boundaries. We work across industries because the most interesting problems don&apos;t care what sector they&apos;re in.
            </p>

          </div>

        </div>
        
      </div>
    </section>
  )
}
