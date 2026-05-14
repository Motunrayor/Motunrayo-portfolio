'use client'

import { ReactNode, useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

import { cn } from '@/utils/cn'

interface InteractiveTiltProps {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export const InteractiveTilt = ({ children, className, maxTilt = 7 }: InteractiveTiltProps) => {
  const prefersReducedMotion = useReducedMotion()
  const [canHover, setCanHover] = useState(false)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.6 })
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.6 })

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateCanHover = () => setCanHover(media.matches)

    updateCanHover()
    media.addEventListener('change', updateCanHover)
    return () => media.removeEventListener('change', updateCanHover)
  }, [])

  if (prefersReducedMotion || !canHover) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width
        const y = (event.clientY - bounds.top) / bounds.height

        rotateY.set((x - 0.5) * maxTilt * 2)
        rotateX.set((0.5 - y) * maxTilt * 2)
      }}
      onMouseLeave={() => {
        rotateX.set(0)
        rotateY.set(0)
      }}
      onBlur={() => {
        rotateX.set(0)
        rotateY.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
