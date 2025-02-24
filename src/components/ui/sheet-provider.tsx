"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

type SheetContextType = {
  isOpen: boolean
  content: React.ReactNode | null
  title: string
  openSheet: (content: React.ReactNode, title?: string) => void
  closeSheet: () => void
}

const SheetContext = createContext<SheetContextType | undefined>(undefined)

export function SheetProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<React.ReactNode | null>(null)
  const [title, setTitle] = useState("Sheet")

  const openSheet = (content: React.ReactNode, title = "Sheet") => {
    setContent(content)
    setTitle(title)
    setIsOpen(true)
  }

  const closeSheet = () => {
    setIsOpen(false)
    // Clear content after animation completes
    setTimeout(() => {
      setContent(null)
      setTitle("Sheet")
    }, 300)
  }

  return (
    <SheetContext.Provider value={{ isOpen, content, title, openSheet, closeSheet }}>
      {children}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[90vw] sm:min-w-[580px] space-y-6">
          <SheetHeader>
            <SheetTitle>Contact Wierd(A)dvisory</SheetTitle>
          </SheetHeader>
          {content}
        </SheetContent>
      </Sheet>
    </SheetContext.Provider>
  )
}

export function useSheet() {
  const context = useContext(SheetContext)
  if (context === undefined) {
    throw new Error("useSheet must be used within a SheetProvider")
  }
  return context
}

