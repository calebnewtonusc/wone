"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ProfilePreview() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-sm font-bold text-white">YS</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">YourStartup Inc.</p>
          <p className="text-xs text-gray-400">Pre-seed · FinTech · Los Angeles</p>
        </div>
        <span className="ml-auto text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">Verified</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[["MRR", "$12K"], ["Growth", "↑ 40%"], ["Runway", "18mo"]].map(([k, v]) => (
          <div key={k} className="bg-gray-50 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-400 font-medium">{k}</p>
            <p className="text-sm font-bold text-gray-800">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CampaignPreview() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-gray-900">Seed Round Campaign</p>
        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">Live</span>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>$420K raised</span>
          <span>$750K target</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[56%] bg-blue-600 rounded-full" />
        </div>
      </div>
      <div className="flex gap-2">
        {["14 Investors", "8 Meetings", "23 Views"].map((tag) => (
          <span key={tag} className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ScalePreview() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-gray-900">Round Closed 🎉</p>
        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">Funded</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[["Raised", "$750K"], ["Investors", "14"], ["Avg Check", "$53K"], ["Close Time", "42 days"]].map(([k, v]) => (
          <div key={k} className="bg-gray-50 rounded-lg p-2">
            <p className="text-[10px] text-gray-400 font-medium">{k}</p>
            <p className="text-sm font-bold text-gray-800">{v}</p>
          </div>
        ))}
      </div>
      <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        Next milestone: Series A prep
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up & Build Your Profile",
    description:
      "Create your startup profile in minutes. Add your deck, traction metrics, funding targets, and team. Wone matches you with the most relevant investors and advisors automatically.",
    cta: "Start for Free",
    preview: ProfilePreview,
  },
  {
    number: "02",
    icon: Rocket,
    title: "Publish Your Campaign",
    description:
      "Launch a transparent fundraising campaign to 200+ vetted SoCal investors. Share your data room, set terms, and receive warm introductions — no cold emails.",
    cta: "See Live Campaigns",
    preview: CampaignPreview,
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Close & Scale",
    description:
      "Track investor engagement live, close with built-in SPV tooling, and use Wone's analytics to plan your next raise. Most founders close their round in under 60 days.",
    cta: "View Success Stories",
    preview: ScalePreview,
  },
];

export default function HowItWorks() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="bg-white py-28 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            From signup to funded.
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto">
            Most founders on Wone go from profile to closed round in under 60 days.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const Preview = step.preview;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Text */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-300">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed mb-5">{step.description}</p>
                  <a href="#waitlist" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    {step.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>

                {/* Preview */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <Preview />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
