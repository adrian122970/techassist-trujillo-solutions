import { MapPin, Phone, Mail, MessageCircle, Send, Linkedin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-cyan rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-tech-cyan rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <div>
                <span className="text-2xl font-bold">TechAssist</span>
                <p className="text-xs text-background/70">Trujillo, Perú</p>
              </div>
            </div>
            <p className="text-background/80 mb-6">
              Soluciones tecnológicas innovadoras para empresas y hogares. Tu socio digital de confianza.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {["Desarrollo Web", "Apps Móviles", "Soporte Técnico", "Ciberseguridad", "Automatización", "Consultoría"].map((service, i) => (
                <li key={i}>
                  <a href="#servicios" className="text-background/80 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {[
                { label: "Sobre Nosotros", href: "#beneficios" },
                { label: "Testimonios", href: "#testimonios" },
                { label: "Contacto", href: "#contacto" },
                { label: "Aviso Legal", href: "#" },
                { label: "Privacidad", href: "#" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-background/80 hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                <span className="text-background/80">Trujillo, La Libertad<br />Perú</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:+51 994466800" className="text-background/80 hover:text-primary transition-colors">
                  +51 994466800
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:contacto@techassist.pe" className="text-background/80 hover:text-primary transition-colors">
                  contacto@techassist.pe
                </a>
              </div>
              <div className="flex gap-3 mt-6">
                <a 
                  href="https://wa.me/51994466800" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-background/80 hover:text-blue-400 transition-colors"
                >
                  <Send className="h-5 w-5" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/60 text-sm">
            <p>© 2024 TechAssist. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2">
              Hecho con <span className="text-red-500">❤</span> en Trujillo
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
