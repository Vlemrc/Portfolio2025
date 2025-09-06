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

  const handleBackClick = () => {
    setIsExpanded(false)
    setActiveProject(null)
    setVideoActive(false)
  }

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
    <div className="text-white p-8 pt-20 px-0 relative h-full w-full items-center justify-center flex flex-col">
      <button
        style={{ color: data[currentIndex].color }}
        onClick={handleBackClick}
        className={`fixed bottom-6 right-6 z-20 uppercase text-[10px] font-bold transition-all duration-500 ${
          isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}
        aria-label="Back to projects"
      >
        Revenir
      </button>

      <div ref={containerRef} className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
        {/* <button
          onClick={prevProject}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-500 ${
            isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Previous project"
        ></button>

        <button
          onClick={nextProject}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-500 ${
            isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Next project"
        ></button> */}

        <div className="flex items-center justify-center h-full gap-0 w-full transition-all duration-700 ease-in-out">
          <div
            className={`h-full overflow-hidden transition-all duration-700 ease-in-out ${
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
              {activeProject && activeProject.link && (
                <div className="w-full flex justify-end mr-[100px] mb-2">
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
              <div
                className="relative w-full transition-all duration-700 ease-in-out"
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
              <button
                style={{ color: data[currentIndex].color }}
                onClick={() => setVideoActive(!videoActive)}
                className={`uppercase text-xs font-bold text-center mt-8 ${isExpanded ? "block" : "hidden"}`}
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
        className={`flex justify-center gap-2 mt-4 transition-all duration-500 ${
          isExpanded ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
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
