"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    title: "Linguagens",
    items: [
      { name: "PHP", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "React.js", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "SQL", level: 90 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Infra & DevOps",
    items: [
      { name: "AWS (EC2, S3, RDS)", level: 88 },
      { name: "Docker", level: 85 },
      { name: "Linux Server", level: 90 },
      { name: "WebSockets", level: 82 },
      { name: "Webhooks", level: 90 },
    ],
  },
  {
    title: "Automação & Integração",
    items: [
      { name: "N8N (Especialista)", level: 95 },
      { name: "APIs REST", level: 92 },
      { name: "Integração Gateways", level: 90 },
      { name: "WhatsApp API", level: 85 },
      { name: "RPA", level: 80 },
    ],
  },
  {
    title: "Growth & Dados",
    items: [
      { name: "Server-Side Tracking", level: 90 },
      { name: "API de Conversões", level: 88 },
      { name: "Análise de Tráfego", level: 85 },
      { name: "SEO Técnico", level: 82 },
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="relative py-32 md:py-48" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-mono">
            02 / Tech Stack
          </span>
        </motion.div>

        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: 100 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Ferramentas que{" "}
            <span className="gradient-text">dominam resultados</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: catIdx * 0.15 }}
              className="group"
            >
              <h3 className="text-lg font-semibold mb-6 text-white/80 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-indigo-500" />
                {category.title}
              </h3>

              <div className="flex flex-col gap-4">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: catIdx * 0.15 + i * 0.08,
                    }}
                    className="group/item"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/60 group-hover/item:text-white transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xs text-white/30 font-mono">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #6366f1, #a855f7)",
                        }}
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${item.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          delay: catIdx * 0.15 + i * 0.08 + 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 p-8 md:p-12 border border-white/5 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Filosofia de Trabalho
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Tecnologia como motor de negócios",
                "Automação para escalar, não para remendar",
                "Código limpo, robusto e voltado a performance",
                "Criatividade acima de burocracia",
                "Soluções que resolvem problemas reais",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2 text-white/60 text-sm"
                >
                  <span className="text-indigo-400 mt-0.5">✦</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
