import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wone — The All-in-One Startup Launchpad",
  description:
    "Wone connects founders, investors, and expert advisors in one unified platform. Launch transparent fundraising campaigns, access curated mentorship, and scale with confidence.",
  keywords: ["startup acceleration", "fundraising", "investors", "mentorship", "SoCal startups"],
  authors: [{ name: "Wone" }],
  openGraph: {
    title: "Wone — The All-in-One Startup Launchpad",
    description: "Where Startups Launch. Where Capital Flows. One Platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wone — The All-in-One Startup Launchpad",
    description: "Where Startups Launch. Where Capital Flows. One Platform.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
