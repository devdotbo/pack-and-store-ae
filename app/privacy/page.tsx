import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy - Pack & Store Dubai",
  description:
    "Privacy Policy for Pack & Store Dubai. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
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
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We collect information you provide directly to us, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and shipping address</li>
                  <li>Storage preferences and requirements</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our storage services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information and updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Provide customer support</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures to protect
                  your personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website
                  and hold certain information. You can instruct your browser to refuse all cookies
                  or to indicate when a cookie is being sent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the
                  &quot;Last updated&quot; date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
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