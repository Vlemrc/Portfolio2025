"use client"
import FloatingScene from "@/components/ProjectsScene";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 0.3, delay: 0.5, ease: "easeInOut" }
      }}
      className="w-3/4"
    >
      <FloatingScene />
    </motion.div>
  )
}