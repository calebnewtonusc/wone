import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import InvestorNetwork from "@/components/InvestorNetwork";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import Team from "@/components/Team";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <InvestorNetwork />
      <ThoughtLeadership />
      <Team />
      <Waitlist />
      <Footer />
    </main>
  );
}
