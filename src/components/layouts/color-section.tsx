import React from 'react'

import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: React.ReactNode
  bgColor?: string
  textColor?: string
}

export default function PageLayout(PageLayoutProps: PageLayoutProps) {

  const { children, bgColor, textColor } = PageLayoutProps

  return (
    <section className={` ${cn({ bgColor: {bgColor}}, {textColor: {textColor} })} py-[8rem]`}>
      <div className="max-w-[1440px]">
        {children}
      </div>
    </section>
  )
}
