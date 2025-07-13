import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Shield, Clock, Zap, Package, FileText, Truck, Key } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Storage Solutions | Pack And Store",
  description: "Secure, flexible business storage solutions in Dubai. Store inventory, documents, equipment, and more with 24/7 access and climate control.",
}

export default function BusinessStoragePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge className="mb-4" variant="default">
          Trusted by 500+ Businesses
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Business Storage Solutions
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Flexible, secure storage for your business needs. From inventory to archives, 
          we provide scalable solutions that grow with your company.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="text-lg">
            Get Business Quote
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Schedule Site Visit
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Why Businesses Choose Us</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Building2 className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Scalable Space</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                From 10 to 1000+ sq ft, expand or downsize as your business needs change
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>24/7 Access</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your inventory anytime with our secure entry system
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Enterprise Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                CCTV, biometric access, and 24/7 monitoring for complete peace of mind
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Fast Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Loading docks and forklifts available for quick inventory management
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Tailored Business Solutions</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="border-2">
            <CardHeader>
              <Package className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">Inventory Storage</CardTitle>
              <CardDescription>Perfect for e-commerce and retail businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Racking and shelving systems
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Inventory management support
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Order fulfillment space
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Climate-controlled units
                </li>
              </ul>
              <Button className="mt-6 w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <FileText className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">Archive Storage</CardTitle>
              <CardDescription>Secure document and records management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Fire-resistant storage
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Document indexing available
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Retrieval services
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Compliance support
                </li>
              </ul>
              <Button className="mt-6 w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Truck className="mb-2 h-10 w-10 text-primary" />
              <CardTitle className="text-2xl">Equipment Storage</CardTitle>
              <CardDescription>For contractors and service businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Large unit availability
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Drive-up access
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Power outlets available
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Flexible lease terms
                </li>
              </ul>
              <Button className="mt-6 w-full">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-16 rounded-lg bg-muted/50 p-8">
        <h2 className="mb-6 text-center text-3xl font-bold">Business Support Services</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3">
            <Key className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold">Receiving Services</p>
              <p className="text-sm text-muted-foreground">Accept deliveries on your behalf</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold">Distribution Support</p>
              <p className="text-sm text-muted-foreground">Pick, pack, and ship services</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold">Insurance Options</p>
              <p className="text-sm text-muted-foreground">Comprehensive coverage available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-primary p-8 text-center text-primary-foreground">
        <h2 className="mb-4 text-3xl font-bold">Ready to Optimize Your Business Storage?</h2>
        <p className="mb-6 text-lg">
          Get a customized solution and competitive pricing for your business needs
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" variant="secondary">
            Request Custom Quote
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Call: +971 4 123 4567
          </Button>
        </div>
      </section>
    </div>
  )
}