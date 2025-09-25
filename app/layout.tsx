import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: {
    default: "Mirch - Dining Reimagined",
    template: "%s | Mirch - Dining Reimagined"
  },
  description: "Experience seamless dining from discovery to payment with Mirch. Get personalized dish recommendations based on your taste profile, connect with similar food lovers, split bills effortlessly, and discover restaurants through AI-powered matching. One app. Every restaurant. Infinite possibilities.",
  keywords: [
    "dining app",
    "restaurant discovery", 
    "personalized dining",
    "taste profile matching",
    "dish recommendations",
    "restaurant finder",
    "food discovery app",
    "dining experience",
    "bill splitting app",
    "restaurant loyalty rewards",
    "food app",
    "culinary discovery",
    "restaurant recommendations",
    "food social network",
    "dining reimagined",
    "AI restaurant matching",
    "food preference app",
    "restaurant waitlist",
    "early access dining app"
  ],
  authors: [{ name: "Mirch Team" }],
  creator: "Mirch",
  publisher: "Mirch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mirch.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#09050D',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mirch.app',
    siteName: 'Mirch',
    title: 'Mirch - Dining Reimagined | Personalized Restaurant Discovery App',
    description: 'Experience seamless dining from discovery to payment. Get personalized dish recommendations, connect with similar food lovers, split bills effortlessly, and discover restaurants through AI-powered taste matching. Join the waitlist for early access.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mirch - Dining Reimagined | Personalized Restaurant Discovery App',
      },
      {
        url: '/mirch-logo.png',
        width: 400,
        height: 400,
        alt: 'Mirch Logo - Dining Reimagined',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirch - Dining Reimagined | Personalized Restaurant Discovery App',
    description: 'Experience seamless dining from discovery to payment. Get personalized dish recommendations based on your taste profile. Join the waitlist for early access to the future of dining.',
    creator: '@mirch_app',
    images: ['/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Mirch - Dining Reimagined',
  },
  other: {
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Mirch',
    'msapplication-TileColor': '#09050D',
    'msapplication-navbutton-color': '#09050D',
    'theme-color': '#09050D',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#09050D" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-navbutton-color" content="#09050D" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="EN" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        
        {/* Structured Data for Landing Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Mirch",
              "alternateName": "Mirch - Dining Reimagined",
              "description": "Experience seamless dining from discovery to payment with Mirch. Get personalized dish recommendations based on your taste profile, connect with similar food lovers, split bills effortlessly, and discover restaurants through AI-powered matching.",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://mirch.app",
              "applicationCategory": "Food & Dining",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/ComingSoon"
              },
              "author": {
                "@type": "Organization",
                "name": "Mirch Team"
              },
              "publisher": {
                "@type": "Organization", 
                "name": "Mirch",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://mirch.app"}/mirch-logo.png`
                }
              },
              "featureList": [
                "Personalized dish recommendations based on taste profile",
                "Connect with similar food lovers", 
                "AI-powered restaurant discovery",
                "Seamless bill splitting",
                "Restaurant loyalty rewards",
                "Social dining connections",
                "Real-time availability and pricing",
                "Dietary restriction filtering"
              ],
              "screenshot": `${process.env.NEXT_PUBLIC_SITE_URL || "https://mirch.app"}/og-image.png`,
              "softwareVersion": "Coming Soon",
              "releaseNotes": "Revolutionary dining app launching soon. Join the waitlist for early access."
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mirch",
              "description": "Revolutionary dining app that transforms how you discover, order, and enjoy food through personalized taste matching and AI-powered recommendations.",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://mirch.app",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://mirch.app"}/mirch-logo.png`,
              "sameAs": [
                "https://twitter.com/mirch_app"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "US"
              },
              "foundingDate": "2025",
              "slogan": "Dining Reimagined - One app. Every restaurant. Infinite possibilities."
            })
          }}
        />

        {/* Website Schema for Landing Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mirch - Dining Reimagined",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://mirch.app",
              "description": "Experience seamless dining from discovery to payment. Get personalized dish recommendations, connect with similar food lovers, and discover restaurants through AI-powered taste matching.",
              "publisher": {
                "@type": "Organization",
                "name": "Mirch"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://mirch.app"}?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
