"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "CremePay",
    subtitle: "Gateway de Pagamentos",
    description:
      "Sistema completo de intermediação financeira, com API, Dashboard, antifraude e integrações.",
    tags: ["Fintech", "API", "Dashboard", "Antifraude"],
    color: "#6366f1",
    number: "01",
  },
  {
    id: 2,
    title: "iGaming Legalizado",
    subtitle: "Plataformas White-Label",
    description:
      "Arquitetura para operações de apostas adequadas ao novo marco regulatório brasileiro.",
    tags: ["iGaming", "White-Label", "Regulatório", "Escalável"],
    color: "#a855f7",
    number: "02",
  },
  {
    id: 3,
    title: "Automação N8N",
    subtitle: "Fluxos Inteligentes",
    description:
      "Fluxos inteligentes para CRMs, pós-venda, funis e integrações complexas entre sistemas.",
    tags: ["N8N", "Automação", "CRM", "Integração"],
    color: "#ec4899",
    number: "03",
  },
  {
    id: 4,
    title: "FunilQIC Tracking",
    subtitle: "Rastreamento Avançado",
    description:
      "Ferramenta própria de rastreamento avançado (SS Tracking + Eventos + APIs).",
    tags: ["Tracking", "Server-Side", "Analytics", "APIs"],
    color: "#3b82f6",
    number: "04",
  },
  {
    id: 5,
    title: "NatLiving",
    subtitle: "E-commerce",
    description:
      "E-commerce otimizado com integrações personalizadas e automações de operação.",
    tags: ["E-commerce", "Automação", "Performance", "UX"],
    color: "#10b981",
    number: "05",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 md:py-48 grid-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-mono">
            03 / Projetos
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Projetos de{" "}
              <span className="gradient-text">Destaque</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/40 max-w-md text-sm"
          >
            Cada projeto é uma solução completa pensada para escalabilidade,
            performance e resultado real de negócios.
          </motion.p>
        </div>

        {/* Project list */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative border-t border-white/5 py-8 md:py-12 transition-all duration-500"
              data-cursor="View"
            >
              {/* Hover background glow */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 -mx-6 md:-mx-12 rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at center, ${project.color}08 0%, transparent 70%)`,
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                {/* Number */}
                <span
                  className="text-5xl md:text-7xl font-bold transition-colors duration-500"
                  style={{
                    color:
                      hoveredId === project.id
                        ? project.color
                        : "rgba(255,255,255,0.05)",
                  }}
                >
                  {project.number}
                </span>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500"
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-sm text-white/30 font-light">
                      — {project.subtitle}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm md:text-base font-light max-w-lg">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1.5 border border-white/10 rounded-full text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <motion.div
                  className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300"
                  animate={{
                    x: hoveredId === project.id ? 5 : 0,
                    rotate: hoveredId === project.id ? -45 : 0,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-white/40 group-hover:text-white transition-colors"
                  >
                    <path
                      d="M1 8h14M9 2l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-white/5" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Silveira-Software?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-sm font-medium tracking-wider uppercase text-white/70 hover:bg-white hover:text-black transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="GitHub"
          >
            Ver todos no GitHub
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1 8h14M9 2l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
