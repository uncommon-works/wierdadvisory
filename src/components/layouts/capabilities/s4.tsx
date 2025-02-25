"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


import { Search, Lightbulb, Target, Users2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)


interface CaseStudy {
  title: string
  x: number
  y: number
  categories: string[]
}

export default function AboutLayout() {

  const [showAxis, setShowAxis] = useState(false)

  const caseStudies: CaseStudy[] = [
    {
      title: "The Generational Great Wealth Transfer",
      x: 32,
      y: 35,
      categories: ["Investigation & Insights Generation", "Strategic Storytelling"],
    },
    {
      title: "Turning AI Roadmaps into $$$",
      x: 75,
      y: 85,
      categories: ["Structured Collaboration", "Problem Solving"],
    },
  ]

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
  const gridOverlayRef = useRef<HTMLDivElement | null>(null)
  const coreCapabilitiesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (window.innerWidth < 500) return;
    
    if (!sectionRef.current || !gridOverlayRef.current || !coreCapabilitiesRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -15%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
          scrub: 1,
        },
      })

      // Update the animation sequence
      tl.to(coreCapabilitiesRef.current, {
        opacity: 0,
        scale: 0.97,
        duration: 0.5,
        ease: "power4.out",
      })

      // Fade in grid overlay and axis with better timing
      tl.fromTo(
        gridOverlayRef.current,
        {
          opacity: 0,
          scale: 1.03,
          duration: 0.5,
          pointerEvents: "none",
        },
        {
          opacity: 1,
          scale: 1,
          pointerEvents: "auto",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => setShowAxis(true),
        },
        ">-0.5", // More overlap for smoother transition
      )
    }, sectionRef)

    return () => {
      setShowAxis(false) // Reset state on cleanup
      ScrollTrigger.getAll().forEach((t) => t.kill())
      ctx.revert()
    }
  }, [])



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
    <div className="relative md:h-[250vh]">
      <section ref={sectionRef} className="md:sticky top-0 md:h-screen bg-blue-50 py-[8rem] md:py-0 px-4">
        <div className="relative flex flex-col items-center justify-center md:h-full w-full overflow-hidden">
          
          {/* Core Capabilities Component */}
          <div ref={coreCapabilitiesRef} className="md:absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-[1080px] w-full px-4">
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
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className={`${feature.bgColor} rounded-3xl p-6 lg:p-8`}>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
                        <h2 className={`text-xl lg:text-2xl font-semibold ${feature.textColor}`}>{feature.title}</h2>
                      </div>
                      <p className={`text-base lg:text-lg leading-relaxed ${feature.textColor}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Overlay Component */}
          <div ref={gridOverlayRef} className="sticky w-screen md:h-screen opacity-0 pointer-events-none z-20">
            {/* Quadrant backgrounds */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="bg-blue-50/50" />
              <div className="bg-green-50/50" />
              <div className="bg-red-50/50" />
              <div className="bg-yellow-50/50" />
            </div>

            {/* Corner titles and icons */}
            {features.map((feature, index) => (
              <div
                key={`corner-${index}`}
                className="fixed"
                style={{
                  top: index < 2 ? "25vh" : "75vh",
                  left: index % 2 === 0 ? "25vw" : "75vw",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <feature.icon className={`h-8 w-8 ${feature.textColor}`} />
                  <h2 className={`text-xl font-semibold ${feature.textColor} text-center max-w-[200px]`}>
                    {feature.title}
                  </h2>
                </div>
              </div>
            ))}

            {/* Axis */}
            <div
              className="fixed top-0 left-0 w-screen h-screen"
              style={{
                background: `
                  linear-gradient(90deg, transparent calc(50% - 1px), rgba(0,0,0,0.1) calc(50% - 1px), rgba(0,0,0,0.1) calc(50% + 1px), transparent calc(50% + 1px)),
                  linear-gradient(0deg, transparent calc(50% - 1px), rgba(0,0,0,0.1) calc(50% - 1px), rgba(0,0,0,0.1) calc(50% + 1px), transparent calc(50% + 1px))
                `,
              }}
            />

            {/* Case Study Dots */}
            {showAxis && (
              <TooltipProvider delayDuration={0}>
                {caseStudies.map((study, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div
                        className="fixed w-3 h-3 bg-primary rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform"
                        style={{
                          left: `calc(50% + (${study.x - 50}% * 0.8))`,
                          top: `calc(50% + (${study.y - 50}% * 0.8))`,
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent sideOffset={5} side="top" align="center">
                      <div className="max-w-[200px]">
                        <p className="font-medium">{study.title}</p>
                        <p className="text-xs text-muted-foreground">{study.categories.join(" • ")}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
