"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { UserPlus, Rocket, Handshake, LineChart } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Showcase your startup's vision, team, and traction to the Wone network. Your profile is your first impression to investors and mentors.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Launch Your Campaign",
    description:
      "Set up your fundraising round with SPV tools and transparent deal terms. Publish in minutes with compliance-ready infrastructure.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Connect & Grow",
    description:
      "Get matched with relevant investors, mentors, and strategic partners based on your industry, stage, and goals.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Track & Scale",
    description:
      "Monitor KPIs, receive AI-powered insights, and iterate with real-time analytics — all in one unified dashboard.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: EASE,
      delay: 0.3,
    },
  },
};

function StepCard({
  step,
  isLast,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      variants={stepVariants}
      className="group relative flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left lg:flex-col lg:items-center lg:text-center"
    >
      {/* Step indicator + icon */}
      <div className="relative mb-5 flex flex-col items-center gap-2">
        {/* Amber step number */}
        <span className="font-mono text-xs font-bold tracking-widest text-[#4D8EFF]">
          {step.number}
        </span>

        {/* Icon circle */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4D8EFF] to-[#1D4ED8] shadow-xl shadow-[#4D8EFF]/25 transition-transform duration-300 group-hover:-translate-y-1">
          <Icon className="h-7 w-7 text-[#000000]" strokeWidth={2} />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-2 sm:ml-5 sm:pt-1 lg:ml-0 lg:pt-0">
        <h3 className="text-base font-semibold text-[#ffffff]">{step.title}</h3>
        <p className="text-sm leading-relaxed text-[#a1a1a1]">
          {step.description}
        </p>
      </div>

      {/* Vertical connector for mobile/tablet (between steps, not after last) */}
      {!isLast && (
        <div className="mx-auto mt-6 mb-2 h-8 w-px bg-gradient-to-b from-[#4D8EFF]/40 to-[#8b5cf6]/20 lg:hidden" />
      )}
    </motion.div>
  );
}

export default function HowItWorks() {
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });
  const lineInView = useInView(lineRef, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full bg-[#000000] py-24 sm:py-32">
      {/* Bottom ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-[#4D8EFF]/[0.08] blur-[120px]" />

      {/* Top separator line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <motion.span
            variants={headingVariants}
            className="mb-4 inline-block rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8b5cf6]"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={headingVariants}
            className="mb-4 text-3xl font-bold tracking-tight text-[#ffffff] sm:text-4xl lg:text-5xl"
          >
            From zero to{" "}
            <span className="bg-gradient-to-r from-[#4D8EFF] to-[#8b5cf6] bg-clip-text text-transparent">
              funded
            </span>
            , step by step
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-base leading-relaxed text-[#a1a1a1] sm:text-lg"
          >
            Wone is designed for speed and clarity. Four focused steps take you
            from profile to growth — with the tools, network, and data to back
            every decision.
          </motion.p>
        </motion.div>

        {/* Steps container */}
        <div className="relative">
          {/* Desktop connecting line — sits behind the step icons */}
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-[52px] hidden lg:block"
            aria-hidden="true"
          >
            {/* Track */}
            <div className="h-px w-full bg-[#1a1a1a]" />
            {/* Animated amber-to-violet fill */}
            <motion.div
              initial="hidden"
              animate={lineInView ? "visible" : "hidden"}
              variants={lineVariants}
              className="absolute inset-0 h-px origin-left bg-gradient-to-r from-[#4D8EFF] via-[#8b5cf6] to-[#4D8EFF]/30"
            />
          </div>

          {/* Steps grid */}
          <motion.div
            ref={stepsRef}
            initial="hidden"
            animate={stepsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6"
          >
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={
            stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-[#4D8EFF]/20 bg-[#4D8EFF]/10 px-6 py-3 text-sm font-semibold text-[#4D8EFF] transition-all duration-200 hover:border-[#4D8EFF]/40 hover:bg-[#4D8EFF]/20"
          >
            Get started — it&apos;s free
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
