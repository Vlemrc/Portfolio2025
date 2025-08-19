"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface IconInProps {
  color: string | undefined;
}

export default function AnimatedLinkedin({ color }: IconInProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Define the initial/final state values
  const initialState = {
    circle: { y: 0 },
    rect: { height: 11.36, y: 5.64 },
  }

  return (
    <Link
      className="cursor-pointer w-4 h-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href="https://www.linkedin.com/in/victor-lemercier/"
      target="_blank"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" className="w-full h-full text-blue-600 fill-current">
        {/* Circle (dot of the i) */}
        <motion.circle
          cx="2.04"
          cy="2.05"
          r="2.04"
          fill={color ? color : "#fff"}
          className="transition-colors duration-300 ease-in-out"
          initial={initialState.circle}
          animate={
            isHovered
              ? {
                  y: [0, 8, 0, 5, 0, 2, 0],
                  transition: {
                    duration: 1.2,
                    times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
                    ease: "easeInOut",
                    repeat: 0,
                  },
                }
              : initialState.circle
          }
        />

        {/* Rectangle (vertical bar of the i) - Now with more pronounced deformation */}
        <motion.rect
          x=".28"
          width="3.53"
          fill={color ? color : "#fff"}
          className="transition-colors duration-300 ease-in-out"
          initial={initialState.rect}
          animate={
            isHovered
              ? {
                  // Synchronize with circle's bounce timing
                  height: [11.36, 4, 11.36, 8, 11.36, 10.5, 11.36],
                  y: [5.64, 15, 5.64, 9.0, 5.64, 6.5, 5.64],
                  // Add width animation to make the deformation more visible
                  x: [0.28, 0.0, 0.28, 0.1, 0.28, 0.15, 0.28],
                  transition: {
                    duration: 1.2,
                    times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
                    ease: "easeInOut",
                    repeat: 0,
                  },
                }
              : initialState.rect
          }
        />

        {/* Path (rest of the LinkedIn logo) */}
        <path
          fill={color ? color : "#fff"}
          className="transition-colors duration-300 ease-in-out"
          d="M6.02,5.64h3.37v1.56h.05c.47-.89,1.62-1.83,3.34-1.83,3.56,0,4.23,2.35,4.23,5.41v6.22h-3.52v-5.52c0-1.32-.02-3.01-1.83-3.01s-2.11,1.44-2.11,2.91v5.62h-3.52V5.64s0,0,0,0Z"
        />
      </svg>
    </Link>
  )
}

