import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What sizes of storage units do you offer?",
    answer: "We offer a wide range of storage unit sizes from small 5x5 ft lockers perfect for boxes and small items, to large 10x30 ft units that can hold the contents of a multi-bedroom home. Our team can help you choose the right size based on your needs.",
  },
  {
    question: "How do I access my storage unit?",
    answer: "You'll receive a unique access code that allows you 24/7 entry to our facility. Simply enter your code at the main gate and proceed to your unit. For added security, each unit has its own lock that you provide.",
  },
  {
    question: "Is climate control available?",
    answer: "Yes, all our storage units are climate-controlled to maintain optimal temperature and humidity levels. This protects your belongings from extreme heat, humidity, and dust common in Dubai.",
  },
  {
    question: "What security measures are in place?",
    answer: "Our facility features 24/7 CCTV surveillance, secure perimeter fencing, individual unit alarms, on-site security personnel, and controlled access gates. We take the security of your belongings seriously.",
  },
  {
    question: "Can I store my vehicle?",
    answer: "Absolutely! We offer both indoor and outdoor vehicle storage options for cars, motorcycles, boats, and RVs. Indoor storage includes climate control and battery maintenance services.",
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible month-to-month rentals with no long-term contracts required. Payment can be made monthly via cash, credit card, or bank transfer. We also offer discounts for long-term storage.",
  },
  {
    question: "Do you offer packing and moving services?",
    answer: "Yes, we provide comprehensive packing and moving services. Our professional team can pack your items, transport them to our facility, and even help you organize your storage unit for easy access.",
  },
  {
    question: "What items are prohibited in storage?",
    answer: "For safety reasons, we cannot store hazardous materials, flammable liquids, explosives, perishable goods, live plants or animals, or illegal items. Our team can provide a complete list of prohibited items.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our storage services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+971557198055" 
                className="text-primary hover:underline"
              >
                Call us: +971 55 719 8055
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a 
                href="mailto:info@packandstore.ae" 
                className="text-primary hover:underline"
              >
                Email: info@packandstore.ae
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}