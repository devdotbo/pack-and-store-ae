"use client"

import { 
  Clock, 
  Thermometer, 
  Shield, 
  Bug, 
  DollarSign, 
  Users,
  Coffee,
  Phone,
  Zap
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/scroll/AnimatedSection"
import { ParallaxBackground } from "@/components/scroll/ParallaxLayer"
import { m, useScroll, useTransform } from "framer-motion"
import { useElementVisibility } from "@/hooks/useScrollAnimation"

const features = [
  {
    icon: Clock,
    title: "24/7 Access",
    admission: "Because life doesn't follow business hours",
    reality: "(and neither do international flights)",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    admission: "Dubai heat melts everything.",
    reality: "Except in here.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Shield,
    title: "Security",
    admission: "We're paranoid about security.",
    reality: "Your stuff benefits.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Bug,
    title: "Pest Control",
    admission: "Bugs hate our place.",
    reality: "So do thieves. You'll love it.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: DollarSign,
    title: "Pricing",
    admission: "Not the cheapest.",
    reality: "Also not the 'Why is my leather jacket moldy?' option",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Users,
    title: "Our Team",
    admission: "Storage nerds",
    reality: "who actually care if grandma's china survives",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
]

export function FeaturesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, isVisible } = useElementVisibility(0.3)
  const { scrollY } = useScroll()
  
  // Background color transition based on scroll
  const bgOpacity = useTransform(
    scrollY,
    [0, 500, 1000],
    [0, 0.3, 0.5]
  )

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <m.div
        className="absolute inset-0 bg-muted"
        style={{ opacity: bgOpacity }}
      />
      
      {/* Parallax Pattern */}
      <ParallaxBackground pattern="dots" speed={0.2} className="opacity-5" />

      <div className="container relative">
        {/* Header with fade in */}
        <AnimatedSection animation="fadeUpScale" className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="mb-4">
            <Coffee className="w-3 h-3 mr-1" />
            The Unfiltered Features List
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-primary">Pack & Store</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what we actually do (minus the marketing fluff)
          </p>
          
          <p className="text-sm text-muted-foreground/70">
            Spoiler: It's mostly common sense, executed obsessively well
          </p>
        </AnimatedSection>

        {/* Features Grid with stagger animation */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
          delayChildren={0.3}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index} animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}>
              <m.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  className={cn(
                    "p-6 transition-all duration-300 border-muted cursor-pointer relative overflow-hidden h-full",
                    "hover:shadow-xl hover:border-primary/30",
                    hoveredIndex === index && "scale-105"
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Animated Background Glow */}
                  <m.div 
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: `radial-gradient(circle at top left, hsl(var(--primary) / 5%) 0%, transparent 70%)`,
                    }}
                  />
                  
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <m.div 
                        className={cn(
                          "p-3 rounded-lg transition-all duration-300",
                          hoveredIndex === index ? "bg-primary/10 text-primary" : cn(feature.bgColor, feature.color)
                        )}
                        animate={{
                          rotate: hoveredIndex === index ? 360 : 0,
                          scale: hoveredIndex === index ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="h-6 w-6" />
                      </m.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <div className="space-y-1">
                          <m.p 
                            className={cn(
                              "text-sm transition-all duration-300",
                              hoveredIndex === index ? "text-muted-foreground/60 line-through" : "text-muted-foreground"
                            )}
                          >
                            {feature.admission}
                          </m.p>
                          <m.p 
                            className={cn(
                              "text-sm font-medium transition-all duration-300",
                              hoveredIndex === index ? "text-primary" : "text-foreground"
                            )}
                            animate={{
                              x: hoveredIndex === index ? 5 : 0
                            }}
                          >
                            {feature.reality}
                          </m.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </m.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA Section with scroll reveal */}
        <AnimatedSection animation="fadeUpScale" delay={0.8} className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span className="text-sm">Still skeptical? Fair enough.</span>
          </div>
          
          <m.div 
            className="bg-card rounded-lg p-6 max-w-2xl mx-auto border shadow-sm"
            whileInView={{ 
              boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-medium mb-2">
              Here's the deal:
            </p>
            <p className="text-muted-foreground mb-4">
              We answer the phone. We show up on time. Your stuff doesn't get damaged.
              <span className="block mt-1">Revolutionary? No. Reliable? Absolutely.</span>
            </p>
            <m.div 
              className="flex items-center justify-center gap-2 text-primary"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Zap className="w-5 h-5" />
              <span className="font-semibold">That's literally it. That's our edge.</span>
            </m.div>
          </m.div>
        </AnimatedSection>
      </div>
    </section>
  )
}