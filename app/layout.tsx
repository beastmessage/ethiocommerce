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
  title: "Ethiocommerce government proposal",
  description: "please see our proposal and contact us.",
};

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
