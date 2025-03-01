"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Noto_Emoji } from "next/font/google"

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

gsap.registerPlugin(ScrollTrigger)

export default function SolutionLayout() {
  const words = ["What", "We", "Mean", "by", "'Weird'"]

  const emojis1 = ["💬", "😷", "🦾", "🚀", "🧬"]
  const emojis2 = ["🦕", "🖤", "✌🏻", "🤯", "👀"]
  const emojis3 = ["🟦", "🟩", "🔷", "🫠", "🔶"]

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRefs = [
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
  ]
  const emojiRefs = [
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
  ]

  const halfSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !halfSectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(halfSectionRef.current, {
        width: "0%",
      })

      gsap.to(halfSectionRef.current, {
        width: "50%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          end: "bottom 120%",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return

    const ctx = gsap.context(() => {
      const fullSpans = headingRef.current?.querySelectorAll(".full") || []
      gsap.set(fullSpans, { y: "100%" })

      gsap.to(fullSpans, {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      })

      textRefs.forEach((ref) => {
        gsap.fromTo(
          ref.current,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      emojiRefs.forEach((ref) => {
        gsap.fromTo(
          ref.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [ sectionRef, headingRef, textRefs, emojiRefs ])

  return (
    <section ref={sectionRef} className="relative px-6 py-[6rem] sm:min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-center col-span-1 sm:pr-[20px] lg:px-[80px] w-full h-full py-16 sm:py-[16rem]">
          <div className="max-w-3xl mx-auto flex flex-col">
            <h3 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl font-regular leading-snug sm:leading-[1.15] max-w-3xl select-none mb-10 sm:mb-16">
              {words.map((word, i) => {
                const isBold = word === "'Weird'"
                return (
                  <span key={i} className="relative inline-block leading-auto md:pb-1 overflow-hidden">
                    <span className={`faint inline-block opacity-10 ${isBold ? "font-bold" : ""}`}>
                      {word}
                      {i !== words.length - 1 && "\u00A0"}
                    </span>
                    <span className={`full inline-block absolute top-0 left-0 ${isBold ? "font-bold" : ""}`}>
                      {word}
                      {i !== words.length - 1 && "\u00A0"}
                    </span>
                  </span>
                )
              })}
            </h3>

            {/* Paragraph 1 + Mobile Emoji Row */}
            <p ref={textRefs[0]} className="text-base sm:text-lg md:text-xl text-gray-800 max-w-xl mb-6 sm:mb-[12.5%]">
              We&apos;re living in a time of unprecedented change and complexity, which has resulted in unusual social,
              technological, and cultural phenomena.
            </p>
            <div className={`${notoEmoji.variable} flex sm:hidden justify-between text-4xl mb-12 font-noto`}>
              {emojis1.map((emoji, i) => (
                <span key={i}>{emoji}</span>
              ))}
            </div>

            {/* Paragraph 2 + Mobile Emoji Row */}
            <p ref={textRefs[1]} className="text-base sm:text-lg md:text-xl text-gray-800 max-w-xl mb-6 sm:mb-[12.5%]">
              Deeply ingrained norms, traditions, and organizational dynamics are increasingly being challenged, opening
              the door for odd and unconventional possibilities.
            </p>
            <div className={`${notoEmoji.variable} flex sm:hidden justify-between text-4xl mb-12 font-noto`}>
              {emojis2.map((emoji, i) => (
                <span key={i}>{emoji}</span>
              ))}
            </div>

            {/* Paragraph 3 + Mobile Emoji Row */}
            <p ref={textRefs[2]} className="text-base sm:text-lg md:text-xl text-gray-800 max-w-xl">
              Every organization&apos;s culture and personality has quirks that exert an influence on decision-making,
              leading to peculiarities that need to be thoughtfully considered and managed.
            </p>
            <div className={`${notoEmoji.variable} flex sm:hidden justify-between text-4xl mt-6 font-noto`}>
              {emojis3.map((emoji, i) => (
                <span key={i}>{emoji}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-Only Blue Emoji Section */}
      <div ref={halfSectionRef} className="hidden sm:block absolute w-[50%] right-0 top-0 h-full bg-blue-50 z-40">
        <div className="absolute inset-0 bg-blue-50 mx-[7vw] overflow-hidden flex flex-col gap-24 justify-center mt-24">
          {[emojis1, emojis2, emojis3].map((row, rowIndex) => (
            <p
              key={rowIndex}
              ref={emojiRefs[rowIndex]}
              className={`${notoEmoji.variable} font-noto text-5xl md:text-6xl flex justify-between`}
            >
              {row.map((emoji, i) => (
                <span key={i} className="relative inline-block leading-auto">
                  {emoji}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
