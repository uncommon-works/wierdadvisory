import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "@/styles/globals.css";

import Lenis from "@/contexts/Lenis"
import Vetra from "@/contexts/Vetra"

import Mavon from '@/components/ui/mavon-bar'

import { SheetProvider } from "@/components/ui/sheet-provider";

import Nav from "@/components/navigation/nav"
import Footer from "@/components/ui/footer"

import { Toaster } from "@/components/ui/sonner"
import ScrollRestoration from "@/components/utils/scroll-restoration";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--libre-baskerville",
})

export const metadata: Metadata = {
  title: "Wierd(A)dvisory",
  description: "W(A): Strategy consultancy helping leaders navigate a weird world. Our clients seek us when they need thinking and service that goes beyond the conventional.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} antialiased`} >
        <ScrollRestoration />
        <Lenis>
          <Vetra>
            <SheetProvider>
              
              <Mavon />
              <Nav />
              {children}
              <Footer />
              <Toaster />

            </SheetProvider>
          </Vetra>
        </Lenis>
      </body>
    </html>
  );
}
