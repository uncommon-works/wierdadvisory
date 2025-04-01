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

import Ctayellow from "@/components/layouts/case-studies/cta-yellow"
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
      <section className="bg-yellow-50 min-h-screen">
        <div ref={section1Ref} className="relative h-auto ">
          <div ref={S1} className="sm:sticky top-0 min-h-screen px-6 text-yellow-500">
            <div className="max-w-3xl mx-auto flex flex-col items-start justify-center py-[12rem] h-screen">
              <div ref={breadcrumbRef} className="relative">
                <Breadcrumb className="mb-12">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/case-studies" className="text-yellow-500 hover:text-yellow-900 hover:font-semibold transition-all duration-500">
                        Case Studies
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-yellow-500" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-bold text-yellow-500">
                        Driving 200 Leaders to One Vision
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div ref={containerRef}>
                <h1 ref={textRef} className="hidden sm:block text-6xl h-[44px] md:h-[86px] overflow-hidden w-max"> 
                  <span className="relative inline-block">Driving</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">200</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Leaders</span>
                </h1>
                <h1 ref={textRef2} className="hidden sm:block text-6xl h-[44px] md:h-[86px] overflow-hidden w-max"> 
                  <span className="relative inline-block">To</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">One</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Vision</span>
                </h1>
              </div>
              <h1 className="block sm:hidden text-4xl">
                Driving 200 Leaders to One Vision
              </h1>
              <p ref={subtitleRef} className="text-lg md:text-2xl max-w-2xl mt-6 mb-12">
              When 200 automotive leaders—who typically operate within their own organizations came together to tackle shared challenges, we didn&apos;t just facilitate conversation; we ignited a collaborative revolution. This gathering, convened by an automotive trade association under new leadership, proved that even in the most siloed environments, high-quality, impactful collaboration isn&apos;t just possible—it&apos;s transformative. 
              </p>
              <Button asChild variant="yellow" ref={buttonRef} className="hidden sm:flex">
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
                <div className="bg-yellow-200 text-yellow-800 min-h-screen sm:h-[100vh] sm:p-[5vw]">
                  <div className="relative sm:absolute inset-0 top-[20vh] sm:top-[27vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                        <h2 id="next" className="text-4xl md:text-5xl font-medium sm:leading-[1.15] select-none text-left mb-12">
                          The Transformation Story
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-4">
                          As we began this unprecedented collaboration, three critical challenges emerged:
                        </p>
                        <ul className="text-xl">
                          {[
                            "Industry leaders needed new interaction models to comfortably share insights",
                            "Coordinating 200 senior leaders across six strategic priorities required innovative engagement frameworks",
                            "Deeply entrenched silos threatened to derail cross-functional integration efforts"
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
                <div className="bg-yellow-100 text-yellow-800 h-auto sm:h-screen flex flex-col items-center  px-6 md:px-[7vw] py-[8rem] justify-center">
                  <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 items-center mx-auto">
                    <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                      <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                        Our Approach
                      </h2>
                      <p className="text-lg md:text-2xl max-w-2xl mb-4">
                        We designed a dynamic self-guided facilitation model where: 
                      </p>
                      <ul className="text-xl">
                        {[
                          "200 leaders moved through six immersive environments—each transformed into interactive zones with visual prompts, tactile elements, and collaborative canvases.",
                          "Subject matter experts guided organic discussions, encouraging participants to build upon and react to emerging visual artifacts.",
                          "Shared creation exercises converted individual perspectives into collective intelligence through cycles of building, feedback, and refinement."
                        ].map((item, index) => (
                          <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-lg md:text-xl max-w-2xl mt-12">
                        This experiential, visually-driven approach generated palpable energy as participants witnessed their contributions evolve into tangible strategies. Leaders left with both aligned priorities and the emotional investment that comes from seeing their personal imprint on the organization&apos;s future direction. 
                      </p>
                    </div>   

                    <Image
                      src="/graphics/driving-200-leaders-to-one-vision.svg"
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
                <div className="bg-yellow-50 text-yellow-500 py-[8rem] h-auto sm:h-[100vh]">
                  <div className="relative sm:absolute inset-0 sm:top-[22.5vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="">
                        <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                          Our Impact
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-8">
                          Within 6 months of our engagement, the company:
                        </p>
                        <ul className="text-xl">
                          {[
                            "Integrated diverse perspectives into comprehensive strategies across six priority areas.",
                            "Achieved 97% satisfaction with workshop design and 95% positive rating for facilitation.",
                            "Generated 90% increase in alignment and confidence with new strategy."
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
                          ))}
                        </ul>

                        <div>
                          <p className="text-lg max-w-2xl font-semibold mt-20 mb-12 pl-8 border-l border-yellow-500 italic">
                            &quot;The collaborative energy they sparked didn&apos;t fade when they left; it&apos;s become embedded in the table we convene at. Months later, we&apos;re still talking about it.&quot; <br /><br />
                            <span className="font-bold">— CEO, Trade Organization</span>
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

      <Ctayellow />

    </>
  )
}