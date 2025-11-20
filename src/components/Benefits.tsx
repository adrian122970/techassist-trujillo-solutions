import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, Zap, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description: "Atención rápida en menos de 2 horas",
    stat: "< 2h"
  },
  {
    icon: Users,
    title: "Soporte 24/7",
    description: "Remoto y presencial cuando lo necesites",
    stat: "24/7"
  },
  {
    icon: CheckCircle,
    title: "+500 Clientes",
    description: "Empresas confían en nosotros",
    stat: "500+"
  },
  {
    icon: Zap,
    title: "Tech Moderna",
    description: "Últimas tecnologías del mercado",
    stat: "2024"
  },
  {
    icon: Shield,
    title: "Máxima Seguridad",
    description: "Protección y cifrado garantizado",
    stat: "100%"
  },
  {
    icon: Award,
    title: "Garantía Total",
    description: "Respaldamos cada trabajo realizado",
    stat: "✓"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4 text-lg">
            💎 Beneficios Únicos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Por Qué <span className="gradient-text">TechAssist</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No somos solo proveedores, somos tu socio tecnológico de confianza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden bg-card">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-primary to-tech-cyan rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.div 
                        className="text-4xl font-bold gradient-text"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      >
                        {benefit.stat}
                      </motion.div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-tech-purple/10 to-tech-pink/10 border-2 border-primary/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Equipos Reparados" },
              { number: "100+", label: "Apps Desarrolladas" },
              { number: "50+", label: "Empresas Atendidas" },
              { number: "99%", label: "Satisfacción" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
