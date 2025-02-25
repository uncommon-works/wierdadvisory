'use client'

import React from 'react'
import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

export default function Sec1() {
  return (
    <div className="bg-blue-200 min-h-screen md:h-[200vh] p-6 md:p-[5vw] select-none">
      <div className="relative md:absolute inset-0 top-[20vh] md:top-[32.5vh] px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-regular leading-snug md:leading-[1.15] select-none">
            We recognize that <span className="font-bold">craftsmanship</span> is missing in the mainstream advisory world; and strive to fill that gap with our plain speak, unconventional talent, and novel solutions.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary max-w-sm sm:max-w-md md:max-w-xl mt-8 md:mt-12">
            Our clients tend to be people who share our values of prioritizing <span className="font-bold">quality, reliability, and originality over brand prestige.</span>
          </p>
          <div className={`${notoEmoji.variable} antialiased leading-[1.25] mt-16 md:mt-24 font-noto text-5xl sm:text-6xl md:text-7xl my-8 md:my-12`}>
            🔳🔲🔨🔲🌟🔲🔘♠🔲🔳
          </div>
        </div>
      </div>
    </div>
  )
}
