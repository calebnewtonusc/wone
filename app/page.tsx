import TopBanner from "@/components/TopBanner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Grants from "@/components/Grants";
import InvestorNetwork from "@/components/InvestorNetwork";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold">
        Skip to main content
      </a>
      <TopBanner />
      <Navigation />
      <main id="main" className="relative overflow-x-hidden">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Grants />
        <InvestorNetwork />
        <Industries />
        <About />
        <Contact />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
