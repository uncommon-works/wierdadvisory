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
    "From",
    "Initiation",
    "to",
    "Transformation"
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    if (
      !sectionRef.current ||
      !headingRef.current ||
      !textRef.current ||
      !pathRef.current
    ) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { })
      gsap.set(textRef.current, { autoAlpha: 0.05 })

      const fullSpans = headingRef.current?.querySelectorAll('.full') || []
      gsap.set(fullSpans, { y: '100%' })

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%',
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
      }, 0.2)

      const path = pathRef.current;
      const pathLength = path?.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-auto md:h-[100vh] bg-red-100 text-red-950">
      <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-start text-left">
          <p className="font-medium mb-8 baskerville">From X → T</p>
          <h2 ref={headingRef} className="text-4xl md:text-6xl leading-[1.15] max-w-3xl select-none">
            {words.map((word, i) => {
              const isBold = word === "Transformation";
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
            <p className="mb-8 text-lg">
              Real transformation isn&apos;t just making a plan—it&apos;s navigating all the unexpected challenges that come after. We help teams stay focused on where they&apos;re going while adapting to what they find along the way. 
            </p>
          </div>
          <div className={`${notoEmoji.variable} antialiased mt-24 font-noto text-7xl my-12 `}>
            😔 😮 😳 🤯 🚀
          </div>
        </div>
      </div>
    </section>
  )
}
