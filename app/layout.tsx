import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wone — The Unified Startup Acceleration Platform",
  description:
    "Wone connects founders, investors, and expert advisors in one unified ecosystem. Launch transparent fundraising campaigns, access curated mentorship, and leverage predictive analytics to scale your startup.",
  keywords: [
    "startup acceleration",
    "fundraising",
    "SPV",
    "investors",
    "mentorship",
    "SoCal startups",
    "venture capital",
    "startup platform",
  ],
  authors: [{ name: "Wone" }],
  openGraph: {
    title: "Wone — The Unified Startup Acceleration Platform",
    description:
      "Where Startups Launch. Where Capital Flows. One Platform. Join the beta waitlist today.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wone — The Unified Startup Acceleration Platform",
    description:
      "Where Startups Launch. Where Capital Flows. One Platform.",
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
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-[#000000] text-white font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
