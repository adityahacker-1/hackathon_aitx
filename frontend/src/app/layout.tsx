import type React from "react"
import "../styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "sonner"
import { AuthProvider } from "@/components/auth/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seremo - Hindu Virtual Ritual Platform",
  description: "Connect with qualified Hindu religious officiants for virtual or in-person rituals and ceremonies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}

