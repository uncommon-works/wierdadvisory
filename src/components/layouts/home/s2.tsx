'use client'

import React from 'react'
import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

export default function Sec2() {
  return (
    <div className="bg-blue-300 min-h-screen sm:h-[100vh] p-6 sm:p-[5vw]">
      <div className="relative sm:absolute inset-0 top-[20vh] sm:top-[27vh] px-4 sm:px-8">
        <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 items-center mx-auto">
          <div className="col-span-1 flex flex-col items-center sm:items-start pr-0 sm:pr-[8rem]">
            <h2 className="text-xl sm:text-xl md:text-3xl font-regular leading-snug sm:leading-[1.15] select-none text-center sm:text-left">
              We partner with <span className="font-bold">senior executives</span> at some of the world&apos;s most <span className="font-bold">respected companies and promising start-ups</span> who face unique challenges arising from complex internal and external dynamics.
            </h2>
          </div>  

          {/* Mobile-only simplified emoji graphic */}
          <div className={`${notoEmoji.variable} antialiased grid grid-cols-4 gap-2 font-noto text-5xl leading-[1.25] text-center sm:hidden`}>
            <p>🔳</p><p>💻</p><p>🔳</p><p>🌎</p>
            <p>🔳</p><p>💊</p><p>🔳</p><p>🦾</p>
            <p>🔳</p><p>🔐</p><p>🔳</p><p>🔳</p>
          </div>

          {/* sm: and up original detailed emoji graphic */}
          <div className={`${notoEmoji.variable} antialiased hidden sm:grid grid-cols-9 gap-4 col-span-1 font-noto text-4xl md:text-5xl xl:text-7xl text-center`}>
            <p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>💻</p><p>🔳</p>
            <p>🔳</p><p>💊</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p>
            <p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🌎</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p>
            <p>🔳</p><p>🔳</p><p>🔐</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p>
            <p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🔳</p><p>🦾</p><p>🔳</p><p>🔳</p>
          </div> 
        </div>
      </div>
    </div>
  )
}
