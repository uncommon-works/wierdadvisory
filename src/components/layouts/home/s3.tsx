'use client'

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

const emojiData = [
  { emoji: "🦝", name: "The Captain" },
  { emoji: "🦉", name: "Chess Master" },
  { emoji: "🐬", name: "Code Breaker" },
  { emoji: "🦁", name: "Trailblazer" },
  { emoji: "🐙", name: "Maestro" },
  { emoji: "🦚", name: "Storyteller" },
  { emoji: "🦖", name: "Futurist" },
  { emoji: "🦄", name: "Innovator" },
  { emoji: "🐘", name: "Scientist" },
  { emoji: "🐄", name: "Cultivator" },
  { emoji: "🦮", name: "Guide" },
  { emoji: "🐢", name: "Designer" },
]

export default function Sec3() {
  return (
    <div className="bg-blue-50 h-[100vh] p-[5vw] text-blue-950">
      <div className="absolute inset-0 top-[30vh] px-6">
        <div className="max-w-[1180px] mx-auto text-center flex flex-col items-center ">
          <h2 className="text-2xl md:text-4xl font-regular leading-[1.15] select-none">
            Our team is comprised of exceptional interdisciplinary thinkers and doers who are passionate about problems that are anything but ordinary.
          </h2>
          <p className="text-lg md:text-xl text-blue-950 font-regular max-w-3xl mt-12 mb-24">
            Although we&apos;re based in Toronto, Canada, we are strong disciples of the future of work and service clients <span className="font-bold ">around the world.</span>
          </p>
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-6 grid-rows-2 gap-x-16 gap-y-16">
              {emojiData.map((item, index) => (
                <EmojiCell key={index} emoji={item.emoji} name={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function EmojiCell({ emoji, name }: { emoji: string; name: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  

  useEffect(() => {
    // Cleanup function to kill timeline on unmount
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [])

  useEffect(() => {
    if (!tooltipRef.current) return

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    // Create a new timeline
    timelineRef.current = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.out" },
    })

    if (isHovered) {
      timelineRef.current
        .set(tooltipRef.current, {
          rotateZ: 0,
          x: 0,
        })
        .to(tooltipRef.current, {
          opacity: 1,
          y: -50,
          duration: 0.3,
        })
    } else {
      timelineRef.current.to(tooltipRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (tooltipRef.current) {
            gsap.set(tooltipRef.current, { clearProps: "all" })
          }
        },
      })
    }
  }, [isHovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tooltipRef.current || !containerRef.current || !isHovered) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    const rotation = -20 + percentage * 40
    const xOffset = -20 + percentage * 40

    gsap.to(tooltipRef.current, {
      rotateZ: rotation,
      x: xOffset,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto", // Automatically overwrite conflicting animations
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Ensure any ongoing mousemove animations are killed
    if (tooltipRef.current) {
      gsap.killTweensOf(tooltipRef.current)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative flex aspect-square items-center justify-center font-noto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >

      <div className={`${notoEmoji.variable} font-noto flex h-16 w-16 cursor-pointer items-center justify-center text-7xl transition-transform select-none`}
      >
        {emoji}
      </div>
      <div
        ref={tooltipRef}
        className="pointer-events-none absolute opacity-0 whitespace-nowrap rounded-full bg-blue-100 px-6 py-2 text-sm font-medium text-blue-900 shadow-lg before:absolute before:left-1/2 before:top-[95%] before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-blue-100"
      >
        {name}
      </div>
    </div>
  )
}