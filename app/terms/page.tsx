import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service - Pack & Store Dubai",
  description:
    "Terms of Service for Pack & Store Dubai. Read our terms and conditions for using our storage services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By accessing and using Pack & Store Dubai services, you agree to be bound by
                  these Terms of Service. If you disagree with any part of these terms, then you
                  may not access our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Storage Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Pack & Store Dubai provides self-storage services subject to the following conditions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Storage units are rented on a month-to-month basis unless otherwise agreed</li>
                  <li>Rent is due on the first day of each month</li>
                  <li>Late fees may apply for overdue payments</li>
                  <li>Access to units is available during facility operating hours</li>
                  <li>24/7 access may be available for certain units with prior arrangement</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Prohibited Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The following items are strictly prohibited from storage:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hazardous materials, chemicals, or toxic substances</li>
                  <li>Explosives, firearms, or ammunition</li>
                  <li>Perishable goods or items requiring refrigeration</li>
                  <li>Living animals or plants</li>
                  <li>Illegal substances or stolen property</li>
                  <li>Items that emit fumes, odors, or moisture</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Customer Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>As a customer, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the storage unit solely for lawful storage purposes</li>
                  <li>Maintain your own lock on the unit</li>
                  <li>Keep your unit clean and in good condition</li>
                  <li>Ensure stored items are properly packed and protected</li>
                  <li>Obtain insurance for valuable items (optional but recommended)</li>
                  <li>Notify us of any changes to your contact information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rent is payable monthly in advance</li>
                  <li>A security deposit may be required</li>
                  <li>Payments can be made via cash, credit card, or bank transfer</li>
                  <li>Failure to pay rent may result in denial of access to your unit</li>
                  <li>Units in default may be subject to auction after proper notice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Pack & Store Dubai is not liable for any loss, damage, or injury to stored
                  property except in cases of gross negligence. We recommend obtaining appropriate
                  insurance coverage for your stored items.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Either party may terminate the storage agreement with 30 days written notice. Upon termination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All items must be removed from the unit</li>
                  <li>The unit must be left clean and undamaged</li>
                  <li>All outstanding fees must be paid</li>
                  <li>Keys and access cards must be returned</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Any disputes arising from these terms shall be resolved through good faith
                  negotiation. If resolution cannot be reached, disputes shall be subject to the
                  laws and jurisdiction of Dubai, UAE.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. Customers will be
                  notified of significant changes via email or posted notices at our facility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>For questions about these Terms of Service, please contact us:</p>
                <ul className="list-none space-y-2">
                  <li>Email: info@packandstore.ae</li>
                  <li>Phone: +971 52 992 2852</li>
                  <li>Address: Dubai Investment Park - 2, Dubai, UAE</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}