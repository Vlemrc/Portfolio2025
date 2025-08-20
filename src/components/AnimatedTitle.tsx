"use client"
import { useEffect, useState } from "react"

interface AnimatedTitleProps {
  text: string
  className?: string
  delay?: number // délai entre chaque lettre en ms (défaut: 100ms)
}

export default function AnimatedTitle({ text, className = "", delay = 100 }: AnimatedTitleProps) {
  const [visibleLetters, setVisibleLetters] = useState<boolean[]>([])

  useEffect(() => {
    // Initialiser toutes les lettres comme invisibles
    setVisibleLetters(new Array(text.length).fill(false))

    // Créer les timers pour chaque lettre
    const timers: NodeJS.Timeout[] = []

    for (let i = 0; i < text.length; i++) {
      const timer = setTimeout(() => {
        setVisibleLetters((prev) => {
          const newState = [...prev]
          newState[i] = true
          return newState
        })
      }, i * delay)

      timers.push(timer)
    }

    // Nettoyer les timers
    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [text, delay])

  return (
    <h1 className={`flex flex-row ${className}`}>
      {text.split("").map((letter, index) => (
        <span key={index} className="overflow-hidden h-[1em] block">
          <span
            className={`inline-block ${
              visibleLetters[index] ? "translate-x-0" : "-translate-x-12"
            } transition-transform duration-500`}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        </span>
      ))}
    </h1>
  )
}
