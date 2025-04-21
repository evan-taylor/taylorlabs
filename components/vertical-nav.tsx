"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Twitter, Linkedin, Coffee } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
      let current = 'hero'
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 80) current = section.id
        else break
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Lock body scroll when mobile menu is open and shift content on mobile
  useEffect(() => {
    const contentEl = document.getElementById('content-container')
    const isMobile = window.matchMedia('(max-width: 1023px)').matches
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      if (isMobile && contentEl) {
        contentEl.style.transform = 'translateX(min(16rem, 70vw))'
        contentEl.style.transition = 'transform 0.3s ease-in-out'
      }
    } else {
      document.body.style.overflow = ''
      if (contentEl) {
        contentEl.style.transform = ''
        contentEl.style.transition = ''
      }
    }
    return () => {
      document.body.style.overflow = ''
      if (contentEl) {
        contentEl.style.transform = ''
        contentEl.style.transition = ''
      }
    }
  }, [mobileMenuOpen])

  const scrollToSection = (id: string) => {
    // Immediately highlight clicked section
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const sections = [
    { id: "hero", title: "Home" },
    { id: "about", title: "About" },
    { id: "expertise", title: "Expertise" },
    { id: "products", title: "Products" },
    { id: "contact", title: "Contact" },
  ]

  // Animation variants for the smooth bounce effect
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        mass: 0.8
      }
    },
    tap: { scale: 0.98 }
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-6 right-6 z-50 lg:hidden bg-white rounded-full p-2 shadow-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full z-40 w-[min(16rem,70vw)] lg:w-64 lg:block",
          "transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full py-12 px-8">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-3">
                <Image src="/taylor-labs-logo.png" alt="Taylor Labs Logo" fill className="object-contain" priority />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Taylor Labs</h1>
                <p className="text-xs text-gray-500">Software Solutions</p>
              </div>
            </div>
          </div>

          {/* Nav Links - Using motion for the smooth bounce effect */}
          <nav className="sticky self-start">
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <motion.button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "text-sm transition-colors pl-4 border-l-4 border-solid w-full text-left",
                      activeSection === section.id
                        ? "text-purple-600 border-purple-600 font-medium"
                        : "text-gray-500 hover:text-purple-600 border-transparent",
                    )}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {section.title}
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mt-auto pt-12">
            <div className="text-sm text-gray-500">
              <p className="mb-1">hello@taylorlabs.co</p>
              <p className="mb-3">San Luis Obispo, CA</p>
              <div className="flex space-x-2">
                <motion.a
                  href="https://twitter.com/evantaylor1104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  aria-label="Twitter"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Twitter size={14} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/evan-l-taylor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  aria-label="LinkedIn"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Linkedin size={14} />
                </motion.a>
                <motion.a
                  href="https://buymeacoffee.com/evan.taylor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  aria-label="Buy Me A Coffee"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Coffee size={14} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerticalNav
