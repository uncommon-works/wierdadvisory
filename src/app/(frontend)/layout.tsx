import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "@/styles/globals.css";

import Lenis from "@/contexts/Lenis"
import Vetra from "@/contexts/Vetra"
import Mavon from "@/contexts/Mavon"

import Nav from "@/components/elements/nav"
import Footer from "@/components/elements/footer"

import { Toaster } from "@/components/ui/sonner"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--libre-baskerville",
})

export const metadata: Metadata = {
  title: "Wierd(A)dvisory",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} antialiased`}>
        <Lenis>
          <Vetra>
            <Mavon />
            <Nav />
            {children}
            <Footer />
            <Toaster />
          </Vetra>
        </Lenis>
      </body>
    </html>
  );
}
