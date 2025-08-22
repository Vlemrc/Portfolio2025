"use client"
import { useParams } from 'next/navigation';
import useProjectStore from "@/stores/useProjectStore"
import Image from 'next/image';

export default function ProjetPage() {
  const params = useParams(); 
  const { activeProject, setActiveProject } = useProjectStore();
  console.log(activeProject)

  return (
    <div style={{ backgroundColor: activeProject?.bgcolor }} className={`w-3/4 pl-20 transition-colors duration-300 pr-10 pt-20 flex flex-row`}>
      <div className="relative flex flex-col items-end w-full">
        <Image
          src={activeProject?.image ?? "/placeholder.png"}
          alt={activeProject?.title ?? "Project image"}
          width={500}
          height={300}
          className="w-[90%] max-h-[500px] object-cover"
        />
        <h1 style={{ color: activeProject?.color }} className="font-arges uppercase text-[200px] absolute top-1/4 left-0">{activeProject?.title}</h1>
        <div className="flex flex-row w-[90%] pt-5 gap-8">
          <div className="flex flex-row justify-between w-full items-start">
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
            <button className="flex flex-row items-center gap-5">
              <div style={{ backgroundColor: activeProject?.color }} className="h-0.5 w-12 "></div>
              <p style={{ color: activeProject?.color }} className="uppercase text-xs font-bold">Explore</p>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden">
        {/* Images */}
      </div>
    </div>
  );
}
