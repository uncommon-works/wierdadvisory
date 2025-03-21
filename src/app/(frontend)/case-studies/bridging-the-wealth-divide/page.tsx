'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Ctablue from "@/components/layouts/case-studies/cta-blue"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {

  const textRef = useRef<HTMLHeadingElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const breadcrumbRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const section1Ref = useRef<HTMLDivElement | null>(null)
  const section2Ref = useRef<HTMLDivElement | null>(null)

  const A0 = useRef<HTMLDivElement | null>(null)
  const A1 = useRef<HTMLDivElement | null>(null)
  const A2 = useRef<HTMLDivElement | null>(null)
  const A3 = useRef<HTMLDivElement | null>(null)
  const A4 = useRef<HTMLDivElement | null>(null)
  const A5 = useRef<HTMLDivElement | null>(null)

  const S1 = useRef<HTMLDivElement | null>(null)
  const S2 = useRef<HTMLDivElement | null>(null)

  const wrapper0Ref = useRef<HTMLDivElement | null>(null)
  const wrapper1Ref = useRef<HTMLDivElement | null>(null)
  const wrapper2Ref = useRef<HTMLDivElement | null>(null)
  const wrapper3Ref = useRef<HTMLDivElement | null>(null)
  const wrapper4Ref = useRef<HTMLDivElement | null>(null)
  const wrapper5Ref = useRef<HTMLDivElement | null>(null)
  

  useEffect(() => {

    if (window.innerWidth < 500) return;

    if (
      !breadcrumbRef.current ||
      !textRef.current ||
      !containerRef.current ||
      !subtitleRef.current ||
      !buttonRef.current
    ) return

    const tl = gsap.timeline()
    const mm = gsap.matchMedia()

    const textChildren = textRef.current?.children

    mm.add(
      {
        isMobile: "(max-width: 768px)", // Mobile breakpoint
        isDesktop: "(min-width: 769px)", // Desktop breakpoint
      },
      (context) => {

        gsap.set([breadcrumbRef.current], { 
          autoAlpha: 0, y: 24
        })

        gsap.set([buttonRef.current], { 
          autoAlpha: 0, y: 24
        })

        gsap.set(textChildren, { 
          y: context.conditions?.isMobile ? "100%" : "150%" 
        })

        gsap.set([subtitleRef.current], { 
          autoAlpha: 0, y: 24 
        })

        tl.to(containerRef.current, { 
          duration: 1, 
          ease: "power2.inOut" 
        })

        tl.to(
          [breadcrumbRef.current], {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.5,
            ease: "power2.out",
          }, "-=0.25",
        )

        tl.to(
          textChildren, { 
            y: 0, 
            duration: 1, 
            stagger: 0.05, 
            ease: "power4.out",
          },"-=0.5",
        )
          
        tl.to(
          [subtitleRef.current], {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.5,
            ease: "power2.out",
          }, "-=0.5",
        )

        tl.to(
          [buttonRef.current], {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.5,
            ease: "power2.out",
          }, "-=0.25",
        )
      },
    )
  }, [])
  
  useEffect(() => {

    if (window.innerWidth < 500) return;

    if (
      !wrapper0Ref.current ||
      !wrapper1Ref.current ||
      !wrapper2Ref.current ||
      !wrapper3Ref.current ||
      !A0.current ||
      !A1.current ||
      !A2.current ||
      !A3.current ||
      !section2Ref.current
    ) return;

    
    const ctx = gsap.context(() => {

      gsap.to(wrapper0Ref.current, {
        translateY: "100vh",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A0.current, {
        translateY: "-50vh",
      })

      gsap.to(A0.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper0Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A1.current, {
        translateY: "-50vh",
      })

      gsap.to(A1.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper1Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A2.current, {
        translateY: "-50vh",
      })

      gsap.to(A2.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A3.current, {
        translateY: "-50vh",
      })

      gsap.to(A3.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper3Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A4.current, {
        translateY: "-50vh",
      })

      gsap.to(A4.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper4Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.set(A5.current, {
        translateY: "-50vh",
      })

      gsap.to(A5.current, {
        translateY: "50vh",
        scrollTrigger: {
          trigger: wrapper5Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

    }, A1)

    return () => ctx.revert()
    
  }, [])

  useEffect(() => {

    if (window.innerWidth < 500) return;
    
    if (
      !section1Ref.current ||
      !S1.current ||
      !S2.current
    ) return

    const ctx = gsap.context(() => {
      gsap.to(S1.current, {
        scale: 0.65,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      gsap.to(S2.current, {
        autoAlpha: 1,
        trigger: {
          trigger: section1Ref.current,
          duration: 1,
          start: "top top",
          autoAlpha: 0,
          scrub: true,
        },
      })
    }, section1Ref)

    return () => {
      ctx.revert()
    }

  }, [])

  return (
    <>
      <section className="bg-blue-50 min-h-screen">
        <div ref={section1Ref} className="relative h-auto ">
          <div ref={S1} className="sm:sticky top-0 min-h-[60vh] px-6 text-blue-950">
            <div className="max-w-3xl mx-auto flex flex-col items-start justify-center py-[12rem]">
              <div ref={breadcrumbRef} className="relative">
                <Breadcrumb className="mb-12">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/case-studies" className="text-blue-950 hover:text-blue-900 hover:font-semibold transition-all duration-500">
                        Case Studies
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-blue-950" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-bold text-blue-950">
                        Bridging the Wealth Divide
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div ref={containerRef}>
                <h1 ref={textRef} className="hidden sm:block text-5xl h-[38px] md:h-[64px] overflow-hidden w-max "> 
                  <span className="relative inline-block">B</span>
                  <span className="relative inline-block">r</span>
                  <span className="relative inline-block">i</span>
                  <span className="relative inline-block">d</span>
                  <span className="relative inline-block">g</span>
                  <span className="relative inline-block">i</span>
                  <span className="relative inline-block">n</span>
                  <span className="relative inline-block">g</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">T</span>
                  <span className="relative inline-block">h</span>
                  <span className="relative inline-block">e</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">W</span>
                  <span className="relative inline-block">e</span>
                  <span className="relative inline-block">a</span>
                  <span className="relative inline-block">l</span>
                  <span className="relative inline-block">t</span>
                  <span className="relative inline-block">h</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">D</span>
                  <span className="relative inline-block">i</span>
                  <span className="relative inline-block">v</span>
                  <span className="relative inline-block">i</span>
                  <span className="relative inline-block">d</span>
                  <span className="relative inline-block">e</span>
                </h1>
              </div>
              <h1 className="block sm:hidden text-4xl">
                Bridging The Wealth Divide
              </h1>
              <p ref={subtitleRef} className="text-lg md:text-2xl max-w-2xl mt-6 mb-12">
                Wealth management thrived on heritage—century-old names and relationships built over generations. A global wealth management firm faced a paradox: overseeing their largest wealth transfer while their heritage-based model was becoming obsolete. They needed to launch a fundamentally new approach in a landscape where trust isn&apos;t inherited but earned in completely new ways.
              </p>
              <Button asChild variant="blue" ref={buttonRef} className="hidden sm:flex">
                <Link href="#next">
                  Scroll Down 
                  <ArrowDown />
                </Link>
              </Button>
            </div>
          </div>

          <div ref={S2} className="relative md:sticky bg-gray-50 md:top-[100vh] z-20"></div>
          
          <div id="next" ref={section2Ref} className="relative h-auto md:h-[450vh] overflow-hidden">
            
          <div ref={wrapper0Ref} className="relative h-auto md:h-[150vh] z-10 overflow-hidden">
              <div ref={A0} className="relative h-auto md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-blue-100 text-blue-950 min-h-screen sm:h-[100vh] sm:p-[5vw]">
                  <div className="relative sm:absolute inset-0 top-[20vh] sm:top-[27vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                        <h2 id="next" className="text-4xl md:text-5xl font-medium sm:leading-[1.15] select-none text-left mb-12">
                          Their Situation:
                        </h2>
                        <ul className="text-xl">
                          {[
                             "Billions in assets moving to heirs who questioned traditional wealth concepts.",
                             "Traditional markers of trust and service becoming actively counterproductive.",
                             "New forms of wealth requiring completely different risk and value frameworks."
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4">{item}</li>
                          ))}
                        </ul>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>  

            <div ref={wrapper1Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
              <div ref={A1} className="relative h-auto md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-blue-200 text-blue-950 min-h-screen sm:h-[100vh] sm:p-[5vw]">
                  <div className="relative sm:absolute inset-0 top-[20vh] sm:top-[27vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                        <h2 id="next" className="text-4xl md:text-5xl font-medium sm:leading-[1.15] select-none text-left mb-12">
                          Starting From Zero
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-12">
                          We dove deep into research, gathering diverse inputs to uncover critical insights into fundamental questions:
                        </p>
                        <ul className="text-xl">
                          {[
                            "What does wealth mean when its forms and meaning evolve between generations?",
                            "When heritage loses its power, how do you create trust and value propositions that resonate across generations?",
                            "How do you manage wealth transfer when generations see money differently?"
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4">{item}</li>
                          ))}
                        </ul>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>  
  
            <div ref={wrapper2Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
              <div ref={A2} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-blue-100 text-blue-950 h-auto sm:h-screen flex flex-col items-center px-6 py-[8rem] justify-center">
                  <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 items-center mx-auto">
                    <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                      <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                        How We Gained Altitude
                      </h2>
                      <p className="text-lg md:text-2xl max-w-2xl mb-4">
                        First, our investigation helped them see the core issues:
                      </p>
                      <ul className="text-xl">
                        {[
                          "Conducted a comprehensive analysis that showed their heritage was actively pushing away next-gen wealth holders",
                          "Mapped how traditional wealth management would be disrupted by changing generational expectations",
                        ].map((item, index) => (
                          <li key={index} className="list-disc ml-6 mb-4">{item}</li>
                        ))}
                      </ul>
                      <p className="text-lg md:text-2xl max-w-2xl mt-12 mb-4">
                        Then, we built momentum with precise execution:
                      </p>
                      <ul className="text-xl">
                        {[
                          "Structured a partnership that redefined their value proposition for the next generation",
                          "Designed a new high-margin service model, capturing value from both traditional and emerging wealth needs",
                        ].map((item, index) => (
                          <li key={index} className="list-disc ml-6 mb-4">{item}</li>
                        ))}
                      </ul>
                    </div>   

                    <Image
                      src="/graphics/bridging-the-wealth-divide.svg" 
                      alt="AI Vision to Execution" 
                      width={1080} 
                      height={530}
                    />
                    
                  </div>
                </div>  
              </div>  
            </div>  
  
            <div ref={wrapper3Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
              <div ref={A3} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-blue-50 text-blue-950 py-[8rem] h-auto sm:h-[100vh]">
                  <div className="relative sm:absolute inset-0 sm:top-[27vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="">
                        <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                          Our Impact
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-8">
                          To date, our work has resulted in:
                        </p>
                        <ul className="text-xl">
                          {[
                            "What does wealth mean when its forms and meaning evolve between generations?",
                            "When heritage loses its power, how do you create trust and value propositions that resonate across generations?",
                            "How do you manage wealth transfer when generations see money differently?"
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4">{item}</li>
                          ))}
                        </ul>

                        <div>
                          <p className="text-lg max-w-2xl font-semibold mt-20 mb-12 pl-8 border-l border-blue-950">
                            &quot;W(A) helped us realize we couldn&apos;t have it both ways—clinging to our heritage while trying to win the next generation. They helped us stick the landing on a very bold move, and it&apos;s paying off.&quot; <br /><br />
                            <span className="font-bold">— Head of Strategy</span>
                          </p>
                        </div>
                        
                      </div>  
                    </div>
                  </div>
                </div>
              </div>

            </div>  
          </div>  
        </div>
      </section>

      <Ctablue />

    </>
  )
}