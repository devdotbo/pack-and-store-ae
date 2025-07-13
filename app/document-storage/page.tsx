import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plane, Ship, Package, Globe, Shield, Clock, Calculator, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "International Shipping Services | Pack And Store Dubai",
  description: "Professional international shipping and freight forwarding services from Dubai. Get instant quotes for air, sea, and land freight. Door-to-door delivery worldwide.",
}

export default function InternationalShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge className="mb-4" variant="default">
          <Globe className="mr-1 h-3 w-3" />
          Worldwide Delivery
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          International Shipping Services
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Ship anything, anywhere. From documents to cargo containers, we provide reliable 
          international shipping solutions with real-time tracking and competitive rates.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="text-lg" asChild>
            <a href="#shipping-calculator">
              Get Instant Quote
              <Calculator className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg" asChild>
            <a href="https://wa.me/+971557198055?text=Hi%2C%20I%20need%20a%20quote%20for%20international%20shipping" target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Quote
            </a>
          </Button>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Shipping Methods</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Plane className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Air Freight</CardTitle>
              <CardDescription>Fast delivery for urgent shipments</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Express delivery (1-3 days)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Door-to-door service
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Real-time tracking
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Ideal for high-value items
                </li>
              </ul>
              <div className="mt-4">
                <p className="text-lg font-semibold">From AED 150/kg</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <Badge className="mb-2 w-fit">Most Popular</Badge>
              <Ship className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Sea Freight</CardTitle>
              <CardDescription>Cost-effective for large shipments</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Economy shipping (15-45 days)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Full container (FCL) or shared (LCL)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  All cargo types accepted
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Best value for money
                </li>
              </ul>
              <div className="mt-4">
                <p className="text-lg font-semibold">From AED 50/CBM</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Package className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Land Freight</CardTitle>
              <CardDescription>Regional deliveries by road</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  GCC countries delivery
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Flexible scheduling
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Temperature-controlled options
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Customs clearance included
                </li>
              </ul>
              <div className="mt-4">
                <p className="text-lg font-semibold">From AED 100/CBM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shipping Calculator */}
      <section id="shipping-calculator" className="mb-16 rounded-lg bg-muted/50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Quick Shipping Quote</h2>
        <Card className="mx-auto max-w-2xl">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="from">From Country</Label>
                  <Select defaultValue="ae">
                    <SelectTrigger id="from">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ae">United Arab Emirates</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="to">To Country</Label>
                  <Select>
                    <SelectTrigger id="to">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="pk">Pakistan</SelectItem>
                      <SelectItem value="ph">Philippines</SelectItem>
                      <SelectItem value="eg">Egypt</SelectItem>
                      <SelectItem value="sa">Saudi Arabia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="shipment-type">Shipment Type</Label>
                <Select>
                  <SelectTrigger id="shipment-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="documents">Documents</SelectItem>
                    <SelectItem value="parcel">Parcel (&lt; 30kg)</SelectItem>
                    <SelectItem value="cargo">Cargo (&gt; 30kg)</SelectItem>
                    <SelectItem value="container">Full Container</SelectItem>
                    <SelectItem value="vehicle">Vehicle</SelectItem>
                    <SelectItem value="household">Household Goods</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input id="weight" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="length">Length (cm)</Label>
                  <Input id="length" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="width">Width (cm)</Label>
                  <Input id="width" type="number" placeholder="0" />
                </div>
              </div>

              <div>
                <Label htmlFor="service">Preferred Service</Label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="express">Express (1-3 days)</SelectItem>
                    <SelectItem value="standard">Standard (5-10 days)</SelectItem>
                    <SelectItem value="economy">Economy (15-45 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="button" className="w-full" size="lg" asChild>
                <a href="https://wa.me/+971557198055?text=Hi%2C%20I%20need%20a%20shipping%20quote%20for%3A%0A%0AFrom%3A%20UAE%0ATo%3A%20%5BCountry%5D%0AType%3A%20%5BShipment%20Type%5D%0AWeight%3A%20%5BWeight%5D%20kg%0ADimensions%3A%20%5BL%20x%20W%20x%20H%5D%20cm%0AService%3A%20%5BPreferred%20Service%5D" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Quote on WhatsApp
                </a>
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Services Features */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Our Shipping Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <Shield className="mb-2 h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Fully Insured</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All shipments covered with comprehensive insurance
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <Clock className="mb-2 h-6 w-6 text-primary" />
              <CardTitle className="text-lg">On-Time Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                99% on-time delivery rate with tracking updates
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <Globe className="mb-2 h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Global Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Partners in 200+ countries for seamless delivery
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <Package className="mb-2 h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Custom Clearance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Expert handling of all documentation and duties
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Popular Shipping Routes from Dubai</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { route: "Dubai to USA", time: "2-5 days", from: "AED 180/kg" },
            { route: "Dubai to UK", time: "2-4 days", from: "AED 160/kg" },
            { route: "Dubai to India", time: "1-3 days", from: "AED 120/kg" },
            { route: "Dubai to Pakistan", time: "1-3 days", from: "AED 110/kg" },
            { route: "Dubai to Philippines", time: "3-5 days", from: "AED 140/kg" },
            { route: "Dubai to Australia", time: "3-6 days", from: "AED 190/kg" },
          ].map((item) => (
            <Card key={item.route}>
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p className="font-semibold">{item.route}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
                <p className="text-lg font-bold text-primary">{item.from}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-primary p-8 text-center text-primary-foreground">
        <h2 className="mb-4 text-3xl font-bold">Ready to Ship Internationally?</h2>
        <p className="mb-6 text-lg">
          Get competitive rates and reliable service for all your shipping needs
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href="https://wa.me/+971557198055?text=Hi%2C%20I%20need%20help%20with%20international%20shipping" target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get WhatsApp Quote
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <Link href="/contact">
              Contact Our Team
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}