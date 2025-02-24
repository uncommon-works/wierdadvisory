'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Slot } from "@radix-ui/react-slot"

interface MagneticWrapperProps {
  children: React.ReactNode
  asChild?: boolean
}

export default function MagneticWrapper({ children, asChild = false }: MagneticWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const Component = asChild ? Slot : 'div'

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = wrapper.getBoundingClientRect()

      const x = e.clientX - bounds.left
      const y = e.clientY - bounds.top

      const moveX = (x - bounds.width / 2) * 0.2
      const moveY = (y - bounds.height / 2) * 0.5

      gsap.to(wrapper, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(wrapper, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    wrapper.addEventListener("mousemove", handleMouseMove)
    wrapper.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove)
      wrapper.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="relative flex min-h-auto items-center justify-center">
      <Component ref={wrapperRef}>
        {children}
      </Component>
    </div>
  )
}
