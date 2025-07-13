import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pack & Store - Secure Storage & Professional Packing Services in Dubai",
  description: "Professional storage and packing services in Dubai. Climate-controlled units, 24/7 access, competitive pricing. Your trusted partner for personal and business storage solutions.",
  keywords: "storage dubai, self storage dubai, packing services dubai, moving storage dubai, business storage dubai, document storage dubai",
  openGraph: {
    title: "Pack & Store - Dubai Storage Solutions",
    description: "Secure storage units and professional packing services in Dubai Investment Park",
    url: "https://packandstore.ae",
    siteName: "Pack & Store",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
