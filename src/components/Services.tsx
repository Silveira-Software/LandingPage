"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "🏗️",
    title: "Sistemas Completos",
    description: "SaaS, fintech, games e automação — do conceito ao deploy.",
  },
  {
    icon: "☁️",
    title: "Infra AWS Escalável",
    description: "Arquitetura cloud com EC2, S3, RDS e escalabilidade real.",
  },
  {
    icon: "🔗",
    title: "APIs & WebSockets",
    description: "Criação de APIs REST, websockets e integrações complexas.",
  },
  {
    icon: "⚙️",
    title: "Automação com N8N",
    description: "Fluxos inteligentes que eliminam trabalho manual.",
  },
  {
    icon: "📡",
    title: "Server-Side Tracking",
    description: "Rastreamento avançado com APIs de Conversão (Meta/TikTok).",
  },
  {
    icon: "📉",
    title: "Otimização de Processos",
    description: "Redução de custos operacionais e consultoria técnica.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-48" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-mono">
            04 / Serviços
          </span>
        </motion.div>

        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: 100 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Como posso ajudar{" "}
            <span className="gradient-text">sua empresa?</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all duration-500 overflow-hidden"
              data-cursor="View"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/0 to-transparent group-hover:from-indigo-500/10 transition-all duration-500 rounded-bl-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
