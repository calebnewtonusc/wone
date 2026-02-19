"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

export default function TopBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("wone-banner-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("wone-banner-dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] text-white text-sm font-medium flex items-center justify-center gap-3 py-2.5 px-4 text-center" style={{ background: "#312e81" }}>
      <span className="text-blue-200 font-bold tracking-widest text-[10px] uppercase hidden sm:inline">
        Beta
      </span>
      <span>Applications are open — free for early-stage SoCal founders.</span>
      <a
        href="#waitlist"
        className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:no-underline whitespace-nowrap"
      >
        Apply now <ArrowRight size={12} />
      </a>
      <button
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X size={15} />
      </button>
    </div>
  );
}
