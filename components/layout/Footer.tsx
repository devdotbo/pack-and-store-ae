import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/50 mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Pack & Store</h3>
            <p className="text-sm text-muted-foreground">
              Professional storage and packing services in Dubai. Your trusted partner for secure storage solutions.
            </p>
            <p className="text-xs text-muted-foreground">
              RUKN ALMUROJ GENERAL WAREHOUSING L.L.C
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/personal-storage" className="hover:text-primary transition-colors">
                  Personal Storage
                </Link>
              </li>
              <li>
                <Link href="/business-storage" className="hover:text-primary transition-colors">
                  Business Storage
                </Link>
              </li>
              <li>
                <Link href="/document-storage" className="hover:text-primary transition-colors">
                  Document Storage
                </Link>
              </li>
              <li>
                <Link href="/moving-services" className="hover:text-primary transition-colors">
                  Moving Services
                </Link>
              </li>
              <li>
                <Link href="/storage-sizes" className="hover:text-primary transition-colors">
                  Storage Sizes & Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Dubai Investment Park - 2, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+971529922852" className="hover:text-primary transition-colors block">
                    052 992 2852
                  </a>
                  <a href="tel:+971557198055" className="hover:text-primary transition-colors block">
                    055 719 8055 (WhatsApp)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@packandstore.ae" className="hover:text-primary transition-colors">
                  info@packandstore.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium">24/7 Access</span>
              </li>
              <li className="pl-6">For storage unit holders</li>
              <li className="pt-2">
                <p className="font-medium">Office Hours:</p>
                <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pack & Store. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}