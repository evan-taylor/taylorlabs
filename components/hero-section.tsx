"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  id: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fcfcfc 0%, #f8f5ff 100%)",
      }}
      aria-label="Hero section"
    >
      {/* Fun background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-[#F5F5F5] to-transparent rounded-bl-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-[#F5F5F5] to-transparent rounded-tr-[100px] opacity-70"></div>

        {/* Fun animated shapes */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-16 h-16 rounded-full bg-purple-200 opacity-60"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-[30%] left-[20%] w-24 h-24 rounded-full bg-blue-200 opacity-50"
          animate={{
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 7,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-[60%] right-[25%] w-20 h-20 rounded-lg bg-yellow-200 opacity-40"
          animate={{
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="w-full max-w-[100vw] mx-auto px-4 sm:px-6 md:px-12 py-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transforming ideas into <span className="text-purple-600">impactful</span> solutions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
              We craft intuitive, high-performance applications with a focus on beautiful design and exceptional
              functionality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8"
              onClick={() => {
                const productsSection = document.getElementById("products")
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Our Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-purple-300 hover:bg-purple-50"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Fun scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            className="p-2 rounded-full bg-purple-100"
            animate={{
              y: [0, 8, 0],
              boxShadow: [
                "0 0 0 0 rgba(139, 92, 246, 0.3)",
                "0 0 0 10px rgba(139, 92, 246, 0)",
                "0 0 0 0 rgba(139, 92, 246, 0.3)",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
            }}
          >
            <ArrowDown size={20} className="text-purple-600" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
