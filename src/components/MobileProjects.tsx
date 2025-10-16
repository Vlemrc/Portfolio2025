"use client"
import { data } from "@/data/data"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import useProjectStore from "@/stores/useProjectStore"
import Link from "next/link"

export default function MobileProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const { activeProject, setActiveProject } = useProjectStore()
  const [videoActive, setVideoActive] = useState(false)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  const handleProjectClick = () => {
    setIsExpanded(true)
    setActiveProject(data[currentIndex])
  }

  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation() // ⛔ Empêche le clic d’atteindre <section>
    setIsExpanded(false)
    setActiveProject(null)
    setVideoActive(false)
  }


  useEffect(() => {
    console.log("Changement détecté :", { activeProject, isExpanded })
  }, [activeProject, isExpanded])

  const getPrevIndex = () => (currentIndex - 1 + data.length) % data.length
  const getNextIndex = () => (currentIndex + 1) % data.length

  const minSwipeDistance = 50

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextProject()
    } else if (isRightSwipe) {
      prevProject()
    }
  }

  const onWheel = (e: WheelEvent) => {
    e.preventDefault()

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // Horizontal scroll detected
      if (e.deltaX > 0) {
        nextProject()
      } else {
        prevProject()
      }
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (!isExpanded) {
      // Add touch event listeners
      container.addEventListener("touchstart", onTouchStart, { passive: true })
      container.addEventListener("touchmove", onTouchMove, { passive: true })
      container.addEventListener("touchend", onTouchEnd, { passive: true })

      // Add wheel event listener for desktop
      container.addEventListener("wheel", onWheel, { passive: false })
    }

    return () => {
      container.removeEventListener("touchstart", onTouchStart)
      container.removeEventListener("touchmove", onTouchMove)
      container.removeEventListener("touchend", onTouchEnd)
      container.removeEventListener("wheel", onWheel)
    }
  }, [touchStart, touchEnd, isExpanded])

  return (
    <div className={`${isExpanded ? "mt-[90px]" : "pt-20"} text-white p-8 px-0 relative h-full w-full items-center justify-center flex flex-col`}>
      <div ref={containerRef} className="relative w-full cursor-grab active:cursor-grabbing">
        <div className="flex items-center justify-center h-full gap-0 w-full transition-all duration-700 ease-in-out">
          <div
            className={`h-full transition-all duration-700 ease-in-out ${
              isExpanded ? "opacity-0 w-0" : "opacity-50 w-5"
            }`}
          >
            <Image
              src={data[getPrevIndex()].image || "/placeholder.svg"}
              alt={data[getPrevIndex()].title}
              width={500}
              height={200}
              className="w-full h-[200px] rounded-r-lg object-cover transition-all duration-700 ease-in-out"
            />
          </div>

          <section
            onClick={handleProjectClick}
            className="transition-all duration-700 ease-in-out h-full"
            style={{
              flexBasis: isExpanded ? "100%" : "28rem",
              margin: isExpanded ? "0" : "0 1rem",
              flexGrow: isExpanded ? 1 : 0,
            }}

          >

            <div className="flex flex-col items-center">
              {activeProject && isExpanded && (
                <div className="w-full flex flex-row justify-between items-center mb-2 px-12">
                  <button
                    style={{ color: data[currentIndex].color }}
                    onClick={handleBackClick}
                    className={`uppercase text-xs font-bold transition-all duration-500 ${
                      isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
                    }`}
                    aria-label="Back to projects"
                  >
                    Back
                  </button>
                  {activeProject && activeProject.link && (
                    <div>
                      <Link
                        target="_blank"
                        href={activeProject.link}
                        className={`flex flex-row items-center gap-5 ease-in-out`}
                      >
                        <div
                          style={{ backgroundColor: activeProject?.color }}
                          className={`h-0.5 w-12 transition-transform duration-500 origin-left transform`}
                        ></div>
                        <div className="overflow-hidden h-fit w-fit">
                          <p
                            style={{ color: activeProject?.color }}
                            className={`uppercase text-xs font-bold transition-transform duration-500`}
                          >
                            Visit
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              )}
              <div
                className={`relative w-full transition-all duration-700 ease-in-out`}
                style={{
                  paddingLeft: isExpanded ? "3rem" : "0",
                  paddingRight: isExpanded ? "3rem" : "0",
                }}
              >
                {videoActive ? (
                  <video
                    src={data[currentIndex].video || "/placeholder.mp4"}
                    className="w-full rounded-lg object-cover mb-4 transition-all duration-700 ease-in-out"
                    style={{
                      height: isExpanded ? "300px" : "200px",
                    }}
                    controls
                    autoPlay
                    muted
                  />
                ) : (
                  <Image
                    src={data[currentIndex].image || "/placeholder.svg"}
                    alt={data[currentIndex].title}
                    width={500}
                    height={200}
                    className="w-full rounded-lg object-cover mb-4 transition-all duration-700 ease-in-out"
                    style={{
                      height: isExpanded ? "300px" : "200px",
                    }}
                  />
                )}
                <h2
                  style={{ color: data[currentIndex].color }}
                  className={`font-arges uppercase font-bold text-white transition-all duration-700 ease-in-out text-[80px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[70%] text-2xl z-20 w-4/5 text-center ${videoActive ? "opacity-0" : "opacity-100"}`}
                >
                  {data[currentIndex].title}
                </h2>
              </div>

              <div className={`${isExpanded ? "" : "hidden"} flex flex-row justify-between w-full mb-8`}>
                <div
                  style={{ color: activeProject?.color }}
                  className={`flex flex-col text-left pl-12 uppercase text-xs ${isExpanded ? "opacity-100" : "opacity-0"}`}
                >
                  <p>Year</p>
                  <p>For</p>
                  <p>Stack</p>
                </div>
                <div
                  style={{ color: activeProject?.color }}
                  className={`flex flex-col text-right pr-12 uppercase text-xs ${isExpanded ? "opacity-100" : "opacity-0"}`}
                >
                  <p>{activeProject?.year}</p>
                  <p>{activeProject?.type}</p>
                  <ul className="flex flex-row flex-wrap gap-x-1 gap-y-0 justify-end">
                    {activeProject?.stack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p
                style={{ color: data[currentIndex].color }}
                className={`text-center transition-all duration-700 ease-in-out px-12 text-xs ${
                  isExpanded ? "block" : "hidden"
                }`}
              >
                {data[currentIndex].description || "Description du projet à venir..."}
              </p>
              {activeProject && activeProject.video && isExpanded && !videoActive && (
                <button
                  style={{ color: data[currentIndex].color }}
                  onClick={() => setVideoActive(!videoActive)}
                  className={`uppercase text-xs font-bold text-center my-8 ${isExpanded ? "block" : "hidden"}`}
                >
                  {!videoActive ? (
                    <>
                      Watch the project <br /> presentation video
                    </>
                  ) : (
                    <>
                      Back to project <br /> overview
                    </>
                  )}
                </button>
              )}
              {activeProject && activeProject.github && isExpanded && (
                <Link href={activeProject?.github} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 573.73 574.97">
                      <path fill={activeProject.color} d="M206.62,530.02l-23.58,1.33c-41.15-2-81.2-16.97-111.84-44.49-11.4-10.24-19.26-22.21-31.82-31.52-18.44-13.67-44.87-16.2-38.37-46.69,2.62-12.3,17.05-22.19,29.34-21.21,10.15.81,30.6,12.76,39.22,18.84,22.53,15.89,38.5,40.22,63.03,54.23,23.09,13.19,46.52,15.21,72.68,11.57-1.13-15.69,2.35-30.86,6.18-45.89-37.73-10.4-72.75-27.88-98.52-57.88-44.76-52.1-57.2-148.98-30.96-211.6,4.2-10.02,17.93-29.19,19.21-37.42,1.43-9.18-3.77-28.04-3.73-38.75.05-15.71,4.31-38.72,9.78-53.57,20.57-55.87,98.97-10.45,132.51,9.77,53.42-12.43,109.5-12.79,162.93-.04,26.4-16.55,96.32-53.79,123.43-27.63,14.2,13.7,20,62.99,18.81,82.25-.49,7.94-4.08,18.82-3.43,26.36.72,8.34,16.71,32.2,21,43.7,21.06,56.52,11.92,142.11-21.86,192.51-25.6,38.2-65.55,61.86-110.27,71.03,1.49,7.07,3.96,14.06,5.03,21.25,2.99,20.02,4.64,89,0,107.08-7.8,30.31-49.41,26.9-54.29-1.58-5.62-32.79,7.58-85.71-6.61-114.69-5.09-10.39-15.5-16.85-16.75-29.07-3.84-37.44,43.38-33.24,68.58-40.29,69.38-19.42,94.55-78.25,91.64-146.9-1.56-36.7-15.69-46.05-27.18-75.24-11.65-29.6,1.26-55.66-3.81-85.82-9.82,3.42-19.93,7.19-29.23,11.86-11.13,5.59-33.08,23.06-42.98,24.4-11.7,1.58-29.81-5.23-42.31-7.32-33.1-5.54-64.33-5.68-97.54-.43-12.12,1.92-27.86,7.96-39.3,7.95-14.03,0-26.23-12.86-38.39-19.64-3.96-2.21-37.74-18.46-39.1-16.82-.7,9.21-1.98,18.37-1.41,27.68,1.45,23.94,6.71,36.64-3.75,60.84-16.72,38.69-28.34,44.72-25.9,92.81,3.54,70.06,33.01,113.26,102.24,129.58,18.18,4.29,45.27,2.48,54.76,20.72,12.27,23.57-9.82,33.17-16.47,52.12-8.52,24.3-.86,70.09-2.95,98.14-1.56,21-12.6,36.62-35.69,32.88-7.92-1.28-22.32-14.22-22.32-22.15v-22.24Z"/>
                  </svg>
                </Link>
              )}
            </div>
          </section>

          <div
            className={`h-full overflow-hidden transition-all duration-700 ease-in-out ${
              isExpanded ? "opacity-0 w-0" : "opacity-50 w-5"
            }`}
          >
            <Image
              src={data[getNextIndex()].image || "/placeholder.svg"}
              alt={data[getNextIndex()].title}
              width={500}
              height={200}
              className="w-full h-[200px] rounded-l-lg object-cover transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div
        className={`justify-center gap-2 mt-4 transition-all duration-500 ${
          isExpanded ? "hidden" : "flex"
        }`}
      >
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-10 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
      {(!activeProject) && (
        <p
          className="z-50 text-right text-white uppercase text-[10px] font-normal absolute bottom-8 lg:bottom-10 right-8 lg:right-10 transition-colors duration-300"
        >
          Built with claws and passion <br /> by Victor Lemercier
        </p>
      )}
    </div>
  )
}
