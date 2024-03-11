/* eslint-disable tailwindcss/no-custom-classname */
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LeftSidebar, NextAuthProvider } from "@/components"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Music app with Next.js and TypeScript",
  description: "A music app built with Next.js and TypeScript",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={cn("h-screen", inter.className)}>
        <NextAuthProvider>
          <div className="grid-parent h-full">
            <div className="left-sidebar h-full bg-[#FAFAFA]">
              <LeftSidebar />
            </div>
            <div className="content">{children}</div>
            <div className="right-sidebar"></div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
