"use client"

import { m, useScroll, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
  position?: "top" | "bottom" | "left" | "right"
  height?: number
  color?: string
}

export function ScrollProgress({
  className,
  position = "top",
  height = 4,
  color = "hsl(var(--primary))"
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const positionStyles = {
    top: {
      top: 0,
      left: 0,
      right: 0,
      height: `${height}px`,
      scaleX,
      transformOrigin: "left"
    },
    bottom: {
      bottom: 0,
      left: 0,
      right: 0,
      height: `${height}px`,
      scaleX,
      transformOrigin: "left"
    },
    left: {
      top: 0,
      left: 0,
      bottom: 0,
      width: `${height}px`,
      scaleY: scaleX,
      transformOrigin: "top"
    },
    right: {
      top: 0,
      right: 0,
      bottom: 0,
      width: `${height}px`,
      scaleY: scaleX,
      transformOrigin: "top"
    }
  }
  
  return (
    <m.div
      className={cn(
        "fixed z-50 will-change-transform",
        className
      )}
      style={{
        ...positionStyles[position],
        backgroundColor: color,
        boxShadow: `0 0 20px ${color}40`
      }}
    />
  )
}

// Section-based scroll progress dots
export function ScrollDots({
  sections,
  currentSection,
  className
}: {
  sections: string[]
  currentSection: number
  className?: string
}) {
  return (
    <div className={cn(
      "fixed right-6 top-1/2 -translate-y-1/2 z-50 space-y-3",
      className
    )}>
      {sections.map((section, index) => (
        <m.button
          key={section}
          className="group relative"
          onClick={() => {
            const element = document.getElementById(section)
            element?.scrollIntoView({ behavior: "smooth" })
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <m.div
            className={cn(
              "w-3 h-3 rounded-full border-2 transition-all duration-300",
              currentSection === index
                ? "border-primary bg-primary"
                : "border-muted-foreground/50 bg-transparent hover:border-primary"
            )}
            animate={{
              scale: currentSection === index ? 1.2 : 1
            }}
          />
          <span className="absolute right-8 top-1/2 -translate-y-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {section}
          </span>
        </m.button>
      ))}
    </div>
  )
}

// Floating scroll indicator
export function ScrollIndicator({ className }: { className?: string }) {
  const { scrollY } = useScroll()
  
  return (
    <m.div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-40",
        "w-6 h-10 rounded-full border-2 border-primary/50",
        "flex items-start justify-center pt-2",
        className
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: 20 }}
      transition={{
        delay: 2,
        duration: 0.5
      }}
      style={{
        opacity: useSpring(
          useTransform(scrollY, [0, 100], [1, 0]),
          { stiffness: 100, damping: 30 }
        )
      }}
    >
      <m.div
        className="w-1 h-3 bg-primary rounded-full"
        animate={{
          y: [0, 12, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </m.div>
  )
}