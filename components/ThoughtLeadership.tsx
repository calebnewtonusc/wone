"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Newspaper, Mic2, Megaphone, Quote } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillars = [
  {
    icon: Newspaper,
    title: "Content & Media",
    description:
      "Newsletters, podcast placements, and founder spotlights that drive engagement and establish Wone as the essential resource for SoCal founders.",
    tags: ["Newsletter", "Podcast", "Founder Spotlights"],
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
    iconBg: "rgba(245,158,11,0.12)",
  },
  {
    icon: Mic2,
    title: "Event Presence",
    description:
      "Speaking slots, panel discussions, and stage time at LA Tech Week, Hustle Con, and Web Summit — where the decisions get made.",
    tags: ["LA Tech Week", "Hustle Con", "Web Summit"],
    accent: "#8b5cf6",
    accentBg: "rgba(139,92,246,0.08)",
    accentBorder: "rgba(139,92,246,0.2)",
    iconBg: "rgba(139,92,246,0.12)",
  },
  {
    icon: Megaphone,
    title: "PR & Distribution",
    description:
      "Targeted press coverage in TechCrunch, Forbes, and regional startup media, amplifying Wone's story to the audiences that matter most.",
    tags: ["TechCrunch", "Forbes", "Regional Media"],
    accent: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
    accentBorder: "rgba(16,185,129,0.2)",
    iconBg: "rgba(16,185,129,0.12)",
  },
];

const timelineSteps = [
  {
    label: "Q1",
    title: "Foundation",
    description:
      "Build core content engine, secure initial media partnerships, and establish brand identity.",
    active: false,
  },
  {
    label: "Q2",
    title: "Launch",
    description:
      "Public debut with coordinated PR push, event debuts, and newsletter launch to target audience.",
    active: true,
  },
  {
    label: "Q3",
    title: "Scale",
    description:
      "Expand distribution, grow event presence, and amplify earned media into flywheel growth.",
    active: false,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
};

export default function ThoughtLeadership() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#030712" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-1/4 w-[700px] h-[400px] rounded-full opacity-8 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, #8b5cf620 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full opacity-8 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, #f59e0b15 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 mb-5"
          >
            <Megaphone className="w-4 h-4" style={{ color: "#8b5cf6" }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#8b5cf6" }}
            >
              Thought Leadership
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ color: "#f9fafb" }}
          >
            Building Credibility.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #8b5cf6, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Driving Conversations.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#9ca3af" }}
          >
            Our Q2 launch strategy positions Wone as the defining voice for the
            next generation of startup infrastructure.
          </motion.p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative rounded-2xl border p-7 group hover:scale-[1.02] transition-transform duration-300 flex flex-col"
                style={{
                  background: "#111827",
                  borderColor: pillar.accentBorder,
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-7 right-7 h-px rounded-full"
                  style={{ background: pillar.accent, opacity: 0.4 }}
                />

                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                  style={{ background: pillar.iconBg }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: pillar.accent }}
                  />
                </div>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#f9fafb" }}
                >
                  {pillar.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6 flex-1"
                  style={{ color: "#9ca3af" }}
                >
                  {pillar.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: pillar.accentBg,
                        color: pillar.accent,
                        border: `1px solid ${pillar.accentBorder}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="mb-20">
          <motion.h3
            className="text-center text-sm font-semibold uppercase tracking-widest mb-12"
            style={{ color: "#4b5563" }}
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Execution Timeline
          </motion.h3>

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-0">
            {timelineSteps.map((step, i) => (
              <div
                key={step.label}
                className="flex md:flex-1 flex-col md:flex-row items-start md:items-center"
              >
                {/* Step node + content */}
                <motion.div
                  className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-4 flex-1 md:text-center px-0 md:px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    timelineInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                >
                  {/* Node */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div
                      className="relative flex items-center justify-center w-14 h-14 rounded-2xl font-black text-lg border-2 transition-all duration-300"
                      style={
                        step.active
                          ? {
                              background: "#f59e0b",
                              borderColor: "#f59e0b",
                              color: "#030712",
                              boxShadow: "0 0 24px rgba(245,158,11,0.4)",
                            }
                          : {
                              background: "#111827",
                              borderColor: "#1f2937",
                              color: "#4b5563",
                            }
                      }
                    >
                      {step.active && (
                        <div
                          className="absolute inset-0 rounded-2xl animate-pulse opacity-30"
                          style={{ background: "#f59e0b" }}
                        />
                      )}
                      <span className="relative">{step.label}</span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 md:flex-none">
                    <p
                      className="font-bold text-base mb-1.5"
                      style={{
                        color: step.active ? "#f9fafb" : "#6b7280",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-xs leading-relaxed max-w-[180px]"
                      style={{ color: step.active ? "#9ca3af" : "#4b5563" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connector line between steps */}
                {i < timelineSteps.length - 1 && (
                  <motion.div
                    className="hidden md:block flex-shrink-0 mx-2"
                    initial={{ scaleX: 0 }}
                    animate={
                      timelineInView ? { scaleX: 1 } : { scaleX: 0 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                    style={{ transformOrigin: "left" }}
                  >
                    <div
                      className="w-16 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, #f59e0b40, #8b5cf640)",
                      }}
                    />
                  </motion.div>
                )}

                {/* Mobile vertical connector */}
                {i < timelineSteps.length - 1 && (
                  <div
                    className="md:hidden w-px h-8 ml-7"
                    style={{ background: "#1f2937" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quote callout */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-2xl border p-10 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #111827 0%, #0d1117 100%)",
            borderColor: "#1f2937",
          }}
        >
          {/* Accent bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
            style={{
              background: "linear-gradient(180deg, #f59e0b, #8b5cf6)",
            }}
          />

          {/* Background quote mark */}
          <Quote
            className="absolute top-6 right-8 w-20 h-20 opacity-[0.04]"
            style={{ color: "#f9fafb" }}
            aria-hidden="true"
          />

          <div className="flex items-start gap-5">
            <div
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl mt-0.5"
              style={{ background: "rgba(245,158,11,0.12)" }}
            >
              <Quote className="w-5 h-5" style={{ color: "#f59e0b" }} />
            </div>

            <div>
              <p
                className="text-xl md:text-2xl font-semibold leading-snug mb-5 italic"
                style={{ color: "#f9fafb" }}
              >
                "Thought leadership isn't marketing — it's proof of category
                ownership."
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-px"
                  style={{ background: "#f59e0b" }}
                />
                <span
                  className="text-sm font-medium uppercase tracking-widest"
                  style={{ color: "#9ca3af" }}
                >
                  Wone Go-to-Market Principle
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
