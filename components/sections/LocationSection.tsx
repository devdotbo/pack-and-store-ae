import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our <span className="text-primary">Location</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Dubai Investment Park with easy access from major highways
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="aspect-video lg:aspect-auto lg:h-full min-h-[400px] bg-muted rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5627694908766!2d55.16523561544384!3d24.985882741460873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f71a3e6a1a1a1%3A0x1234567890abcdef!2sDubai%20Investment%20Park%20-%202%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pack and Store Location - Dubai Investment Park 2"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Dubai Investment Park - 2<br />
                      Dubai, United Arab Emirates
                    </p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto mt-2"
                      asChild
                    >
                      <a 
                        href="https://g.co/kgs/9myCj9K" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Navigation className="h-4 w-4 mr-1" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <div className="space-y-1">
                      <a 
                        href="tel:+971529922852" 
                        className="text-sm text-muted-foreground hover:text-primary block"
                      >
                        052 992 2852
                      </a>
                      <a 
                        href="tel:+971557198055" 
                        className="text-sm text-muted-foreground hover:text-primary block"
                      >
                        055 719 8055 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:info@packandstore.ae" 
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      info@packandstore.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><span className="font-medium">Storage Access:</span> 24/7 for unit holders</p>
                      <p><span className="font-medium">Office Hours:</span></p>
                      <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Ready to Get Started?</h3>
                <p className="text-sm mb-4 opacity-90">
                  Visit our facility today for a free tour and consultation. 
                  Our team will help you find the perfect storage solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    asChild
                  >
                    <a href="tel:+971557198055">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button 
                    variant="secondary"
                    size="sm"
                    asChild
                  >
                    <a href="#quote">
                      Book a Tour
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}