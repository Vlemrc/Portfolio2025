"use client"
import { useParams } from 'next/navigation';
import useProjectStore from "@/stores/useProjectStore"
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Paragraph from '@/components/Paragraph';

export default function ProjetPage() {
  const params = useParams(); 
  const { activeProject, setActiveProject } = useProjectStore();
  const [displayProject, setDisplayProject] = useState(false);
  console.log(displayProject)

  return (
    <div style={{ backgroundColor: activeProject?.bgcolor }} className={`w-3/4 pl-20 transition-colors duration-300 pr-10 pt-20 flex flex-row`}>
      <div className={` ${displayProject ? "w-2/3 items-start mt-20" : "w-full items-end"} relative flex flex-col`}>
        <Image
          src={activeProject?.image ?? "/placeholder.png"}
          alt={activeProject?.title ?? "Project image"}
          width={500}
          height={300}
          className={`${displayProject ? "w-full max-h-[400px] relative z-10" : "w-[90%]"} max-h-[500px] object-cover`}
        />
        <h1 style={{ color: activeProject?.color }} className={`font-arges uppercase text-[200px] absolute left-0 ${displayProject ? "-top-1/4" : "top-1/4"}`}>{activeProject?.title}</h1>
        <div className={`${displayProject ? "w-full" : "w-[90%]"} flex flex-row pt-5 gap-8`}>
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
              {displayProject && <Paragraph style={{ color: activeProject?.color }} className="w-1/2 pt-6 font-light text-sm">{activeProject?.description}</Paragraph>}
            </div>
            <button className={`flex flex-row items-center gap-5 transition-opacity duration-300 ${displayProject ? "opacity-0 pointer-events-none" : ""}`}
            onClick={() => setDisplayProject(true)}
            >
              <div style={{ backgroundColor: activeProject?.color }} className="h-0.5 w-12 "></div>
              <p style={{ color: activeProject?.color }} className="uppercase text-xs font-bold">Explore</p>
            </button>
            {activeProject && (
              <Link target="_blank" href={activeProject.link} className={`flex flex-row items-center gap-5 transition-opacity duration-300 ${displayProject ? "flex" : "hidden"}`}>
                <div style={{ backgroundColor: activeProject?.color }} className="h-0.5 w-12 "></div>
                <p style={{ color: activeProject?.color }} className="uppercase text-xs font-bold">Visit</p>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={` ${displayProject ? "flex" : "hidden"}`}>
        {/* Images */}
      </div>
    </div>
  );
}
