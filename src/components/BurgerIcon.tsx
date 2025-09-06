"use client"
import { useState, useEffect } from "react"
import useProjectStore from "@/stores/useProjectStore"

interface BurgerIcon {
    onToggle: (burgerOpen: boolean) => void
    burgerOpen: boolean
}

export default function BurgerIcon({ onToggle, burgerOpen }: BurgerIcon) {
  const [isMobile, setIsMobile] = useState(false);
  const { activeProject } = useProjectStore();
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <button
        onClick={() => onToggle(!burgerOpen)}
        className={`relative w-6 h-6 ${isMobile ? "flex" : "hidden"}`}
        aria-label={burgerOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <div className="fixed top-10 right-6 flex flex-col items-center justify-center">
          <div
            className={`w-6 h-0.5 transition-all duration-300 ease-in-out ${
              burgerOpen ? "rotate-45 translate-y-0.5" : "rotate-0 mb-1"
            }`}
            style={{ backgroundColor: activeProject ? activeProject?.color : "#FFF" }}
          />
          <div
            className={`w-6 h-0.5 transition-all duration-300 ease-in-out ${
              burgerOpen ? "-rotate-45" : "rotate-0 mt-1"
            }`}
            style={{ backgroundColor: activeProject ? activeProject?.color : "#FFF" }}
          />
        </div>
      </button>
  )
}
