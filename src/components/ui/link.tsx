'use client'

import { TransitionLink } from "@/components/utils/link"

interface NavLinkProps {
  href: string
  route: string
  children: React.ReactNode
}

export default function NavLink({ href, route, children }: NavLinkProps) {
  return (
    <TransitionLink href={href} route={route} className="group relative">
      <p className="font-sans font-medium py-1">{children}</p>
    </TransitionLink>
  )
}

