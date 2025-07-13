import Link from "next/link"
import { ArrowRight, Shield, Clock, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 z-10" />
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <p className="text-4xl font-bold text-muted-foreground/20 text-center px-4">
            Modern warehouse facility interior with organized storage units
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 py-20">
        <div className="max-w-2xl space-y-6">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              <Shield className="w-3 h-3 mr-1" />
              Secure Storage
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Clock className="w-3 h-3 mr-1" />
              24/7 Access
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <Key className="w-3 h-3 mr-1" />
              Climate Controlled
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Secure Storage & Professional{" "}
            <span className="text-primary">Packing Services</span> in Dubai
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground">
            Your trusted partner for reliable and convenient storage solutions. 
            From personal belongings to business inventory, we keep your items safe and accessible.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild className="text-base">
              <Link href="#quote">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="/storage-sizes">
                View Storage Sizes
              </Link>
            </Button>
          </div>

          {/* Additional Trust Elements */}
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available Now</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">1000+</span> Happy Customers
            </div>
            <div>
              <span className="font-semibold text-foreground">5 Years</span> in Business
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}