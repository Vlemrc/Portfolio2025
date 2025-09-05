"use client"
import MobileProjects from "@/components/MobileProjects";
import FloatingScene from "@/components/ProjectsScene";
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


  return (
    <>
      {isMobile ? (
        <MobileProjects />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 0.3, delay: 0.5, ease: "easeInOut" }
          }}
          className="w-full lg:w-3/4 z-0 lg:z-auto"
        >
          <FloatingScene />
        </motion.div>
      )}
    </>
  )
}