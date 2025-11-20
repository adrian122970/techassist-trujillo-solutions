import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import restaurantImage from "@/assets/restaurant-automation.jpg";
import cafeImage from "@/assets/cafe-digital.jpg";
import { ArrowRight, Check } from "lucide-react";

const useCases = [
  {
    title: "¿Tienes un Restaurante o Cafetería?",
    image: restaurantImage,
    problem: "¿Problemas con pedidos manuales, inventario desorganizado, o procesos lentos?",
    solution: "Automatizamos tu negocio",
    features: [
      "Sistema de pedidos digital con tablets",
      "Control de inventario en tiempo real",
      "Integración con POS y delivery",
      "Reportes automáticos de ventas",
      "App móvil para clientes"
    ],
    color: "from-tech-blue to-tech-cyan"
  },
  {
    title: "¿Café Moderno con Tecnología?",
    image: cafeImage,
    problem: "¿Quieres ofrecer experiencia digital a tus clientes?",
    solution: "Creamos tu ecosistema digital",
    features: [
      "Menú digital con QR codes",
      "Sistema de pedidos desde el celular",
      "Programa de fidelización digital",
      "Dashboard de análisis de ventas",
      "Landing page profesional"
    ],
    color: "from-tech-purple to-tech-pink"
  }
];

const UseCases = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4 text-lg">
            🎯 Casos de Éxito
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">¿Quieres Crear</span> Algo Así?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mira cómo transformamos negocios reales con tecnología. Tu proyecto podría ser el siguiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 card-3d">
                {/* Image with Overlay */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-60`}></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{useCase.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-muted-foreground mb-2 text-sm font-semibold">EL PROBLEMA:</p>
                    <p className="text-lg text-foreground mb-4">{useCase.problem}</p>
                    <p className="text-primary font-bold text-xl mb-4">✨ {useCase.solution}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {useCase.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <div className="mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    Quiero Algo Así <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-12 bg-gradient-to-r from-tech-blue/10 via-tech-purple/10 to-tech-pink/10 border-2 border-primary/20">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Tienes Otro Tipo de Negocio?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                No importa tu industria: comercio, salud, educación, construcción... Creamos soluciones a medida.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-tech-blue to-tech-purple hover:shadow-glow transition-all duration-300 px-12"
              >
                Cuéntanos Tu Proyecto
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
