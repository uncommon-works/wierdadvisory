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

import Ctagreen from "@/components/layouts/case-studies/cta-green"
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
      <section className="bg-green-50 min-h-screen">
        <div ref={section1Ref} className="relative h-auto ">
          <div ref={S1} className="sm:sticky top-0 min-h-screen px-6 text-green-900">
            <div className="max-w-3xl mx-auto flex flex-col items-start justify-center py-[12rem] h-screen">
              <div ref={breadcrumbRef} className="relative">
                <Breadcrumb className="mb-12">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/case-studies" className="text-green-900 hover:text-green-900 hover:font-semibold transition-all duration-500">
                        Case Studies
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-green-900" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-bold text-green-900">
                        Uniting Technical Tribes Into a Shared Narrative
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div ref={containerRef}>
                <h1 ref={textRef} className="hidden sm:block text-6xl h-[44px] md:h-[86px] overflow-hidden w-max"> 
                  <span className="relative inline-block">Uniting</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Technical</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Tribes</span>
                </h1>
                <h1 ref={textRef2} className="hidden sm:block text-6xl h-[44px] md:h-[86px] overflow-hidden w-max"> 
                  <span className="relative inline-block">Into</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">a</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Shared</span>
                  <span className="relative inline-block">&nbsp;</span>
                  <span className="relative inline-block">Narrative</span>
                </h1>
              </div>
              <h1 className="block sm:hidden text-4xl">
              Uniting Technical Tribes Into a Shared Narrative
              </h1>
              <p ref={subtitleRef} className="text-lg md:text-2xl max-w-2xl mt-6 mb-12">
                A Top 10 Global Software Company faced a critical moment after a major reorganization merged engineering, product, and specialist teams under a unified technology division. <br /><br />While individually strong, these teams operated with conflicting visions and languages - each telling a different story about what made the company&apos;s technology valuable. 
              </p>
              <Button asChild variant="green" ref={buttonRef} className="hidden sm:flex">
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
                <div className="bg-green-200 text-green-800 min-h-screen sm:h-[100vh] sm:p-[5vw]">
                  <div className="relative sm:absolute inset-0 top-[20vh] sm:top-[15vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                        <h2 id="next" className="text-4xl md:text-5xl font-medium sm:leading-[1.15] select-none text-left mb-12">
                          The Challenge:
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-4">
                        Engineering celebrated architectural innovation, product teams focused on user experience, and data specialists emphasized analytics capabilities. When the new CTO tried to articulate a unified technology story, it revealed a fragmented narrative landscape where teams couldn&apos;t see their connection to a larger purpo
                        </p>
                        <ul className="text-xl">
                          {[
                            "Each team told a different story about their value, creating disconnected narratives that failed to resonate with senior leadership or each other ",
                            "Previous attempts at creating a unified message resulted in generic corporate language that technical teams dismissed as inauthentic marketing speak",
                            "The global scale (3,000+ professionals across 11 countries) meant that stories needed cultural translation to maintain meaning and impact across contexts"
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
                <div className="bg-green-100 text-green-800 h-auto sm:h-screen flex flex-col items-center px-6 py-[8rem] justify-center">
                  <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 items-center mx-auto">
                    <div className="col-span-1 flex flex-col items-start pr-0 sm:pr-[8rem]">
                      <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                      How We Orchestrated Their Transformation
                      </h2>
                      <p className="text-lg md:text-2xl max-w-2xl mb-4">
                      We designed a multi-layered approach to create and cascade a unifying story:
                      </p>
                      <ul className="text-xl">
                        {[
                          "Crafted a compelling narrative that wove together the distinctive strengths of each team into a coherent story about their collective contribution to customer success, making visible previously hidden connections",
                          "Executed strategic storytelling workshops with influential voices from each discipline, helping them discover shared themes and translate technical capabilities into meaningful business impact stories",
                          "Developed a rich storytelling toolkit with flexible frameworks that enabled leaders to adapt the core narrative for different audiences while maintaining consistent themes and purpose ",
                        ].map((item, index) => (
                          <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
                        ))}
                      </ul>
                    </div>   

                    <Image
                      src="/graphics/uniting-technical-tribes-into-a-shared-narrative.svg"
                      alt="uniting Technical Tribes into a Shared Narrative Graphic"
                      width={1080} 
                      height={530}
                    />
                    
                  </div>
                </div>  
              </div>  
            </div>  
  
            <div ref={wrapper3Ref} className="relative md:h-[100vh] z-10 overflow-hidden">
              <div ref={A3} className="relative md:h-[200vh] md:-mt-[25vh] z-10">
                <div className="bg-green-50 text-green-900 py-[8rem] h-auto sm:h-[100vh]">
                  <div className="relative sm:absolute inset-0 sm:top-[20vh] px-6 sm:px-8">
                    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
                      <div className="">
                        <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] select-none text-left mb-12">
                          Our Impact
                        </h2>
                        <p className="text-lg md:text-2xl max-w-2xl mb-8">
                        The strategic storytelling approach transformed how teams saw themselves and worked together:
                        </p>
                        <ul className="text-xl">
                          {[
                            "Transformed siloed perspectives into a shared narrative, with 75% of team members able to articulate how their work connected to broader company purpose in consistent ways",
                            "Elevated technical communications with senior leadership, replacing feature lists with compelling stories about customer and business impact",
                            "Sparked voluntary storytelling communities of practice where teams began sharing success stories and lessons learned across previous organizational boundaries"
                          ].map((item, index) => (
                            <li key={index} className="list-disc ml-6 mb-4" style={{ listStyleType: 'square' }}>{item}</li>
                          ))}
                        </ul>

                        <div>
                          <p className="text-lg max-w-2xl font-semibold mt-20 mb-12 pl-8 border-l border-green-900 italic">
                            &quot;What stood out was how you helped us find our authentic story—not imposed from above but discovered within our teams. Our engineers and product specialists are now telling the same story from different angles, creating a richer narrative that resonates with everyone from developers to the board room..&quot; <br /><br />
                            <span className="font-bold">— Chief Technology Officer</span>
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

      <Ctagreen />

    </>
  )
}