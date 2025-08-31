"use client"

import { motion } from "framer-motion"

interface AnimatedSpanProps {
  color?: string
  isHovered?: boolean
}

export function AnimatedSpan({ color = "#000", isHovered = false }: AnimatedSpanProps) {
  return (
    <div className="inline-block">
      <motion.span
        className="inline-block w-0.5"
        style={{
          backgroundColor: color,
          transformOrigin: "bottom",
          height: "48px",
        }}
        animate={
          isHovered
            ? {
                scaleY: [1, 0.1, 1, 0.1, 1],
              }
            : {
                scaleY: 1,
              }
        }
        transition={
          isHovered
            ? {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }
            : {
                type: "spring",
                stiffness: 300,
                damping: 20,
              }
        }
      />
    </div>
  )
}
