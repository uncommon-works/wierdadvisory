'use client'

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

gsap.registerPlugin(ScrollTrigger)

export default function CraftsmanshipSection() {
  const words = [
    "We",
    "recognize",
    "that",
    "craftsmanship",
    "is",
    "missing",
    "in",
    "the",
    "mainstream",
    "advisory",
    "world;",
    "and",
    "strive",
    "to",
    "fill",
    "that",
    "gap",
    "with",
    "our",
    "plain",
    "speak,",
    "unconventional",
    "talent,",
    "and",
    "novel",
    "solutions.",
  ]

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const iconsRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (
      !sectionRef.current || 
      !headingRef.current || 
      !iconsRef.current || 
      !textRef.current
    ) return

    const ctx = gsap.context(() => {

      gsap.set([iconsRef.current], { autoAlpha: 0 })

      const fullSpans = headingRef.current?.querySelectorAll(".full") || []
      gsap.set(fullSpans, { y: "100%" })

      const icons = iconsRef.current?.querySelectorAll(".icon") || []
      gsap.set(icons, { scale: 0, autoAlpha: 0 })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            toggleActions: "play reverse play reverse",
          },
        })
        .to(fullSpans, {
          y: "0%",
          duration: 1,
          ease: "power4.out",
          stagger: 0.05,
        })
        .to(
          textRef.current,
          {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          icons,
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.25",
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-blue-100 z-10 py-[10rem]">
      <div className="flex flex-col items-center justify-center w-full overflow-hidden px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl text-primary font-regular leading-[1.17] mb-8"
          >
            {words.map((word, i) => (
              <span key={i} className="relative inline-block overflow-hidden">
                <span className="faint inline-block opacity-10">
                  {word}
                  {i !== words.length - 1 && "\u00A0"}
                </span>
                <span className="full absolute top-0 left-0">
                  {word}
                  {i !== words.length - 1 && "\u00A0"}
                </span>
              </span>
            ))}
          </h2>

          <p ref={textRef} className="text-lg md:text-xl text-slate-600 max-w-3xl mb-12">
          Our clients tend to be people who share our values of prioritizing quality, reliability, and originality over brand prestige.
          </p>

          <div ref={iconsRef} className={`${notoEmoji.variable} font-noto flex items-center justify-center gap-4 md:gap-6"`}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="icon w-8 h-8 md:w-10 md:h-10 border-2 border-primary rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

