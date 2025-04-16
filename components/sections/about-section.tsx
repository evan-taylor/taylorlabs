"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface AboutSectionProps {
  id: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id={id} ref={sectionRef} className="py-20 md:py-28" aria-labelledby="about-heading">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-full overflow-hidden"
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6 text-purple-600">
            The Backstory
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 break-words">
            Taylor Labs was founded by Evan Taylor, a Computer Science student at California Polytechnic State
            University (Cal Poly) with a passion for building innovative software solutions.
          </p>
          <p className="text-gray-600 mb-8 break-words">
            Our mission is to create applications that solve real-world problems while maintaining a focus on beautiful
            design and exceptional functionality. We believe that great software should be both powerful and a joy to
            use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-lg font-semibold mb-2 text-purple-600">Software Development</h3>
              <p className="text-gray-600 break-words">
                We create intuitive, high-performance applications for Mac, iOS, and other platforms.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-lg font-semibold mb-2 text-purple-600">Product Innovation</h3>
              <p className="text-gray-600 break-words">
                We transform ideas into polished products with a focus on user experience and elegant design.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full overflow-hidden"
        >
          <motion.div
            className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/san-luis-obispo-landscape.jpg"
              alt="Beautiful landscape of San Luis Obispo, California, where Taylor Labs is based"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
          <motion.div
            className="absolute -bottom-16 sm:-bottom-6 left-0 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg w-[90%] sm:max-w-[260px] mx-auto sm:mx-0 right-0 sm:right-auto z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Based in San Luis Obispo, California. Working with people everywhere!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
