'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'


export default function AboutLayout() {


const words = [
  "We",
  "Are",
  "Wierd(A)dvisory",
];

const sectionRef = useRef<HTMLDivElement | null>(null)
const headingRef = useRef<HTMLHeadingElement | null>(null)
const textRef = useRef<HTMLParagraphElement | null>(null)

useEffect(() => {
  if (
    !sectionRef.current ||
    !headingRef.current ||
    !textRef.current
  ) return

  const ctx = gsap.context(() => {
    
    gsap.set(sectionRef.current, { backgroundColor: 'rgba(0,0,0,0)' })
    gsap.set(textRef.current, { autoAlpha: 0.05 })

    const fullSpans = headingRef.current?.querySelectorAll('.full') || []
    
    gsap.set(fullSpans, { y: '100%' })

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play reverse play reverse',
      },
    })
      
    .to(fullSpans, {
      y: '0%',
      duration: 1,
      ease: 'power4.out',
      stagger: 0.1,
    })
    
    .to(textRef.current, { 
      autoAlpha: 1 
    }, 0.7)

  }, sectionRef)

  return () => ctx.revert()
  
}, [])

  return (
    <section ref={sectionRef} className="w-full bg-gray-50 py-[8rem] md:h-[100vh] ">
      <div className="max-w-[1080px] mx-auto ">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-regular leading-[1.15] max-w-3xl select-none">
          {words.map((word, i) => {
            
            const isBold = word === "Wierd(A)dvisory";

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
        
        <p ref={textRef} className="mt-8 max-w-2xl ">
        At Wierd(A)dvisory, we tackle the problems that don&apos;t have obvious answers. We believe strategy is more craft than formula - each solution should be as unique as the challenge it addresses. Our clients come to us when they need a standard of thinking and service that goes beyond the conventional and execution that matches their ambition. 
        </p>

      </div>
    </section>
  )
}
