"use client"
import Link from "next/link"
import Logo from "@/components/Logo"
import Socials from "@/components/Socials"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import useNavClickSound from "@/lib/hooks/useNavClickSound"
import useProjectStore from "@/stores/useProjectStore"
import BurgerIcon from "./BurgerIcon"

export default function Sidebar() {
  const pathname = usePathname()
  const [translateY, setTranslateY] = useState(-12)
  const playClick = useNavClickSound()
  const { activeProject, setActiveProject } = useProjectStore();
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let newTranslateY = isMobile ? 8 : -8

    if (pathname === "/about") {
      newTranslateY = isMobile ? 52 : 31
    } else if (pathname === "/path") {
      newTranslateY = isMobile ? 96 : 77
    } else if (pathname === "/contact") {
      newTranslateY = isMobile ? 140 : 122
    }

    setTranslateY(newTranslateY)
  }, [pathname])

  const handleClickNav = () => {
    if (activeProject) {
      setActiveProject(null)
    }
    playClick()
    if ( burgerOpen ) {
      setBurgerOpen(!burgerOpen)
    }
  }

  return (
    <>
      <aside
        className={`flex-shrink-0 absolute z-10 lg:relative w-full lg:w-1/4 lg:max-w-[300px] lg:min-w-[230px] h-[90px] lg:h-full border-r pl-10 transition-colors duration-300`}
        style={{ 
          backgroundColor: activeProject ? activeProject.bgcolor : "#0E0C17",
          borderColor: activeProject ? activeProject.bordercolor : 'rgba(83,74,145,0.5)'
        }}
      >
        <Logo />
        <div className="lg:hidden fixed inset-0 border-b border-white w-full h-[90px] backdrop-blur-md"
            style={{ 
              backgroundColor: activeProject ? activeProject.bgcolor : "#0E0C17",
              borderColor: activeProject ? activeProject.bordercolor : 'rgba(83,74,145,0.5)'
            }}
        >
          <BurgerIcon burgerOpen={burgerOpen} onToggle={() => setBurgerOpen(!burgerOpen)} />
        </div>
        {(!isMobile || burgerOpen) && (
          <div className="absolute top-[90px] lg:top-0 lg:relative left-0 flex flex-col justify-between h-[calc(100vh-90px)] lg:h-full z-10 lg:translate-x-0 pl-8 lg:px-0 w-full lg:w-auto"
            style={{ backgroundColor: activeProject ? activeProject?.color : "#0E0C17" }}
          >
            <nav className="pt-10 lg:pt-[200px] flex flex-row justify-between">
              <ul className="flex flex-col gap-5 text-white w-full">
                <li className="w-full" style={{transform: pathname === "/" && isMobile ? "translateX(20px)" : "none" }}>
                  <Link
                    onClick={handleClickNav}
                    style={{ color: activeProject?.color}}
                    className="transition-colors duration-300"
                    href="/"
                  >
                    Projects
                  </Link>
                </li>
                <li className="w-full" style={{transform: pathname === "/about" && isMobile ? "translateX(20px)" : "none" }}>
                  <Link
                    onClick={handleClickNav}
                    style={{ color: activeProject?.color}}
                    className="transition-colors duration-300"
                    href="/about"
                  >
                    About Me
                  </Link>
                </li>
                <li className="w-full" style={{transform: pathname === "/path" && isMobile ? "translateX(20px)" : "none" }}>
                  <Link
                    onClick={handleClickNav}
                    style={{ color: activeProject?.color}}
                    className="transition-colors duration-300"
                    href="/path"
                  >
                    Path
                  </Link>
                </li>
                <li className="w-full" style={{transform: pathname === "/contact" && isMobile ? "translateX(20px)" : "none" }}>
                  <Link
                    onClick={handleClickNav}
                    style={{ color: activeProject?.color}}
                    className="transition-colors duration-300"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div
                id="active-nav"
                className="absolute lg:relative h-2 w-2 rounded-full lg:rounded-none lg:h-[43px] lg:w-[1px] bg-white transition-transform transition-colors duration-300"
                style={{ transform: `translateY(${translateY}px)`, backgroundColor: activeProject?.color }}
              ></div>
            </nav>
            <div className="flex flex-col gap-8 pb-8 lg:pb-10">
              <Socials />
              <p
                className="text-white uppercase text-[10px] font-normal transition-colors duration-300"
                style={{ color: activeProject?.color }}
              >
                Web developer <br /> available oct. 2025
              </p>
            </div>
          </div>
        )}
      </aside>
      {(!isMobile || burgerOpen) && (
        <p className="z-30 text-right text-white uppercase text-[10px] font-normal absolute bottom-8 lg:bottom-10 right-8 lg:right-10 transition-colors duration-300" style={{ color: activeProject?.color }}>
          Built with claws and passion <br /> by Victor Lemercier
        </p>
      )}
    </>
  )
}
