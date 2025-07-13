"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/scroll/AnimatedSection"
import { ParallaxBackground } from "@/components/scroll/ParallaxLayer"
import { m } from "framer-motion"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  serviceType: z.string().min(1, {
    message: "Please select a service type.",
  }),
  storageSize: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      storageSize: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    console.log(values)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert("Thank you for your inquiry! We'll contact you within 24 hours.")
    form.reset()
    setIsSubmitting(false)
  }

  const handleWhatsApp = () => {
    const values = form.getValues()
    const serviceTypeLabels: Record<string, string> = {
      personal: 'Personal Storage',
      business: 'Business Storage',
      shipping: 'International Shipping',
      vehicle: 'Vehicle Storage',
      moving: 'Moving Services'
    }
    const serviceLabel = values.serviceType ? serviceTypeLabels[values.serviceType] : 'your services'
    const storageSizeLabels: Record<string, string> = {
      small: 'Small (5x5 ft)',
      medium: 'Medium (10x10 ft)',
      large: 'Large (10x20 ft)',
      xlarge: 'Extra Large (10x30 ft)',
      custom: 'Custom Size'
    }
    const sizeLabel = values.storageSize ? storageSizeLabels[values.storageSize] : ''
    
    let message = `Hi, I'm interested in ${serviceLabel}.\n\n`
    message += `Name: ${values.name || '[Not provided]'}\n`
    message += `Email: ${values.email || '[Not provided]'}\n`
    message += `Phone: ${values.phone || '[Not provided]'}\n`
    if (values.storageSize && values.serviceType !== 'shipping') {
      message += `Preferred Size: ${sizeLabel}\n`
    }
    if (values.message) {
      message += `\nAdditional Information:\n${values.message}`
    }
    
    const whatsappUrl = `https://wa.me/+971557198055?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="quote" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <ParallaxBackground pattern="gradient" speed={0.1} className="opacity-20" />
      
      <div className="container relative">
        <AnimatedSection animation="fadeUpScale" className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-card/95 shadow-xl">
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl">
                  Get Your <span className="text-primary">Free Quote</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below or contact us via WhatsApp for immediate assistance
                </CardDescription>
              </CardHeader>
            </AnimatedSection>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1} delayChildren={0.3}>
                    <StaggerItem>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </StaggerItem>
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+971 50 123 4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="personal">Personal Storage</SelectItem>
                              <SelectItem value="business">Business Storage</SelectItem>
                              <SelectItem value="shipping">International Shipping</SelectItem>
                              <SelectItem value="vehicle">Vehicle Storage</SelectItem>
                              <SelectItem value="moving">Moving Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="storageSize"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Preferred Storage Size (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size if known" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="small">Small (5x5 ft)</SelectItem>
                              <SelectItem value="medium">Medium (10x10 ft)</SelectItem>
                              <SelectItem value="large">Large (10x20 ft)</SelectItem>
                              <SelectItem value="xlarge">Extra Large (10x30 ft)</SelectItem>
                              <SelectItem value="custom">Custom Size</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Not sure? We&apos;ll help you find the right size
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your storage needs..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </StaggerContainer>
                  
                  <AnimatedSection animation="fadeUp" delay={0.8} className="flex flex-col sm:flex-row gap-4">
                    <m.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Get Free Quote
                        </>
                      )}
                      </Button>
                    </m.div>
                    
                    <m.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        type="button"
                        variant="outline"
                        className="w-full bg-green-500/10 hover:bg-green-500/20 text-green-700 border-green-500/30"
                        onClick={handleWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </Button>
                    </m.div>
                  </AnimatedSection>
                </form>
              </Form>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}