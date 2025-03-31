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

  const textRef1 = useRef<HTMLHeadingElement | null>(null)
  const textRef2 = useRef<HTMLHeadingElement | null>(null)
  const textRef3 = useRef<HTMLHeadingElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const breadcrumbRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const section1Ref = useRef<HTMLDivElement | null>(null)
  const section2Ref = useRef<HTMLDivElement | null>(null)

  const A0 = useRef<HTMLDivElement | null>(null)
  const A1 = useRef<HTMLDivElement | null>(null)
  const A2 = useRef<HTMLDivElement | null>(null)

  const S1 = useRef<HTMLDivElement | null>(null)
  const S2 = useRef<HTMLDivElement | null>(null)

  const wrapper0Ref = useRef<HTMLDivElement | null>(null)
  const wrapper1Ref = useRef<HTMLDivElement | null>(null)
  const wrapper2Ref = useRef<HTMLDivElement | null>(null)
  

  useEffect(() => {

    if (window.innerWidth < 500) return;

    if (
      !breadcrumbRef.current ||
      !textRef1.current ||
      !textRef2.current ||
      !textRef3.current ||
      !containerRef.current ||
      !subtitleRef.current ||
      !buttonRef.current
    ) return

    const tl = gsap.timeline()
    const mm = gsap.matchMedia()

    const textChildren1 = textRef1.current?.children
    const textChildren2 = textRef2.current?.children
    const textChildren3 = textRef3.current?.children

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

        gsap.set(textChildren1, { 
          y: context.conditions?.isMobile ? "100%" : "150%" 
        })

        gsap.set(textChildren2, { 
          y: context.conditions?.isMobile ? "100%" : "150%" 
        })

        gsap.set(textChildren3, { 
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
          textChildren1, { 
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
          textChildren3, { 
            y: 0, 
            duration: 1, 
            stagger: 0.05, 
            ease: "power4.out",
          },"-=1.0",
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
      !A0.current ||
      !A1.current ||
      !A2.current ||
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
                        Ecosystem Intelligence: Renewing Purpose for a National Innovation Catalyst
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div ref={containerRef}>
                <h1 ref={textRef1} className="hidden sm:block text-5xl h-[38px] md:h-[64px] overflow-hidden w-max "> 
                  <span className="relative inline-block">Ecosystem</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Intelligence:</span>
                  <span className="relative inline-block">&nbsp;</span>
                </h1>
                <h1 ref={textRef2} className="hidden sm:block text-5xl h-[38px] md:h-[64px] overflow-hidden w-max "> 
                  <span className="relative inline-block">Renewing</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Purpose</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">For</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">a</span>
                </h1>
                <h1 ref={textRef3} className="hidden sm:block text-5xl h-[38px] md:h-[64px] overflow-hidden w-max "> 
                  <span className="relative inline-block">National</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Innovative</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Catalyst</span>
                </h1>
              </div>
              <h1 className="block sm:hidden text-4xl">
                Ecosystem Intelligence: Renewing Purpose for a National Innovation Catalyst
              </h1>
              <p ref={subtitleRef} className="text-lg md:text-2xl max-w-2xl mt-6 mb-12">
                When a national innovation catalyst with 100+ successful ventures found itself struggling to justify its continued relevance, we discovered the problem wasn&apos;t their capabilities but their understanding of the rapidly evolving landscape around them. Despite deep connections across sectors, this organization couldn&apos;t articulate its unique value to increasingly skeptical funders and board members.
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
          
          <div id="next" ref={section2Ref} className="relative h-auto md:h-[350vh] overflow-hidden">
            
          <div ref={wrapper0Ref} className="relative h-auto md:h-[150vh] z-10 overflow-hidden">
              <div ref={A0} className="relative h-auto md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-blue-100 text-blue-950 min-h-screen sm:h-[100vh] sm:p-[5vw]">
                  <div className="relative sm:absolute inset-0 top-[20vh] sm:top-[20vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                        <h2 id="next" className="text-4xl md:text-5xl font-medium sm:leading-[1.15] select-none text-left mb-12">
                          Our investigation revealed three critical gaps:
                        </h2>
                        <ul className="text-xl">
                          {[
                            "The organization was operating on outdated assumptions about national innovation dynamics, missing critical shifts in how resources, talent, and ideas were flowing",
                            "They identified numerous promising trends they could pursue, but struggled to determine where they were uniquely positioned to add value in a landscape already crowded with similar initiatives",
                            "Their work needed to satisfy prominent leaders from political, academic, and business circles who held fundamentally different views on innovation priorities and approaches"
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

            <div ref={wrapper1Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
              <div ref={A1} className="relative h-auto md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-blue-200 text-blue-950 h-auto sm:h-screen flex flex-col items-center px-6 md:px-[7vw] py-[8rem] justify-center">
                  <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 items-center mx-auto">
                    <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                      <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                        Our Approach
                      </h2>
                      <p className="text-lg md:text-2xl max-w-2xl mb-4">
                      We designed a comprehensive intelligence-gathering operation that went beyond superficial analysis:
                      </p>
                      <ul className="text-xl">
                        {[
                          "Conducted 50+ in-depth interviews with ecosystem participants across sectors, focusing on uncovering unspoken challenges and emerging opportunities that statistical reports had missed.",
                          "Synthesized seemingly disconnected insights into a coherent map of the national innovation landscape, revealing counterintuitive connections and overlooked leverage points.",
                          "Transformed complex findings into clear, compelling options that resonated with even the most skeptical board members."
                        ].map((item, index) => (
                          <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
                        ))}
                      </ul>
                    </div>   

                    <Image
                      src="/graphics/ecosystem-intelligence-renewing-purpose-for-a-national-innovation-catalyst.svg"
                      alt="AI Vision to Execution" 
                      width={1080} 
                      height={530}
                    />
                    
                  </div>
                </div>  
              </div>
            </div>  
  
            <div ref={wrapper2Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
              <div ref={A2} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-blue-50 text-blue-950 min-h-screen sm:h-[100vh] sm:p-[5vw]">
                  <div className="relative sm:absolute inset-0 top-[10vh] sm:top-[22.5vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                        <h2 id="next" className="text-4xl md:text-5xl font-medium sm:leading-[1.15] select-none text-left mb-12">
                          Strategic Impact 
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-8">
                          Our investigation and strategic translation work delivered concrete results:
                        </p>
                        <ul className="text-xl">
                          {[
                            "Secured commitment from influential ecosystem leaders across sectors, establishing essential support network for future implementation success",
                            "Equipped the organization with a unique perspective that made them newly relevant to policy discussions they had previously been excluded from."
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
                          ))}
                        </ul>

                        <div>
                          <p className="text-lg max-w-2xl font-semibold mt-6 mb-12 pl-8 border-l border-blue-950 italic">
                            &quot;What impressed us wasn&apos;t just the thoroughness of the research, but how you transformed complex insights into clear strategic choices. You managed to speak to the concerns of our most demanding stakeholders while avoiding the academic trap of analysis without recommendation.&quot; <br /><br />
                            <span className="font-bold">— Board Chair</span>
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