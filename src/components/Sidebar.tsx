"use client"
import Link from "next/link"
import Logo from "@/components/Logo"
import Socials from "@/components/Socials"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import useNavClickSound from "@/lib/hooks/useNavClickSound"

export default function Sidebar() {
  const pathname = usePathname()
  const [translateY, setTranslateY] = useState(-12)
  const playClick = useNavClickSound()

  useEffect(() => {
    let newTranslateY = -8 // Default for "/"

    if (pathname === "/about") {
      newTranslateY = 31
    } else if (pathname === "/path") {
      newTranslateY = 77
    } else if (pathname === "/contact") {
      newTranslateY = 122
    }

    setTranslateY(newTranslateY)
  }, [pathname])

  return (
    <aside className="w-1/4 h-full border-r border-r-[rgba(83,74,145,0.5)] pl-10">
      <Logo />
      <div className="flex flex-col justify-between h-full">
        <nav className="pt-[200px] flex flex-row justify-between">
          <ul className="flex flex-col gap-5 text-white w-full">
            <li className="w-full">
              <Link href="/" onClick={playClick}>Projects</Link>
            </li>
            <li className="w-full">
              <Link href="/about" onClick={playClick}>About Me</Link>
            </li>
            <li className="w-full">
              <Link href="/path" onClick={playClick}>Path</Link>
            </li>
            <li className="w-full">
              <Link href="/contact" onClick={playClick}>Contact</Link>
            </li>
          </ul>
          <div
            id="active-nav"
            className="h-[43px] w-[1px] bg-white transition-transform duration-300"
            style={{ transform: `translateY(${translateY}px)` }}
          ></div>
        </nav>
        <div className="flex flex-col gap-8 pb-10">
          <Socials />
          <p className="text-white uppercase text-[10px] font-normal">
            Web developer <br /> available oct. 2025
          </p>
        </div>
      </div>
    </aside>
  )
}
