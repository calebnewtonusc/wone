import TopBanner from "@/components/TopBanner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import InvestorNetwork from "@/components/InvestorNetwork";
import Industries from "@/components/Industries";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <TopBanner />
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <InvestorNetwork />
      <Industries />
      <Waitlist />
      <Footer />
    </main>
  );
}
