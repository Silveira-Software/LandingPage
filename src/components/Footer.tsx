"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="gradient-text font-bold text-lg">SILVEIRA</span>
            <span className="text-white/40 font-light text-lg">SOFTWARE</span>
          </div>

          <p className="text-white/20 text-sm text-center">
            &copy; {new Date().getFullYear()} Silveira Software. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/Silveira-Software"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors text-sm"
              whileHover={{ y: -2 }}
              data-cursor="Open"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://wa.me/5511945193805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors text-sm"
              whileHover={{ y: -2 }}
              data-cursor="Open"
            >
              WhatsApp
            </motion.a>
            <motion.a
              href="mailto:dzk.falecomigo@gmail.com"
              className="text-white/30 hover:text-white transition-colors text-sm"
              whileHover={{ y: -2 }}
              data-cursor="Open"
            >
              E-mail
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
