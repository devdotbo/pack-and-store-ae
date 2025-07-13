import { Variants } from "framer-motion"

// Animation variants for different scroll effects
export const scrollAnimations = {
  // Fade up animation
  fadeUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  // Fade up with scale
  fadeUpScale: {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.7, ease: "easeOut" }
  },
  
  // Slide in from left
  slideInLeft: {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  
  // Slide in from right
  slideInRight: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  
  // Scale in with bounce
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic bezier for bounce
    }
  },
  
  // Rotate in
  rotateIn: {
    initial: { opacity: 0, rotate: -10, scale: 0.9 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  // Blur in
  blurIn: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

// Stagger children animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Fast stagger for lists
export const fastStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

// Viewport settings for scroll triggers
export const viewportSettings = {
  once: true, // Animate only once
  margin: "-100px", // Start animation 100px before element is in view
  amount: 0.2 // Trigger when 20% of element is visible
}

// Parallax speed presets
export const parallaxSpeeds = {
  slow: 0.5,
  medium: 0.75,
  fast: 1.25,
  reverse: -0.5
}

// Custom easing functions
export const customEasings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.68, -0.6, 0.32, 1.6]
}

// Scroll-based color transitions
export const scrollColorTransitions = {
  heroToFeatures: {
    from: "hsl(var(--background))",
    to: "hsl(var(--muted) / 0.3)"
  },
  featuresToServices: {
    from: "hsl(var(--muted) / 0.3)",
    to: "hsl(var(--background))"
  },
  servicesToQuote: {
    from: "hsl(var(--background))",
    to: "hsl(var(--primary) / 0.05)"
  }
}