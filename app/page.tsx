import type { Metadata } from "next";
import TopBanner from "@/components/TopBanner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MetricsTraction from "@/components/MetricsTraction";
import InvestorNetwork from "@/components/InvestorNetwork";
import GoToMarketTimeline from "@/components/GoToMarketTimeline";
import Grants from "@/components/Grants";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import MidCTA from "@/components/MidCTA";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wone — The SoCal Startup Fundraising Platform",
  description:
    "Wone connects SoCal founders with investors, advisors, and the infrastructure they need to raise smarter. AI-matched investors, real-time scorecards, and on-demand expert sessions.",
};

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold" style={{ background: "#312e81" }}>
        Skip to main content
      </a>
      <TopBanner />
      <Navigation />
      <main id="main" className="relative overflow-x-hidden">
        <Hero />
        <SocialProof />
        <About />
        <Features />
        <HowItWorks />
        <MetricsTraction />
        <InvestorNetwork />
        <GoToMarketTimeline />
        <Grants />
        <Industries />
        <Testimonials />
        <MidCTA />
        <Pricing />
        <FAQ />
        <Contact />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
