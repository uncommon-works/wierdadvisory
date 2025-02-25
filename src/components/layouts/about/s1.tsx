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
    <div className="bg-green-200 text-green-900 md:h-[200vh] select-none py-[12rem]">
      <div className="relative md:absolute md:inset-0 md:top-[22.5vh] px-6">
        <div className="max-w-[1080px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-2xl font-regular md:max-w-2xl select-none">
            We Are<br /> <span className="inline-block py-6 text-4xl md:text-7xl baskerville">Wierd<span className="font-bold">(A)</span>dvisory</span>
          </h2>
        
          <p className="text-lg md:text-xl max-w-3xl mt-12">
            We believe strategy is more craft than formula - each solution should be as unique as the challenge it addresses. Our clients come to us when they need a standard of thinking and service that goes beyond the conventional and execution that matches their ambition.
          </p>

          <div className="md:min-h-screen bg-gradient-to-br pt-24">
            <div className="mx-auto max-w-2xl">
              <div className={`${notoEmoji.variable} font-noto flex cursor-pointer items-center justify-center text-6xl md:text-[92px] transition-transform select-none`}
              >
                ⏳&nbsp;🤖&nbsp;🧩
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}