"use client"
import { useParams } from "next/navigation"
import useProjectStore from "@/stores/useProjectStore"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import Paragraph from "@/components/Paragraph"
import { ArrowCross } from "@/components/ArrowCross"

export default function ProjetPage() {
  const params = useParams()
  const { activeProject, setActiveProject } = useProjectStore()
  const [displayProject, setDisplayProject] = useState(false)
  console.log(displayProject)

  return (
    <div
      style={{ backgroundColor: activeProject?.bgcolor }}
      className={`w-3/4 pl-20 transition-colors duration-300 pr-10 pt-20 flex flex-row`}
    >
      <div
        className={` ${displayProject ? "w-2/3 items-start mt-20" : "w-full items-end"} relative flex flex-col transition-all duration-700 ease-in-out`}
      >
        <Image
          src={activeProject?.image ?? "/placeholder.png"}
          alt={activeProject?.title ?? "Project image"}
          width={500}
          height={300}
          className={`${displayProject ? "w-full max-h-[400px]" : "w-[90%]"} max-h-[500px] object-cover transition-all duration-700 ease-in-out`}
        />
        <h1
          style={{ color: activeProject?.color }}
          className={`font-arges uppercase text-[200px] absolute left-0 transition-transform duration-700 ease-in-out ${displayProject ? "-translate-y-1/2" : "translate-y-1/4"}`}
        >
          {activeProject?.title}
        </h1>
        <div
          className={`${displayProject ? "w-full" : "w-[90%]"} flex flex-row pt-5 gap-8 transition-all duration-700 ease-in-out`}
        >
          <div className="flex flex-row justify-between w-full items-start">
            <div>
              <div className="flex flex-row gap-8">
                <div style={{ color: activeProject?.color }} className={`uppercase text-xs`}>
                  <p>Year</p>
                  <p>For</p>
                  <p>Stack</p>
                </div>
                <div style={{ color: activeProject?.color }} className={`uppercase text-xs`}>
                  <p>{activeProject?.year}</p>
                  <p>{activeProject?.type}</p>
                  <ul className="flex flex-row gap-1">
                    {activeProject?.stack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {displayProject && (
                <Paragraph
                  style={{ color: activeProject?.color }}
                  className="w-2/3 pt-6 font-light text-sm animate-in fade-in duration-700 delay-300"
                  starttime={0.500}
                >
                  {activeProject?.description}
                </Paragraph>
              )}
            </div>
            <button
              className={`flex flex-row items-center gap-5 transition-all duration-500 ease-in-out ${displayProject ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              onClick={() => setDisplayProject(true)}
            >
              <div
                style={{ backgroundColor: activeProject?.color }}
                className="h-0.5 w-12 transition-all duration-300"
              ></div>
              <p style={{ color: activeProject?.color }} className="uppercase text-xs font-bold">
                Explore
              </p>
            </button>
            {displayProject && activeProject && (
              <Link
                target="_blank"
                href={activeProject.link}
                className={`flex flex-row items-center gap-5 transition-all duration-500 ease-in-out ${displayProject ? "opacity-100 scale-100 animate-in fade-in slide-in-from-right-5 delay-200" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <div
                  style={{ backgroundColor: activeProject?.color }}
                  className="h-0.5 w-12 transition-all duration-300"
                ></div>
                <p style={{ color: activeProject?.color }} className="uppercase text-xs font-bold">
                  Visit
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-700 ease-in-out ${displayProject ? "flex animate-in slide-in-from-right-10 fade-in delay-300" : "hidden"}`}
      >
        {/* Images */}
      </div>
        <ArrowCross
          color={activeProject?.color}
          size={24}
          isToggled={displayProject}
          onToggle={setDisplayProject}
          onQuit={() => setActiveProject(null)}
        />
    </div>
  )
}
