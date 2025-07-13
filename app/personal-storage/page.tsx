import { Metadata } from "next"
import Link from "next/link"
import { Home, Shield, DollarSign, Package, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Personal Storage Solutions | Pack & Store Dubai",
  description: "Secure personal storage units in Dubai. From small lockers to large units, find the perfect storage space for your belongings with 24/7 access.",
}

const benefits = [
  "24/7 access to your belongings",
  "Climate-controlled units",
  "State-of-the-art security systems",
  "Flexible rental terms",
  "Free use of moving carts",
  "On-site packing supplies",
  "Professional packing assistance",
  "Insurance options available",
]

const unitSizes = [
  {
    size: "Small",
    dimensions: "5x5 ft",
    sqft: "25",
    ideal: "Seasonal items, boxes, small furniture",
    items: ["20-30 boxes", "Bicycle", "Seasonal decorations", "Small furniture items"],
    price: "From AED 199/month",
  },
  {
    size: "Medium",
    dimensions: "10x10 ft",
    sqft: "100",
    ideal: "1-bedroom apartment contents",
    items: ["Furniture set", "Appliances", "50-60 boxes", "Motorcycle"],
    price: "From AED 599/month",
  },
  {
    size: "Large",
    dimensions: "10x20 ft",
    sqft: "200",
    ideal: "2-3 bedroom home contents",
    items: ["Full home furniture", "Large appliances", "100+ boxes", "Vehicle"],
    price: "From AED 999/month",
  },
  {
    size: "Extra Large",
    dimensions: "10x30 ft",
    sqft: "300",
    ideal: "4+ bedroom home or vehicle storage",
    items: ["Large home contents", "Multiple vehicles", "Commercial equipment"],
    price: "From AED 1,499/month",
  },
]

export default function PersonalStoragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Home className="w-3 h-3 mr-1" />
              Personal Storage
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Personal Storage <span className="text-primary">Solutions in Dubai</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're decluttering, renovating, or between moves, our personal storage units 
              provide the perfect solution for keeping your belongings safe and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/storage-sizes">
                  Size Calculator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our <span className="text-primary">Personal Storage</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our state-of-the-art facility offers everything you need for a hassle-free 
                storage experience. From the moment you arrive, you'll appreciate our 
                commitment to security, cleanliness, and customer service.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <p className="text-center text-muted-foreground">
                Clean, organized storage facility interior showing various unit sizes with proper lighting and security features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Sizes Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect <span className="text-primary">Storage Size</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From small lockers to large units, we have the right size for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unitSizes.map((unit, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {unit.size}
                    <Badge variant="outline">{unit.sqft} sq ft</Badge>
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {unit.dimensions}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Ideal for:</p>
                    <p className="text-sm text-muted-foreground">{unit.ideal}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Can store:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {unit.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Package className="h-3 w-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-lg font-semibold">{unit.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Not sure what size you need? Our storage experts can help!
            </p>
            <Button asChild>
              <Link href="/#quote">
                Get Storage Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Storage <span className="text-primary">Features</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Maximum Security</h3>
                <p className="text-muted-foreground">
                  Individual unit alarms, 24/7 CCTV surveillance, and controlled access ensure your items are always protected
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
                <p className="text-muted-foreground">
                  Drive right up to your unit for easy loading and unloading. Wide corridors and freight elevators available
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
                <p className="text-muted-foreground">
                  No long-term contracts required. Rent month-to-month and upgrade or downsize as your needs change
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Store Your Belongings?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get started today with our easy rental process. Reserve your unit online or visit our facility for a tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#quote">
                Reserve Your Unit
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:+971557198055">
                Call: 055 719 8055
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}