"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare } from "lucide-react"
import Image from "next/image"

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

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Email Us</h3>
          <p className="text-gray-600 mb-4">Send us an email and we'll get back to you as soon as possible.</p>
          <a
            href="mailto:hello@taylorlabs.co"
            className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
          >
            hello@taylorlabs.co
          </a>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
            <Phone className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Call or Text Us</h3>
          <p className="text-gray-600 mb-4">Feel free to call or text us anytime. We're happy to chat either way!</p>
          <a href="tel:3602071844" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
            (360) 207-1844
          </a>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
            <MessageSquare className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Social Media</h3>
          <p className="text-gray-600 mb-4">Connect with us on social media for updates and tips.</p>
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
        <div className="flex justify-center">
          <a href="https://www.buymeacoffee.com/evan.taylor" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
              alt="Buy Me A Coffee"
              width={217}
              height={60}
              className="h-auto max-w-full w-auto"
            />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
