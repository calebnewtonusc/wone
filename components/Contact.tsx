"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Twitter, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
type FormState = "idle" | "loading" | "success";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries, partnership opportunities, and media requests.",
    cta: "hello@woneportal.com",
    href: "mailto:hello@woneportal.com",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Follow Wone for platform updates, industry news, and founder resources.",
    cta: "Follow on LinkedIn",
    href: "https://linkedin.com/company/wone",
    color: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
  {
    icon: Twitter,
    title: "Twitter / X",
    description: "Get real-time updates on the SoCal startup ecosystem and platform announcements.",
    cta: "@woneportal",
    href: "https://twitter.com/woneportal",
    color: "#111827",
    bg: "#F9FAFB",
    border: "#E5E7EB",
  },
];

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [name,  setName]  = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState !== "idle") return;
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <section id="contact" ref={ref} className="bg-white py-28 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            We&apos;d love to hear from you.
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            Whether you&apos;re a founder, investor, advisor, or potential partner — reach out and let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="space-y-4"
          >
            {contactOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.title}
                  href={opt.href}
                  target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border"
                    style={{ background: opt.bg, borderColor: opt.border }}
                  >
                    <Icon size={20} style={{ color: opt.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 mb-1">{opt.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-2">{opt.description}</p>
                    <span className="text-sm font-semibold group-hover:underline" style={{ color: opt.color }}>
                      {opt.cta} →
                    </span>
                  </div>
                </a>
              );
            })}

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-sm font-bold text-blue-900 mb-1">Want to donate to Wone?</p>
              <p className="text-sm text-blue-700 leading-relaxed">
                Wone is building public infrastructure for SoCal&apos;s startup ecosystem. Contributions help us keep the platform free for early-stage founders.
              </p>
              <a
                href="mailto:donate@woneportal.com"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                Learn about donating <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 bg-gray-50 rounded-2xl border border-gray-200 p-12">
                <CheckCircle2 size={44} className="text-blue-600" />
                <p className="text-xl font-bold text-gray-900">Message sent!</p>
                <p className="text-gray-500 text-sm">We typically respond within 1–2 business days.</p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-sm text-blue-600 font-semibold hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@startup.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about yourself and how we can help..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3.5 rounded-xl transition-colors disabled:opacity-70"
                >
                  {formState === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <ArrowRight size={15} /></>
                  )}
                </button>
                <p className="text-xs text-gray-400 text-center">We typically respond within 1–2 business days.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
