'use client'

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import gsap from "gsap"

interface LinkProps {
  href: string
  text: string
  color: string
  hoverTextColor: string
  activeTextColor: string
}

const links: LinkProps[] = [
  { href: "/", text: "Home", color: "bg-blue-200", hoverTextColor: "hover:text-blue-950", activeTextColor: "text-blue-950" },
  { href: "/about", text: "About", color: "bg-green-200", hoverTextColor: "hover:text-green-900", activeTextColor: "text-green-900" },
  { href: "/capabilities", text: "Capabilities", color: "bg-red-200", hoverTextColor: "hover:text-red-900", activeTextColor: "text-red-900" },
  { href: "/contact", text: "Contact", color: "bg-yellow-200", hoverTextColor: "hover:text-yellow-500", activeTextColor: "text-yellow-500" },
]

export default function Nav() {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Move dot to center of target link
  const moveDot = useCallback((index: number) => {
    if (navRef.current && dotRef.current) {
      const navItems = Array.from(navRef.current.querySelectorAll('a'))
      const targetItem = navItems[index] as HTMLElement
      const navRect = navRef.current.getBoundingClientRect()
      const itemRect = targetItem.getBoundingClientRect()
      const center = itemRect.left - navRect.left + itemRect.width / 2

      gsap.to(dotRef.current, {
        left: center,
        duration: 0.4,
        ease: "power2.out",
      })
    }
  }, [])

  const applyColorClass = useCallback((colorClass: string) => {
    if (dotRef.current) {
      dotRef.current.classList.remove("bg-blue-200", "bg-green-200", "bg-red-200", "bg-yellow-200")
      dotRef.current.classList.add(colorClass)
    }
  }, [])

  useEffect(() => {
    const currentIndex = links.findIndex((link) => link.href === pathname)
    if (currentIndex !== -1) {
      moveDot(currentIndex)
      applyColorClass(links[currentIndex].color)
    }
  }, [pathname, moveDot, applyColorClass])

  useEffect(() => {
    if (hoveredIndex !== null) {
      moveDot(hoveredIndex)
      applyColorClass(links[hoveredIndex].color)
    } else {
      const currentIndex = links.findIndex((link) => link.href === pathname)
      if (currentIndex !== -1) {
        timeoutRef.current = setTimeout(() => {
          moveDot(currentIndex)
          applyColorClass(links[currentIndex].color)
        }, 200)
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [hoveredIndex, pathname, moveDot, applyColorClass])

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
    <nav className="fixed md:absolute top-0 z-50 w-full py-[1.5rem] md:py-[2.5rem] flex flex-col items-center justify-center bg-white md:bg-transparent shadow-md md:shadow-none">
      <div ref={navRef} className="hidden md:flex flex-row gap-6 relative">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`relative px-2 py-2 transition-all duration-500 ${link.hoverTextColor} ${
              pathname === link.href ? link.activeTextColor : ""
            } ${pathname === link.href ? "font-bold" : "font-regular"} hover:font-bold`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            {link.text}
          </Link>
        ))}
        <div
          ref={dotRef}
          className="absolute -bottom-2 w-2 h-2 bg-blue-200 rounded-full transition-colors duration-300"
          style={{ left: "-100%" }}
        />
      </div>
    </nav>
  )
}
