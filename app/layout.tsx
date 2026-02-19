import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woneportal.com"),
  title: "Wone — The All-in-One Startup Launchpad for SoCal Founders",
  description:
    "Wone connects Southern California founders with 200+ vetted investors, expert advisors, and AI-powered fundraising tools. Transparent fundraising, real-time scorecards, grant matching, and more. Now in beta.",
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
  authors: [{ name: "Wone" }],
  openGraph: {
    title: "Wone — The All-in-One Startup Launchpad",
    description:
      "Where SoCal Startups Launch. Where Capital Flows. One Platform.",
    type: "website",
    locale: "en_US",
    url: "https://woneportal.com",
    siteName: "Wone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wone — The All-in-One Startup Launchpad",
    description:
      "Where SoCal Startups Launch. Where Capital Flows. One Platform.",
    site: "@woneportal",
    creator: "@woneportal",
  },
  alternates: {
    canonical: "https://woneportal.com",
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
      "@id": "https://woneportal.com/#organization",
      "name": "Wone",
      "url": "https://woneportal.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://woneportal.com/icon",
        "width": 32,
        "height": 32,
      },
      "description":
        "The all-in-one startup acceleration platform for Southern California founders. Connect with 200+ vetted investors, expert advisors, and AI-powered fundraising tools.",
      "foundingDate": "2026",
      "areaServed": {
        "@type": "Place",
        "name": "Southern California, United States",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@woneportal.com",
        "contactType": "customer support",
      },
      "sameAs": [
        "https://linkedin.com/company/wone",
        "https://twitter.com/woneportal",
        "https://instagram.com/woneportal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://woneportal.com/#website",
      "url": "https://woneportal.com",
      "name": "Wone",
      "description": "Where SoCal Startups Launch. Where Capital Flows.",
      "publisher": {
        "@id": "https://woneportal.com/#organization",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
