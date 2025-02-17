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
    <div className="bg-blue-300 h-[100vh] p-[5vw]">
      <div className="absolute inset-0 top-[27vh] px-6">
        <div className="max-w-[1440px] grid grid-cols-2 items-center mx-auto">
          <div className="col-span-1 flex flex-col items-center pr-[8rem]">
            <h2 className="text-2xl md:text-3xl font-regular leading-[1.15] select-none">
              We partner with <span className="font-bold">senior executives</span> at some of the world&apos;s most <span className="font-bold">respected companies and promising start-ups</span> who face unique challenges arising from complex internal and external dynamics.
            </h2>
          </div>  

          <div className={`${notoEmoji.variable} antialiased grid grid-cols-9 gap-0 md:gap-4 col-span-1 font-noto text-3xl lg:text-5xl xl:text-7xl my-12 text-center`}>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🫥</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🦑</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🌎</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🌱</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🦾</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
            <p>🔳</p>
          </div> 
        </div>
      </div>
    </div>
  )
}
