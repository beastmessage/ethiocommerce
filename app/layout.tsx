import type { Metadata } from "next";
import { Geist, Geist_Mono, Sofia } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sofia = Sofia({
    subsets: ["latin"],
    weight: ["400"], // Add weights as needed
    variable: "--font-sofia",
});

export const metadata: Metadata = {
    title: 'Ethiocommerce partnership proposal to government',
    description: 'please read our docs and contact us.',
    openGraph: {
        title: 'Ethiocommerce partnership proposal to government',
        description: 'please read our docs and contact us.',
        url: 'https://ethiocommerce.vercel.app',
        siteName: 'ethiocommerce',
        images: [
            {
                url: '/public/logo.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ethiocommerce partnership proposal to government',
        description: 'please read our docs and contact us.',
        images: ['/public/logo.png'],
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${sofia.variable} antialiased`} style={{ fontFamily: 'var(--font-sofia)' }}
      >
      {children}
      </body>
      </html>
  );
}
