"use client"
import useProjectStore from "@/stores/useProjectStore"
import Image from "next/image"
import { useState, useEffect, act } from "react"
import Link from "next/link"
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
  const [activeVideo, setActiveVideo] = useState(false)

  useEffect(() => {
    if (displayProject) {
      const timer = setTimeout(() => setShowButton1(true), 100)
      const timer2 = setTimeout(() => setShowButton2(true), 1000)
      const timer3 = setTimeout(() => setShowVisit(true), 800)
      return () => {
        clearTimeout(timer)
        clearTimeout(timer2)
        clearTimeout(timer3)
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

  const onToggle = () => {
    setDisplayProject(!displayProject)
    setActiveVideo(false)
  }

  return (
    <div
      className={`flex-1 pl-20 transition-colors duration-300 pr-10 pt-20 flex flex-row items-center justify-between`}
    >
      <div
        className={` ${displayProject ? "w-2/3 items-start mt-20" : "w-full items-end"} relative flex flex-col transition-all duration-700 ease-in-out`}
      >
        {activeProject && activeProject.github && displayProject && (
          <motion.a 
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, }}
            transition={{
              opacity: { duration: 0.2, delay: 1.8, ease: "easeInOut" },
              y: { duration: 0.2, delay: 1.8, ease: "easeOut" }
          }}
          href={activeProject?.github} target="_blank" className="absolute -top-8 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 573.73 574.97">
                <path fill={activeProject.color} d="M206.62,530.02l-23.58,1.33c-41.15-2-81.2-16.97-111.84-44.49-11.4-10.24-19.26-22.21-31.82-31.52-18.44-13.67-44.87-16.2-38.37-46.69,2.62-12.3,17.05-22.19,29.34-21.21,10.15.81,30.6,12.76,39.22,18.84,22.53,15.89,38.5,40.22,63.03,54.23,23.09,13.19,46.52,15.21,72.68,11.57-1.13-15.69,2.35-30.86,6.18-45.89-37.73-10.4-72.75-27.88-98.52-57.88-44.76-52.1-57.2-148.98-30.96-211.6,4.2-10.02,17.93-29.19,19.21-37.42,1.43-9.18-3.77-28.04-3.73-38.75.05-15.71,4.31-38.72,9.78-53.57,20.57-55.87,98.97-10.45,132.51,9.77,53.42-12.43,109.5-12.79,162.93-.04,26.4-16.55,96.32-53.79,123.43-27.63,14.2,13.7,20,62.99,18.81,82.25-.49,7.94-4.08,18.82-3.43,26.36.72,8.34,16.71,32.2,21,43.7,21.06,56.52,11.92,142.11-21.86,192.51-25.6,38.2-65.55,61.86-110.27,71.03,1.49,7.07,3.96,14.06,5.03,21.25,2.99,20.02,4.64,89,0,107.08-7.8,30.31-49.41,26.9-54.29-1.58-5.62-32.79,7.58-85.71-6.61-114.69-5.09-10.39-15.5-16.85-16.75-29.07-3.84-37.44,43.38-33.24,68.58-40.29,69.38-19.42,94.55-78.25,91.64-146.9-1.56-36.7-15.69-46.05-27.18-75.24-11.65-29.6,1.26-55.66-3.81-85.82-9.82,3.42-19.93,7.19-29.23,11.86-11.13,5.59-33.08,23.06-42.98,24.4-11.7,1.58-29.81-5.23-42.31-7.32-33.1-5.54-64.33-5.68-97.54-.43-12.12,1.92-27.86,7.96-39.3,7.95-14.03,0-26.23-12.86-38.39-19.64-3.96-2.21-37.74-18.46-39.1-16.82-.7,9.21-1.98,18.37-1.41,27.68,1.45,23.94,6.71,36.64-3.75,60.84-16.72,38.69-28.34,44.72-25.9,92.81,3.54,70.06,33.01,113.26,102.24,129.58,18.18,4.29,45.27,2.48,54.76,20.72,12.27,23.57-9.82,33.17-16.47,52.12-8.52,24.3-.86,70.09-2.95,98.14-1.56,21-12.6,36.62-35.69,32.88-7.92-1.28-22.32-14.22-22.32-22.15v-22.24Z"/>
            </svg>
          </motion.a>
        )}
        <motion.div
          key={animationKey}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 0.4, 1], opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className={`${displayProject ? "w-full max-h-[400px]" : "max-h-[500px]"} w-[90%]  overflow-hidden`}
        >
          {activeVideo ? (
            <video 
              src={activeProject?.video || "/placeholder.mp4"}
              className={`w-full h-full object-cover h-[300px] ${displayProject ? "max-h-[400px]" : "max-h-[500px]"}`}
              controls
              autoPlay
              muted
            />
          ) : (
            <Image
              src={activeProject?.image ?? "/placeholder.png"}
              alt={activeProject?.title ?? "Project image"}
              width={500}
              height={300}
              className={`w-full h-full object-cover ${displayProject ? "max-h-[400px]" : "max-h-[500px]"}`}
            />
          )}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -80, y: "25%" }}
          animate={{ opacity: 1, x: 0, y: displayProject ? "-50%" : "25%" }}
          transition={{
            opacity: { duration: 0.2, delay: 1.5, ease: "easeInOut" },
            x: { duration: 0.2, delay: 1.2, ease: "easeOut" },
            y: { duration: 0.2, delay: 1.2, ease: "easeOut" }
          }}
          style={{ color: activeProject?.color, opacity: activeVideo ? "0" : "1" }}
          className={`font-arges uppercase text-[200px] absolute left-0 transition-all duration-700 ease-in-out ${displayProject ? "-translate-y-1/2" : "translate-y-1/4"}`}
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
                  className="w-full pt-6 font-light text-sm"
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
                    opacity: { duration: 0.2, delay: 2.05, ease: "easeInOut" },
                    x: { duration: 0.3, delay: 2.05, ease: "easeOut" }
                  }}
                  style={{ color: activeProject?.color }}
                  className={`uppercase text-xs font-bold`}
                >
                  Explore
                </motion.p>
              </div>
            </button>
            {displayProject && activeProject && activeProject.link && (
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
      {activeProject?.video && (
        <button
          className={`transition-all duration-700 ease-in-out h-fit transform ${displayProject && showButton1 ? "flex" : "hidden"} ${showButton2 ? "opacity-100 -translate-y-20" : "opacity-0 -translate-y-[100px]"}`}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={() => setActiveVideo(!activeVideo)}
        >
          <AnimatedSpan color={activeProject?.color} isHovered={isButtonHovered} />
          <p style={{ color: activeProject?.color }} className="uppercase text-xs font-bold text-right pl-5">
            {!activeVideo && activeProject?.video ? (
              <>
                Watch the project <br /> presentation <br /> video
              </>
            ) : (
              <>
                Back <br /> to project <br /> overview
              </>
            )}
          </p>
        </button>
      )}
      <ArrowCross
        color={activeProject?.color}
        size={24}
        isToggled={displayProject}
        onToggle={onToggle}
        onQuit={onQuit}
        onResetAnimations={resetAnimationStates}
      />
    </div>
  )
}
