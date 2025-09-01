"use client"
import AnimatedTitle from "@/components/AnimatedTitle"
import Education from "@/components/Education"
import Experiences from "@/components/Experiences"
import Paragraph from "@/components/Paragraph"
import Resume from "@/components/Resume"
import SocialIcons from "@/components/SocialIcons"
import { useEffect, useState } from "react";

export default function PathPage() {
  const [showTitle, setShowTitle] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  const tools = [
    "PHP",
    "Javascript - TypeScript",
    "React - Next.js",
    "Express - Node.js",
    "GSAP - Motion",
    "PostgreSQL",
    "TailwindCSS - CSS in JS",
    "Git - Github",
    "Wordpress",
    "Webflow",
    "AWS",
  ]
  
  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 350);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const startDelay = 400

    tools.forEach((_, index) => {
      setTimeout(
        () => {
          setVisibleItems((prev) => [...prev, index])
        },
        startDelay + index * 50,
      ) 
    })

    return () => {
      tools.forEach((_, index) => {
        clearTimeout(startDelay + index * 50)
      })
    }
  }, [])

  return (
    <div className="w-3/4 pl-20 pt-[70px] flex flex-row h-fit items-end justify-between pr-10">
      <div className="text-white w-1/2">
        <AnimatedTitle text="I&apos;m&nbsp;a&nbsp;spinosaur" className="text-[200px]/[1.2] font-arges uppercase font-bold text-white mb-10" delay={50} />
        <div className="text-gray-300 w-3/4 text-sm">
          <Paragraph starttime={0.200}>Millions of years of evolution… and I ended up making websites. Part designer, part developer, part dinosaur. 100% passionate about building great things. Extinct? Maybe. Skilled? Definitely.</Paragraph>
        </div>
        <div className="overflow-hidden mt-10 mb-5">
          <h3 className={`uppercase text-[10px] font-bold text-white ${showTitle ? "translate-y-0" : "-translate-y-4"} transition-transform duration-300`}>TOOL STACK</h3>
        </div>
        <ul className="flex flex-col text-xs font-light mb-10">
          {tools.map((tool, index) => (
            <div key={index} className="overflow-hidden">
              <li
                className={`transition-transform duration-300 ease-out ${
                  visibleItems.includes(index) ? "translate-y-0" : "-translate-y-10"
                }`}
              >
                {tool}
              </li>
            </div>
          ))}
        </ul>
        <SocialIcons />
        <Resume />
      </div>
      <div className="flex flex-col mb-14">
        <Experiences />
        <Education />
      </div>
    </div>
  )
}
