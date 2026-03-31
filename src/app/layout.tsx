import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";


/* serif heading font */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});


/* body font */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});


/* mono font */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});


export const metadata: Metadata = {

  title: "India Expo Centre & Mart",

  description:
    "India Expo Centre & Mart (IEML) is NCR’s premier MICE destination offering world-class exhibition halls, convention facilities, and global event infrastructure.",

};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        playfair.variable,
        inter.variable,
        jetbrainsMono.variable
      )}
    >

      <body className="min-h-full flex flex-col font-body bg-white text-gray-900">

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>

  );

}