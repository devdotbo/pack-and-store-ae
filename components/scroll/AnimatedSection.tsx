"use client"

import { ReactNode } from "react"
import { m } from "framer-motion"
import { cn } from "@/lib/utils"
import { viewportSettings } from "@/utils/scrollAnimations"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeUp" | "fadeUpScale" | "slideInLeft" | "slideInRight" | "scaleIn" | "rotateIn" | "blurIn"
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  custom?: any
}

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 }
  },
  fadeUpScale: {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 }
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -10, scale: 0.9 },
    whileInView: { opacity: 1, rotate: 0, scale: 1 }
  },
  blurIn: {
    initial: { opacity: 0, filter: "blur(10px)" },
    whileInView: { opacity: 1, filter: "blur(0px)" }
  }
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  custom
}: AnimatedSectionProps) {
  const selectedAnimation = animations[animation]
  
  return (
    <m.div
      className={cn(className)}
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once, amount, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
        ...custom
      }}
    >
      {children}
    </m.div>
  )
}

// Stagger container for animating children in sequence
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delayChildren = 0.2
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
}) {
  return (
    <m.div
      className={cn(className)}
      initial="initial"
      whileInView="animate"
      viewport={viewportSettings}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      }}
    >
      {children}
    </m.div>
  )
}

// Individual stagger item
export function StaggerItem({
  children,
  className,
  animation = "fadeUp"
}: {
  children: ReactNode
  className?: string
  animation?: keyof typeof animations
}) {
  const selectedAnimation = animations[animation]
  
  return (
    <m.div
      className={cn(className)}
      variants={{
        initial: selectedAnimation.initial,
        animate: selectedAnimation.whileInView
      }}
      transition={{
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </m.div>
  )
}