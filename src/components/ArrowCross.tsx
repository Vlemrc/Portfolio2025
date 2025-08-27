"use client"

import { useState, type CSSProperties } from "react"
import { useRouter } from "next/navigation";

interface ArrowCrossProps {
  isToggled?: boolean
  onToggle?: (toggled: boolean) => void
  size?: number
  className?: string
  color?: string
  onQuit?: () => void
}

export function ArrowCross({ isToggled: controlledToggled, onToggle, size = 24, color, onQuit }: ArrowCrossProps) {
  const [internalToggled, setInternalToggled] = useState(false)
  const router = useRouter();

  const isToggled = controlledToggled !== undefined ? controlledToggled : internalToggled
  console.log(color)

  const handleClick = () => {
    const newValue = !isToggled
    if (controlledToggled === undefined) {
      setInternalToggled(newValue)
    }
    onToggle?.(newValue)
  }

  const handleQuit = () => {
    router.push("/")
    onQuit?.()
  }

  return (
    <button
      onClick={isToggled ? handleClick : handleQuit}
      className={`fixed right-6 top-6 inline-flex items-center justify-center rounded-md p-2 transition-colors
      `}
      aria-label={isToggled ? "Fermer" : "Ouvrir"}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ transition: "all 0.3s ease-in-out" }}>

        {/* Ligne diagonale 1 - de bas-gauche vers haut-droite (45°) */}
        <path
          d="M6 18L18 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill={color}
          style={
            {
              transition: "all 0.3s ease-in-out",
              transform: !isToggled ? "scale(1)" : "scale(0)",
              opacity: !isToggled ? 1 : 0,
              transformOrigin: "center",
            } as CSSProperties
          }
        />

        {/* Ligne diagonale 2 - de haut-gauche vers bas-droite (45°) */}
        <path
          d="M6 6L18 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill={color}
          style={
            {
              transition: "all 0.3s ease-in-out",
              transform: !isToggled ? "scale(1)" : "scale(0)",
              opacity: !isToggled ? 1 : 0,
              transformOrigin: "center",
            } as CSSProperties
          }
        />

        {/* Flèche vers le haut - côté gauche */}
        <path
          d="M7 14l5-5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill={color}
          style={
            {
              transition: "all 0.3s ease-in-out",
              transform: isToggled ? "scale(1)" : "scale(0)",
              opacity: isToggled ? 1 : 0,
              transformOrigin: "center",
            } as CSSProperties
          }
        />

        {/* Flèche vers le haut - côté droit */}
        <path
          d="M17 14l-5-5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill={color}
          style={
            {
              transition: "all 0.3s ease-in-out",
              transform: isToggled ? "scale(1)" : "scale(0)",
              opacity: isToggled ? 1 : 0,
              transformOrigin: "center",
            } as CSSProperties
          }
        />
      </svg>
    </button>
  )
}
