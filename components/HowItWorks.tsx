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
      "Create your startup profile in minutes. Add your deck, traction metrics, funding targets, and team. Wone instantly calculates your fundraising readiness score and personalizes your experience.",
    detail: "Takes less than 10 minutes",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Launch Your Campaign",
    description:
      "Publish your round to 200+ vetted SoCal investors — filtered by stage, sector, and check size. Wone handles warm introductions so you spend time in conversations, not outreach.",
    detail: "Average 14 investor matches per campaign",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Close & Scale",
    description:
      "Track investor engagement live, book advisor sessions on demand, and close with built-in SPV tooling. After your raise, use Wone's analytics to plan what comes next.",
    detail: "Most founders close in under 60 days",
  },
];

export default function HowItWorks() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="bg-white py-28 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            From signup to funded.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[22px] top-12 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent hidden md:block" />

          <div className="space-y-14">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
                  className="flex gap-6 md:gap-8"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center z-10">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-widest uppercase text-gray-300">{step.number}</span>
                      <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                        {step.detail}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-base text-gray-500 leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
