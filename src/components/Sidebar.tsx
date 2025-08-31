"use client"
import Link from "next/link"
import Logo from "@/components/Logo"
import Socials from "@/components/Socials"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import useNavClickSound from "@/lib/hooks/useNavClickSound"
import useProjectStore from "@/stores/useProjectStore"

export default function Sidebar() {
  const pathname = usePathname()
  const [translateY, setTranslateY] = useState(-12)
  const playClick = useNavClickSound()
  const { activeProject, setActiveProject } = useProjectStore();

  useEffect(() => {
    let newTranslateY = -8

    if (pathname === "/about") {
      newTranslateY = 31
    } else if (pathname === "/path") {
      newTranslateY = 77
    } else if (pathname === "/contact") {
      newTranslateY = 122
    }

    setTranslateY(newTranslateY)
  }, [pathname])

  const handleClickNav = () => {
    if (activeProject) {
      setActiveProject(null)
    }
    playClick()
  }

  return (
    <>
      <aside
        className={`flex-shrink-0 w-1/4 max-w-[300px] min-w-[230px] h-full border-r pl-10 transition-colors duration-300`}
        style={{ 
          backgroundColor: activeProject ? activeProject.bgcolor : undefined, 
          borderColor: activeProject ? activeProject.bordercolor : 'rgba(83,74,145,0.5)'
        }}
      >
        <Logo />
        <div className="flex flex-col justify-between h-full">
          <nav className="pt-[200px] flex flex-row justify-between">
            <ul className="flex flex-col gap-5 text-white w-full">
              <li className="w-full">
                <Link onClick={handleClickNav} style={{ color: activeProject?.color }} className="transition-colors duration-300" href="/">Projects</Link>
              </li>
              <li className="w-full">
                <Link onClick={handleClickNav} style={{ color: activeProject?.color }} className="transition-colors duration-300" href="/about">About Me</Link>
              </li>
              <li className="w-full">
                <Link onClick={handleClickNav} style={{ color: activeProject?.color }} className="transition-colors duration-300" href="/path">Path</Link>
              </li>
              <li className="w-full">
                <Link onClick={handleClickNav} style={{ color: activeProject?.color }} className="transition-colors duration-300" href="/contact">Contact</Link>
              </li>
            </ul>
            <div
              id="active-nav"
              className="h-[43px] w-[1px] bg-white transition-transform transition-colors duration-300"
              style={{ transform: `translateY(${translateY}px)`, backgroundColor: activeProject?.color }}
            ></div>
          </nav>
          <div className="flex flex-col gap-8 pb-10">
            <Socials />
            <p className="text-white uppercase text-[10px] font-normal transition-colors duration-300" style={{ color: activeProject?.color }}>
              Web developer <br /> available oct. 2025
            </p>
          </div>
        </div>
      </aside>
      <p className="text-right text-white uppercase text-[10px] font-normal absolute bottom-10 right-10 transition-colors duration-300" style={{ color: activeProject?.color }}>
        Built with claws and passion <br /> by Victor Lemercier
      </p>
    </>
  )
}
