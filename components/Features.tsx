"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { BarChart2, DollarSign, Users, TrendingUp, Briefcase, Globe } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  {
    icon: BarChart2,
    title: "Real-Time Progress Tracking",
    description:
      "Track milestones, KPIs, and growth metrics in a live dashboard built for founders who move fast.",
  },
  {
    icon: DollarSign,
    title: "SPV Fundraising Tools",
    description:
      "Launch transparent fundraising campaigns with built-in SPV infrastructure and investor-grade deal flow.",
  },
  {
    icon: Users,
    title: "Curated Mentorship Network",
    description:
      "Access vetted advisors matched to your industry and stage — not randomized, but precision-paired.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "AI-powered forecasting surfaces growth opportunities and signals investor readiness before you ask.",
  },
  {
    icon: Briefcase,
    title: "Investor Relations Hub",
    description:
      "Manage your cap table, updates, and stakeholder communications from a single source of truth.",
  },
  {
    icon: Globe,
    title: "Unified Ecosystem",
    description:
      "Connect founders, capital, and expertise in one integrated platform — no more fragmented tools.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col gap-4 rounded-2xl border border-[#1f2937] bg-[#111827] p-6 transition-colors duration-300 hover:border-[#f59e0b]/30 hover:bg-[#111827]/80"
    >
      {/* Subtle amber glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(245,158,11,0.06), transparent 60%)",
        }}
      />

      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] shadow-lg shadow-[#f59e0b]/20">
        <Icon className="h-5 w-5 text-[#030712]" strokeWidth={2} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-[#f9fafb]">{title}</h3>
        <p className="text-sm leading-relaxed text-[#9ca3af]">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const gridInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full bg-[#030712] py-24 sm:py-32">
      {/* Subtle grid texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,250,251,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,250,251,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#8b5cf6]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.span
            variants={headingVariants}
            className="mb-4 inline-block rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f59e0b]"
          >
            Platform Features
          </motion.span>
          <motion.h2
            variants={headingVariants}
            className="mb-4 text-3xl font-bold tracking-tight text-[#f9fafb] sm:text-4xl lg:text-5xl"
          >
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#8b5cf6] bg-clip-text text-transparent">
              scale faster
            </span>
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-base leading-relaxed text-[#9ca3af] sm:text-lg"
          >
            Wone brings the full startup acceleration stack into a single,
            intelligent platform — so you can focus on building, not
            coordinating.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
