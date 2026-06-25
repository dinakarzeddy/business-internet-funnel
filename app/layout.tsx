import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Internet Providers Oklahoma | PrimeConnect",
  description: "Compare business internet providers in Oklahoma. Get fiber, wireless, VoIP, and broadband solutions customized for your company. Free consultation with PrimeConnect today.",
  keywords: "business internet Oklahoma, business internet Oklahoma City, business fiber internet Tulsa, VoIP Oklahoma, business broadband Oklahoma, compare business internet providers Oklahoma",
  alternates: {
    canonical: "https://primeconnectt.amcportal.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
