"use client";

import { useState, useRef } from "react";
import { m, useInView, AnimatePresence } from "framer-motion";
import { X, MapPin, DollarSign, TrendingUp, Users } from "lucide-react";
import { EASE, BRAND, ACCENT } from "@/lib/brand";

type InvestorNode = {
  id: string;
  name: string;
  type: string;
  stage: string;
  check: string;
  focus: string[];
  location: string;
  color: string;
  portfolio: string[];
  totalDeals: number;
  avgReturn: string;
  x: number; // percentage
  y: number; // percentage
  size: "sm" | "md" | "lg";
};

const NODES: InvestorNode[] = [
  {
    id: "alta",
    name: "Alta Capital",
    type: "VC Fund",
    stage: "Series A–B",
    check: "$500K – $5M",
    focus: ["AI", "SaaS", "Fintech"],
    location: "Santa Monica",
    color: "#4f46e5",
    portfolio: ["Acme AI", "FinStream", "DataLayer"],
    totalDeals: 23,
    avgReturn: "3.2x",
    x: 22,
    y: 30,
    size: "lg",
  },
  {
    id: "sarah",
    name: "Sarah Kim",
    type: "Angel Investor",
    stage: "Pre-Seed / Seed",
    check: "$25K – $150K",
    focus: ["Consumer", "Marketplace"],
    location: "Los Angeles",
    color: "#7C3AED",
    portfolio: ["ShopLocal", "NestFinder"],
    totalDeals: 14,
    avgReturn: "4.1x",
    x: 55,
    y: 20,
    size: "md",
  },
  {
    id: "socal",
    name: "SoCal Ventures",
    type: "Regional VC",
    stage: "Seed / Series A",
    check: "$100K – $1M",
    focus: ["Deep Tech", "Climate"],
    location: "San Diego",
    color: "#0891B2",
    portfolio: ["SolarGrid", "ClimateAI", "OceanTech"],
    totalDeals: 31,
    avgReturn: "2.8x",
    x: 75,
    y: 35,
    size: "lg",
  },
  {
    id: "westwood",
    name: "Westwood Ventures",
    type: "VC Fund",
    stage: "Series A–C",
    check: "$1M – $10M",
    focus: ["B2B SaaS", "Enterprise"],
    location: "Westwood",
    color: "#059669",
    portfolio: ["EnterpriseOS", "B2B Suite"],
    totalDeals: 18,
    avgReturn: "3.7x",
    x: 38,
    y: 58,
    size: "lg",
  },
  {
    id: "pacific",
    name: "Pacific Labs",
    type: "Corporate Strategic",
    stage: "All Stages",
    check: "$250K – $3M",
    focus: ["Biotech", "AgTech"],
    location: "Orange County",
    color: "#DC2626",
    portfolio: ["BioFarm", "AgriSense"],
    totalDeals: 11,
    avgReturn: "2.4x",
    x: 62,
    y: 62,
    size: "md",
  },
  {
    id: "techangels",
    name: "TechAngels OC",
    type: "Angel Network",
    stage: "Pre-Seed",
    check: "$10K – $75K",
    focus: ["Consumer Tech", "EdTech"],
    location: "Irvine",
    color: "#D97706",
    portfolio: ["EduPlatform", "ConsumerApp"],
    totalDeals: 42,
    avgReturn: "2.1x",
    x: 82,
    y: 70,
    size: "sm",
  },
  {
    id: "mucker",
    name: "Mucker Capital",
    type: "Seed VC",
    stage: "Seed",
    check: "$100K – $500K",
    focus: ["SaaS", "Marketplace", "Dev Tools"],
    location: "Santa Monica",
    color: "#4338ca",
    portfolio: ["ToolBox", "MarketplaceCo"],
    totalDeals: 56,
    avgReturn: "3.5x",
    x: 18,
    y: 65,
    size: "md",
  },
  {
    id: "bonfire",
    name: "Bonfire Ventures",
    type: "Early-Stage VC",
    stage: "Pre-Seed / Seed",
    check: "$100K – $2M",
    focus: ["B2B SaaS", "Commerce", "Future of Work"],
    location: "Los Angeles",
    color: "#EA580C",
    portfolio: ["WorkOS", "CommercePlus"],
    totalDeals: 29,
    avgReturn: "4.0x",
    x: 44,
    y: 78,
    size: "sm",
  },
];

const sizeMap = {
  sm: { outer: 36, dot: 8, font: 11 },
  md: { outer: 48, dot: 10, font: 13 },
  lg: { outer: 60, dot: 12, font: 15 },
};

