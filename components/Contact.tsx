"use client";

import { useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { Mail, Linkedin, Twitter, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
type FormState = "idle" | "loading" | "success" | "error";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries, partnership opportunities, and media requests.",
    cta: siteConfig.email.hello,
    href: `mailto:${siteConfig.email.hello}`,
    color: "#4f46e5",
    bg: "#eef2ff",
    border: "#c7d2fe",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Follow Wone for platform updates, industry news, and founder resources.",
    cta: "Follow on LinkedIn",
    href: siteConfig.social.linkedinUrl,
    color: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
  {
    icon: Twitter,
    title: "Twitter / X",
    description: "Get real-time updates on the SoCal startup ecosystem and platform announcements.",
    cta: siteConfig.social.twitterHandle,
    href: siteConfig.social.twitterUrl,
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    fontSize: 14,
    color: "#111827",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ background: "#fff", borderTop: "1px solid #f3f4f6", padding: "112px 24px" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4338ca", marginBottom: 12 }}>
            Contact
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#111827", margin: "0 0 16px" }}>
            We&apos;d love to hear from you.
          </h2>
          <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
            Whether you&apos;re a founder, investor, advisor, or potential partner — reach out and let&apos;s talk.
          </p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact options */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {contactOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.title}
                  href={opt.href}
                  target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 20, borderRadius: 16, border: "1px solid #e5e7eb", textDecoration: "none" }}
                >
                  <div
                    style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: opt.bg, border: `1px solid ${opt.border}` }}
                  >
                    <Icon size={20} style={{ color: opt.color }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{opt.title}</p>
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, marginBottom: 8 }}>{opt.description}</p>
                    <span style={{ fontSize: 14, fontWeight: 600, color: opt.color }}>{opt.cta} →</span>
                  </div>
                </a>
              );
            })}

            <div style={{ background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 16, padding: 20 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#1e1b4b", marginBottom: 4 }}>Want to donate to Wone?</p>
              <p style={{ fontSize: 14, color: "#4338ca", lineHeight: 1.65 }}>
                Wone is building public infrastructure for SoCal&apos;s startup ecosystem. Contributions help us keep the platform free for early-stage founders.
              </p>
              <a
                href={`mailto:${siteConfig.email.donate}`}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, fontSize: 14, fontWeight: 600, color: "#4338ca", textDecoration: "none" }}
              >
                Learn about donating <ArrowRight size={13} />
              </a>
            </div>
          </m.div>

          {/* Contact form */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          >
            {formState === "success" ? (
              <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, background: "#f9fafb", borderRadius: 16, border: "1px solid #e5e7eb", padding: 48 }}>
                <CheckCircle2 size={44} style={{ color: "#4f46e5" }} />
                <p style={{ fontSize: 20, fontWeight: 700, color: "#111827" }}>Message sent!</p>
                <p style={{ fontSize: 14, color: "#6b7280" }}>We typically respond within 1–2 business days.</p>
                <button
                  onClick={() => setFormState("idle")}
                  style={{ fontSize: 14, fontWeight: 600, color: "#4f46e5", background: "none", border: "none", cursor: "pointer", marginTop: 8 }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }} htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }} htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@startup.com"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about yourself and how we can help..."
                    required
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>
                {formState === "error" && (
                  <p style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#dc2626" }}>
                    <AlertCircle size={14} />
                    Something went wrong — please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#fff", background: "#4f46e5", padding: "14px 24px", borderRadius: 12, border: "none", cursor: "pointer", opacity: formState === "loading" ? 0.7 : 1 }}
                >
                  {formState === "loading" ? (
                    <><Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} /> Sending...</>
                  ) : (
                    <>Send Message <ArrowRight size={15} /></>
                  )}
                </button>
                <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center" }}>We typically respond within 1–2 business days.</p>
              </form>
            )}
          </m.div>
        </div>
      </div>
    </section>
  );
}
