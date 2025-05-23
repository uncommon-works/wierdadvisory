'use client'

import MagneticWrapper from '@/components/ui/magnetic-wrapper'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Noto_Emoji } from "next/font/google";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSheet } from '@/components/ui/sheet-provider'
import { ContactForm } from '@/components/forms/contact-form'


const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

export default function CtaLayout() {

  const { openSheet } = useSheet()

  const handleOpenSheet = () => {
    openSheet(
      <>
        <div className="mb-10">
          <p className="text-sm text-muted-foreground">
            For any request, please fill in the following form. Our team will get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </>,
    )
  }

  const words = [
    "Feeling",
    "a",
    "Little",
    "Weird?",
    "Let's",
    "Talk.",
  ]

  const hand1 = useRef<HTMLDivElement | null>(null)
  const hand2 = useRef<HTMLDivElement | null>(null)
  const hand3 = useRef<HTMLDivElement | null>(null)
  const hand4 = useRef<HTMLDivElement | null>(null)
  const hand5 = useRef<HTMLDivElement | null>(null)
  const ctaSection = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    if (
      !hand1.current ||
      !hand2.current ||
      !hand3.current ||
      !hand4.current ||
      !hand5.current ||
      !ctaSection.current ||
      !headingRef.current 
    ) return
    
    const handItems = [
      { ref: hand1.current, rotation: "125deg" },
      { ref: hand2.current, rotation: "152deg" },
      { ref: hand3.current, rotation: "-180deg" },
      { ref: hand4.current, rotation: "-152deg" },
      { ref: hand5.current, rotation: "-125deg" },
    ]

    const customOrderIndices = [0, 3, 1, 2, 4]
    const customOrder = customOrderIndices.map(i => handItems[i])
    const fullSpans = headingRef.current?.querySelectorAll('.full') || []

    gsap.set(fullSpans, { y: '100%' })
    gsap.set(customOrder.map(item => item.ref), { rotate: "0deg" })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaSection.current,
        start: 'top 70%', 
        toggleActions: 'play reverse play reverse',
      }
    })

    tl.to(fullSpans, {
      y: '0%',
      duration: 1,
      ease: 'power4.out',
      stagger: 0.1,
    })
    
    .to(customOrder.map(item => item.ref), {
      duration: 1,
      ease: 'power4.inOut',
      rotate: (i) => customOrder[i].rotation,
      stagger: 0.1,
    }, "<")

  }, [])

  return (
    <div ref={ctaSection} className={`${notoEmoji.variable} antialiased w-full py-[10rem] flex flex-col items-center justify-center`}> 
      <h2 ref={headingRef} className="text-4xl md:text-5xl font-regular leading-[1.15] max-w-3xl text-center select-none mb-12">
        {words.map((word, i) => {
          const isBold = word === "Let's" || word === "Talk."
          return (
            <span key={i} className="relative inline-block md:pb-2 overflow-hidden">
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
      <div className="relative flex justify-center md:space-x-2 font-noto select-none">
        <div ref={hand1} className="text-5xl md:text-7xl font-bold">👆🏻</div>
        <div ref={hand2} className="text-5xl md:text-7xl font-bold">👆🏻</div>
        <div ref={hand3} className="text-5xl md:text-7xl font-bold">👆🏻</div>
        <div ref={hand4} className="text-5xl md:text-7xl font-bold">👆🏻</div>
        <div ref={hand5} className="text-5xl md:text-7xl font-bold">👆🏻</div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-12 ">
            
        <MagneticWrapper asChild>
          <Button asChild variant="blue" size="lg" className="">
            <Link href="/about">
              About W(A)
            </Link>
          </Button>
        </MagneticWrapper>

        <MagneticWrapper >
          <Button onClick={ handleOpenSheet } variant="outlineBlue" size="lg" >
            <p>
              Contact Us
            </p>
          </Button>
        </MagneticWrapper>

      </div>
        
    </div>
  )
}