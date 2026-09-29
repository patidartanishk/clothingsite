import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Akhilesh Collection | Men's Clothing, Footwear & Bags",
  description: "Akhilesh Collection – Explore men's clothing, footwear and bags at Main Market, Subheda, Barabanki",
  keywords: [
    "Akhilesh Collection",
    "Men's Clothing Barabanki",
    "Footwear Shop Barabanki",
    "Subheda Market Garments",
    "Bags and Luggage Barabanki"
  ],
  authors: [{ name: "Akhilesh Collection" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
