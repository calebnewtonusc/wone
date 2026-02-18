"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    initials: "AC",
    bio: "Former operator and startup veteran with exits in enterprise SaaS. Passionate about building the infrastructure layer for the next generation of founders.",
    gradientFrom: "#4D8EFF",
    gradientTo: "#ef4444",
    linkedinHref: "#",
  },
  {
    name: "Jordan Rivera",
    role: "Head of Product",
    initials: "JR",
    bio: "Product leader with experience scaling 0-to-1 at two Y Combinator companies. Obsessed with founder-first design and removing friction from the startup journey.",
    gradientFrom: "#8b5cf6",
    gradientTo: "#3b82f6",
    linkedinHref: "#",
  },
  {
    name: "Maya Patel",
    role: "Investor Relations",
    initials: "MP",
    bio: "Spent five years on the LP and GP side of venture. Brings a deep network across SoCal angel syndicates, seed funds, and strategic corporate investors.",
    gradientFrom: "#10b981",
    gradientTo: "#06b6d4",
    linkedinHref: "#",
  },
  {
    name: "Sam Torres",
    role: "Lead Engineer",
    initials: "ST",
    bio: "Full-stack engineer and systems thinker. Previously built data infrastructure at scale for two Series B companies. Leads all technical architecture at Wone.",
    gradientFrom: "#2563EB",
    gradientTo: "#8b5cf6",
    linkedinHref: "#",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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
      delay: i * 0.1,
      ease: EASE,
    },
  }),
};

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  gradientFrom: string;
  gradientTo: string;
  linkedinHref: string;
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative rounded-2xl border p-7 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
      style={{
        background: "#0f0f0f",
        borderColor: "#1a1a1a",
      }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top, ${member.gradientFrom}08 0%, transparent 70%)`,
        }}
      />

      {/* Avatar */}
      <div className="relative mb-6">
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-110"
          style={{
            background: `radial-gradient(circle, ${member.gradientFrom}50, ${member.gradientTo}30)`,
          }}
        />

        {/* Ring border */}
        <div
          className="relative w-24 h-24 rounded-full p-0.5"
          style={{
            background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
          }}
        >
          {/* Inner avatar */}
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${member.gradientFrom}30, ${member.gradientTo}30)`,
            }}
          >
            <span
              className="text-2xl font-black tracking-tight select-none"
              style={{
                background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {member.initials}
            </span>
          </div>
        </div>
      </div>

      {/* Name and role */}
      <div className="relative mb-4">
        <h3
          className="text-lg font-bold mb-1.5 leading-tight"
          style={{ color: "#ffffff" }}
        >
          {member.name}
        </h3>
        <p
          className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full inline-block"
          style={{
            color: member.gradientFrom,
            background: `${member.gradientFrom}12`,
            border: `1px solid ${member.gradientFrom}25`,
          }}
        >
          {member.role}
        </p>
      </div>

      {/* Bio */}
      <p
        className="relative text-sm leading-relaxed mb-6 flex-1"
        style={{ color: "#a1a1a1" }}
      >
        {member.bio}
      </p>

      {/* LinkedIn CTA */}
      <motion.a
        href={member.linkedinHref}
        className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-colors duration-200"
        style={{
          background: "#1a1a1a",
          borderColor: "#374151",
          color: "#a1a1a1",
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={(e) => e.preventDefault()}
        aria-label={`${member.name} on LinkedIn`}
      >
        <Linkedin className="w-4 h-4" />
        <span>LinkedIn</span>
        <ExternalLink className="w-3 h-3 opacity-60" />
      </motion.a>
    </motion.div>
  );
}

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, #4D8EFF 0%, #8b5cf6 60%, transparent 80%)",
          }}
        />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

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
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background: "linear-gradient(135deg, #4D8EFF, #8b5cf6)",
              }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#a1a1a1" }}
            >
              The Team
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            Built by Operators.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #4D8EFF, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              For Founders.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "#a1a1a1" }}
          >
            We've been in the rooms you're trying to get into. Wone is built by
            people who understand both sides of the table.
          </motion.p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="text-center mt-16"
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div
            className="inline-flex items-center gap-4 px-7 py-4 rounded-2xl border"
            style={{
              background: "#0f0f0f",
              borderColor: "#1a1a1a",
            }}
          >
            <div className="flex -space-x-2">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
                    borderColor: "#0f0f0f",
                    color: "#000000",
                  }}
                >
                  {member.initials[0]}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "#a1a1a1" }}>
              <span className="font-semibold" style={{ color: "#ffffff" }}>
                4 operators
              </span>{" "}
              building what they wish existed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
