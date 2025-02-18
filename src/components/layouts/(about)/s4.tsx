'use client'

// MEET OUR FOUNDER

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SolutionLayout() {

  const words = ["Meet", "Our", "Founder"];

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRefs = [useRef<HTMLParagraphElement>(null), useRef<HTMLParagraphElement>(null), useRef<HTMLParagraphElement>(null)]

  const halfSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

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
          start: 'top 80%',
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
          end: "bottom bottom",
          scrub: 1,
        },
      })
    }

    return () => {
      window.removeEventListener("resize", updateSvgSize)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 bg-white min-h-[100vh]">
      <div className="grid grid-cols-2 h-full top-0 size-12 w-full max-w-[1440px] mx-auto ">
        <div className="flex flex-col items-center justify-center col-span-1 md:pr-[20px] lg:px-[80px] w-full h-full pt-[25vh] space-y-8">
          <div className="max-w-3xl mx-auto flex flex-col">
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

            <p ref={textRefs[0]} className="text-lg md:text-[1.675vh] leading-relaxed text-gray-800 max-w-xl mt-12">
              Hi, I&apos;m Sean Wierda. I started Wierd(A)dvisory because I noticed something odd: as the world got more complex, consulting got more formulaic. 
            </p>

            <p ref={textRefs[1]} className="text-lg md:text-[1.675vh] leading-relaxed text-gray-800 max-w-xl mt-12">
              The best solutions I&apos;d seen came from people who thought differently and weren&apos;t afraid to challenge conventional wisdom. So I built a firm around that idea - bringing together talented people who see patterns others miss and aren&apos;t constrained by how things &quot;should&quot; be done.
            </p>

            <p ref={textRefs[2]} className="text-lg md:text-[1.675vh] leading-relaxed text-gray-800 max-w-xl mt-12">
              We take on the kind of problems that make other consultants uncomfortable. The ones where the playbook doesn&apos;t work. Where you need to think from first principles and draw insights from unexpected places.
            </p>

          </div>
        </div>
        
      </div>


      <div ref={halfSectionRef} className="absolute w-[50%] right-0 top-0 h-full bg-blue-50 z-40">
        <div className="absolute inset-0 bg-blue-50 overflow-hidden">
          <Image 
            src="/founder.jpg"
            alt="Founder"
            width={1080}
            height={800}
            className="absolute right-0 w-[50vw] h-full object-cover"
          />
        </div>
      </div>

    </section>
  )
}
