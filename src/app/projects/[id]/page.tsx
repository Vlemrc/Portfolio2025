"use client"
import useProjectStore from "@/stores/useProjectStore"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import Paragraph from "@/components/Paragraph"
import { ArrowCross } from "@/components/ArrowCross"
import { AnimatedSpan } from "@/components/AnimatedSpan"
import { motion } from "framer-motion"

export default function ProjetPage() {
  const { activeProject, setActiveProject } = useProjectStore()
  const [displayProject, setDisplayProject] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [showButton1, setShowButton1] = useState(false)
  const [showButton2, setShowButton2] = useState(false)
  const [showVisit, setShowVisit] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const [showButton3, setShowButton3] = useState(false)

  useEffect(() => {
    if (displayProject) {
      const timer = setTimeout(() => setShowButton1(true), 100)
      const timer2 = setTimeout(() => setShowButton2(true), 1000)
      const timer3 = setTimeout(() => setShowVisit(true), 800)
      const timer4 = setTimeout(() => setShowButton3(true), 1800)
      return () => {
        clearTimeout(timer)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
      }
    }
  }, [displayProject])

  const onQuit = () => {
    setActiveProject(null)
    setDisplayProject(false)
    setTimeout(() => {
      setShowButton1(false)
      setShowButton2(false)
      setShowVisit(false)
      setAnimationKey((prev) => prev + 1)
    }, 50)
  }

  const resetAnimationStates = () => {
    setShowButton1(false)
    setShowButton2(false)
    setShowVisit(false)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div
      style={{ backgroundColor: activeProject?.bgcolor }}
      className={`flex-1 pl-20 transition-colors duration-300 pr-10 pt-20 flex flex-row items-center justify-between`}
    >
      <div
        className={` ${displayProject ? "w-2/3 items-start mt-20" : "w-full items-end"} relative flex flex-col transition-all duration-700 ease-in-out`}
      >
        <motion.div
          key={animationKey}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 0.4, 1], opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className={`${displayProject ? "w-full max-h-[400px]" : "w-[90%]"} max-h-[500px] overflow-hidden`}
        >
          <Image
            src={activeProject?.image ?? "/placeholder.png"}
            alt={activeProject?.title ?? "Project image"}
            width={500}
            height={300}
            className={`w-full h-full object-cover ${displayProject ? "max-h-[400px]" : "max-h-[500px]"}`}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -80, y: "25%" }}
          animate={{ opacity: 1, x: 0, y: displayProject ? "-50%" : "25%" }}
          transition={{
            opacity: { duration: 0.2, delay: 1.5, ease: "easeInOut" },
            x: { duration: 0.2, delay: 1.2, ease: "easeOut" },
            y: { duration: 0.2, delay: 1.2, ease: "easeOut" }
          }}
          style={{ color: activeProject?.color }}
          className={`font-arges uppercase text-[200px] absolute left-0 transition-transform duration-700 ease-in-out ${displayProject ? "-translate-y-1/2" : "translate-y-1/4"}`}
        >
          {activeProject?.title}
        </motion.h1>
        <div
          className={`${displayProject ? "w-full" : "w-[90%]"} flex flex-row pt-5 gap-8 transition-all duration-700 ease-in-out`}
        >
          <div className="flex flex-row justify-between w-full items-start">
            <div>
              <div className="flex flex-row gap-8">
                <div style={{ color: activeProject?.color }} className={`uppercase text-xs`}>
                  <motion.p initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      opacity: { duration: 0.2, delay: 1.8, ease: "easeInOut" },
                      y: { duration: 0.2, delay: 1.8, ease: "easeOut" }
                  }}>Year</motion.p>
                  <motion.p initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      opacity: { duration: 0.2, delay: 1.85, ease: "easeInOut" },
                      y: { duration: 0.2, delay: 1.85, ease: "easeOut" }
                  }}>For</motion.p>
                  <motion.p initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, }}
                    transition={{
                      opacity: { duration: 0.2, delay: 1.9, ease: "easeInOut" },
                      y: { duration: 0.2, delay: 1.9, ease: "easeOut" }
                  }}>Stack</motion.p>
                </div>
                <div style={{ color: activeProject?.color }} className={`uppercase text-xs`}>
                  <motion.p initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, }}
                    transition={{
                      opacity: { duration: 0.2, delay: 1.8, ease: "easeInOut" },
                      y: { duration: 0.2, delay: 1.8, ease: "easeOut" }
                  }}>{activeProject?.year}</motion.p>
                  <motion.p initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, }}
                    transition={{
                      opacity: { duration: 0.2, delay: 1.85, ease: "easeInOut" },
                      y: { duration: 0.2, delay: 1.85, ease: "easeOut" }
                  }}>{activeProject?.type}</motion.p>
                  <ul className="flex flex-row gap-1">
                    {activeProject?.stack.map((tech, index) => (
                      <motion.li initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, }}
                    transition={{
                      opacity: { duration: 0.2, delay: 1.9, ease: "easeInOut" },
                      y: { duration: 0.2, delay: 1.9, ease: "easeOut" }
                  }} key={index}>{tech}</motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              {displayProject && (
                <motion.p
                  style={{ color: activeProject?.color }}
                  className="w-2/3 pt-6 font-light text-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 2.1, ease: "easeInOut" }}
                >
                  {activeProject?.description}
                </motion.p>
              )}
            </div>
            <button
              className={`flex flex-row items-center gap-5 ease-in-out ${displayProject ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              onClick={() => setDisplayProject(true)}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.05,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 1.8,
                }}
                  style={{ backgroundColor: activeProject?.color }}
                  className={`h-0.5 w-12 transition-transform duration-500 origin-left transform`}
                ></motion.div>
              <div className="overflow-hidden h-fit w-fit">
                <motion.p
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0, }}
                  transition={{
                    opacity: { duration: 0.2, delay: 2, ease: "easeInOut" },
                    x: { duration: 0.2, delay: 2, ease: "easeOut" }
                  }}
                  style={{ color: activeProject?.color }}
                  className={`uppercase text-xs font-bold`}
                >
                  Explore
                </motion.p>
              </div>
            </button>
            {displayProject && activeProject && (
              <Link
                target="_blank"
                href={activeProject.link}
                className={`flex flex-row items-center gap-5 ease-in-out ${displayProject ? "opacity-100 scale-100 delay-200" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <div
                  style={{ backgroundColor: activeProject?.color }}
                  className={`h-0.5 w-12 transition-transform duration-500 origin-left transform ${
                    showVisit ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
                <div className="overflow-hidden h-fit w-fit">
                  <p
                    style={{ color: activeProject?.color }}
                    className={`uppercase text-xs font-bold transition-transform duration-500 ${showButton2 ? "translate-x-0" : "-translate-x-8"}`}
                  >
                    Visit
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <button
        className={`transition-all duration-700 ease-in-out h-fit transform ${displayProject && showButton1 ? "flex" : "hidden"} ${showButton2 ? "opacity-100 -translate-y-20" : "opacity-0 -translate-y-[100px]"}`}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        <AnimatedSpan color={activeProject?.color} isHovered={isButtonHovered} />
        <p style={{ color: activeProject?.color }} className="uppercase text-xs font-bold text-right pl-5">
          voir la vidéo <br /> de présentation <br /> du projet
        </p>
      </button>
      <ArrowCross
        color={activeProject?.color}
        size={24}
        isToggled={displayProject}
        onToggle={setDisplayProject}
        onQuit={onQuit}
        onResetAnimations={resetAnimationStates}
      />
    </div>
  )
}
