"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clientSites = [
  {
    name: "Emporium Adega & Tabacaria",
    url: "https://web-emporium-adega-e-tabacaria.vercel.app",
    category: "Tabacaria",
    color: "#f59e0b",
  },
  {
    name: "Point Ah Fonte",
    url: "https://web-point-ah-fonte.vercel.app",
    category: "Estabelecimento",
    color: "#3b82f6",
  },
  {
    name: "Barbearia Carvão",
    url: "https://web-barbearia-carv-o.vercel.app",
    category: "Barbearia",
    color: "#8b5cf6",
  },
  {
    name: "Barbearia do João",
    url: "https://web-barbearia-do-jo-o.vercel.app",
    category: "Barbearia",
    color: "#6366f1",
  },
  {
    name: "Hookah Premium Lounge Bar",
    url: "https://web-hookah-premium-tabacaria-lounge-silveirasoftwares-projects.vercel.app",
    category: "Tabacaria & Lounge",
    color: "#ec4899",
  },
  {
    name: "Oxford Barber",
    url: "https://web-oxford-barber-silveirasoftwares-projects.vercel.app",
    category: "Barbearia",
    color: "#14b8a6",
  },
  {
    name: "Auto Mecânica Corujão",
    url: "https://web-auto-mec-nica-coruj-o.vercel.app",
    category: "Mecânica",
    color: "#f97316",
  },
  {
    name: "Tabacaria Lee",
    url: "https://web-tabacaria-lee.vercel.app",
    category: "Tabacaria",
    color: "#a855f7",
  },
  {
    name: "Barbearia Lima",
    url: "https://web-barbearia-lima.vercel.app",
    category: "Barbearia",
    color: "#06b6d4",
  },
  {
    name: "Pizzaria Sabores da Villa",
    url: "https://web-pizzaria-sabores-da-villa.vercel.app",
    category: "Pizzaria",
    color: "#ef4444",
  },
  {
    name: "Borracharia Cosmes",
    url: "https://borracharia-cosmes.vercel.app",
    category: "Borracharia",
    color: "#22c55e",
  },
  {
    name: "CompNeus",
    url: "https://compneus.vercel.app",
    category: "Automotivo",
    color: "#eab308",
  },
];

export default function ClientSites() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="relative py-32 md:py-48" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-mono">
            05 / Clientes
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Sites para{" "}
              <span className="gradient-text">Clientes</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/40 max-w-md text-sm"
          >
            Sites institucionais modernos e responsivos criados para negócios
            locais — barbearias, tabacarias, pizzarias, mecânicas e mais.
          </motion.p>
        </div>

        {/* Marquee-style infinite scroll row 1 */}
        <div className="relative overflow-hidden mb-5">
          <motion.div
            className="flex gap-5"
            animate={{ x: [0, -3840] }}
            transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
          >
            {[...clientSites, ...clientSites].map((site, i) => (
              <motion.a
                key={`${site.name}-${i}`}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-[300px] p-6 rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-500 block"
                data-cursor="Visit"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${site.color}10 0%, transparent 70%)`,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${site.color}15` }}
                  >
                    <span style={{ color: site.color }}>●</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors mb-1">
                    {site.name}
                  </h3>
                  <span className="text-[10px] text-white/30 tracking-wider uppercase">
                    {site.category}
                  </span>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-6 right-6 text-white/10 group-hover:text-white/40 transition-colors"
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4v6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            ))}
          </motion.div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm">
            <span className="text-white/60 font-semibold">{clientSites.length}+</span>{" "}
            sites institucionais entregues para negócios locais em São Paulo e região
          </p>
        </motion.div>
      </div>
    </section>
  );
}
