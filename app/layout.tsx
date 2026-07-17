import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Internet Providers | PrimeConnect",
  description: "Compare business internet providers in your area. Get fiber, wireless, VoIP, and broadband solutions customized for your company. Free consultation with PrimeConnect today.",
  keywords: "business internet providers, business fiber internet, VoIP solutions, business broadband, compare business internet providers, business internet near me",
  alternates: {
    canonical: "https://primeconnectnow.com",
  },
  openGraph: {
    title: "Business Internet Providers | PrimeConnect",
    description: "Compare business internet providers in your area. Get fiber, wireless, VoIP, and broadband solutions customized for your company. Free consultation with PrimeConnect today.",
    url: "https://primeconnectnow.com",
    siteName: "PrimeConnect",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://primeconnectnow.com/og-image-new.png",
        width: 1200,
        height: 630,
        alt: "PrimeConnect — Business Internet Providers Oklahoma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Internet Providers Oklahoma | PrimeConnect",
    description: "Compare business internet providers in Oklahoma. Free consultation with PrimeConnect today.",
    images: ["https://primeconnectnow.com/og-image-new.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PGXDC5T6');`,
          }}
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3E00Q73LDH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3E00Q73LDH', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGXDC5T6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Footer />
      </body>
    </html>
  );
}