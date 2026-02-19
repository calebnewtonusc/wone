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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
