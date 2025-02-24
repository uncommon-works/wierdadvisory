'use client'

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import gsap from "gsap"

import { Button } from "@/components/ui/button"

import { useSheet } from "@/components/ui/sheet-provider"
import MagneticButton from "./magnetic-wrapper"
import { ContactForm } from "../forms/contact-form"

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
  // { href: "/case-studies", text: "Case Studies", color: "bg-yellow-200", hoverTextColor: "hover:text-yellow-500", activeTextColor: "text-yellow-500" },
  { href: "/contact", text: "Contact", color: "bg-purple-200", hoverTextColor: "hover:text-purple-800", activeTextColor: "text-purple-800" },
]

export default function Nav() {

  const { openSheet } = useSheet()

  const handleOpenSheet = () => {
    openSheet(
      <>
        <div className="mb-10">
          <p className="text-sm text-muted-foreground">
            For any request, please fill in the following form. Our team will get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </>
    )
  }

  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const leftBlockRef = useRef<HTMLDivElement>(null)
  const rightBlockRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
      dotRef.current.classList.remove("bg-blue-200", "bg-green-200", "bg-red-200", "bg-yellow-200", "bg-purple-200")
      dotRef.current.classList.add(colorClass)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const currentIndex = links.findIndex((link) => link.href === pathname)
      if (currentIndex !== -1) moveDot(currentIndex)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [pathname, moveDot])

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          gsap.to([leftBlockRef.current, rightBlockRef.current], {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.2,
          })
        } else {
          gsap.to([leftBlockRef.current, rightBlockRef.current], {
            y: -100,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: "power4.in",
          })
        }
      },
      { root: null, threshold: 0.1 }
    )

    if (navRef.current) observer.observe(navRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    
    <nav className="absolute top-0 z-50 w-full py-[2.5rem] md:py-[2.5rem] flex flex-row items-center justify-between bg-white md:bg-transparent shadow-md md:shadow-none">
      
      {/* LEFT BLUE BLOCK (ANIMATED) */}
      <div ref={leftBlockRef} className="fixed hidden top-[2.5rem] left-[3rem] min-w-24  flex-row gap-2 -translate-y-[100px] ">
        <MagneticButton>
          <Button onClick={handleOpenSheet} variant="ghost" size="default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Menu</p>
          </Button>  
        </MagneticButton>
      </div>
      
      {/* MENU */}
      <div ref={navRef} className="absolute hidden md:flex items-center justify-center mx-auto w-screen flex-row gap-6 pt-8">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
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

      {/* RIGHT BLUE BLOCK (ANIMATED) */}
      <div ref={rightBlockRef} className="fixed top-[2.5rem] right-[3rem] -translate-y-[100px] text-blue-950">
        <MagneticButton>
          <Button onClick={handleOpenSheet} variant="outlineBlue" size="default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Contact Us</p>
          </Button>  
        </MagneticButton>
      </div>

    </nav>
  )
}
