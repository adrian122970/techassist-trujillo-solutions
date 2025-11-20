import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Settings, 
  Code, 
  Shield, 
  TrendingUp,
  Monitor,
  Smartphone,
  Camera
} from "lucide-react";
import webDevImage from "@/assets/web-development.jpg";
import cyberImage from "@/assets/cybersecurity.jpg";

const services = [
  {
    icon: Wrench,
    title: "Soporte Técnico",
    description: "Reparación de PCs, limpieza, diagnóstico y corrección de fallas.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Settings,
    title: "Instalaciones",
    description: "Formateo, instalación de OS, software, drivers y configuraciones.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Aplicaciones web, landing pages y sistemas empresariales.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Seguridad de redes, escaneo de vulnerabilidades y protección.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Automatización",
    description: "Mejora de procesos empresariales y consultoría IT.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Monitor,
    title: "Soporte Remoto",
    description: "Asistencia técnica desde cualquier lugar en tiempo real.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Desarrollo de aplicaciones iOS y Android nativas.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Camera,
    title: "Videovigilancia",
    description: "Instalación y configuración de cámaras de seguridad.",
    color: "from-amber-500 to-orange-500"
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4 text-lg">
            🚀 Servicios Completos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Todo lo que</span> Tu Negocio Necesita
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde soporte técnico hasta desarrollo de software avanzado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 card-3d group relative overflow-hidden">
                  {/* Hover Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <img src={webDevImage} alt="Desarrollo Web" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Desarrollo Web Profesional</h3>
                  <p className="text-gray-200">Sitios web modernos, rápidos y optimizados para conversión</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <img src={cyberImage} alt="Ciberseguridad" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Seguridad Empresarial</h3>
                  <p className="text-gray-200">Protege tu negocio con las mejores prácticas de ciberseguridad</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
