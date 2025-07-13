"use client"

import { useEffect, useState } from "react"
import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion"

interface ScrollState {
  scrollY: MotionValue<number>
  scrollYProgress: MotionValue<number>
  smoothScrollY: MotionValue<number>
  scrollDirection: "up" | "down" | null
  isScrolling: boolean
}

export function useScrollAnimation(): ScrollState {
  const { scrollY, scrollYProgress } = useScroll()
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 })
  
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    
    const updateScrollDirection = () => {
      const currentScrollY = scrollY.get()
      
      if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
        setScrollDirection("up")
      }
      
      setLastScrollY(currentScrollY)
      setIsScrolling(true)
      
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }
    
    const unsubscribe = scrollY.on("change", updateScrollDirection)
    
    return () => {
      unsubscribe()
      clearTimeout(scrollTimeout)
    }
  }, [scrollY, lastScrollY])
  
  return {
    scrollY,
    scrollYProgress,
    smoothScrollY,
    scrollDirection,
    isScrolling
  }
}

// Hook for parallax effects
export function useParallax(distance: number = 100) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, distance])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  
  return smoothY
}

// Hook for element visibility
export function useElementVisibility(threshold: number = 0.5) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)
  
  useEffect(() => {
    if (!ref) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold }
    )
    
    observer.observe(ref)
    
    return () => {
      observer.disconnect()
    }
  }, [ref, threshold])
  
  return { ref: setRef, isVisible }
}

// Hook for scroll progress within a section
export function useSectionScrollProgress(offset: number = 0) {
  const { scrollY } = useScroll()
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    if (!sectionRef) return
    
    const updateProgress = (latest: number) => {
      const rect = sectionRef.getBoundingClientRect()
      const sectionTop = rect.top + latest
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight
      
      const start = sectionTop - windowHeight + offset
      const end = sectionTop + sectionHeight - offset
      
      const currentProgress = (latest - start) / (end - start)
      setProgress(Math.max(0, Math.min(1, currentProgress)))
    }
    
    const unsubscribe = scrollY.on("change", updateProgress)
    updateProgress(scrollY.get())
    
    return () => unsubscribe()
  }, [sectionRef, scrollY, offset])
  
  return { ref: setSectionRef, progress }
}