"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Rocket, TrendingUp } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up & Build Your Profile",
    description:
      "Create your startup profile in minutes. Add your deck, traction metrics, fundraising targets, and team. Wone uses this to match you with the most relevant investors and advisors in our network.",
    cta: "Get Started Free",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Publish Your Campaign",
    description:
      "Launch a transparent fundraising campaign to our curated network of 200+ SoCal investors. Share your data room, set terms, and receive structured introductions — no cold emails required.",
    cta: "See How Campaigns Work",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Connect, Close & Scale",
    description:
      "Track investor engagement live, book advisor sessions on-demand, and close your round with built-in SPV tooling. After close, use Wone's analytics to plan your next milestone.",
    cta: "View Success Stories",
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            From signup to funded.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                className={`flex gap-8 md:gap-12 items-start pb-12 ${i < steps.length - 1 ? "border-b border-gray-100 mb-12" : ""}`}
              >
                {/* Step icon + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-100 mt-4 min-h-[48px] hidden md:block" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-2">{step.number}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-4">{step.description}</p>
                  <a href="#waitlist" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    {step.cta} →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
