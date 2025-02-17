'use client'

import type React from "react"
import type { ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"

interface TransitionLinkProps extends LinkProps {
  children: ReactNode
  href: string
  route: string
  className?: string
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const TransitionLink = ({ children, href, route, ...props }: TransitionLinkProps) => {
  const router = useRouter()
  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  
    const coverEl = document.getElementById("cover");
    const routeEl = document.getElementById("route");
  
    if (routeEl) {
      routeEl.textContent = "";

      route.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "inline-block opacity-0 blur-md transform translate-y-6 transition-all duration-500 ease-in-out";
        span.style.transitionDelay = `${index * 25}ms`;
        routeEl.appendChild(span);
      });
  
      setTimeout(() => {
        routeEl.querySelectorAll("span").forEach((span) => {
          span.classList.remove("opacity-0", "translate-y-6", "blur-md");
          span.classList.add("opacity-100", "translate-y-0", "blur-none");
        });
      }, 1000);
    }
  
    if (coverEl) {
      coverEl.classList.remove("hidden");
      coverEl.classList.add("animate-in");
  
      setTimeout(() => {
        coverEl.classList.add("active");
      });
    }
  
    await sleep(800);
  
    router.push(href);
  
    await sleep(800);

    if (coverEl) {
      coverEl.classList.remove("active");
      coverEl.classList.add("shrink");
  
      setTimeout(() => {
        coverEl.classList.remove("shrink");
        coverEl.classList.add("hidden");
  
        if (routeEl) {
          routeEl.innerHTML = route
            .split("")
            .map(
              (letter) =>
                `<span class="inline-block transition-all duration-500 ease-in-out">${letter}</span>`
            )
            .join("");
        }
      }, 800);
    }
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  )
}