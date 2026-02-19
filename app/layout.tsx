import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { siteConfig } from "@/config/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — The All-in-One Startup Launchpad for SoCal Founders`,
  description: siteConfig.description,
  keywords: [
    "SoCal startup platform",
    "startup fundraising",
    "investor matching",
    "Southern California startups",
    "venture capital Los Angeles",
    "startup mentorship",
    "non-dilutive funding",
    "SBIR grants",
    "AgTech funding",
    "biotech startup LA",
    "cleantech SoCal",
    "startup launchpad",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — The All-in-One Startup Launchpad`,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — The All-in-One Startup Launchpad`,
    description: siteConfig.tagline,
    site: siteConfig.social.twitterHandle,
    creator: siteConfig.social.twitterHandle,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/icon`,
        "width": 32,
        "height": 32,
      },
      "description": siteConfig.description,
      "foundingDate": "2026",
      "areaServed": {
        "@type": "Place",
        "name": "Southern California, United States",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": siteConfig.email.hello,
        "contactType": "customer support",
      },
      "sameAs": [
        siteConfig.social.linkedinUrl,
        siteConfig.social.twitterUrl,
        siteConfig.social.instagramUrl,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": siteConfig.name,
      "description": siteConfig.tagline,
      "publisher": {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
