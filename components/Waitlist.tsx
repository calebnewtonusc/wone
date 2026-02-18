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
    <section id="waitlist" className="relative bg-blue-600 py-28 px-6 overflow-hidden">
      {/* Subtle noise/texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Apply for Early Access.
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-md mx-auto">
            Join 500+ founders on the waitlist. We&apos;re onboarding a select group for our Q2 2026 beta launch. Free during beta.
          </p>

          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex flex-col items-center gap-3 py-6"
              >
                <CheckCircle2 size={40} className="text-white" />
                <p className="text-xl font-semibold text-white">You&apos;re on the list!</p>
                <p className="text-blue-100 text-sm">We&apos;ll be in touch when your spot opens up.</p>
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
                  className="flex-1 px-4 py-3 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 bg-white hover:bg-blue-50 px-6 py-3 rounded-xl transition-colors duration-150 disabled:opacity-70 whitespace-nowrap"
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

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {["500+ founders waitlisted", "Q2 2026 beta", "Free during beta"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-blue-200" />
                <span className="text-xs text-blue-100">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-white border border-white/30 hover:border-white/60 px-5 py-2.5 rounded-xl transition-colors duration-150"
            >
              Schedule a Demo
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white border border-white/30 hover:border-white/60 px-5 py-2.5 rounded-xl transition-colors duration-150"
            >
              Donate Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
