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
          <div ref={S1} className="sm:sticky top-0 min-h-screen px-6 text-red-950">
            <div className="max-w-3xl mx-auto flex flex-col items-start justify-center py-[12rem] h-screen">
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
                        From Underdogs to Launch Ready
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
                  <span className="relative inline-block">U</span>
                  <span className="relative inline-block">n</span>
                  <span className="relative inline-block">d</span>
                  <span className="relative inline-block">e</span>
                  <span className="relative inline-block">r</span>
                  <span className="relative inline-block">d</span>
                  <span className="relative inline-block">o</span>
                  <span className="relative inline-block">g</span>
                  <span className="relative inline-block">s</span>
                </h1>
                <h1 ref={textRef2} className="hidden sm:block text-6xl h-[44px] md:h-[86px] overflow-hidden w-max"> 
                  <span className="relative inline-block">To</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Launch</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Ready</span>
                </h1>
              </div>
              <h1 className="block sm:hidden text-4xl">
                From Underdogs to Launch Ready
              </h1>
              <p ref={subtitleRef} className="text-lg md:text-2xl max-w-2xl mt-6 mb-12">
                Our client was poised to introduce a groundbreaking cell therapy to the market, but beneath the surface of standard launch preparations lay a more fundamental issue: wavering confidence across their global and local teams.
              </p>
              <Button asChild variant="red" ref={buttonRef} className="hidden sm:flex">
                <Link href="#next">
                  Scroll Down 
                  <ArrowDown />
                </Link>
              </Button>
            </div>
          </div>

          <div ref={S2} className="relative md:sticky bg-gray-50 md:t   op-[100vh] z-20"></div>
          
          <div id="next" ref={section2Ref} className="relative h-auto md:h-[350vh] overflow-hidden">
            
            <div ref={wrapper1Ref} className="relative h-auto md:h-[150vh] z-10 overflow-hidden">
              <div ref={A1} className="relative h-auto md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-red-200 text-red-900 sm:h-[100vh] sm:p-[5vw]">
                  <div className="relative sm:absolute inset-0  py-[8rem] sm:top-[6vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                        <p className="text-lg md:text-2xl max-w-2xl mb-4">
                        With just months before their make-or-break product launch, the organization faced the daunting task of challenging established drug therapies that dominated the first-line treatment landscape. <br /><br />Despite the innovative nature of their therapy, several critical barriers stood in their way:
                        </p>
                        <ul className="text-xl">
                          {[
                            "The team lacked consensus on the needs, behaviors, and decision factors of key stakeholders in the treatment journey.",
                            "The answer to 'Why us over established therapies?' remained fragmented and unconvincing.",
                            "Key messages and targeting approaches varied across functions and regions.",
                            "They needed to build conviction and alignment across a group of 100 stakeholders—and fast."
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
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
                <div className="bg-red-100 text-red-900 h-auto sm:h-screen flex flex-col items-center px-6 md:px-[7vw] py-[8rem] justify-center">
                  <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 items-center mx-auto">
                    <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                      <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                        How We Brought Clarity
                      </h2>
                      <p className="text-lg md:text-2xl max-w-2xl mb-4">
                        We identified the ambiguous problems blocking progress and transformed them into actionable solutions:
                      </p>
                      <ul className="text-xl">
                        {[
                          "Did a deep dive with stakeholders that uncovered critical gaps in customer needs and competitive positioning.",
                          "Built a framework that showed what made them different. This helped everyone see which decisions mattered most and gave them a new way to tell their story.",
                          "We facilitated a series of high-impact collaborative virtual and in-person sessions that aligned the team around a big 'aha realization' that would help them take more share than initially thought possible."
                        ].map((item, index) => (
                          <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
                        ))}
                      </ul>
                    </div>   

                    <Image
                      src="/graphics/from-underdogs-to-launch-ready.svg"
                      alt="From Underdogs to Launch Ready Graphic"
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
                    <div className="grid sm:grid-cols-2 items-center justify-center mx-auto max-w-[1080px] gap-24">
                      <div className="">
                        <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                          Our Impact
                        </h2>
                        <ul className="text-xl">
                          {[
                            "Uncovered a differentiated pathway to enter the market that allowed them to bend the curve and deliver more in first year of launch way ahead of even upside.",
                            "Internal confidence metrics showed a dramatic shift—from hesitation to certainty—in teams' ability to articulate their value proposition to even the most skeptical clinicians.",
                            "Aligned all customer-facing functions around a consistent targeting approach and messaging framework, eliminating previous cross-functional disconnects."
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
                          ))}
                        </ul>
                      </div>  
                      <div className="space-y-12">
                        <p className="text-lg max-w-2xl font-semibold mt-12 mb-3 pl-8 border-l border-red-950 italic">
                          &quot;We started this process with fundamental questions about our ability to challenge established players. The investment in building alignment wasn&apos;t just about launch strategy—it was about creating a shared belief in our therapy&apos;s value. Now our teams don&apos;t just have a plan; they have conviction.&quot; <br /><br />
                          <span className="font-bold">— Global Marketing Leader</span>
                        </p>
                        <p className="text-lg max-w-2xl font-semibold mt-12 mb-3 pl-8 border-l border-red-950 italic">
                          &quot;Initially, I questioned whether this effort was worth pulling our global teams away from their day-to-day launch preparation. Looking back, it was the best decision we made. What we gained wasn&apos;t just alignment on paper—it was genuine conviction across regions and functions.&quot; 
                          <br /><br />
                          <span className="font-bold">— Global Medical Affairs</span>
                        </p>
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