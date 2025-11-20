import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";
import type { Variants } from "framer-motion";

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      {/* Background animado - Optimizado */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950" />

      <div className="relative w-full max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs sm:text-sm font-semibold border border-blue-500/50 backdrop-blur flex items-center gap-2"
              >
                <Zap size={14} className="animate-pulse flex-shrink-0" />
                <span>✨ Automatización que genera resultados</span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
                Tu negocio{" "}
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  automatizado
                </motion.span>
                , tú enfocado en crecer
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Procesos manuales que consumen horas →{" "}
              <span className="text-blue-400 font-semibold">Automatización 24/7</span>.
              Empresas en Trujillo aumentaron productividad{" "}
              <span className="text-green-400 font-bold">10x</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all text-sm sm:text-base"
              >
                Consulta gratis <ArrowRight size={18} className="hidden sm:inline" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVideoOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-300 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-500/10 transition-all text-sm sm:text-base"
              >
                <Play size={18} /> Ver demo
              </motion.button>
            </motion.div>

            {/* Stats - Responsive Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-6 sm:pt-8"
            >
              {[
                { number: "150+", label: "Empresas", icon: TrendingUp },
                { number: "8h", label: "Ahorradas", icon: Zap },
                { number: "45%", label: "Más ingresos", icon: TrendingUp },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur hover:border-blue-400/50 transition-all"
                  >
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <Icon size={14} className="text-blue-400 flex-shrink-0" />
                      <div className="text-lg sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Video - Optimizado */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-video mt-8 lg:mt-0"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/50 flex items-center justify-center group cursor-pointer"
              onClick={() => setVideoOpen(true)}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://drive.google.com/file/d/1ucwExjleuBoysSJZnrOdJNri5WbHZBQDugEgFt27GSI/preview?resourcekey"
                title="Banner Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                loading="lazy"
                referrerPolicy="no-referrer"
                sandbox="allow-same-origin allow-scripts allow-popups allow-presentation allow-forms"
                className="rounded-xl sm:rounded-2xl"
              />

              <motion.div
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play size={32} className="text-white ml-1 sm:ml-2" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Mobile Friendly */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1 text-slate-400">
            <span className="text-xs sm:text-sm font-medium">Despliza</span>
            <motion.svg
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      {/* Modal Video - Optimizado */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setVideoOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl aspect-video relative"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1ucwExjleuBoysSJZnrOdJNri5WbHZBQDugEgFt27GSI/preview?resourcekey"
              title="Demo completo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
              referrerPolicy="no-referrer"
              sandbox="allow-same-origin allow-scripts allow-popups allow-presentation allow-forms"
              className="rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
              aria-label="Cerrar video"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