function NodeTooltip({ node, onClose }: { node: InvestorNode; onClose: () => void }) {
  return (
    <m.div
      key={node.id}
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 8 }}
      transition={{ duration: 0.2, ease: EASE }}
      className="absolute z-30 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <div className="p-5 border-b border-gray-100" style={{ background: `${node.color}08` }}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: node.color }}
            >
              {node.name[0]}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 leading-tight">{node.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{node.type}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <MapPin size={11} style={{ color: node.color }} />
          {node.location}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        {/* Key stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: TrendingUp, label: "Deals", value: node.totalDeals.toString() },
            { icon: DollarSign, label: "Avg Return", value: node.avgReturn },
            { icon: Users, label: "Stage", value: node.stage.split(" ")[0] },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-gray-50 rounded-xl p-2.5">
              <p className="text-sm font-bold text-gray-900">{stat.value}</p>
              <p className="text-[9px] text-gray-400 font-medium mt-0.5 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Check size */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400 font-medium">Check Size</span>
          <span className="font-semibold text-gray-800">{node.check}</span>
        </div>

        {/* Focus tags */}
        <div>
          <p className="text-xs text-gray-400 font-medium mb-2">Focus Areas</p>
          <div className="flex flex-wrap gap-1.5">
            {node.focus.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md border"
                style={{ color: node.color, background: `${node.color}12`, borderColor: `${node.color}30` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="block text-center text-xs font-bold py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
          style={{ background: node.color }}
          onClick={onClose}
        >
          Request Introduction
        </a>
      </div>
    </m.div>
  );
}

export default function InvestorLandscapeMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });
  const [activeNode, setActiveNode] = useState<InvestorNode | null>(null);

  return (
    <div ref={ref} className="relative">
      <m.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="text-xs text-gray-400 text-center mb-4"
      >
        Click any investor node to view details
      </m.p>

      {/* Map container */}
      <div
        className="relative w-full rounded-2xl border border-gray-200 overflow-hidden"
        style={{
          height: 320,
          background: "linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 50%, #f8f9ff 100%)",
        }}
      >
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0" y1={`${(i + 1) * (100 / 7)}%`}
              x2="100%" y2={`${(i + 1) * (100 / 7)}%`}
              stroke="#c7d2fe" strokeWidth="1"
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={`${(i + 1) * (100 / 9)}%`} y1="0"
              x2={`${(i + 1) * (100 / 9)}%`} y2="100%"
              stroke="#c7d2fe" strokeWidth="1"
            />
          ))}
        </svg>

        {/* Region labels */}
        {[
          { label: "Los Angeles", x: "15%", y: "8%" },
          { label: "Orange County", x: "68%", y: "8%" },
          { label: "San Diego", x: "82%", y: "55%" },
        ].map((r) => (
          <div
            key={r.label}
            className="absolute text-[9px] font-bold uppercase tracking-widest text-indigo-300"
            style={{ left: r.x, top: r.y }}
          >
            {r.label}
          </div>
        ))}

        {/* Investor nodes */}
        {NODES.map((node, i) => {
          const s = sizeMap[node.size];
          const isActive = activeNode?.id === node.id;
          return (
            <m.button
              key={node.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EASE }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveNode(isActive ? null : node)}
              className="absolute flex items-center justify-center rounded-full border-2 transition-all duration-200 cursor-pointer"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
                width: s.outer,
                height: s.outer,
                background: isActive ? node.color : `${node.color}20`,
                borderColor: isActive ? node.color : `${node.color}60`,
                boxShadow: isActive ? `0 0 0 4px ${node.color}25, 0 4px 16px ${node.color}40` : undefined,
                zIndex: isActive ? 20 : 10,
              }}
              aria-label={`View ${node.name} details`}
            >
              <div
                className="rounded-full flex items-center justify-center text-white font-bold"
                style={{
                  width: s.dot * 2.5,
                  height: s.dot * 2.5,
                  background: node.color,
                  fontSize: s.font - 3,
                }}
              >
                {node.name[0]}
              </div>
              {/* Label */}
              <div
                className="absolute whitespace-nowrap text-[9px] font-semibold px-1.5 py-0.5 rounded-md"
                style={{
                  top: "calc(100% + 4px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(255,255,255,0.95)",
                  color: node.color,
                  border: `1px solid ${node.color}30`,
                  backdropFilter: "blur(4px)",
                }}
              >
                {node.name.split(" ")[0]}
              </div>
              {/* Pulse ring for active */}
              {isActive && (
                <m.div
                  className="absolute rounded-full border-2 pointer-events-none"
                  style={{ borderColor: `${node.color}40`, inset: -6 }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </m.button>
          );
        })}

        {/* Detail panel */}
        <AnimatePresence>
          {activeNode && (
            <NodeTooltip node={activeNode} onClose={() => setActiveNode(null)} />
          )}
        </AnimatePresence>

        {/* Legend */}
        <div
          className="absolute bottom-3 left-3 flex items-center gap-3 bg-white/90 rounded-xl px-3 py-2 border border-gray-200"
          style={{ backdropFilter: "blur(8px)" }}
        >
          {[
            { label: "VC Fund", size: 14 },
            { label: "Angel", size: 10 },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div className="rounded-full bg-indigo-500" style={{ width: l.size, height: l.size, opacity: 0.7 }} />
              <span className="text-[9px] text-gray-500 font-medium">{l.label}</span>
            </div>
          ))}
          <span className="text-[9px] text-gray-300">|</span>
          <span className="text-[9px] text-gray-400">{NODES.length} of 200+ shown</span>
        </div>
      </div>
    </div>
  );
}
