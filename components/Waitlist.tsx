"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Rocket, Sparkles } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const trustSignals = [
  {
    icon: Users,
    label: "500+ founders on waitlist",
  },
  {
    icon: Rocket,
    label: "Launch Q2 2026",
  },
  {
    icon: Sparkles,
    label: "Free during beta",
  },
];

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      inputRef.current?.focus();
      return;
    }

    setErrorMessage("");
    setFormState("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1400));

    // In production, replace with real API integration:
    // const res = await fetch("/api/waitlist", { method: "POST", body: JSON.stringify({ email }) });
    // if (!res.ok) { setFormState("error"); return; }

    setFormState("success");
  };

  return (
    <section
      id="waitlist"
      className="relative w-full overflow-hidden py-32 px-4"
      style={{
        background: "linear-gradient(to bottom, #111827 0%, #030712 100%)",
      }}
    >
      {/* Amber glow orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Violet accent orb */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(245,158,11,0.5), rgba(139,92,246,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
            Early Access Open
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#f9fafb] sm:text-5xl md:text-6xl"
        >
          Be First.{" "}
          <span
            className="gradient-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f59e0b 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Shape What&apos;s Next.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-base leading-relaxed text-[#9ca3af] sm:text-lg"
        >
          Join the waitlist for early access to Wone&apos;s beta platform.
          Limited spots available for Q2 launch.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-8 py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                >
                  <CheckCircle2
                    className="text-green-400"
                    size={40}
                    strokeWidth={1.5}
                  />
                </motion.div>
                <p className="text-lg font-semibold text-[#f9fafb]">
                  You&apos;re on the list!
                </p>
                <p className="text-sm text-[#9ca3af]">
                  We&apos;ll be in touch before Q2 launch.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-3 sm:flex-row"
                noValidate
              >
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="your@email.com"
                    disabled={formState === "submitting"}
                    aria-label="Email address"
                    className="w-full rounded-xl border border-[#1f2937] bg-[#111827] px-5 py-4 text-[#f9fafb] placeholder-[#4b5563] outline-none ring-0 transition-all duration-200 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 disabled:opacity-50 sm:text-base text-sm"
                    style={{ fontSize: "16px" }}
                  />
                  {errorMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-0 text-xs text-red-400"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "submitting"}
                  whileHover={{ scale: formState === "submitting" ? 1 : 1.03 }}
                  whileTap={{ scale: formState === "submitting" ? 1 : 0.97 }}
                  className="group relative flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 disabled:opacity-70 sm:text-base"
                  style={{
                    background:
                      "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
                    boxShadow: "0 0 30px rgba(245,158,11,0.35)",
                  }}
                >
                  {/* Shimmer */}
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    aria-hidden="true"
                  />

                  {formState === "submitting" ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the Waitlist</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          {trustSignals.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-[#9ca3af]"
            >
              <Icon
                size={15}
                className="shrink-0 text-amber-500"
                strokeWidth={1.8}
              />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
