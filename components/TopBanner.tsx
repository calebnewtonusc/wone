"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative z-50 bg-blue-600 text-white text-sm font-medium flex items-center justify-center gap-3 py-2.5 px-4 text-center">
      <span className="text-blue-200 font-semibold tracking-widest text-[10px] uppercase hidden sm:inline">
        Beta
      </span>
      <span>
        Applications are open — free for early-stage SoCal founders.
      </span>
      <a
        href="#waitlist"
        className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:no-underline whitespace-nowrap"
      >
        Apply now <ArrowRight size={12} />
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <X size={15} />
      </button>
    </div>
  );
}
