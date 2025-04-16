"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface TextScrambleProps {
  text: string
  className?: string
  scrambleSpeed?: number
  delay?: number
}

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  scrambleSpeed = 50,
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState('')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const scrambleChars = '!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz'
  
  useEffect(() => {
    let currentIndex = 0
    let iterations = 0
    const maxIterations = 6
    
    const scrambleInterval = () => {
      intervalRef.current = setTimeout(() => {
        if (currentIndex <= text.length) {
          const scrambled = text.substring(0, currentIndex)
            + Array.from({length: text.length - currentIndex}, () => 
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
            ).join('')

          setDisplayText(scrambled)
          
          // Once we've scrambled enough for this character, move to next
          iterations++
          if (iterations >= maxIterations) {
            iterations = 0
            currentIndex++
          }
          
          scrambleInterval()
        } else {
          setDisplayText(text)
        }
      }, scrambleSpeed)
    }
    
    // Initial delay before starting animation
    const delayTimeout = setTimeout(() => {
      scrambleInterval()
    }, delay)
    
    return () => {
      clearTimeout(delayTimeout)
      if (intervalRef.current) clearTimeout(intervalRef.current)
    }
  }, [text, scrambleSpeed, delay])
  
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  )
} 