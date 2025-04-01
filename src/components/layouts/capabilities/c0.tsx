'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, Lightbulb, Target, Users2, ArrowRight } from "lucide-react"
import MagneticWrapper from "@/components/ui/magnetic-wrapper"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export default function AboutLayout() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const divRefs = useRef<(HTMLDivElement | null)[]>([])
  const headingRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleRefs1 = useRef<(HTMLHeadingElement | null)[]>([])
  const titleRefs2 = useRef<(HTMLHeadingElement | null)[]>([])

  const capabilities = [
    {
      title: "Investigation & Insights Generation",
      description: "We dive deep into research, gathering diverse inputs to uncover critical insights that inform strategic decisions. Our approach goes beyond surface-level data; we synthesize complex information to reveal the core issues that drive success.",
      icon: Search,
      bgColor: "bg-blue-100",
      textColor: "text-blue-950",
      case: {
        title: "See How We Uncovered Hidden Ecosystem Insights To Redefine Purpose",
        link: "/ecosystem-intelligence-renewing-purpose-for-a-national-innovation-catalyst/",
        buttonColor: "blue",
      }
    },
    {
      title: "Strategic Storytelling",
      description: "Strategy without a story is a plan without purpose. We craft compelling narratives that connect your unique strengths with a clear vision for the future. Through language, visuals, and design, we inspire change and bring strategic clarity to life.",
      icon: Lightbulb,
      bgColor: "bg-green-100",
      textColor: "text-green-900",
      case: {
        title: "Discover How We Used Strategic Storytelling To Unite Technical Tribes ",
        link: "/uniting-technical-tribes-into-a-shared-narrative/",
        buttonColor: "green",
      }
    },
    {
      title: "Problem Solving",
      description: "We specialize in identifying complex, ambiguous problems and transforming them into clear, actionable solutions. By challenging assumptions and developing tailored recommendations, we help you make hard choices with confidence.",
      icon: Target,
      bgColor: "bg-red-200",
      textColor: "text-red-900",
      case: {
        title: "Read About How We Used Strategy To Solve Silos",
        link: "/from-silos-to-synergy",
        buttonColor: "red",
      }
    },
    {
      title: "Structured Collaboration",
      description: "Collaboration can be messy, especially when it involves diverse stakeholders and high stakes. We bring structure to collaboration, guiding teams through productive, focused conversations that lead to lasting impact and change.",
      icon: Users2,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      case: {
        title: "Read About How We Helped 200 Leaders Solve Challenges Together",
        link: "/driving-200-leaders-to-one-vision/",
        buttonColor: "yellow",
      }
    },
  ]

  useEffect(() => {
    const vhToPixels = (vh: number) => window.innerHeight * (vh / 100)

    const ctx = gsap.context(() => {
      capabilities.forEach((_, index) => {
        const triggerPoint = vhToPixels((index + 1) * 65)

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: () => `${triggerPoint}px top`,
          end: () => `${triggerPoint + vhToPixels(65)}px top`,
          scrub: 3,
          onEnter: () => animateSize(index),
          onLeaveBack: () => animateSize(index - 1),
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  });

  function animateSize(activeIndex: number) {
    gsap.killTweensOf(divRefs.current)

    divRefs.current.forEach((div, index) => {
      if (!div) return

      gsap.to(div, {
        flexGrow: index === activeIndex ? 20 : 1,
        duration: 1,
        ease: "power4.out",
        overwrite: "auto",
      })

      if (headingRefs.current[index]) {
        gsap.to(headingRefs.current[index], {
          x: index !== activeIndex ? 0 : 100, 
          duration: 1.5,
          ease: "power4.out",
        })
      }

      if (titleRefs1.current[index]) {
        gsap.to(titleRefs1.current[index], {
          opacity: index === activeIndex ? 0 : 1, 
          height: index !== activeIndex ? "auto" : "0px",
          duration: 0.7,
          ease: "power4.out",
        })
      }
      
      if (titleRefs2.current[index]) {
        gsap.to(titleRefs2.current[index], {
          opacity: index !== activeIndex ? 0 : 1, 
          duration: 1,
          ease: "power4.out",
        })
      }
    })
  }



  return (
    <>
      <section className="block sm:hidden">
        <div className="relative sm:sticky top-0 flex flex-col sm:flex-row w-full">
          <div className="sticky z-10 -top-36 pt-12 flex flex-col items-center justify-center w-full bg-red-100 space-y-12">
            <h2 className="text-4xl md:text-6xl font-regular leading-[1.15] max-w-3xl select-none text-red-950">
              Our Capabilities
            </h2>
            <div className="flex flex-row justify-stretch items-stretch h-24 w-full">
              <div className="bg-blue-900 w-full flex items-center justify-center text-blue-100">
                <Search />
              </div>
              <div className="bg-green-200 w-full flex items-center justify-center text-green-900">
                <Lightbulb />
              </div>
              <div className="bg-red-300 w-full flex items-center justify-center text-red-900">
                <Target />
              </div>
              <div className="bg-yellow-200 w-full flex items-center justify-center text-yellow-600">
                <Users2 />
              </div>
            </div>

          </div>
          
          {capabilities.map((item, index) => (
            <div
              key={index}
              className={`
                ${item.bgColor} ${item.textColor} 
                flex flex-col items-center justify-center overflow-hidden relative
              `}
            >
              <div className="relative container mx-auto min-h-screen text-left font-semibold text-lg w-full">
                <div className="relative py-36 w-full px-8 flex flex-col items-start justify-top sm:min-w-[400px] md:min-w-[500px] lg:min-w-[1080px]">
                  
                  <div className="relative">

                    {item.icon && <item.icon className="size-12 mb-8 " />}
                    <h2 className="text-5xl md:text-6xl top-0">
                      {item.title}
                    </h2>
                    <p className="text-lg md:text-2xl my-12">
                      {item.description}
                    </p>
                    <div className="flex flex-col gap-4">
                      <Button asChild size="lg" variant={item.case.buttonColor as "blue" | "red" | "green" | "yellow" | null }>
                        <a href={'/case-studies/' + item.case.link} className="flex flex-row space-x-1 items-center font-medium h-auto">
                          <p className="text-wrap sm:py-0 sm:text-nowrap">Read More</p>
                          <ArrowRight />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hidden sm:block"> 
        <div className="relative z-20 flex flex-col items-center justify-center w-full pt-48">
        <div className="max-w-2xl mx-auto flex flex-col items-start text-left bg-blend-color-dodge">
          <h2 className="text-4xl md:text-6xl leading-[1.15] max-w-3xl select-none mix-blend-multiply text-black/80">
            Our Core <strong>Capabilities</strong>
          </h2>
          <div className="flex flex-col items-start text-lg md:text-xl max-w-xl mt-12">
            <p className="mb-8 text-lg mix-blend-multiply text-black/80">
              At Wierd(A)dvisory, we treat strategy as a craft, not a formula. Our work is built on four foundations: understanding what&apos;s really going on, getting the right people having the right conversations, making tough decisions with clarity, and turning different perspectives into better solutions. Here&apos;s how we work:
            </p>
          </div>
        </div>

        </div>
        <div className="absolute inset-0 z-0 flex flex-row justify-stretch items-stretch h-full w-full">
          <div className="bg-blue-100 w-full flex items-center justify-center text-blue-100">
          </div>
          <div className="bg-green-100 w-full flex items-center justify-center text-green-900">
          </div>
          <div className="bg-red-200 w-full flex items-center justify-center text-red-900">
          </div>
          <div className="bg-yellow-50 w-full flex items-center justify-center text-yellow-600">
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="hidden sm:block relative sm:min-h-[400vh]">
        <div className="relative sm:sticky top-0 flex flex-col sm:flex-row w-full min-h-screen">
          {capabilities.map((item, index) => (
            <div
              key={index}
              ref={(el) => { if (el) divRefs.current[index] = el }}
              className={`
                ${item.bgColor} ${item.textColor} 
                flex-grow flex flex-col items-center justify-center px-4 py-24 overflow-hidden relative
              `}
            >
              <div
                ref={(el) => { if (el) headingRefs.current[index] = el }}
                className="absolute right-10 bottom-4 origin-left transform translate-x-0"
              >
                <div className="text-4xl font-normal text-nowrap -rotate-90 w-0 transform-gpu opacity-60">
                  <div className="flex flex-row gap-4 w-max items-center justify-center text-[2.75vh]">
                    {item.icon && <item.icon className="size-8" />}
                    {item.title}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 container mx-auto h-screen text-left font-semibold text-lg min-w-[300px]">
                <div className="absolute sm:h-screen pt-[10vh] w-full px-12 flex flex-col items-start justify-top sm:min-w-[400px] md:min-w-[500px] lg:min-w-[1080px]">


                  <div className="relative overflow-hidden w-full h-auto py-24 transition-all duration-500">
                    <div className="w-full text-wrap">

                      
                    </div>
                  </div>


                  <div ref={(el) => { if (el) titleRefs1.current[index] = el }} className="relative h-auto hidden sm:block">
                    {item.icon && <item.icon className="size-6 md:size-12 mb-8" />}
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl max-w-[240px]">
                      {item.title}
                    </h2>
                  </div>

                  
                  <div 
                    ref={(el) => { if (el) titleRefs2.current[index] = el }}
                    className="relative opacity-0"
                  >

                    {item.icon && <item.icon className="size-8 md:size-16 mb-8 " />}

                    <h2 className="text-5xl md:text-6xl top-0 w-[400px] md:w-[600px]">
                      {item.title}
                    </h2>
                    
                    <p className="text-lg md:text-2xl my-12 w-[400px] md:w-[600px]">
                      {item.description}
                    </p>

                    <div className="flex flex-col items-start gap-4">
                      <MagneticWrapper>
                        <Button variant={item.case.buttonColor as "blue" | "red" | "green" | "yellow" | null }>
                          <a href={'/case-studies/' + item.case.link} className="flex flex-row space-x-1 items-center font-medium">
                            <p>{item.case.title}</p>
                            <ArrowRight />
                          </a>
                        </Button>
                      </MagneticWrapper>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
