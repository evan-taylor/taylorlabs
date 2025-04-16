"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParallaxContainer } from "@/components/animations/parallax-container"
import { useMagneticButton } from "@/hooks/useMagneticButton"

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

  // SVG path for squiggly line
  const squigglyPath = "M0,10 Q5,0 10,10 Q15,20 20,10 Q25,0 30,10 Q35,20 40,10 Q45,0 50,10 Q55,20 60,10 Q65,0 70,10 Q75,20 80,10"
  
  // Animation variants for the squiggly path drawing effect
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay },
        opacity: { duration: 0.3, delay }
      }
    })
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(135deg, #fcfcfc 0%, #f8f5ff 100%)",
        }}
      ></div>

      {/* Fun background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-[#F5F5F5] to-transparent rounded-bl-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-[#F5F5F5] to-transparent rounded-tr-[100px] opacity-70"></div>

        {/* Fun animated shapes */}
        <ParallaxContainer speed={0.2} direction="up">
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
        </ParallaxContainer>
        
        <ParallaxContainer speed={0.3} direction="down">
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
        </ParallaxContainer>
        
        <ParallaxContainer speed={0.15} direction="left">
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
        </ParallaxContainer>
      </div>

      <div className="w-full max-w-[100vw] mx-auto px-4 sm:px-6 md:px-12 py-20">
        <div className="max-w-full sm:max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 break-words">
              Transforming ideas into{" "}
              <span className="text-purple-600">impactful</span> solutions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-full sm:max-w-2xl break-words">
              We craft intuitive, high-performance applications with a focus on 
              <span className="relative inline-block mx-1">
                beautiful
                <motion.svg
                  className="absolute -bottom-1 w-full h-3 overflow-visible"
                  viewBox="0 0 80 20"
                  initial="hidden"
                  animate="visible"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={squigglyPath}
                    variants={drawVariants}
                    custom={1.0}
                    fill="none"
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="w-full h-full"
                  />
                </motion.svg>
              </span> 
              design and 
              <span className="relative inline-block mx-1">
                exceptional
                <motion.svg
                  className="absolute -bottom-1 w-full h-3 overflow-visible"
                  viewBox="0 0 80 20"
                  initial="hidden"
                  animate="visible"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={squigglyPath}
                    variants={drawVariants}
                    custom={1.3}
                    fill="none"
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="w-full h-full"
                  />
                </motion.svg>
              </span> 
              functionality.
            </p>
          </motion.div>

          <MagneticButtons />
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

// Magnetic buttons component
const MagneticButtons = () => {
  const productsButton = useMagneticButton(15, 100)
  const contactButton = useMagneticButton(15, 100)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-wrap gap-3 sm:gap-4"
    >
      <motion.button
        ref={productsButton.buttonRef}
        style={{ 
          transform: `translate(${productsButton.position.x}px, ${productsButton.position.y}px)`,
          transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)'
        }}
        className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 sm:px-8 py-3 text-sm sm:text-base"
        onClick={() => {
          const productsSection = document.getElementById("products")
          if (productsSection) {
            productsSection.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        View Our Products
      </motion.button>
      
      <motion.button
        ref={contactButton.buttonRef}
        style={{ 
          transform: `translate(${contactButton.position.x}px, ${contactButton.position.y}px)`,
          transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)'
        }}
        className="bg-transparent border-2 border-purple-300 text-gray-800 hover:bg-purple-50 rounded-full px-4 sm:px-8 py-3 text-sm sm:text-base"
        onClick={() => {
          const contactSection = document.getElementById("contact")
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        Get In Touch
      </motion.button>
    </motion.div>
  )
}

export default HeroSection
