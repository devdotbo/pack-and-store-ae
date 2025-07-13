"use client"

import { ReactNode } from "react"
import { m, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxLayerProps {
  children: ReactNode
  className?: string
  speed?: number // Positive = slower, Negative = faster/reverse
  offset?: number[] // [start, end] offset values
  opacity?: boolean // Fade in/out based on scroll
  rotate?: boolean // Rotate based on scroll
  scale?: boolean // Scale based on scroll
}

export function ParallaxLayer({
  children,
  className,
  speed = 0.5,
  offset = [0, 200],
  opacity = false,
  rotate = false,
  scale = false
}: ParallaxLayerProps) {
  const { scrollY } = useScroll()
  
  // Calculate parallax offset
  const y = useTransform(
    scrollY,
    [0, 1000],
    [offset[0] * speed, offset[1] * speed]
  )
  
  // Smooth the motion
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  // Optional opacity effect
  const opacityValue = useTransform(
    scrollY,
    [0, 300, 600],
    opacity ? [1, 0.5, 0] : [1, 1, 1]
  )
  
  // Optional rotation effect
  const rotateValue = useTransform(
    scrollY,
    [0, 1000],
    rotate ? [0, 360] : [0, 0]
  )
  
  // Optional scale effect
  const scaleValue = useTransform(
    scrollY,
    [0, 300, 600],
    scale ? [1, 1.1, 1.2] : [1, 1, 1]
  )
  
  return (
    <m.div
      className={cn("will-change-transform", className)}
      style={{
        y: smoothY,
        opacity: opacityValue,
        rotate: rotateValue,
        scale: scaleValue
      }}
    >
      {children}
    </m.div>
  )
}

// Specialized background parallax layer
export function ParallaxBackground({
  className,
  pattern = "dots",
  speed = 0.3
}: {
  className?: string
  pattern?: "dots" | "grid" | "diagonal" | "gradient"
  speed?: number
}) {
  const patterns = {
    dots: {
      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    },
    grid: {
      backgroundImage: `
        linear-gradient(hsla(var(--primary), 0.1) 1px, transparent 1px),
        linear-gradient(90deg, hsla(var(--primary), 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px'
    },
    diagonal: {
      backgroundImage: `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 35px,
        hsla(var(--primary), 0.05) 35px,
        hsla(var(--primary), 0.05) 70px
      )`
    },
    gradient: {
      backgroundImage: `radial-gradient(
        circle at center,
        hsla(var(--primary), 0.1) 0%,
        transparent 70%
      )`
    }
  }
  
  return (
    <ParallaxLayer
      className={cn(
        "absolute inset-0 opacity-10",
        className
      )}
      speed={speed}
      offset={[0, 300]}
    >
      <div 
        className="absolute inset-0"
        style={patterns[pattern]}
      />
    </ParallaxLayer>
  )
}

// Text parallax with split animation
export function ParallaxText({
  text,
  className,
  speed = 0.5,
  stagger = true
}: {
  text: string
  className?: string
  speed?: number
  stagger?: boolean
}) {
  const words = text.split(" ")
  
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {words.map((word, index) => (
        <ParallaxLayer
          key={index}
          speed={stagger ? speed * (1 + index * 0.1) : speed}
          offset={[0, 100]}
        >
          <span>{word}</span>
        </ParallaxLayer>
      ))}
    </div>
  )
}