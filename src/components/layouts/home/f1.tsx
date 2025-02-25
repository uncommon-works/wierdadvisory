'use client'

import React from 'react'

import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})


export default function F1() {
  return (
    <section className=""> 
      <div className={`${notoEmoji.variable} absolute inset-0 font-noto text-5xl md:text-7xl select-none`}>
        <div className="absolute left-[10%] top-[20%]">🐙</div>
        <div className="absolute left-[40%] top-[15%] md:top-[10%]">🫧</div>
        <div className="absolute right-[10%] top-[20%]">🚀</div>
        <div className="absolute left-[10%] bottom-[15%] md:bottom-[20%]">💣</div>
        <div className="absolute left-[42%] md:left-[50%] bottom-[10%]">👾</div>
        <div className="absolute right-[10%] bottom-[15%] md:bottom-[22%]">🕔</div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-3xl px-6 text-center">
        <h2 className="text-2xl md:text-2xl font-regular md:max-w-2xl select-none">
          Welcome to<br /> <span className="inline-block py-4 md:py-12 text-7xl md:text-[100px] baskerville">W<span className="font-bold">(A)</span></span>
        </h2>
        <p className="text-lg md:text-3xl w-auto md:max-w-xl mt-12">
        We are a strategy consultancy with a focus on helping leaders navigate a  <span className="font-bold">&apos;weird world.&apos;</span>
        </p>
      </div>
    </section>
  )
}
