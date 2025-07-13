import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Lock, Search, Flame, Archive, BarChart3, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Document Storage & Management | Pack And Store",
  description: "Professional document storage and management services in Dubai. Secure, climate-controlled storage with retrieval services for your important records.",
}

export default function DocumentStoragePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Badge className="mb-4" variant="default">
          ISO 27001 Certified
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Document Storage & Management
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Secure, compliant document storage with intelligent retrieval systems. 
          Protect your business records while maintaining easy access when needed.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="text-lg">
            Start Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            View Security Features
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Enterprise-Grade Document Security</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Lock className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Bank-Level Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Biometric access, 24/7 monitoring, and restricted entry protocols
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Flame className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Fire Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advanced fire suppression systems and fireproof storage units
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Search className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Smart Indexing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Digital cataloging for instant document location and retrieval
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Compliance Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Meet regulatory requirements for document retention and privacy
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Document Storage Solutions</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Basic Archive</CardTitle>
              <CardDescription>For long-term document storage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold">AED 99</p>
                <p className="text-muted-foreground">per box/month</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Climate-controlled storage
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Basic inventory tracking
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  48-hour retrieval service
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Secure destruction available
                </li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <Badge className="mb-2 w-fit">Most Popular</Badge>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>Complete document management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold">AED 199</p>
                <p className="text-muted-foreground">per box/month</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Everything in Basic
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Digital inventory system
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  24-hour retrieval service
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Barcode tracking
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Online portal access
                </li>
              </ul>
              <Button className="mt-6 w-full">
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>Advanced compliance & management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold">Custom</p>
                <p className="text-muted-foreground">Contact for pricing</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Everything in Professional
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Same-day retrieval
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Compliance reporting
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  Custom retention policies
                </li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16 rounded-lg bg-muted/50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              1
            </div>
            <h3 className="mb-2 font-semibold">Collection</h3>
            <p className="text-sm text-muted-foreground">
              We collect your documents from your office
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              2
            </div>
            <h3 className="mb-2 font-semibold">Indexing</h3>
            <p className="text-sm text-muted-foreground">
              Documents are cataloged and indexed
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              3
            </div>
            <h3 className="mb-2 font-semibold">Storage</h3>
            <p className="text-sm text-muted-foreground">
              Secure storage in climate-controlled facility
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground mx-auto">
              4
            </div>
            <h3 className="mb-2 font-semibold">Retrieval</h3>
            <p className="text-sm text-muted-foreground">
              Quick access whenever you need
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Industries We Serve</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Legal Firms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Case files, contracts, and legal documents with chain of custody
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Patient records with HIPAA-compliant storage protocols
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Financial Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Transaction records and financial documents with audit trails
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Government</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Public records with security clearance protocols
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Real Estate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Property documents, contracts, and transaction records
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Student records and institutional documents
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-16 grid gap-8 md:grid-cols-4 text-center">
        <div>
          <BarChart3 className="mb-2 h-8 w-8 text-primary mx-auto" />
          <p className="text-3xl font-bold">10M+</p>
          <p className="text-muted-foreground">Documents Stored</p>
        </div>
        <div>
          <Clock className="mb-2 h-8 w-8 text-primary mx-auto" />
          <p className="text-3xl font-bold">24hr</p>
          <p className="text-muted-foreground">Retrieval Time</p>
        </div>
        <div>
          <Archive className="mb-2 h-8 w-8 text-primary mx-auto" />
          <p className="text-3xl font-bold">99.9%</p>
          <p className="text-muted-foreground">Accuracy Rate</p>
        </div>
        <div>
          <FileText className="mb-2 h-8 w-8 text-primary mx-auto" />
          <p className="text-3xl font-bold">15+</p>
          <p className="text-muted-foreground">Years Experience</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-primary p-8 text-center text-primary-foreground">
        <h2 className="mb-4 text-3xl font-bold">Secure Your Documents Today</h2>
        <p className="mb-6 text-lg">
          Get a free consultation and learn how we can streamline your document management
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" variant="secondary">
            Schedule Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Download Compliance Guide
          </Button>
        </div>
      </section>
    </div>
  )
}