'use client'

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import gsap from "gsap"

interface LinkProps {
  href: string
  text: string
}

const links: LinkProps[] = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/capabilities", text: "Capabilities" },
  { href: "/contact", text: "Contact" },
]

export default function Nav() {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const moveDot = useCallback((index: number) => {
    if (navRef.current && dotRef.current) {
      const navItem = navRef.current.children[index] as HTMLElement
      gsap.to(dotRef.current, {
        left: navItem.offsetLeft + navItem.offsetWidth / 2,
        duration: 0.2,
        ease: "power2.out",
      })
    }
  }, [])

  useEffect(() => {
    const currentIndex = links.findIndex((link) => link.href === pathname)
    if (currentIndex !== -1) {
      moveDot(currentIndex)
    }
  }, [pathname, moveDot])

  useEffect(() => {
    if (hoveredIndex !== null) {
      moveDot(hoveredIndex)
    } else {
      const currentIndex = links.findIndex((link) => link.href === pathname)
      if (currentIndex !== -1) {
        timeoutRef.current = setTimeout(() => {
          moveDot(currentIndex)
        }, 200)
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [hoveredIndex, pathname, moveDot])

  const handleMouseEnter = useCallback((index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setHoveredIndex(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null)
  }, [])

  return (
    <>
      <nav className="fixed md:absolute top-0 z-50 w-full py-[1.5rem] md:py-[2.5rem] flex flex-col items-center justify-center bg-white md:bg-transparent shadow-md md:shadow-none text-primary">
        <div ref={navRef} className="hidden md:flex flex-row gap-6 relative">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`relative px-2 py-2 ${pathname === link.href ? "font-bold" : "font-regular"} hover:font-bold transition-all duration-500`}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              {link.text}
            </Link>
          ))}
          <div
            ref={dotRef}
            className="absolute -bottom-2 w-2 h-2 bg-blue-200 rounded-full transition-all duration-300 ease-out"
            style={{ left: "-100%" }}
          />
        </div>
      </nav>
    </>
  )
}

