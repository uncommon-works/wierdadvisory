'use client'

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top-left
  }, [pathname]); // Run every time the route changes

  return null;
}
