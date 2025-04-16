"use client"

import { useRef, useState, useEffect } from "react"

export function useMagneticButton(strength = 30, distance = 100) {
  const buttonRef = useRef<HTMLButtonElement>(null)
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
      
      if (absoluteDistance < distance) {
        // Normalize and apply strength
        const magnetX = (distanceX / distance) * strength
        const magnetY = (distanceY / distance) * strength
        
        setPosition({ x: magnetX, y: magnetY })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }
    
    const handleMouseLeave = () => {
      // Smoothly return to original position
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
  }, [strength, distance])
  
  return { buttonRef, position }
} 