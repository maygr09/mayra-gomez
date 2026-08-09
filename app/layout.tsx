import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Parisienne } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mayra Gomez",
  description:
    "Engineering, data, aviation and the arts — practical systems that simplify complexity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${parisienne.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background font sans text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
