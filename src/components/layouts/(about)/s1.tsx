'use client'

// ABOUT WIERD(A)DVISORY

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
    <div className="bg-blue-200 h-[200vh] p-[5vw] select-none">
      <div className="absolute inset-0 top-[32.5vh] px-6">
        <div className="max-w-[1080px] mx-auto text-center flex flex-col items-center ">
          <h2 className="text-2xl md:text-2xl font-regular md:max-w-2xl select-none">
            We Are<br /> <span className="inline-block py-6 text-4xl md:text-7xl baskerville">Wierd<span className="font-bold">(A)</span>dvisory</span>
          </h2>
        
          <p className="text-lg md:text-xl text-primary max-w-3xl mt-12">
            At Wierd(A)dvisory, we tackle the problems that don&apos;t have obvious answers. We believe strategy is more craft than formula - each solution should be as unique as the challenge it addresses. Our clients come to us when they need a standard of thinking and service that goes beyond the conventional and execution that matches their ambition.
          </p>
          <div className={`${notoEmoji.variable} antialiased mt-24 font-noto text-7xl my-12 `}>
            🦝
          </div>
        </div>
      </div>
    </div>
  )
}
