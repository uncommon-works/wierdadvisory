'use client'

import React from 'react'
import { Noto_Emoji } from "next/font/google";

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--noto",
})

export default function Sec3() {
  return (
    <div className="bg-blue-950 h-[100vh] p-[5vw] text-blue-50">
      <div className="absolute inset-0 top-[35vh] px-6">
        <div className="max-w-[1180px] mx-auto text-center flex flex-col items-center ">
          <h2 className="text-2xl md:text-4xl font-regular leading-[1.15] select-none">
            Our team is comprised of exceptional interdisciplinary thinkers and doers who are passionate about problems that are anything but ordinary.
          </h2>
          <p className="text-lg md:text-xl text-blue-200 font-regular max-w-3xl mt-12">
            Although we&apos;re based in Toronto, Canada, we are strong disciples of the future of work and service clients <span className="font-bold ">around the world.</span>
          </p>
          <div className={`${notoEmoji.variable} mt-24 font-noto text-7xl my-12 `}>
            🔲🔳🔲🔳🔲🔳♣♠🌎🧠
          </div>
        </div>
      </div>
    </div>
  )
}
