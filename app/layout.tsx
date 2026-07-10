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
  openGraph: {
    title: "Business Internet Providers Oklahoma | PrimeConnect",
    description: "Compare business internet providers in Oklahoma. Get fiber, wireless, VoIP, and broadband solutions for your company. Free consultation today.",
    url: "https://primeconnectt.amcportal.app",
    siteName: "PrimeConnect",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://primeconnectt.amcportal.app/og-image.png",
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
    images: ["https://primeconnectt.amcportal.app/og-image.png"],
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
            })(window,document,'script','dataLayer','GTM-TWZ8PLB2');`,
          }}
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BVG7JZMJPD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BVG7JZMJPD', {
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
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWZ8PLB2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}