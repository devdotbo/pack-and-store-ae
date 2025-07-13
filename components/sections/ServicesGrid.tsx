"use client"

import Link from "next/link"
import { Home, Building, Globe, Car, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/scroll/AnimatedSection"
import { ParallaxLayer } from "@/components/scroll/ParallaxLayer"
import { m } from "framer-motion"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Home,
    title: "Personal Storage",
    description: "Safe and secure storage for your household items, furniture, and personal belongings",
    href: "/personal-storage",
    imagePlaceholder: "Organized personal storage unit with household items",
    features: ["Various unit sizes", "Month-to-month rental", "Easy access"],
  },
  {
    icon: Building,
    title: "Business Storage",
    description: "Flexible warehouse solutions for inventory, equipment, and business documents",
    href: "/business-storage",
    imagePlaceholder: "Business inventory in warehouse setting",
    features: ["Scalable space", "Bulk storage", "Logistics support"],
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Worldwide shipping and freight forwarding services with real-time tracking",
    href: "/document-storage",
    imagePlaceholder: "Global shipping network with planes and cargo containers",
    features: ["Air & sea freight", "Door-to-door delivery", "Custom clearance"],
  },
  {
    icon: Car,
    title: "Vehicle Storage",
    description: "Indoor and outdoor storage options for cars, motorcycles, and boats",
    href: "/vehicle-storage",
    imagePlaceholder: "Indoor vehicle storage facility with cars",
    features: ["Covered parking", "24/7 security", "Battery maintenance"],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <ParallaxLayer speed={-0.1} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </ParallaxLayer>

      <div className="container relative">
        {/* Header with animation */}
        <AnimatedSection animation="fadeUpScale" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Storage <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whatever your storage needs, we have the perfect solution for you
          </p>
        </AnimatedSection>

        {/* Services Grid with stagger */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.15}
          delayChildren={0.2}
        >
          {services.map((service, index) => (
            <StaggerItem key={index} animation="scaleIn">
              <m.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {/* Animated gradient overlay */}
                    <m.div 
                      className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Parallax image placeholder */}
                    <ParallaxLayer speed={0.2} className="absolute inset-0">
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <p className="text-sm text-center text-muted-foreground/60 font-medium">
                          {service.imagePlaceholder}
                        </p>
                      </div>
                    </ParallaxLayer>
                    
                    {/* Icon with animation */}
                    <div className="absolute top-4 left-4 z-20">
                      <m.div 
                        className="p-2 rounded-lg bg-primary/90 text-primary-foreground"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="h-5 w-5" />
                      </m.div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <m.li 
                          key={idx} 
                          className="text-sm text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <m.div 
                            className="w-1 h-1 bg-primary rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.2
                            }}
                          />
                          {feature}
                        </m.li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </m.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom wave decoration */}
        <AnimatedSection animation="fadeUp" delay={0.8} className="mt-12">
          <m.div 
            className="h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </AnimatedSection>
      </div>
    </section>
  )
}