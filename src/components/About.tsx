"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "8+", label: "Anos de Experiência" },
  { number: "11", label: "Repositórios" },
  { number: "∞", label: "Soluções Entregues" },
];

const specialties = [
  "Engenharia de Software",
  "Arquitetura & Infraestrutura",
  "Automação Inteligente",
  "Growth & Dados",
  "Visão Estratégica de Negócios",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 md:py-48 grid-bg" ref={ref}>
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-mono">
            01 / Sobre
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left - Main text */}
          <div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
              >
                Código + Negócios.{" "}
                <span className="gradient-text">
                  Não construo apenas sistemas.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/50 text-lg leading-relaxed font-light mb-8"
            >
              Sou Desenvolvedor Full Stack e Fundador da Silveira Software, 
              atuando há mais de 8 anos na construção de sistemas complexos 
              &quot;do zero ao scale&quot;. Construo soluções que geram dinheiro 
              e eliminam atrito operacional.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border-l-2 border-indigo-500 pl-6 text-white/70 italic text-lg"
            >
              &quot;O que limita nossos sistemas — e o que podemos construir — é só a 
              criatividade.&quot;
            </motion.blockquote>
          </div>

          {/* Right - Specialties + Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h3 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6">
                Especialidades
              </h3>
              <div className="flex flex-col gap-3">
                {specialties.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                    <span className="text-white/70 group-hover:text-white transition-colors text-lg font-light">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                  className="text-center p-4 border border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all duration-500 group"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/40 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus areas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {[
            "Fintechs",
            "iGaming",
            "SaaS",
            "Server-Side Tracking",
            "Automação N8N",
          ].map((area, i) => (
            <motion.div
              key={area}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-4 border border-white/10 rounded-xl text-center text-sm text-white/60 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300"
            >
              {area}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
