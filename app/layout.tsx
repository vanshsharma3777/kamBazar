'use client'
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider>{children}</SessionProvider>
          
      </body>
    </html>
  )
}
