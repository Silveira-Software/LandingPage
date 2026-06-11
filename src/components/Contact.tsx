"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  {
    label: "WhatsApp",
    value: "+55 11 94631-7129",
    href: "https://wa.me/5511946317129",
    icon: "📞",
  },
  {
    label: "GitHub",
    value: "Silveira-Software",
    href: "https://github.com/Silveira-Software",
    icon: "💻",
  },
  {
    label: "LinkedIn",
    value: "Carlos Eduardo",
    href: "https://www.linkedin.com/in/carlos-eduardo-08a012394/",
    icon: "💼",
  },
  {
    label: "Instagram",
    value: "@silveirasoftware",
    href: "https://instagram.com/silveirasoftware",
    icon: "📸",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 md:py-48 grid-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-mono">
            06 / Contato
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              >
                Vamos{" "}
                <span className="gradient-text">construir</span>{" "}
                algo juntos?
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/40 text-lg font-light leading-relaxed mb-12"
            >
              Estou sempre aberto a novos desafios. Se você precisa de um sistema
              completo, automação inteligente ou consultoria técnica — entre em
              contato.
            </motion.p>

            {/* Big CTA */}
            <motion.a
              href="https://wa.me/5511946317129"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium tracking-wider text-lg glow transition-all duration-300"
              data-cursor="Chat"
            >
              <span>Fale no WhatsApp</span>
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 8h14M9 2l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </div>

          {/* Right - Contact cards */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group flex items-center gap-6 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-500"
                data-cursor="Open"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <div className="flex-1">
                  <div className="text-xs text-white/30 tracking-wider uppercase mb-1">
                    {link.label}
                  </div>
                  <div className="text-white/70 group-hover:text-white transition-colors font-light">
                    {link.value}
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white/20 group-hover:text-indigo-400 transition-colors"
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
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 p-6 rounded-2xl border border-white/5"
            >
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <span className="text-lg">📍</span>
                São Paulo, SP — Brasil
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
