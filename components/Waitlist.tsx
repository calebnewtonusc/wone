"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type State = "idle" | "loading" | "success";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state !== "idle") return;
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
    setEmail("");
  };

  return (
    <section
      id="waitlist"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#000", borderTop: "1px solid #1a1a1a" }}
    >
      {/* Subtle blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.1) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">Early Access</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Be first to launch on Wone.
          </h2>
          <p className="text-base text-[#71717a] mb-10 max-w-md mx-auto">
            Join 500+ founders on the waitlist. We&apos;re onboarding a select group of founders for our Q2 2026 beta launch.
          </p>

          {/* Form */}
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex flex-col items-center gap-3 py-8"
              >
                <CheckCircle2 size={36} className="text-blue-500" />
                <p className="text-lg font-semibold text-white">You&apos;re on the list!</p>
                <p className="text-sm text-[#71717a]">We&apos;ll reach out when your spot opens up.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@startup.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder:text-[#52525b] border border-[#222] focus:border-blue-500/60 focus:outline-none transition-colors duration-150"
                  style={{ background: "#0a0a0a" }}
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-all duration-150 disabled:opacity-70"
                  style={{ background: "#2563EB" }}
                  onMouseEnter={(e) => { if (state === "idle") e.currentTarget.style.background = "#1d4ed8"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#2563EB"; }}
                >
                  {state === "loading" ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <>
                      Request Access
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              "500+ founders waitlisted",
              "Q2 2026 beta launch",
              "Free during beta",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                <span className="text-xs text-[#52525b]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
