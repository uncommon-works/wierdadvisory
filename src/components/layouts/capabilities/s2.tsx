'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Noto_Emoji } from "next/font/google"
import MagneticWrapper from '@/components/ui/magnetic-wrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

gsap.registerPlugin(ScrollTrigger)

export default function AboutLayout() {
  const words = ["From", "Barriers", "to", "Clarity"]

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const emojiRef = useRef<HTMLDivElement | null>(null)
  const emojiLargeRef = useRef<HTMLDivElement | null>(null)

  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {

    if (window.innerWidth < 500) return;

    if (!sectionRef.current || !headingRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { autoAlpha: 0.05 })

      const fullSpans = headingRef.current?.querySelectorAll('.full') || []
      gsap.set(fullSpans, { y: '100%' })

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%',
          toggleActions: 'play reverse play reverse',
        },
      })
      .to(fullSpans, {
        y: '0%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1,
      })
      .to(textRef.current, { 
        autoAlpha: 1 
      }, 0.2)

      // Emoji stagger animation
      const animateEmojis = (emojiContainer: HTMLDivElement | null) => {
        if (!emojiContainer) return
        const emojiSpans = emojiContainer.querySelectorAll('.el') as NodeListOf<HTMLSpanElement>

        gsap.set(emojiSpans, { autoAlpha: 0, y: 20 }) // Start hidden and slightly below

        gsap.to(emojiSpans, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2, // Delay between each emoji
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        })
      }

      animateEmojis(emojiRef.current)
      animateEmojis(emojiLargeRef.current)
      
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {

    if (window.innerWidth < 500) return;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom 80%", 
        scrub: 4,
      },
    });
  
    const path = svgRef.current?.querySelector(".thought-path") as SVGPathElement | null;
    const emojis = Array.from(svgRef.current?.querySelectorAll(".el") ?? []) as SVGGElement[];
  
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    }
  
    gsap.set(emojis, { scale: 0, opacity: 0 });
  
    if (path) {
      tl.to(path, {
        duration: 10,
        strokeDashoffset: 0,
        ease: "power1.inOut",
      });
    }
  
    // Animate emojis
    if (emojis.length) {
      tl.to(
        emojis,
        {
          duration: 1.5,
          scale: 1,
          opacity: 1,
          stagger: 1,
          ease: "power1.out)",
        },
        "-=8",
      );
    }
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-auto md:h-[100vh] bg-red-200 text-red-950">
      <div className="sticky top-0 flex flex-col sm:items-center justify-center min-h-screen w-full overflow-hidden px-8">
        <div className="max-w-2xl mx-auto flex flex-col items-start text-left">
          <p className="font-medium mb-8 baskerville">From B → C</p>
          <h2 ref={headingRef} className="text-4xl md:text-6xl leading-[1.15] max-w-3xl select-none">
            {words.map((word, i) => {
              const isBold = word === "Clarity"
              return (
                <span key={i} className="relative inline-block leading-auto md:pb-1 overflow-hidden">
                  <span className={`faint inline-block opacity-10 ${isBold ? "font-bold" : ""}`}>
                    {word}{i !== words.length - 1 && "\u00A0"}
                  </span>
                  <span className={`full inline-block absolute top-0 left-0 ${isBold ? "font-bold" : ""}`}>
                    {word}{i !== words.length - 1 && "\u00A0"}
                  </span>
                </span>
              )
            })}
          </h2>
          <div ref={textRef} className="flex flex-col items-start text-lg md:text-xl max-w-xl mt-12">
            <p className="mb-8 text-lg">
              Most strategic problems persist because something&apos;s blocking clear thinking—whether it&apos;s outdated assumptions, organizational habits, or past approaches that didn&apos;t work. We help teams cut through these barriers. By creating space to think differently, we help you see solutions that were there all along. 
            </p>
            <MagneticWrapper>
              <Button asChild variant="red" size="lg">
                <a 
                  href="/case-studies/from-underdogs-to-launch-ready/"
                  className="flex flex-row space-x-1 items-center font-medium pt-8 pb-8 sm:pt-0 sm:pb-0 text-wrap sm:text-nowrap cursor-pointer">
                  <p className="hidden sm:block">Read About How We Unlocked Hidden Market Potential</p> 
                  <p className="block sm:hidden">Read More</p> 
                  <ArrowRight />
                </a>
              </Button>
            </MagneticWrapper>
          </div>

          <div className={`${notoEmoji.className} flex gap-6 sm:hidden font-noto font-bold text-red-900 relative z-20 text-left text-6xl space-x-6 mt-12`}>
            <div>🤔</div>
            <div>💭</div>
            <div>💡</div>
          </div>

          <div className={`${notoEmoji.variable} block md:hidden antialiased font-noto text-6xl `}>
            🌎 🚀 🌚
          </div>

        </div>

        {/* Large screen emoji */}
        <div className={`${notoEmoji.className} hidden sm:block font-noto font-bold text-red-900 relative mx-auto w-screen min-h-[30vh]`}>
          <svg ref={svgRef} viewBox="0 0 1000 200" className="h-auto w-full">
            {/* Curved path that jumps over the emojis */}
            <path
              className="thought-path"
              d="M 50,150 
                C 150,20 250,20 350,150
                C 450,20 550,20 650,150
                C 750,20 850,20 950,150"
              stroke="rgb(69 10 10)"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />

            {/* Emoji containers with background circles */}
            <g className="el" transform="translate(200, 150)">
              <text x="0" y="2" fontSize="60" textAnchor="middle" dominantBaseline="middle" fill="rgb(69 10 10)">
                🚧
              </text>
            </g>

            <g className="el" transform="translate(500, 150)">
              <text x="0" y="2" fontSize="60" textAnchor="middle" dominantBaseline="middle" fill="rgb(69 10 10)">
                💭
              </text>
            </g>

            <g className="el" transform="translate(800, 150)">
              <text x="0" y="2" fontSize="60" textAnchor="middle" dominantBaseline="middle" fill="rgb(69 10 10)">
                💡
              </text>
            </g>
          </svg>

        </div>
      </div>
    </section>
  )
}
