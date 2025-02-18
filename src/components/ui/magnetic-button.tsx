'use client'

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import NavLink from "@/components/ui/link"

interface MagneticButtonProps {
  children: string
  href: string
  size?: "icon" | "sm" | "lg"
  variant?: 
    "default" | 
    "blue" | 
    "red" | 
    "green" | 
    "yellow" |
    "secondary" | 
    "outline" | 
    "outlineBlue" | 
    "outlineRed" | 
    "outlineGreen" | 
    "outlineYellow" |
    "ghost" | 
    "link"
  color?: "blue" | "yellow" | "red" | "green"
}

export default function MagneticButton({ children, size = "lg", variant, href }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = button.getBoundingClientRect()

      const x = e.clientX - bounds.left
      const y = e.clientY - bounds.top

      const moveX = (x - bounds.width / 2) * 0.2
      const moveY = (y - bounds.height / 2) * 0.5

      gsap.to(button, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="flex min-h-auto items-center justify-center mt-12 ">
      <Button size={size} variant={variant} ref={buttonRef}>
        <NavLink href={href} route={""}>
          {children}
        </NavLink>
      </Button>
    </div>
  )
}

