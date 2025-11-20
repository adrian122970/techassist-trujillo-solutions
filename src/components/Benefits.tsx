import { CheckCircle, Clock, Shield, Zap, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description: "Atención rápida a tus solicitudes"
  },
  {
    icon: Users,
    title: "Soporte Remoto y en Campo",
    description: "Donde nos necesites"
  },
  {
    icon: CheckCircle,
    title: "+500 Equipos Atendidos",
    description: "Experiencia comprobada"
  },
  {
    icon: Zap,
    title: "Tecnología Moderna",
    description: "Herramientas de última generación"
  },
  {
    icon: Shield,
    title: "Alto Nivel de Seguridad",
    description: "Protección garantizada"
  },
  {
    icon: Award,
    title: "Garantía en Todo",
    description: "Respaldamos nuestro trabajo"
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por qué elegir TechAssist?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos tu socio tecnológico de confianza en Trujillo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
