'use client'
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider>{children}
          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              style: { padding: "10px 16px", borderRadius: "10px" },
            }}
          />
        </SessionProvider>

      </body>
    </html>
  )
}
