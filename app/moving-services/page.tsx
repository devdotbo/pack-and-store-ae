import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Home, Building, Globe, Package, Shield, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Moving Services | Pack And Store",
  description: "Expert moving and relocation services in Dubai. Residential, commercial, and international moves with packing, storage, and unpacking services.",
}

export default function MovingServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge className="mb-4" variant="default">
          #1 Rated Movers in Dubai
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Professional Moving Services
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Stress-free moving with our expert team. From packing to unpacking, 
          we handle every detail of your residential or commercial move.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="text-lg">
            Get Free Moving Quote
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Book Video Survey
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Our Moving Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Trained, uniformed professionals who treat your belongings with care
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Fully Insured</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive insurance coverage for your complete peace of mind
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>On-Time Guarantee</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Punctual service with real-time tracking of your move
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Package className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Premium Packing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                High-quality materials and expert packing techniques
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Types */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Complete Moving Solutions</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="border-2">
            <CardHeader>
              <Home className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">Residential Moving</CardTitle>
              <CardDescription>Home and apartment relocations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Full-service packing & unpacking
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Furniture disassembly & assembly
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Fragile item specialists
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Same-day & next-day options
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Storage solutions available
                </li>
              </ul>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="text-2xl font-bold">AED 799</p>
              </div>
              <Button className="w-full">Get Quote</Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardHeader>
              <Badge className="mb-2 w-fit">Most Popular</Badge>
              <Building className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">Commercial Moving</CardTitle>
              <CardDescription>Office and business relocations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Minimal business disruption
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  IT equipment specialists
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Weekend & after-hours moves
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Project management
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Employee relocation support
                </li>
              </ul>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">Custom pricing</p>
                <p className="text-2xl font-bold">Contact Us</p>
              </div>
              <Button className="w-full">Schedule Consultation</Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Globe className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">International Moving</CardTitle>
              <CardDescription>Global relocation services</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Customs clearance assistance
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Sea & air freight options
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Door-to-door service
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Pet relocation services
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Global partner network
                </li>
              </ul>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">Get custom quote</p>
                <p className="text-2xl font-bold">International</p>
              </div>
              <Button className="w-full">Request Quote</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Moving Process */}
      <section className="mb-16 rounded-lg bg-muted/50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Simple Moving Process</h2>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              1
            </div>
            <h3 className="mb-2 font-semibold">Book Survey</h3>
            <p className="text-sm text-muted-foreground">
              Free home assessment
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              2
            </div>
            <h3 className="mb-2 font-semibold">Get Quote</h3>
            <p className="text-sm text-muted-foreground">
              Transparent pricing
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              3
            </div>
            <h3 className="mb-2 font-semibold">Pack & Load</h3>
            <p className="text-sm text-muted-foreground">
              Professional packing
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              4
            </div>
            <h3 className="mb-2 font-semibold">Transport</h3>
            <p className="text-sm text-muted-foreground">
              Safe delivery
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              5
            </div>
            <h3 className="mb-2 font-semibold">Unpack</h3>
            <p className="text-sm text-muted-foreground">
              Setup complete
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Additional Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Packing Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Professional packing materials</li>
                <li>• Fragile item specialists</li>
                <li>• Custom crating for valuables</li>
                <li>• Labeling and inventory</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Storage Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Short & long-term options</li>
                <li>• Climate-controlled units</li>
                <li>• Secure facilities</li>
                <li>• Flexible access</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Specialty Moving</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Piano & fine art moving</li>
                <li>• Antique handling</li>
                <li>• Vehicle transportation</li>
                <li>• Safe & equipment moving</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Handyman Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Furniture assembly</li>
                <li>• TV mounting</li>
                <li>• Picture hanging</li>
                <li>• Basic installations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mb-16 rounded-lg bg-primary/10 p-8">
        <div className="text-center">
          <p className="mb-4 text-lg italic">
            "Pack And Store made our office relocation seamless. They worked over the weekend, 
            and we were operational on Monday morning without any issues. Highly professional!"
          </p>
          <p className="font-semibold">Ahmed Hassan</p>
          <p className="text-sm text-muted-foreground">CEO, Tech Solutions Dubai</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-primary p-8 text-center text-primary-foreground">
        <h2 className="mb-4 text-3xl font-bold">Ready to Move? Let's Get Started!</h2>
        <p className="mb-6 text-lg">
          Get your free moving quote today and experience stress-free relocation
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" variant="secondary">
            Get Instant Quote
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Call: +971 4 123 4567
          </Button>
        </div>
      </section>
    </div>
  )
}