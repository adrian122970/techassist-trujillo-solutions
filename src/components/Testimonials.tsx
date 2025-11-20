import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "María González",
    company: "Comercial del Norte",
    text: "Increíble. Solucionaron el problema de mi laptop en menos de 24 horas. El servicio es excepcional y el equipo super profesional.",
    rating: 5,
    avatar: "MG"
  },
  {
    name: "Carlos Ramírez",
    company: "Inversiones CR",
    text: "Desarrollaron nuestra aplicación web a medida y quedó perfecta. El sistema de inventario automatizado nos ahorra 15 horas semanales.",
    rating: 5,
    avatar: "CR"
  },
  {
    name: "Ana Flores",
    company: "Restaurante El Sabor",
    text: "Instalaron nuestro sistema de pedidos digital y cámaras de seguridad. Las ventas aumentaron 40% en el primer mes.",
    rating: 5,
    avatar: "AF"
  },
  {
    name: "Roberto Silva",
    company: "Tech Solutions SAC",
    text: "El soporte remoto es increíble. Resolvieron nuestro problema crítico en minutos sin tener que ir a la oficina.",
    rating: 5,
    avatar: "RS"
  },
  {
    name: "Patricia Mendoza",
    company: "Boutique La Elegancia",
    text: "Landing page hermosa que convierte. Nuestras consultas online se triplicaron. Inversión totalmente recuperada.",
    rating: 5,
    avatar: "PM"
  },
  {
    name: "Luis Torres",
    company: "Estudio Jurídico Torres",
    text: "Automatización de procesos legales que nos ahorra horas. Sistema de gestión de casos impecable.",
    rating: 5,
    avatar: "LT"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-tech-purple/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4 text-lg">
            ⭐ Testimonios Reales
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos reales de empresas y personas que transformaron su negocio con TechAssist
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                {/* Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary to-tech-cyan rounded-full flex items-center justify-center text-white font-bold"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Empresas que confían en TechAssist</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["Comercio", "Restaurantes", "Tech", "Legal", "Retail", "Salud"].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-bold text-muted-foreground"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
