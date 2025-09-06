"use client"
import { useRef, useEffect, useState, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

type ParagraphProps = {
  children: ReactNode
  starttime?: number
  className?: string
  style?: React.CSSProperties
}

export default function Paragraph ({ children, starttime = 0, className = "", style }: ParagraphProps) {
  const [isVisible, setIsVisible] = useState(false)
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const paragraph = paragraphRef.current
    if (!paragraph) return

    const trigger = gsap.to(paragraph, {
      scrollTrigger: {
        trigger: paragraph,
        start: "-30% 80%",
        end: "100% 80%",
        onEnter() {
          setTimeout(() => setIsVisible(true), starttime * 1000)
        },
      },
    })

    return () => {
      if (trigger.scrollTrigger) trigger.scrollTrigger.kill()
      trigger.kill()
    }
  }, [starttime])

  // Fonction récursive pour traiter les éléments et ajouter l'animation
  const processChildren = (children: ReactNode, wordIndex: { current: number }): ReactNode => {
    if (typeof children === "string") {
      // Diviser le texte en mots et les animer
      return children.split(" ").map((word, index) => {
        const currentIndex = wordIndex.current++
        // Fusionner le style d'animation et le style passé en prop
        const animatedStyle = isVisible
          ? {
              transition:
                "clip-path .5s cubic-bezier(0.215, 0.61, 0.355, 1), transform .5s cubic-bezier(0.215, 0.61, 0.355, 1)",
              transform: "rotate(0deg) translate3d(0, 0, 0)",
              clipPath: "polygon(0% 10%, 100% 10%, 100% 110%, 0% 110%)",
              transitionDelay: `${currentIndex * 0.01}s`,
            }
          : {
              transition:
                "clip-path .5s cubic-bezier(0.215, 0.61, 0.355, 1), transform .5s cubic-bezier(0.215, 0.61, 0.355, 1)",
              transform: "rotate(-5deg) translate3d(0, -100%, 0)",
              clipPath: "polygon(0% 110%, 100% 110%, 100% 210%, 0% 210%)",
              transitionDelay: `${currentIndex * 0.01}s`,
            }
        const mergedStyle = style ? { ...animatedStyle, ...style } : animatedStyle
        return (
          <span
            key={`word-${currentIndex}`}
            className="inline-block relative transition-transform duration-500"
            style={mergedStyle}
          >
            {word}
            {index < children.split(" ").length - 1 && " "}
          </span>
        )
      })
    }

    if (Array.isArray(children)) {
      return children.map((child) => processChildren(child, wordIndex))
    }

    return children
  }

  const wordIndex = { current: 0 }
  const processedChildren = processChildren(children, wordIndex)

  return (
    <p ref={paragraphRef} className={`flex flex-row flex-wrap gap-x-[4px] ${className}`}>
      {processedChildren}
    </p>
  )
}