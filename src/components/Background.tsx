// Background.tsx
"use client"

import { useEffect } from "react"
import useProjectStore from "@/stores/useProjectStore"
import { usePathname } from "next/navigation"

export default function Background() {
  const { activeProject } = useProjectStore()
  const pathname = usePathname()

  useEffect(() => {
    const color = activeProject?.bgcolor ?? "#0E0C17"
    document.body.style.backgroundColor = color

    document.body.style.transition = "background-color 300ms ease"
  }, [activeProject, pathname])

  return null
}
