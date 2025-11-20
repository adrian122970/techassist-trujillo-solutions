import { Card } from "@/components/ui/card";
import { 
  Wrench, 
  Settings, 
  Code, 
  Shield, 
  TrendingUp,
  Monitor,
  Smartphone,
  Camera,
  Cloud,
  HelpCircle
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Soporte Técnico y Mantenimiento",
    description: "Reparación de PCs y laptops, limpieza, diagnóstico y corrección de fallas."
  },
  {
    icon: Settings,
    title: "Instalaciones y Configuraciones",
    description: "Formateo, instalación de Windows/Linux/MacOS, software, drivers y cámaras de seguridad."
  },
  {
    icon: Code,
    title: "Desarrollo de Software",
    description: "Aplicaciones web a medida, landing pages comerciales y aplicaciones móviles."
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Seguridad de redes y equipos, escaneo de vulnerabilidades y protección de datos."
  },
  {
    icon: TrendingUp,
    title: "Mejoras de Procesos",
    description: "Automatización empresarial y consultoría informática para optimizar tu negocio."
  },
  {
    icon: Monitor,
    title: "Soporte Remoto",
    description: "Asistencia técnica desde cualquier lugar para resolver problemas rápidamente."
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Desarrollo de aplicaciones móviles para iOS y Android."
  },
  {
    icon: Camera,
    title: "Cámaras de Seguridad",
    description: "Instalación y configuración de sistemas de videovigilancia."
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas completas para empresas y hogares en Trujillo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
