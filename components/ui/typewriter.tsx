"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterPhrase {
  admission: string
  solution: string
}

interface TypewriterProps {
  phrases: TypewriterPhrase[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
  admissionClassName?: string
  solutionClassName?: string
  cursorClassName?: string
  onPhraseComplete?: (index: number) => void
}

export function Typewriter({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseTime = 2000,
  className,
  admissionClassName = "text-muted-foreground",
  solutionClassName = "text-primary font-bold",
  cursorClassName = "animate-pulse",
  onPhraseComplete,
}: TypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showAdmission, setShowAdmission] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    const targetText = showAdmission ? currentPhrase.admission : currentPhrase.solution

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        if (!showAdmission) {
          // Move to next phrase
          setIsDeleting(true)
        } else {
          // Switch to solution
          setIsDeleting(true)
        }
      }, pauseTime)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (currentText.length === 0) {
        setIsDeleting(false)
        if (!showAdmission) {
          // Move to next phrase
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          setShowAdmission(true)
        } else {
          // Switch to solution
          setShowAdmission(false)
        }
      } else {
        const deleteTimeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(deleteTimeout)
      }
    } else {
      if (currentText === targetText) {
        setIsPaused(true)
        if (!showAdmission && onPhraseComplete) {
          onPhraseComplete(currentPhraseIndex)
        }
      } else {
        const typeTimeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(typeTimeout)
      }
    }
  }, [
    currentText,
    currentPhraseIndex,
    phrases,
    showAdmission,
    isDeleting,
    isPaused,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    onPhraseComplete,
  ])

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span
        className={cn(
          "transition-all duration-300",
          showAdmission ? admissionClassName : solutionClassName
        )}
      >
        {currentText}
      </span>
      <span
        className={cn(
          "inline-block w-0.5 h-6 bg-current ml-1",
          cursorClassName
        )}
      />
    </div>
  )
}

// Enhanced version with color background transitions
export function TypewriterHero({
  phrases,
  className,
  containerClassName,
  ...props
}: TypewriterProps & { containerClassName?: string }) {
  const [bgIntensity, setBgIntensity] = useState(0)
  const [currentPhaseType, setCurrentPhaseType] = useState<"admission" | "solution">("admission")

  const handlePhraseComplete = (index: number) => {
    // Trigger background animation on solution complete
    setBgIntensity(100)
    setTimeout(() => setBgIntensity(0), 500)
  }

  useEffect(() => {
    // Track current phase type for background effects
    const interval = setInterval(() => {
      setCurrentPhaseType((prev) => (prev === "admission" ? "solution" : "admission"))
    }, 4000) // Rough estimate of phase duration

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        "relative transition-all duration-1000",
        containerClassName,
        currentPhaseType === "admission" ? "bg-background/95" : "bg-background"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-primary/10 transition-opacity duration-500",
          bgIntensity > 0 ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(circle at center, hsl(var(--primary) / ${bgIntensity}%) 0%, transparent 70%)`,
        }}
      />
      <Typewriter
        phrases={phrases}
        className={className}
        onPhraseComplete={handlePhraseComplete}
        {...props}
      />
    </div>
  )
}