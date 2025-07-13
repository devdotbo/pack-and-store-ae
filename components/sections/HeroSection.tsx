"use client"

import Link from "next/link"
import { ArrowRight, Shield, Clock, Key, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TypewriterHero } from "@/components/ui/typewriter"
import { useState } from "react"
import { cn } from "@/lib/utils"

const pratfallPhrases = [
  {
    admission: "Storage is boring.",
    solution: "Your memories aren't."
  },
  {
    admission: "We're expensive closets.",
    solution: "That keep your wedding dress perfect."
  },
  {
    admission: "Another Dubai storage company?",
    solution: "The weird ones who actually care."
  },
  {
    admission: "Storage units are ugly boxes.",
    solution: "Until you need that passport at midnight."
  },
  {
    admission: "Let's be honest, it's just space.",
    solution: "Climate-controlled, pest-free, secured space."
  }
]

export function HeroSection() {
  const [bgMood, setBgMood] = useState<"neutral" | "warm">("neutral")

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className={cn(
            "absolute inset-0 z-10 transition-all duration-1000",
            bgMood === "warm" 
              ? "bg-gradient-to-br from-background via-primary/5 to-background" 
              : "bg-gradient-to-br from-muted/30 via-background to-background"
          )}
        />
        <div className="w-full h-full bg-muted flex items-center justify-center relative">
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 70px)`,
            }} />
          </div>
          <p className="text-4xl font-bold text-muted-foreground/10 text-center px-4 select-none">
            Pack & Store Dubai
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 py-20">
        <div className="max-w-3xl space-y-8">
          {/* Trust Badge with Pratfall */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="text-xs border-muted-foreground/50">
              <AlertCircle className="w-3 h-3 mr-1" />
              The Honest Truth About Storage
            </Badge>
          </div>

          {/* Typewriter Headline */}
          <div className="space-y-4">
            <div className="h-20 flex items-center">
              <TypewriterHero
                phrases={pratfallPhrases}
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                typingSpeed={60}
                deletingSpeed={40}
                pauseTime={2500}
                admissionClassName="text-muted-foreground"
                solutionClassName="text-primary"
                containerClassName="p-2 rounded-lg"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Professional Storage & Packing{" "}
              <span className="text-primary">That Actually Gets It</span>
            </h2>
          </div>

          {/* Honest Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            No false promises. Just climate-controlled units, 24/7 access, and humans who answer the phone. 
            <span className="block mt-2 text-base">
              (Yes, actual humans. We tested. They're real.)
            </span>
          </p>

          {/* Trust Elements with Personality */}
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="text-xs">
              <Shield className="w-3 h-3 mr-1" />
              Paranoid About Security
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Clock className="w-3 h-3 mr-1" />
              3AM Access? No Problem
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Key className="w-3 h-3 mr-1" />
              Your Stuff, Your Schedule
            </Badge>
          </div>

          {/* CTAs with Personality */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild className="text-base group">
              <Link href="#quote">
                Get a Stupidly Detailed Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="/storage-sizes">
                See Our Obsessively Organized Units
              </Link>
            </Button>
          </div>

          {/* Honest Trust Elements */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">Actually Available Now</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">1000+</span>
              <span className="text-muted-foreground"> Customers</span>
              <span className="text-xs text-muted-foreground block">(Who Actually Like Us)</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">5 Years</span>
              <span className="text-muted-foreground"> of Being Storage Nerds</span>
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <p className="text-xs text-muted-foreground/70 pt-4 max-w-xl">
            * We're required to say "subject to availability" but honestly, we have tons of space. 
            Call us. We're probably just drinking coffee and organizing things.
          </p>
        </div>
      </div>
    </section>
  )
}