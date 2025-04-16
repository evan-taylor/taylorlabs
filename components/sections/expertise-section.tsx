"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Code, Database, Figma, FileCode, GitBranch, Layers, Server, Terminal, Workflow, Cpu } from "lucide-react"
import { ParallaxContainer } from "@/components/animations/parallax-container"

interface ExpertiseSectionProps {
  id: string
}

const technologies = [
  { name: "React", icon: <Code className="h-5 w-5" /> },
  { name: "Next.js", icon: <Layers className="h-5 w-5" /> },
  { name: "Svelte", icon: <FileCode className="h-5 w-5" /> },
  { name: "Supabase", icon: <Database className="h-5 w-5" /> },
  { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
  { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
  { name: "Python", icon: <Terminal className="h-5 w-5" /> },
  { name: "Java", icon: <Cpu className="h-5 w-5" /> },
  { name: "Node.js", icon: <Server className="h-5 w-5" /> },
  { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
  { name: "Figma", icon: <Figma className="h-5 w-5" /> },
  { name: "DevOps", icon: <Workflow className="h-5 w-5" /> },
]

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id={id} ref={sectionRef} className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-600">
          What We're Good At
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-full sm:max-w-3xl break-words">
          Our expertise spans the full stack, with a focus on crafting beautiful, high-performance interfaces and robust
          backend systems that scale with your needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
        {technologies.map((tech, index) => (
          <ParallaxContainer
            key={tech.name}
            speed={0.1}
            direction={index % 2 === 0 ? 'up' : 'down'}
          >
            <motion.div
              className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-purple-200 transition-all overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2 sm:mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech.icon}
              </motion.div>
              <span className="font-medium text-sm sm:text-base">{tech.name}</span>
            </motion.div>
          </ParallaxContainer>
        ))}
      </div>
    </section>
  )
}

export default ExpertiseSection
