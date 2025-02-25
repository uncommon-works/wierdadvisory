"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Search, Lightbulb, Target, Users2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function AboutLayout() {
  const features = [
    {
      title: "Investigation & Insights Generation",
      description:
        "We dive deep into research, gathering diverse inputs to uncover critical insights that inform strategic decisions. Our approach goes beyond surface-level data; we synthesize complex information to reveal the core issues that drive success.",
      icon: Search,
      bgColor: "bg-blue-200",
      textColor: "text-blue-950",
    },
    {
      title: "Strategic Storytelling",
      description:
        "Strategy without a story is a plan without purpose. We craft compelling narratives that connect your unique strengths with a clear vision for the future. Through language, visuals, and design, we inspire change and bring strategic clarity to life.",
      icon: Lightbulb,
      bgColor: "bg-green-200",
      textColor: "text-green-900",
    },
    {
      title: "Problem Solving",
      description:
        "We specialize in identifying complex, ambiguous problems and transforming them into clear, actionable solutions. By challenging assumptions and developing tailored recommendations, we help you make hard choices with confidence.",
      icon: Target,
      bgColor: "bg-red-200",
      textColor: "text-red-900",
    },
    {
      title: "Structured Collaboration",
      description:
        "Collaboration can be messy, especially when it involves diverse stakeholders and high stakes. We bring structure to collaboration, guiding teams through productive, focused conversations that lead to lasting impact and change.",
      icon: Users2,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ]

  const words = ["Our", "Core", "Capabilities"]

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !textRef.current) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, {})
      gsap.set(textRef.current, { autoAlpha: 0.05 })

      const fullSpans = headingRef.current?.querySelectorAll(".full") || []

      gsap.set(fullSpans, { y: "100%" })

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
          stagger: 0.1,
        })

        .to(
          textRef.current,
          {
            autoAlpha: 1,
          },
          1,
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-auto py-[8rem] md:py-0 md:h-[100vh] bg-blue-50">
      <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4">
        <div className="max-w-[1080px] mx-auto flex flex-col items-start text-left w-full">
          <h2 ref={headingRef} className="text-4xl md:text-6xl text-priamry leading-[1.15] max-w-3xl select-none mb-12">
            {words.map((word, i) => {
              const isBold = word === "Capabilities"
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
          </h2>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} rounded-3xl p-6 lg:p-8 transition-transform`}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
                    <h2 className={`text-xl lg:text-2xl font-semibold ${feature.textColor}`}>{feature.title}</h2>
                  </div>
                  <p className={`text-base lg:text-lg leading-relaxed ${feature.textColor}`}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

