import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "TMWG",
  description: "The Mobile Wellness Group",
  metadataBase: new URL('http://localhost:3000'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  other: {
    'next-head-count': '0'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
  
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
