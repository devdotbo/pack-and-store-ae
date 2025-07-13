"use client"

import { ReactNode } from "react"
import { LazyMotion, domAnimation } from "framer-motion"

interface ScrollAnimationProviderProps {
  children: ReactNode
}

export function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}