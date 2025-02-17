'use client'

import React from 'react'

interface LinkProps {
  href: string
  text: string
}

const links: LinkProps[] = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/case-studies", text: "Case Studies" },
  { href: "/contact", text: "Contact" },
]

export default function Footer() {
  return (
    <footer className="pb-[3rem] md:py-[3rem]">
      <div className="max-w-[1080px] mx-auto flex flex-col-reverse md:flex-row justify-between text-sm font-medium text-gray-400 px-6 gap-8">
        <p className="text-xs md:text-sm">
          © {new Date().getFullYear()} Wierd(A)dvisory, All rights reserved.
        </p>
        <div className="flex flex-col gap-4 ">
          
          {links.map((link, i) => (
            <a key={i} href={link.href} className="block md:hidden text-black hover:text-gray-600">
              {link.text}
            </a>
          ))}

          <a href="/privacy" className="text-black md:text-gray-400 hover:font-bold transition-all duration-500 hover:text-gray-500 flex items-center pt-8 md:pt-0 mt-6 md:mt-0 border-t-[1px] md:border-t-0 border-gray-200">
            Privacy<span className="block md:hidden">&nbsp;Policy</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
