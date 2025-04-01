'use client'

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

import { Noto_Emoji } from "next/font/google"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Search, Target, User } from "lucide-react"

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

export default function CaseStudiesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const caseStudiesContainerRef = useRef<HTMLDivElement | null>(null)
  const caseStudyRefs = useRef<(HTMLAnchorElement | null)[]>([])

  interface CaseStudy {
    title: string
    emoji: string
    slug: string
    size: string
    bgColor: string
    badgeColor: string
    textColor: string
    hoverBg: string
    ariaLabel?: string
    category?: "Structured Collaboration" | "Investigation & Insights Generation" | "Strategic Storytelling" | "Problem Solving",
  }

  const caseStudies: CaseStudy[] = [
    {
      title: "AI Vision to Execution",
      emoji: "🤖",
      slug: "/ai-vision-to-execution",
      size: "col-span-2 row-span-1 md:col-span-1 md:row-span-2",
      bgColor: "bg-yellow-50",
      badgeColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      hoverBg: "group-hover:bg-yellow-100",
      category: "Structured Collaboration",
    },
    {
      title: "Uniting Technical Tribes Into a Shared Narrative",
      emoji: "👥",
      slug: "/uniting-technical-tribes-into-a-shared-narrative",
      size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      bgColor: "bg-green-50",
      badgeColor: "bg-green-100",
      textColor: "text-green-950",
      hoverBg: "group-hover:bg-green-100",
      category: "Strategic Storytelling",
    },
    {
      title: "Driving 200 Leaders to One Vision",
      emoji: "🚗",
      slug: "/driving-200-leaders-to-one-vision",
      size: "col-span-1 row-span-1",
      bgColor: "bg-yellow-50",
      badgeColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      hoverBg: "group-hover:bg-yellow-100",
      category: "Structured Collaboration",
    },
    {
      title: "Ecosystem Intelligence Renewing Purpose for a National Innovation Catalyst",
      emoji: "🔄",
      slug: "/ecosystem-intelligence-renewing-purpose-for-a-national-innovation-catalyst",
      size: "col-span-2 row-span-1",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-100",
      textColor: "text-blue-950",
      hoverBg: "group-hover:bg-blue-100",
      category: "Investigation & Insights Generation",
    },
    {
      title: "From Silos to Synergy",
      emoji: "🌱",
      slug: "/from-silos-to-synergy",
      size: "col-span-2 row-span-1",
      bgColor: "bg-red-50",
      badgeColor: "bg-red-100",
      textColor: "text-red-950",
      hoverBg: "group-hover:bg-red-100",
      category: "Problem Solving",
    },
    {
      title: "From Underdogs to Launch Ready",
      emoji: "🚀",
      slug: "/from-underdogs-to-launch-ready",
      size: "col-span-1 row-span-1",
      bgColor: "bg-red-50",
      badgeColor: "bg-red-100",
      textColor: "text-red-950",
      hoverBg: "group-hover:bg-red-100",
      category: "Problem Solving",
    },
    {
      title: "Bridging the Wealth Divide",
      emoji: "💰",
      slug: "/bridging-the-wealth-divide",
      size: "col-span-3 row-span-1",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-100",
      textColor: "text-blue-950",
      hoverBg: "group-hover:bg-blue-100",
      category: "Investigation & Insights Generation",
    },
    
  ]

  useEffect(() => {
    try {
      if (!headingRef.current || !containerRef.current || !subtitleRef.current || !caseStudiesContainerRef.current) {
        return
      }

      setIsLoading(true)

      const mainTimeline = gsap.timeline({
        onComplete: () => setIsLoading(false),
      })

      const mm = gsap.matchMedia()

      const headingChildren = headingRef.current?.children
      const caseStudyElements = caseStudyRefs.current.filter(Boolean) as HTMLAnchorElement[]

      // We're not setting initial opacity/position with GSAP anymore
      // This prevents the flash of content before animation

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          gsap.set(headingChildren, {
            y: context.conditions?.isMobile ? "100%" : "150%",
          })

          gsap.set([subtitleRef.current], {
            autoAlpha: 0,
            y: 24,
          })

          mainTimeline
            .to(containerRef.current, {
              duration: 1,
              ease: "power2.inOut",
            })
            .to(
              headingChildren,
              {
                y: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power4.out",
              },
              "-=0.5",
            )
            .to(
              [subtitleRef.current],
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.5",
            )
            .to(
              caseStudyElements,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
              },
              "-=1.5",
            )
        },
      )
    } catch (error) {
      console.error("Animation error:", error)
      setHasError(true)
      setIsLoading(false)
    }
  }, [])

  if (hasError) {
    return (
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      </section>
    )
  }

  return (
    <section className="pt-[12rem] min-h-[90vh]">
      <div className="max-w-2xl mx-auto px-6 text-center sm:px-0 mb-16 text-yellow-500">
        <div ref={containerRef}>
          <h1
            ref={headingRef}
            className="text-4xl md:text-7xl h-[40px] md:h-[86px] inline-block overflow-hidden "
            aria-label="Case Studies"
          >
            <span className="relative inline-block">C</span>
            <span className="relative inline-block">a</span>
            <span className="relative inline-block">s</span>
            <span className="relative inline-block">e</span>
            <span className="relative inline-block">&nbsp;</span>
            <span className="relative inline-block">S</span>
            <span className="relative inline-block">t</span>
            <span className="relative inline-block">u</span>
            <span className="relative inline-block">d</span>
            <span className="relative inline-block">i</span>
            <span className="relative inline-block">e</span>
            <span className="relative inline-block">s</span>
          </h1>
        </div>
        <p ref={subtitleRef} className="text-xl md:text-3xl max-w-2xl mt-4">
          At Wierd(A)dvisory, we tackle the problems that don&apos;t have obvious answers.
        </p>
      </div>

      <div
        ref={caseStudiesContainerRef}
        className="container mx-auto px-4 py-12 md:pb-24 max-w-4xl w-full"
        aria-label="Case study cards"
      >
        <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <a
              key={index}
              ref={(el) => {
                caseStudyRefs.current[index] = el
              }}
              href={"/case-studies/" + study.slug}
              aria-label={study.ariaLabel}
              className={`${study.size} group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg focus:ring-offset-2 focus:ring-primary opacity-0 translate-y-[30px]`}
              style={{ visibility: "hidden" }} // Initial state set with inline style
            >
              <div
                className={`absolute inset-0 ${study.bgColor} transition-all duration-500 ${study.hoverBg}`}
                aria-hidden="true"
              ></div>

              <div
                className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-white/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-white/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150 group-hover:delay-100"
                aria-hidden="true"
              ></div>

              <div className="relative z-10 flex h-full flex-col p-6 mb-12">
                <div
                  className={`${study.textColor} ${notoEmoji.variable} font-noto mb-2 text-4xl transform transition-all duration-500 group-hover:scale-102 group-hover:rotate-2`}
                  aria-hidden="true"
                >
                  {study.emoji}
                </div>
                <div className="flex flex-col items-start mt-auto">
                  <Badge className={`${study.badgeColor} ${study.textColor} mb-2 flex items-center gap-1 text-sm`}>
                    {study.category === "Structured Collaboration" && <User size='16' />}
                    {study.category === "Investigation & Insights Generation" && <Search size='16' /> }
                    {study.category === "Strategic Storytelling" && <Lightbulb size='16' />}
                    {study.category === "Problem Solving" && <Target size='16' />}
                    {study.category}
                  </Badge>

                  <h2
                    className={`${study.textColor} text-xl font-semibold leading-6 pt-2 transition-all duration-300 group-hover:translate-x-1`}
                  >
                    {study.title}
                  </h2>
                  <div
                    className={`mt-2 h-0.5 w-0 ${study.textColor.replace("text", "bg")} transition-all duration-500 group-hover:w-full`}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {isLoading && <div className="sr-only" aria-live="polite"></div>}
    </section>
  )
}

