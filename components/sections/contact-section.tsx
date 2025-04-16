"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare } from "lucide-react"
import Image from "next/image"
import { useMagneticButton } from "@/hooks/useMagneticButton"

interface ContactSectionProps {
  id: string
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id={id} ref={sectionRef} className="py-20 md:py-28 relative" aria-labelledby="contact-heading">
      {/* Fun background elements */}
      <div className="absolute top-40 right-0 w-40 h-40 blob bg-purple-100 opacity-40 -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 blob bg-blue-100 opacity-30 -z-10" aria-hidden="true"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-6 text-purple-600">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Have questions or want to collaborate? We'd love to hear from you! Reach out and let's discuss how we can work
          together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-full">
        <motion.div
          className="bg-white p-5 sm:p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4 sm:mb-6">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Email Us</h3>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base break-words">Send us an email and we'll get back to you as soon as possible.</p>
          <a
            href="mailto:hello@taylorlabs.co"
            className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
          >
            hello@taylorlabs.co
          </a>
        </motion.div>

        <motion.div
          className="bg-white p-5 sm:p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4 sm:mb-6">
            <Phone className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Call or Text Us</h3>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base break-words">Feel free to call or text us anytime. We're happy to chat either way!</p>
          <a href="tel:3602071844" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
            (360) 207-1844
          </a>
        </motion.div>

        <motion.div
          className="bg-white p-5 sm:p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4 sm:mb-6">
            <MessageSquare className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Social Media</h3>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base break-words">Connect with us on social media for updates and tips.</p>
          <div className="flex space-x-3">
            <a
              href="https://twitter.com/evantaylor1104"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
            >
              Twitter
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://www.linkedin.com/in/evan-l-taylor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p className="text-lg text-gray-700 mb-6">Looking to support our work?</p>
        <MagneticCoffeeButton />
      </motion.div>
    </section>
  )
}

// Magnetic Coffee Button component
const MagneticCoffeeButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const button = buttonRef.current
    if (!button) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      
      const absoluteDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
      const strength = 15
      const distance = 100
      
      if (absoluteDistance < distance) {
        const magnetX = (distanceX / distance) * strength
        const magnetY = (distanceY / distance) * strength
        
        setPosition({ x: magnetX, y: magnetY })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }
    
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (button) {
        button.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])
  
  return (
    <div className="flex justify-center">
      <motion.a
        ref={buttonRef}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) scale(0.55)`,
          transition: 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)'
        }}
        href="https://www.buymeacoffee.com/evan.taylor"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden rounded-md inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
          alt="Buy Me A Coffee"
          width={100}
          height={30}
          className="h-auto max-w-full w-auto max-h-10"
        />
      </motion.a>
    </div>
  )
}

export default ContactSection
