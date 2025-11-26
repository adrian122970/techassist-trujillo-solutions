import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Wrench, 
  Settings, 
  Code, 
  Shield, 
  TrendingUp,
  Monitor,
  Smartphone,
  Camera,
  PlayCircle,
  X,
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceDemos = [
  {
    id: "soporte",
    icon: Wrench,
    title: "Soporte Técnico",
    color: "from-blue-500 to-cyan-500",
    problem: "PC lenta con múltiples problemas",
    solution: "Diagnóstico automatizado y reparación",
    steps: [
      { time: "0s", action: "Escaneo inicial del sistema", status: "completed" },
      { time: "30s", action: "Detección de 15 problemas críticos", status: "completed" },
      { time: "45s", action: "Limpieza de archivos temporales", status: "completed" },
      { time: "60s", action: "Optimización de registro", status: "completed" },
      { time: "75s", action: "Actualización de drivers", status: "processing" }
    ],
    metrics: {
      before: { speed: "35%", errors: "15", uptime: "60%" },
      after: { speed: "95%", errors: "0", uptime: "99%" }
    }
  },
  {
    id: "web",
    icon: Code,
    title: "Desarrollo Web",
    color: "from-green-500 to-emerald-500",
    problem: "Necesitas presencia online profesional",
    solution: "Sitio web completo en días, no meses",
    steps: [
      { time: "Día 1", action: "Análisis de requerimientos", status: "completed" },
      { time: "Día 2", action: "Diseño de mockups", status: "completed" },
      { time: "Día 3-4", action: "Desarrollo frontend", status: "completed" },
      { time: "Día 5", action: "Integración backend", status: "processing" },
      { time: "Día 6", action: "Testing y lanzamiento", status: "pending" }
    ],
    metrics: {
      before: { visitors: "50/mes", conversions: "2%", load: "8s" },
      after: { visitors: "2,500/mes", conversions: "12%", load: "0.8s" }
    }
  },
  {
    id: "cyber",
    icon: Shield,
    title: "Ciberseguridad",
    color: "from-red-500 to-orange-500",
    problem: "Red empresarial vulnerable",
    solution: "Protección completa en capas",
    steps: [
      { time: "5min", action: "Escaneo de vulnerabilidades", status: "completed" },
      { time: "10min", action: "Detección de 8 brechas críticas", status: "completed" },
      { time: "15min", action: "Implementación de firewall", status: "completed" },
      { time: "20min", action: "Configuración de VPN", status: "processing" },
      { time: "25min", action: "Monitoreo 24/7 activo", status: "pending" }
    ],
    metrics: {
      before: { threats: "8 críticas", protection: "30%", incidents: "12/mes" },
      after: { threats: "0 críticas", protection: "99.9%", incidents: "0/mes" }
    }
  },
  {
    id: "automation",
    icon: TrendingUp,
    title: "Automatización",
    color: "from-indigo-500 to-blue-500",
    problem: "Procesos manuales lentos",
    solution: "Automatización inteligente",
    steps: [
      { time: "Semana 1", action: "Mapeo de procesos actuales", status: "completed" },
      { time: "Semana 2", action: "Identificación de cuellos de botella", status: "completed" },
      { time: "Semana 3", action: "Diseño de workflows automáticos", status: "completed" },
      { time: "Semana 4", action: "Implementación y capacitación", status: "processing" },
      { time: "Semana 5", action: "Optimización y ajustes", status: "pending" }
    ],
    metrics: {
      before: { time: "8h/día", errors: "25%", cost: "$5,000" },
      after: { time: "1h/día", errors: "2%", cost: "$800" }
    }
  },
  {
    id: "remote",
    icon: Monitor,
    title: "Soporte Remoto",
    color: "from-teal-500 to-cyan-500",
    problem: "Problemas técnicos paralizan trabajo",
    solution: "Asistencia inmediata desde cualquier lugar",
    steps: [
      { time: "1min", action: "Conexión remota establecida", status: "completed" },
      { time: "2min", action: "Diagnóstico del problema", status: "completed" },
      { time: "5min", action: "Aplicación de solución", status: "processing" },
      { time: "7min", action: "Verificación y documentación", status: "pending" },
      { time: "8min", action: "Problema resuelto", status: "pending" }
    ],
    metrics: {
      before: { response: "24-48h", resolution: "2-3 días", satisfaction: "60%" },
      after: { response: "< 5min", resolution: "< 1h", satisfaction: "98%" }
    }
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Apps Móviles",
    color: "from-violet-500 to-purple-500",
    problem: "Necesitas app nativa para tu negocio",
    solution: "App iOS/Android con funciones avanzadas",
    steps: [
      { time: "Semana 1-2", action: "Diseño UX/UI y prototipo", status: "completed" },
      { time: "Semana 3-6", action: "Desarrollo frontend/backend", status: "completed" },
      { time: "Semana 7", action: "Testing en múltiples dispositivos", status: "processing" },
      { time: "Semana 8", action: "Publicación en stores", status: "pending" },
      { time: "Semana 9", action: "Marketing y soporte", status: "pending" }
    ],
    metrics: {
      before: { users: "0", engagement: "0%", revenue: "$0" },
      after: { users: "10,000+", engagement: "45%", revenue: "$15,000/mes" }
    }
  },
  {
    id: "surveillance",
    icon: Camera,
    title: "Videovigilancia",
    color: "from-amber-500 to-orange-500",
    problem: "Seguridad física limitada",
    solution: "Sistema de cámaras inteligente",
    steps: [
      { time: "Día 1", action: "Análisis del sitio y puntos críticos", status: "completed" },
      { time: "Día 2", action: "Instalación de cámaras 4K", status: "completed" },
      { time: "Día 3", action: "Configuración de red y storage", status: "completed" },
      { time: "Día 4", action: "Integración con app móvil", status: "processing" },
      { time: "Día 5", action: "Capacitación y activación IA", status: "pending" }
    ],
    metrics: {
      before: { coverage: "20%", alerts: "Manual", recording: "SD" },
      after: { coverage: "100%", alerts: "IA automática", recording: "4K Cloud" }
    }
  },
  {
    id: "installation",
    icon: Settings,
    title: "Instalaciones",
    color: "from-purple-500 to-pink-500",
    problem: "Sistema operativo obsoleto o corrupto",
    solution: "Instalación completa optimizada",
    steps: [
      { time: "15min", action: "Backup de archivos importantes", status: "completed" },
      { time: "30min", action: "Formateo e instalación de OS", status: "completed" },
      { time: "45min", action: "Instalación de drivers actualizados", status: "completed" },
      { time: "60min", action: "Configuración de software esencial", status: "processing" },
      { time: "75min", action: "Optimización y verificación", status: "pending" }
    ],
    metrics: {
      before: { boot: "5min", stability: "50%", security: "Bajo" },
      after: { boot: "20s", stability: "99%", security: "Alto" }
    }
  }
];

