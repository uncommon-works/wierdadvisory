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
  }, [])

  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const updateSvgSize = () => {
      if (svgRef.current && pathRef.current) {
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const originalWidth = 2307
        const originalHeight = 5919

        let newWidth, newHeight

        if (viewportHeight / viewportWidth > originalHeight / originalWidth) {
          // Viewport is taller than the original aspect ratio
          newWidth = viewportWidth
          newHeight = (viewportWidth * originalHeight) / originalWidth
        } else {
          // Viewport is wider than the original aspect ratio
          newHeight = viewportHeight
          newWidth = (viewportHeight * originalWidth) / originalHeight
        }

        svgRef.current.style.width = `${newWidth}px`
        svgRef.current.style.height = `${newHeight}px`
        svgRef.current.setAttribute("viewBox", `0 0 ${originalWidth} ${originalHeight}`)

        // Center the SVG
        svgRef.current.style.left = `${(viewportWidth - newWidth) / 2}px`
        svgRef.current.style.top = `${(viewportHeight - newHeight) / 2}px`
      }
    }

    updateSvgSize()
    window.addEventListener("resize", updateSvgSize)

    if (pathRef.current) {
      const path = pathRef.current
      const length = path.getTotalLength()

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
    }

    return () => {
      window.removeEventListener("resize", updateSvgSize)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 min-h-[100vh]">
      <div className="grid grid-cols-2 h-full top-0 size-12 w-full max-w-[1440px] mx-auto ">
        <div className="flex flex-col justify-center col-span-1 md:pr-[20px] lg:px-[80px] w-full h-full py-[12rem]">
          <div className="max-w-3xl mx-auto flex flex-col">
            <h3 ref={headingRef} className="text-4xl md:text-5xl font-regular leading-[1.15] max-w-3xl select-none mb-16">
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

            <p ref={textRefs[0]} className="text-lg md:text-xl text-gray-800 max-w-xl mb-[12.5%]">
              We&apos;re living in a time of unprecedented change and complexity, which has resulted in unusual social,
              technological, and cultural phenomena.
            </p>

            <p ref={textRefs[1]} className="text-lg md:text-xl text-gray-800 max-w-xl mb-[12.5%]">
              Deeply ingrained norms, traditions, and organizational dynamics are increasingly being challenged, opening
              the door for odd and unconventional possibilities.
            </p>

            <p ref={textRefs[2]} className="text-lg md:text-xl text-gray-800 max-w-xl">
              Every organization&apos;s culture and personality has quirks that exert an influence on decision-making,
              leading to peculiarities that need to be thoughtfully considered and managed.
            </p>
          </div>
        </div>
      </div>

      <div ref={halfSectionRef} className="absolute w-[50%] right-0 top-0 h-full bg-blue-50 z-40">
        <div className="absolute inset-0 left-0 bg-blue-50 m-[5vw] overflow-hidden">
          <p ref={emojiRefs[0]} className={`${notoEmoji.variable} font-noto text-6xl absolute top-[22.5%] left-0`}>
            {emojis1.map((emoji, i) => (
              <span key={i} className="relative inline-block leading-auto md:py-2 overflow-hidden">
                <span className="faint opacity-10">{emoji}</span>
                <span className="full absolute top-2 left-0">{emoji}</span>
              </span>
            ))}
          </p>

          <p ref={emojiRefs[1]} className={`${notoEmoji.variable} font-noto text-6xl absolute top-[38.5%] left-0`}>
            {emojis2.map((emoji, i) => (
              <span key={i} className="relative inline-block leading-auto md:py-2 overflow-hidden">
                <span className="faint opacity-10">{emoji}</span>
                <span className="full absolute top-2 left-0">{emoji}</span>
              </span>
            ))}
          </p>

          <p ref={emojiRefs[2]} className={`${notoEmoji.variable} font-noto text-6xl absolute top-[55%] left-0`}>
            {emojis3.map((emoji, i) => (
              <span key={i} className="relative inline-block leading-auto md:py-2 overflow-hidden">
                <span className="faint opacity-10">{emoji}</span>
                <span className="full absolute top-2 left-0">{emoji}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

