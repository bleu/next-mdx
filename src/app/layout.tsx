import Header from "./(components)/header"
import "./globals.css"

import { Barlow_Condensed } from "next/font/google"

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-barlow-condensed"
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} font-sans`}>
      <body className="bg-neutral-50 text-neutral-800 px-24">
        <Header />
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}
