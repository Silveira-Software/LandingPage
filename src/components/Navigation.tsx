"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <motion.a
            href="#"
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            data-cursor="Home"
          >
            <span className="gradient-text">SILVEIRA</span>
            <span className="text-white/60 font-light ml-1">SOFTWARE</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="text-sm text-white/60 hover:text-white transition-colors tracking-widest uppercase font-light"
                whileHover={{ y: -2 }}
                data-cursor="View"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="https://github.com/Silveira-Software"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-5 py-2.5 border border-white/20 rounded-full text-white/80 hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              data-cursor="Open"
            >
              GitHub
            </motion.a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              className="w-6 h-[1.5px] bg-white block"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            />
            <motion.span
              className="w-6 h-[1.5px] bg-white block"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-[1.5px] bg-white block"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => handleNav(item.href)}
                className="text-4xl font-light text-white/80 hover:text-white tracking-wider"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
