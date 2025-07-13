import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Pack and Store Dubai | Get a Free Quote",
  description:
    "Contact Pack and Store for storage solutions in Dubai. Get a free quote, schedule a facility tour, or speak with our storage experts. Available 7 days a week.",
  openGraph: {
    title: "Contact Pack and Store Dubai - Get Your Free Storage Quote",
    description:
      "Ready to store with confidence? Contact us for a free quote or facility tour.",
  },
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+971 4 123 4567",
    subtext: "7 days a week, 9 AM - 6 PM",
    action: "tel:+97141234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@packandstore.ae",
    subtext: "We'll respond within 24 hours",
    action: "mailto:info@packandstore.ae",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    details: "+971 50 123 4567",
    subtext: "Quick responses, 7 days a week",
    action: "https://wa.me/971501234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Al Qusais, Dubai",
    subtext: "Open daily 7 AM - 9 PM",
    action: "https://maps.google.com",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
  { day: "Facility Access", hours: "7:00 AM - 9:00 PM Daily" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Ready to store with confidence? We&apos;re here to help you find the perfect
              storage solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => (
              <Link
                key={method.title}
                href={method.action}
                target={method.action.startsWith("http") ? "_blank" : undefined}
                className="group"
              >
                <Card className="h-full border-2 transition-all hover:border-blue-500 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3 transition-colors group-hover:bg-blue-600">
                      <method.icon className="h-6 w-6 text-blue-600 transition-colors group-hover:text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{method.title}</h3>
                    <p className="font-medium text-blue-600">{method.details}</p>
                    <p className="mt-1 text-sm text-gray-600">{method.subtext}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+971 50 123 4567"
                      required
                    />
                  </div>
                  <div>
                    <Label>What do you need to store?</Label>
                    <RadioGroup defaultValue="household">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="household" id="household" />
                        <Label htmlFor="household" className="font-normal">
                          Household items
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business" className="font-normal">
                          Business inventory
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vehicle" id="vehicle" />
                        <Label htmlFor="vehicle" className="font-normal">
                          Vehicle storage
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-normal">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your storage needs..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <p className="text-center text-sm text-gray-600">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Location */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-gray-600">
                    <p className="font-semibold">Pack and Store Dubai</p>
                    <p>123 Storage Road</p>
                    <p>Al Qusais Industrial Area</p>
                    <p>Dubai, United Arab Emirates</p>
                  </address>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="https://maps.google.com" target="_blank">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex justify-between border-b pb-2 last:border-0"
                      >
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-green-100 p-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Quick Response Promise</h3>
                  <p className="text-gray-600">
                    We respond to all inquiries within 24 hours. For immediate assistance,
                    call us or send a WhatsApp message.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-[400px] bg-gradient-to-br from-blue-200 to-purple-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-blue-600/50" />
                  <p className="text-lg font-medium text-gray-700">
                    Interactive map will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of satisfied customers who trust Pack and Store
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/storage-sizes">
                View Storage Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="tel:+97141234567">Call Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}