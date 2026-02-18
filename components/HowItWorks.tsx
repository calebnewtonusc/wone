"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Rocket, TrendingUp } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Sign up in minutes. Tell us about your startup — stage, sector, fundraising goals, and what kind of support you need. Our platform personalizes your experience from day one.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Launch Your Campaign",
    description:
      "Build a transparent fundraising campaign with your deck, data room, and terms. Wone distributes your round to matched investors in our network and surfaces warm introductions.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Connect, Close & Scale",
    description:
      "Track investor engagement in real time, schedule advisor sessions on demand, and close your round with built-in SPV tooling. Then use Wone's analytics to plan your next phase.",
  },
];

export default function HowItWorks() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            From signup to funded
            <br />
            <span className="text-[#71717a]">in three steps.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-14 bottom-14 w-px -translate-x-1/2 bg-gradient-to-b from-[#1a1a1a] via-blue-500/20 to-[#1a1a1a]" />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                  className={`relative flex items-start gap-8 md:gap-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <p className="text-xs font-bold tracking-widest uppercase text-[#333] mb-3">{step.number}</p>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-[#71717a] leading-relaxed max-w-sm mx-auto md:mx-0 md:ml-auto">{step.description}</p>
                  </div>

                  {/* Center icon */}
                  <div
                    className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl border flex items-center justify-center"
                    style={{ background: "#0a0a0a", borderColor: "#1a1a1a" }}
                  >
                    <Icon size={22} className="text-blue-500" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
