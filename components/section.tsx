"use client"

import { type ReactNode, forwardRef } from "react"
import { motion } from "framer-motion"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, title, children }, ref) => {
  return (
    <motion.section
      id={id}
      className="py-16 md:py-24 mb-16"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{title}</h2>
      {children}
    </motion.section>
  )
})

Section.displayName = "Section"

export default Section
