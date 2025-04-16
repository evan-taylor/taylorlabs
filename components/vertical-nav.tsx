"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Twitter, Linkedin, Coffee } from "lucide-react"
import Image from "next/image"

const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-10% 0px -90% 0px" },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
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

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-6 right-6 z-50 md:hidden bg-white rounded-full p-2 shadow-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          aria-label="Close navigation overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Navigation */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full z-40 md:w-64 md:block",
          "transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full py-12 px-8">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-3">
                <Image src="/taylor-labs-logo.png" alt="Taylor Labs Logo" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Taylor Labs</h1>
                <p className="text-xs text-gray-500">Software Solutions</p>
              </div>
            </div>
          </div>

          {/* Nav Links - Using the original style approach */}
          <nav className="sticky self-start">
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "text-sm transition-colors pl-2 border-l-2",
                      activeSection === section.id
                        ? "text-purple-600 border-purple-600 font-medium"
                        : "text-gray-500 hover:text-purple-600 border-transparent",
                    )}
                  >
                    {section.title}
                  </button>
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
                <a
                  href="https://twitter.com/evantaylor1104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/evan-l-taylor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://buymeacoffee.com/evan.taylor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  aria-label="Buy Me A Coffee"
                >
                  <Coffee size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerticalNav
