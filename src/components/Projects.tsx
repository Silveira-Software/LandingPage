"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["Todos", "Fintech", "Games", "Automação", "E-commerce", "Streaming", "Sistema"];

const projects = [
  {
    id: 1,
    title: "CremePay Gateway",
    subtitle: "Fintech",
    description:
      "Gateway de pagamentos com taxas competitivas, PIX instantâneo, cartões e boletos. Até 98% de aprovação.",
    tags: ["PHP", "Node.js", "MySQL", "API REST"],
    color: "#6366f1",
    number: "01",
    url: "https://cremepay.com/",
    category: "Fintech",
    icon: "💳",
  },
  {
    id: 2,
    title: "CremePay API",
    subtitle: "Fintech API",
    description:
      "API robusta para integração de pagamentos com documentação completa e suporte técnico.",
    tags: ["PHP", "Node.js", "MySQL", "REST API"],
    color: "#10b981",
    number: "02",
    url: "https://api.cremepay.com/",
    category: "Fintech",
    icon: "🔗",
  },
  {
    id: 3,
    title: "CremePay SMS",
    subtitle: "Comunicação",
    description:
      "Plataforma de envio de SMS em massa para campanhas de marketing e notificações.",
    tags: ["PHP", "MySQL", "API SMS", "JavaScript"],
    color: "#f43f5e",
    number: "03",
    url: "https://sms.cremepay.com/",
    category: "Automação",
    icon: "📱",
  },
  {
    id: 4,
    title: "PG Sorte Bet",
    subtitle: "Apostas Esportivas",
    description:
      "Plataforma completa de apostas esportivas com interface moderna e recursos avançados.",
    tags: ["PHP", "MySQL", "JavaScript", "WebSocket"],
    color: "#ec4899",
    number: "04",
    url: "https://bet.pgsorte.shop/",
    category: "Games",
    icon: "🎰",
  },
  {
    id: 5,
    title: "China Bet",
    subtitle: "Games & Apostas",
    description:
      "Plataforma de jogos e apostas com design moderno e sistema de pagamentos integrado.",
    tags: ["PHP", "MySQL", "JavaScript", "API"],
    color: "#0f3460",
    number: "05",
    url: "https://chinabet.pgsorte.shop/",
    category: "Games",
    icon: "🎲",
  },
  {
    id: 6,
    title: "Retro Games",
    subtitle: "Games de Habilidade",
    description:
      "Plataforma de jogos retrô de habilidade com possibilidade de ganho em dinheiro real.",
    tags: ["JavaScript", "Canvas", "PHP", "MySQL"],
    color: "#f97316",
    number: "06",
    url: "https://retrogames.pgsorte.shop/",
    category: "Games",
    icon: "🕹️",
  },
  {
    id: 7,
    title: "N8N Automações",
    subtitle: "Automação de Workflows",
    description:
      "Plataforma de automação de workflows inteligentes com integração a centenas de APIs e serviços.",
    tags: ["N8N", "Node.js", "Docker", "API REST"],
    color: "#ff6b35",
    number: "07",
    url: "https://n8n.liberar.site/",
    category: "Automação",
    icon: "⚙️",
  },
  {
    id: 8,
    title: "FunilQIC Tracking",
    subtitle: "Rastreamento Avançado",
    description:
      "Ferramenta própria de rastreamento avançado (SS Tracking + Eventos + APIs de Conversão Meta/TikTok).",
    tags: ["Tracking", "Server-Side", "Analytics", "APIs"],
    color: "#3b82f6",
    number: "08",
    url: "#",
    category: "Automação",
    icon: "📡",
  },
  {
    id: 9,
    title: "IPTV Streaming",
    subtitle: "Streaming Platform",
    description:
      "Plataforma completa de streaming IPTV com mais de 10.000 canais, filmes e séries em HD/4K.",
    tags: ["PHP", "MySQL", "HLS", "CDN"],
    color: "#7c3aed",
    number: "09",
    url: "https://iptv.liberar.site/",
    category: "Streaming",
    icon: "📺",
  },
  {
    id: 10,
    title: "WhatsApp API",
    subtitle: "Comunicação Empresarial",
    description:
      "Sistema de automação e envio de mensagens via WhatsApp para empresas.",
    tags: ["Node.js", "WhatsApp API", "MySQL", "WebSocket"],
    color: "#25d366",
    number: "10",
    url: "https://whatsapp.encxr.shop/",
    category: "Automação",
    icon: "💬",
  },
  {
    id: 11,
    title: "NatLiving E-commerce",
    subtitle: "Loja Virtual",
    description:
      "Loja virtual de produtos naturais com carrinho, pagamento PIX e gestão completa de produtos.",
    tags: ["WooCommerce", "PHP", "MySQL", "PIX"],
    color: "#22c55e",
    number: "11",
    url: "https://natliving.liberar.site/",
    category: "E-commerce",
    icon: "🌿",
  },
  {
    id: 12,
    title: "Império Natalino",
    subtitle: "E-commerce Sazonal",
    description:
      "E-commerce de decorações natalinas com frete grátis e desconto no PIX.",
    tags: ["WooCommerce", "PHP", "MySQL", "PIX"],
    color: "#dc2626",
    number: "12",
    url: "https://woodemo1.liberar.site/",
    category: "E-commerce",
    icon: "🎄",
  },
  {
    id: 13,
    title: "Brokers Ribeiro e Dias",
    subtitle: "Sistema Imobiliário",
    description:
      "Sistema completo de imobiliária com busca inteligente, listagem de imóveis e contato via WhatsApp.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    color: "#4776e6",
    number: "13",
    url: "https://diaseribeiro.com/",
    category: "Sistema",
    icon: "🏠",
  },
  {
    id: 14,
    title: "Pixel Agents",
    subtitle: "Escritório Virtual com IA",
    description:
      "Escritório virtual com agentes de IA integrados para produtividade e automação de tarefas.",
    tags: ["AI", "React", "Node.js", "WebSocket"],
    color: "#a855f7",
    number: "14",
    url: "https://github.com/Silveira-Software/pixel-agents",
    category: "Sistema",
    icon: "🤖",
  },
  {
    id: 15,
    title: "RepoTown",
    subtitle: "Open Source",
    description:
      "Plataforma open-source para gerenciamento e visualização de repositórios.",
    tags: ["Open Source", "GitHub", "Node.js", "React"],
    color: "#06b6d4",
    number: "15",
    url: "https://github.com/Silveira-Software/RepoTown",
    category: "Sistema",
    icon: "🏘️",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
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
            {projects.length} projetos entregues — cada um pensado para
            escalabilidade, performance e resultado real.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs px-5 py-2.5 rounded-full border tracking-wider uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-white text-black border-white"
                  : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid - card layout */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-500 block"
                data-cursor="View"
              >
                {/* Card header gradient */}
                <div
                  className="h-32 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)`,
                  }}
                >
                  <span className="text-5xl group-hover:scale-125 transition-transform duration-500">
                    {project.icon}
                  </span>
                  <span
                    className="absolute top-3 right-4 text-4xl font-bold transition-colors duration-500"
                    style={{
                      color:
                        hoveredId === project.id
                          ? `${project.color}40`
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    {project.number}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className="inline-block text-[10px] px-2.5 py-1 rounded-full mb-3 font-medium tracking-wider uppercase"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                    }}
                  >
                    {project.subtitle}
                  </span>
                  <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 border border-white/5 rounded text-white/30 group-hover:text-white/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.color}10 0%, transparent 60%)`,
                  }}
                />
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

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
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
