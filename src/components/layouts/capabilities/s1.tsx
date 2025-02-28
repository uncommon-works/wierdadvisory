'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger)

export default function AboutLayout() {

  const words = [
    "From",
    "Takeoff",
    "to",
    "Altitude"
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)


  const planeRef = useRef<HTMLDivElement | null>(null); // Add reference for the plane

  useEffect(() => {
    if (window.innerWidth < 500) return;

    if (!sectionRef.current || !pathRef.current || !planeRef.current) {
      return;
    }

    const path = pathRef.current;
    const pathLength = path?.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });

    gsap.to(planeRef.current, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });
  }, []);


  useEffect(() => {

    if (window.innerWidth < 500) return;

    if (
      !sectionRef.current ||
      !headingRef.current ||
      !textRef.current ||
      !pathRef.current
    ) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { })
      gsap.set(textRef.current, { autoAlpha: 0.05 })

      const fullSpans = headingRef.current?.querySelectorAll('.full') || []
      gsap.set(fullSpans, { y: '100%' })

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 10%',
          toggleActions: 'play reverse play reverse',
          scrub: 1.5,
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

      const path = pathRef.current;
      const pathLength = path?.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-auto md:h-[100vh] bg-red-50 text-red-950">
      <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-8">
        <div className="max-w-2xl mx-auto flex flex-col items-start text-left">
          <p className="font-medium mb-8 baskerville">From 0 → A</p>
          <h2 ref={headingRef} className="text-4xl md:text-6xl leading-[1.15] max-w-3xl select-none">
            {words.map((word, i) => {
              const isBold = word === "Altitude";
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
          </h2>
          <div ref={textRef} className="text-lg md:text-xl max-w-xl my-12">
            <p className="mb-8 text-lg">
              Starting anything new—whether it&apos;s a fresh initiative or pushing into leading-edge territory—is hard because you have to get two things right: seeing clearly where you need to go, and executing precisely to get there. We&apos;re good at both. We help you spot the right path forward and build the momentum to actually get there.
            </p>
            
          </div>
          <div className={`${notoEmoji.variable} block md:hidden antialiased font-noto text-6xl `}>
            🚂 🛫 🚀
          </div>
        </div>
      </div>
      
      <svg 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="xMidYMid meet" 
        className="absolute top-[25vh] left-0 w-full h-full hidden md:block"
      >
        <path
          ref={pathRef}
          d="M 0 50 L 600 50 C 750 50 850 20 1020 -100"
          stroke="rgb(69 10 10)"
          strokeWidth="6"  // Adjusted for higher resolution
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div
        ref={planeRef}
        className={`${notoEmoji.variable} font-noto absolute w-12 h-[12.5rem] text-[100px]`}
      >
        <p className="rotate-45">✈</p>
      </div>
    </section>
  )
}
