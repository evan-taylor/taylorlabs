"use client"

import { ReactNode, useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxContainerProps {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  
  const { scrollY } = useScroll()
  
  // Update element position values on mount and resize
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    const updateElementPosition = () => {
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
      setClientHeight(window.innerHeight)
    }
    
    updateElementPosition()
    window.addEventListener('resize', updateElementPosition)
    
    return () => {
      window.removeEventListener('resize', updateElementPosition)
    }
  }, [])
  
  // Calculate range based on element position and screen height
  const initialOffset = elementTop - clientHeight
  const finalOffset = elementTop + (ref.current?.offsetHeight || 0)
  
  // Create a transform motion value based on scroll position
  const transformValue = useTransform(
    scrollY,
    [initialOffset, finalOffset],
    direction === 'up' ? [speed * 100, -speed * 100] :
    direction === 'down' ? [-speed * 100, speed * 100] :
    direction === 'left' ? [speed * 100, -speed * 100] :
    [-speed * 100, speed * 100]
  )
  
  // Choose Y or X based on direction
  const isVertical = direction === 'up' || direction === 'down'
  const motionProps = isVertical 
    ? { y: transformValue } 
    : { x: transformValue }
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={motionProps}
        transition={{ type: 'spring', stiffness: 400, damping: 90 }}
      >
        {children}
      </motion.div>
    </div>
  )
} 