"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Volume2, Headphones, RotateCcw } from "lucide-react"

interface ProductsSectionProps {
  id: string
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id={id} ref={sectionRef} className="py-20 md:py-28 relative" aria-labelledby="products-heading">
      {/* Fun background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 blob bg-purple-100 opacity-50 -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 blob bg-blue-100 opacity-40 -z-10" aria-hidden="true"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="products-heading" className="text-3xl md:text-4xl font-bold mb-6 text-purple-600">
          Our Products
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          We build thoughtful applications that solve real problems with elegant, user-friendly design.
        </p>
      </motion.div>

      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5 }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-4 sm:p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-purple-600">SoundSnooze</h3>
              <p className="text-lg text-gray-700 mb-4">Never worry about accidental sound leaks again.</p>
              <p className="text-gray-600 mb-8">
                SoundSnooze automatically mutes your Mac when you step away, preventing embarrassing audio situations.
                It's the perfect companion for anyone who values privacy and peace of mind.
              </p>

              <div className="space-y-6 mb-8">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                    <Volume2 className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium">Auto-Mute on Sleep</h4>
                    <p className="text-gray-600">
                      Automatically mutes your Mac when you put it to sleep or lock the screen.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                    <Headphones className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium">Headphone Disconnect Detection</h4>
                    <p className="text-gray-600">
                      Automatically mutes when headphones are disconnected, preventing embarrassing audio leaks.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                    <RotateCcw className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium">Smart Volume Restoration</h4>
                    <p className="text-gray-600">
                      Intelligently restores your previous volume level when you return to your Mac.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-4">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 rounded-full px-6"
                  onClick={() =>
                    window.open(
                      "https://github.com/evan-taylor/SoundSnooze/releases/download/v1.0/SoundSnooze.dmg",
                      "_blank",
                    )
                  }
                >
                  Download for Free
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-purple-200 hover:bg-purple-50"
                  onClick={() => window.open("https://buymeacoffee.com/evan.taylor", "_blank")}
                >
                  Support Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative min-h-[400px] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-[#4A90E2]/10 to-[#67B8E3]/10"></div>
            </div>
            <div className="relative w-64 h-64 z-10">
              <Image
                src="/soundsnooze-logo.png"
                alt="SoundSnooze App - A Mac application that automatically mutes your computer when you step away"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Fun floating UI elements */}
            <motion.div
              className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <Volume2 className="h-6 w-6 text-purple-600" />
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 }}
              aria-hidden="true"
            >
              <Headphones className="h-6 w-6 text-purple-600" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700 mb-6">More innovative products coming soon...</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            className="rounded-full px-6 mx-auto border-purple-200 hover:bg-purple-50 hover:text-purple-600"
          >
            View All Products <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
