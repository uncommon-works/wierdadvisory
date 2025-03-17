'use client'

import { useRef } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);
}

export default function AnimatedGraphic() {
  
  const line1 = useRef<HTMLDivElement | null>(null)
  const line2 = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: line1.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
  });
  



  return (
    <div className="relative w-full h-48">
      <div ref={line1}>
        <Line1svg />
      </div>
      <div ref={line2}>
        <Line2svg />
      </div>
    </div>
  )
};

function Line1svg() {
  return (
    <svg width="308" height="208" viewBox="0 0 308 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M304 4C121.5 4 6.85987 61.2355 4 204" stroke="black" stroke-width="8" stroke-linecap="round"/>
    </svg>
  )
};

function Line2svg() {
  return (
    <svg width="308" height="208" viewBox="0 0 308 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 4.5C187 4.5 301.64 61.7355 304.5 204.5" stroke="black" stroke-width="8" stroke-linecap="round"/>
    </svg>
  )
};