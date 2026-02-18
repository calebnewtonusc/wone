"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Users } from "lucide-react";

// ─── Cubic-bezier expressed as a named easing string framer-motion accepts ──
// framer-motion v12 strict types require Easing[], not raw number[].
// Use the string form which is always valid.
const EASE_OUT_EXPO = "easeOut" as const;

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function GradientOrb({
  className,
  color,
  size,
  delay = 0,
}: {
  className: string;
  color: string;
  size: number;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(80px)",
      }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              scale: [1, 1.12, 1],
              opacity: [0.55, 0.75, 0.55],
            }
      }
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function GeometricShape({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: [0, -14, 0],
              rotate: [0, 6, 0],
              opacity: [0.4, 0.65, 0.4],
            }
      }
      transition={{
        duration: 6 + delay * 1.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// ─── Stat pill ────────────────────────────────────────────────────────────────

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Founders",
    iconColor: "text-[#f59e0b]",
  },
  {
    icon: TrendingUp,
    value: "120+",
    label: "Investors",
    iconColor: "text-[#8b5cf6]",
  },
  {
    icon: Zap,
    value: "$2M+",
    label: "Facilitated",
    iconColor: "text-[#f59e0b]",
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030712] pt-16"
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#f9fafb 1px, transparent 1px), linear-gradient(90deg, #f9fafb 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Primary amber orb — top left */}
        <GradientOrb
          className="-top-32 -left-24"
          color="radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 70%)"
          size={700}
          delay={0}
        />

        {/* Violet orb — top right */}
        <GradientOrb
          className="-top-20 right-0"
          color="radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)"
          size={600}
          delay={1.5}
        />

        {/* Subtle center bloom */}
        <GradientOrb
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          color="radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)"
          size={900}
          delay={3}
        />

        {/* Floating geometric accents */}
        <GeometricShape
          className="top-24 right-[10%] w-12 h-12 border border-[#f59e0b]/20 rotate-45 rounded-sm"
          delay={0}
        />
        <GeometricShape
          className="top-1/3 left-[6%] w-20 h-20 border border-[#8b5cf6]/15 rounded-full"
          delay={1}
        />
        <GeometricShape
          className="bottom-32 right-[8%] w-8 h-8 border border-[#f59e0b]/25 rotate-12 rounded-sm"
          delay={2}
        />
        <GeometricShape
          className="top-36 left-[18%] w-5 h-5 bg-[#8b5cf6]/20 rotate-45 rounded-sm"
          delay={0.5}
        />
        <GeometricShape
          className="bottom-40 left-[12%] w-14 h-14 border border-[#f59e0b]/10 rounded-full"
          delay={1.8}
        />
        <GeometricShape
          className="top-1/2 right-[15%] w-3 h-3 bg-[#f59e0b]/30 rounded-full"
          delay={0.8}
        />
        <GeometricShape
          className="top-[55%] right-[18%] w-2 h-2 bg-[#8b5cf6]/30 rounded-full"
          delay={1.2}
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Beta badge */}
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-[#1f2937] bg-[#111827]/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f59e0b] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f59e0b]" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-[#9ca3af]">
              Now in Beta
            </span>
            <span className="h-3.5 w-px bg-[#1f2937]" />
            <span className="text-xs font-semibold tracking-wide text-[#f59e0b]">
              Early Access Open
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f9fafb] leading-[1.08] mb-6"
        >
          Where Startups{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
              Launch.
            </span>
          </span>{" "}
          <br className="hidden sm:block" />
          Where Capital{" "}
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
            Flows.
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#f9fafb] to-[#9ca3af] bg-clip-text text-transparent">
            One Platform.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-[#9ca3af] leading-relaxed mb-10"
        >
          Wone connects ambitious founders with the right investors at the right
          moment. Streamline your fundraising, track traction, and close rounds
          faster — all in one intelligent workspace built for the next generation
          of startups.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-3 mb-14"
        >
          {/* Primary CTA */}
          <a
            href="#waitlist"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#030712] rounded-xl overflow-hidden shadow-lg shadow-amber-900/25 hover:shadow-amber-900/40 transition-shadow duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-all duration-300 group-hover:from-[#fbbf24] group-hover:to-[#f59e0b]" />
            <span className="relative z-10">Get Early Access</span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          {/* Ghost CTA */}
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#9ca3af] rounded-xl border border-[#1f2937] bg-[#111827]/60 backdrop-blur-sm hover:text-[#f9fafb] hover:border-[#374151] hover:bg-[#1f2937]/60 transition-all duration-200"
          >
            See How It Works
            <ArrowRight
              size={16}
              className="opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.55 + i * 0.1,
                  duration: 0.5,
                  ease: EASE_OUT_EXPO,
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#1f2937] bg-[#111827]/70 backdrop-blur-sm hover:border-[#374151] hover:bg-[#1f2937]/60 transition-all duration-200 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/[0.08] transition-colors duration-200">
                  <Icon size={15} className={stat.iconColor} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-base font-bold text-[#f9fafb] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#9ca3af] leading-none mt-0.5">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* ── Bottom fade-out into page ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold text-[#4b5563]">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#4b5563] to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
