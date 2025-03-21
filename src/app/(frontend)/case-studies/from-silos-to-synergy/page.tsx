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

import Ctared from "@/components/layouts/case-studies/cta-red"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {

  const textRef = useRef<HTMLHeadingElement | null>(null)
  const textRef2 = useRef<HTMLHeadingElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const breadcrumbRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const section1Ref = useRef<HTMLDivElement | null>(null)
  const section2Ref = useRef<HTMLDivElement | null>(null)

  const A1 = useRef<HTMLDivElement | null>(null)
  const A2 = useRef<HTMLDivElement | null>(null)
  const A3 = useRef<HTMLDivElement | null>(null)
  const A4 = useRef<HTMLDivElement | null>(null)
  const A5 = useRef<HTMLDivElement | null>(null)

  const S1 = useRef<HTMLDivElement | null>(null)
  const S2 = useRef<HTMLDivElement | null>(null)

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
      !textRef2.current ||
      !containerRef.current ||
      !subtitleRef.current ||
      !buttonRef.current
    ) return

    const tl = gsap.timeline()
    const mm = gsap.matchMedia()

    const textChildren = textRef.current?.children
    const textChildren2 = textRef2.current?.children
    

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

        gsap.set(textChildren2, { 
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
          textChildren2, { 
            y: 0, 
            duration: 1, 
            stagger: 0.05, 
            ease: "power4.out",
          },"-=1",
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
      !wrapper1Ref.current ||
      !wrapper2Ref.current ||
      !wrapper3Ref.current ||
      !A1.current ||
      !A2.current ||
      !A3.current ||
      !section2Ref.current
    ) return;

    
    const ctx = gsap.context(() => {
      
      gsap.to(wrapper1Ref.current, {
        translateY: "100vh",
        scrollTrigger: {
          trigger: section2Ref.current,
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
      <section className="bg-red-50 min-h-screen">
        <div ref={section1Ref} className="relative h-auto ">
          <div ref={S1} className="sm:sticky top-0 min-h-[60vh] px-6 text-red-950">
            <div className="max-w-3xl mx-auto flex flex-col items-start justify-center py-[12rem]">
              <div ref={breadcrumbRef} className="relative">
                <Breadcrumb className="mb-12">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/case-studies" className="text-red-950 hover:text-red-800 hover:font-bold transition-all duration-500">
                        Case Studies
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-red-950" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-bold text-red-950">
                        From Silos to Synergy
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div ref={containerRef}>
                <h1 ref={textRef} className="hidden sm:block text-6xl h-[44px] md:h-[86px] overflow-hidden w-max"> 
                  <span className="relative inline-block">F</span>
                  <span className="relative inline-block">r</span>
                  <span className="relative inline-block">o</span>
                  <span className="relative inline-block">m</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">S</span>
                  <span className="relative inline-block">i</span>
                  <span className="relative inline-block">l</span>
                  <span className="relative inline-block">o</span>
                  <span className="relative inline-block">s</span>
                </h1>
                <h1 ref={textRef2} className="hidden sm:block text-6xl h-[44px] md:h-[86px] overflow-hidden w-max"> 
                  <span className="relative inline-block">To</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Synergy</span>
                </h1>
              </div>
              <h1 className="block sm:hidden text-4xl">
                From Silos to Synergy
              </h1>
              <p ref={subtitleRef} className="text-lg md:text-2xl max-w-2xl mt-6 mb-12">
                A Top 10 pharmaceutical company needed to align multiple global brand teams under a unified therapeutic area strategy—something never attempted in their organization. The barrier wasn&apos;t capability but entrenched thinking patterns that positioned teams as competitors rather than collaborators. They needed help cutting through these mental barriers to see solutions hidden in plain sight. 
              </p>
              <Button asChild variant="red" ref={buttonRef} className="hidden sm:flex">
                <Link href="#next">
                  Scroll Down 
                  <ArrowDown />
                </Link>
              </Button>
            </div>
          </div>

          <div ref={S2} className="relative md:sticky bg-gray-50 md:top-[100vh] z-20"></div>
          
          <div id="next" ref={section2Ref} className="relative h-auto md:h-[350vh] overflow-hidden">
            
            <div ref={wrapper1Ref} className="relative h-auto md:h-[150vh] z-10 overflow-hidden">
              <div ref={A1} className="relative h-auto md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-red-200 text-red-900 min-h-screen sm:h-[100vh] sm:p-[5vw]">
                  <div className="relative sm:absolute inset-0 top-[20vh] sm:top-[27vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                        <h2 id="next" className="text-4xl md:text-5xl font-medium sm:leading-[1.15] select-none text-left mb-12">
                          The Challenge Ahead
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-4">
                          As we worked with them to develop their therapeutic area strategy, three critical challenges emerged:
                        </p>
                        <ul className="text-xl">
                          {[
                            "Brand teams operated independently—challenging this fundamental assumption, not just combining plans, was the real issue.",
                            "Competing priorities across imminent launches and product lifecycle transitions created tension between immediate market demands and future growth planning, forcing difficult resource trade-offs.",
                            "Strategy required alignment across global functions, regional markets, and stakeholders in three high-profile disease areas."
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
                <div className="bg-red-100 text-red-900 h-auto sm:h-screen flex flex-col items-center px-6 py-[8rem] justify-center">
                  <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 items-center mx-auto">
                    <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                      <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                        How We Helped
                      </h2>
                      <p className="text-lg md:text-2xl max-w-2xl mb-4">
                        We transformed complex problems into actionable solutions by:
                      </p>
                      <ul className="text-xl">
                        {[
                          "Mapping the conversational terrain before diving in, helping leaders identify the true north of their collaboration before navigating sensitive cross-functional discussions.",
                          "Supporting decision making about how a portfolio strategy would actually make them more competitive, and what the implications looked like at the brand and indication level.",
                          "Distilling complex strategic choices into a clear narrative that answered fundamental questions for a very senior audience."
                        ].map((item, index) => (
                          <li key={index} className="list-disc ml-6 mb-4">{item}</li>
                        ))}
                      </ul>
                    </div>   

                    <Image
                      src="/graphics/from-silos-to-synergy.svg"
                      alt="Driving 200 Leaders to One Vision Graphic"
                      width={1080} 
                      height={530}
                    />
                    
                  </div>
                </div>  
              </div>  
            </div>  
  
            <div ref={wrapper3Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
              <div ref={A3} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-red-50 text-red-950 py-[8rem] h-auto sm:h-[100vh]">
                  <div className="relative sm:absolute inset-0 sm:top-[27vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="">
                        <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                          Our Impact
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-8">
                          The strategy delivered immediate and lasting results:
                        </p>
                        <ul className="text-xl">
                          {[
                            "Secured nine-figure incremental investment in the TA.",
                            "Elevated the profile of the TA with a cohort of local GMs to navigate a transition.",
                            "Created aligned execution plans across 20+ markets and multiple products."
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4">{item}</li>
                          ))}
                        </ul>

                        <div>
                          <p className="text-lg max-w-2xl font-semibold mt-20 mb-12 pl-8 border-l border-red-950">
                            &quot;The clarity of the strategy and quality of engagement to get there were outstanding. This output is now the standard leadership wants across the enterprise.&quot; <br /><br />
                            <span className="font-bold">— Global TA Head</span>
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

      <Ctared />

    </>
  )
}