const ServiceDemos = () => {
  const [selectedDemo, setSelectedDemo] = useState<typeof serviceDemos[0] | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handlePlayDemo = (demo: typeof serviceDemos[0]) => {
    setSelectedDemo(demo);
    setCurrentStep(0);
    
    // Simulate step progression
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= demo.steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  return (
    <section id="demos" className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4 text-lg">
            ⚡ Demos Interactivas
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Optimización</span> en Acción
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo transformamos y optimizamos cada proceso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceDemos.map((demo, index) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 card-3d group relative overflow-hidden cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${demo.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{demo.problem}</p>
                    
                    <Button
                      onClick={() => handlePlayDemo(demo)}
                      className="w-full group-hover:scale-105 transition-transform"
                      variant="outline"
                    >
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Ver Demo
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {selectedDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedDemo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-card rounded-2xl p-8 max-w-5xl w-full border border-border my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedDemo.color} rounded-xl flex items-center justify-center`}>
                    <selectedDemo.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{selectedDemo.title}</h3>
                    <p className="text-muted-foreground">{selectedDemo.solution}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDemo(null)}
                  className="text-3xl hover:text-primary transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Process Steps */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Proceso de Optimización
                  </h4>
                  <div className="space-y-3">
                    {selectedDemo.steps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: idx <= currentStep ? 1 : 0.3,
                          x: 0
                        }}
                        className={`p-4 rounded-lg border transition-all ${
                          idx <= currentStep 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {idx < currentStep ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : idx === currentStep ? (
                              <Clock className="h-5 w-5 text-primary animate-pulse" />
                            ) : (
                              <div className="h-5 w-5 rounded-full border-2 border-muted" />
                            )}
                            <span className="font-semibold text-sm">{step.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.action}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Metrics Comparison */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Resultados Medibles
                  </h4>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">Antes</span>
                        <span className="text-sm font-medium">Después</span>
                      </div>
                      
                      {Object.keys(selectedDemo.metrics.before).map((key) => (
                        <div key={key} className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground capitalize">
                              {key}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                              <p className="text-center font-semibold">
                                {selectedDemo.metrics.before[key as keyof typeof selectedDemo.metrics.before]}
                              </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-primary" />
                            <div className="flex-1 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                              <p className="text-center font-semibold">
                                {selectedDemo.metrics.after[key as keyof typeof selectedDemo.metrics.after]}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm text-center">
                        <span className="font-bold text-primary text-lg">
                          Mejora promedio del 300%
                        </span>
                        <br />
                        <span className="text-muted-foreground">
                          en eficiencia operativa
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="gap-2"
                    onClick={() => {
                      setSelectedDemo(null);
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Zap className="h-5 w-5" />
                    Solicitar Este Servicio
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handlePlayDemo(selectedDemo)}
                  >
                    <PlayCircle className="h-5 w-5 mr-2" />
                    Ver Demo Otra Vez
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceDemos;
