"use client"
import useProjectStore from "@/stores/useProjectStore"
import Link from "next/link";

export default function Socials() {
    const { activeProject, setActiveProject } = useProjectStore();

    return (
        <div className="flex gap-1 flex-col text-white uppercase text-xs font-light">
            <Link href="mailto:victorlemercier.dev@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: activeProject ? activeProject.color : undefined }}>Email</Link>
            <Link href="https://linkedin.com/in/victor-lemercier/" target="_blank" rel="noopener noreferrer" style={{ color: activeProject ? activeProject.color : undefined }}>LinkedIn</Link>
            <Link href="https://github.com/vlemrc/" target="_blank" rel="noopener noreferrer" style={{ color: activeProject ? activeProject.color : undefined }}>Github</Link>
        </div>
    )
}