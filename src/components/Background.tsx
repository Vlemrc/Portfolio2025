"use client"
import useProjectStore from "@/stores/useProjectStore"

export default function Background() {
    const { activeProject } = useProjectStore()

  return (
    <div className={`absolute inset-0 z-[-1] h-full w-full ${activeProject ? "" : "bg-bgPrimary"} transition-colors duration-300`} 
    style={{ 
          backgroundColor: activeProject ? activeProject.bgcolor : undefined,
        }}> 
    </div>
  );
}
