'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

gsap.registerPlugin(ScrollTrigger)

export default function SolutionLayout() {


  const words = ["Meet", "Our", "Founder"];

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRefs = [useRef<HTMLParagraphElement>(null), useRef<HTMLParagraphElement>(null), useRef<HTMLParagraphElement>(null), useRef<HTMLParagraphElement>(null)]

  const halfSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    if (window.innerWidth < 500) return;

    if (
      !sectionRef.current ||
      !halfSectionRef.current      
    ) return

    const ctx = gsap.context(() => {

      gsap.set(halfSectionRef.current, { 
        width: "0%",
      })

      gsap.to(halfSectionRef.current, {
        width: "50%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 50%",
          scrub: 1,
        }
      })
    }, sectionRef)

    return () => ctx.revert()

  }, [sectionRef])

  useEffect(() => {

    if (window.innerWidth < 500) return;
    
    if (!sectionRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {

      const fullSpans = headingRef.current?.querySelectorAll('.full') || []
      gsap.set(fullSpans, { y: '100%' })
      gsap.to(fullSpans, {
        y: '0%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          toggleActions: 'play reverse play reverse',
        }
      })

      textRefs.forEach((ref) => {
        gsap.fromTo(ref.current, 
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1, y: 0, duration: 1.5, ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  })

  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const updateSvgSize = () => {
      if (svgRef.current && pathRef.current) {
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const originalWidth = 2307
        const originalHeight = 5919

        let newWidth, newHeight

        if (viewportHeight / viewportWidth > originalHeight / originalWidth) {
          // Viewport is taller than the original aspect ratio
          newWidth = viewportWidth
          newHeight = (viewportWidth * originalHeight) / originalWidth
        } else {
          // Viewport is wider than the original aspect ratio
          newHeight = viewportHeight
          newWidth = (viewportHeight * originalWidth) / originalHeight
        }

        svgRef.current.style.width = `${newWidth}px`
        svgRef.current.style.height = `${newHeight}px`
        svgRef.current.setAttribute("viewBox", `0 0 ${originalWidth} ${originalHeight}`)

        // Center the SVG
        svgRef.current.style.left = `${(viewportWidth - newWidth) / 2}px`
        svgRef.current.style.top = `${(viewportHeight - newHeight) / 2}px`
      }
    }

    updateSvgSize()
    window.addEventListener("resize", updateSvgSize)

    if (pathRef.current) {
      const path = pathRef.current
      const length = path.getTotalLength()

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom 25%",
          scrub: 3,
        },
      })
    }

    return () => {
      window.removeEventListener("resize", updateSvgSize)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative flex flex-col-reverse md:flex-row gap-16 md:gap-0 px-8 py-[8rem] md:py-0 bg-white min-h-[100vh] text-green-900">
      <div className="flex md:grid grid-cols-2 h-full top-0 size-12 w-full max-w-[1440px] mx-auto ">
        <div className="flex md:flex-col items-center justify-center col-span-1 md:pr-[20px] lg:px-[80px] w-full h-full md:pt-[25vh] space-y-8">
          <div className="md:max-w-3xl mx-auto flex flex-col">
            <h3 ref={headingRef} className="text-4xl md:text-5xl font-regular leading-[1.15] max-w-3xl select-none">
              {words.map((word, i) => {
                const isBold = word === "Founder";
                return (
                  <span key={i} className="relative inline-block leading-auto md:pb-1 overflow-hidden">
                    <span className={`faint inline-block opacity-10 ${isBold ? "font-bold" : ""}`}>
                      {word}{i !== words.length - 1 && "\u00A0"}
                    </span>
                    <span className={`full inline-block absolute top-0 left-0 ${isBold ? "font-bold" : ""}`}>
                      {word}{i !== words.length - 1 && "\u00A0"}
                    </span>
                  </span>
                );
              })}
            </h3>

            <h4 ref={textRefs[0]} className="text-lg md:text-[2.675vh] leading-relaxed max-w-xl mt-12">
              Hi, I&apos;m <a className="font-bold underline hover:opacity-60 transition-opacity cursor-pointer" href="https://seanwierda.com" target="_blank" rel="noopener noreferrer">Sean Wierda</a>. <span className={`${notoEmoji.variable} font-noto font-bold`}>👋</span>
            </h4>

            <p ref={textRefs[1]} className="text-lg md:text-[1.675vh] leading-relaxed max-w-xl mt-6">
              I started Wierd(A)dvisory because I noticed something odd: as the world got more complex, consulting got more formulaic. 
            </p>

            <p ref={textRefs[2]} className="text-lg md:text-[1.675vh] leading-relaxed max-w-xl mt-6">
              The best solutions I&apos;d seen came from people who thought differently and weren&apos;t afraid to challenge conventional wisdom. So I built a firm around that idea - bringing together talented people who see patterns others miss and aren&apos;t constrained by how things &quot;should&quot; be done.
            </p>

            <p ref={textRefs[3]} className="text-lg md:text-[1.675vh] leading-relaxed max-w-xl mt-6">
              We take on the kind of problems that make other consultants uncomfortable. The ones where the playbook doesn&apos;t work. Where you need to think from first principles and draw insights from unexpected places.
            </p>

          </div>
        </div>
      </div>


      <div ref={halfSectionRef} className="relative md:absolute md:w-[50%] right-0 top-0 h-full bg-green-50 z-40">
        <div className="relative md:absolute md:inset-0 bg-green-100 overflow-hidden">
          <Image 
            src="/founder.png"
            alt="Founder"
            width={1080}
            height={800}
            className="md:absolute right-0 md:w-[50vw] h-full object-cover"
          />
        </div>
      </div>

    </section>
  )
}
