
import "./globals.css";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";

// Load Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "KaamBazar",
  description: "Your app description",
};


export default function RootLayout({ children }:{children:ReactNode}) {
  return (
    <html>
      <body>
        {children}    
      </body>
    </html>
  );
}