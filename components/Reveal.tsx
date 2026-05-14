'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { cn } from '@/utils/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  rotate?: number
  rotateX?: number
  rotateY?: number
  origin?: string
  amount?: number
  once?: boolean
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  distance = 34,
  direction = 'up',
  rotate = 0,
  rotateX = 0,
  rotateY = 0,
  origin = 'center center',
  amount = 0.14,
  once = false,
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  const axisOffset = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }[direction]

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        scale: 0.97,
        rotate,
        rotateX,
        rotateY,
        filter: 'blur(4px)',
        ...axisOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once, amount, margin: '0px 0px -64px 0px' }}
      transition={{
        duration: duration + 0.08,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformPerspective: 1200, transformOrigin: origin }}
    >
      {children}
    </motion.div>
  )
}
