"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
type State = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state !== "idle") return;
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
      setEmail("");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #1e1b4b 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Ready to Transform Your<br />Startup Journey?
          </h2>
          <p className="text-lg text-indigo-200 mb-10 max-w-md mx-auto leading-relaxed">
            We&apos;re onboarding a select group of SoCal founders for our Q2 2026 beta launch. Free during beta — no credit card required.
          </p>

          <AnimatePresence mode="wait">
            {state === "success" ? (
              <m.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex flex-col items-center gap-3 py-6"
              >
                <CheckCircle2 size={40} className="text-white" />
                <p className="text-xl font-semibold text-white">You&apos;re on the list!</p>
                <p className="text-indigo-200 text-sm">We&apos;ll be in touch when your spot opens up.</p>
              </m.div>
            ) : (
              <m.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <m.form
                  onSubmit={handleSubmit}
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
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-indigo-900 bg-white hover:bg-indigo-50 px-6 py-3 rounded-xl transition-colors disabled:opacity-70 whitespace-nowrap"
                  >
                    {state === "loading" ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : (
                      <>Apply for Early Access <ArrowRight size={15} /></>
                    )}
                  </button>
                </m.form>
                {state === "error" && (
                  <m.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-1.5 mt-3 text-sm text-red-200"
                  >
                    <AlertCircle size={14} />
                    Something went wrong — please try again.
                  </m.p>
                )}
              </m.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              "No credit card required",
              "14-day free trial",
              "Cancel anytime",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-indigo-300" />
                <span className="text-xs text-indigo-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white/60 px-6 py-3 rounded-xl transition-colors"
            >
              Schedule a Demo <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-indigo-200 hover:text-white border border-white/20 hover:border-white/40 px-5 py-3 rounded-xl transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
