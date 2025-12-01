import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, Text, Environment } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveDemo from "./InteractiveDemo";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause, 
  X 
} from "lucide-react";

// Project data with categories
const projects = [
  {
    title: "E-Commerce",
    description: "Tienda online con sistema de pagos",
    category: "web",
    color: "#3b82f6",
    position: [-3, 0, 0] as [number, number, number],
    image: "web-development.jpg"
  },
  {
    title: "App Restaurant",
    description: "Sistema de pedidos automatizado",
    category: "automation",
    color: "#10b981",
    position: [0, 0, 0] as [number, number, number],
    image: "restaurant-automation.jpg"
  },
  {
    title: "Café Digital",
    description: "Menú digital interactivo",
    category: "automation",
    color: "#f59e0b",
    position: [3, 0, 0] as [number, number, number],
    image: "cafe-digital.jpg"
  },
  {
    title: "Seguridad Red",
    description: "Sistema de monitoreo 24/7",
    category: "security",
    color: "#ef4444",
    position: [-1.5, 2, -2] as [number, number, number],
    image: "cybersecurity.jpg"
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de métricas en tiempo real",
    category: "web",
    color: "#8b5cf6",
    position: [1.5, 2, -2] as [number, number, number],
    image: "hero-tech.jpg"
  }
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Desarrollo Web" },
  { id: "automation", label: "Automatización" },
  { id: "security", label: "Seguridad" }
];

// 3D Project Card Component
function ProjectCard({ 
  project, 
  onClick 
}: { 
  project: typeof projects[0]; 
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh
        position={project.position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial 
          color={project.color}
          metalness={0.6}
          roughness={0.2}
          emissive={project.color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      
      <Text
        position={[project.position[0], project.position[1] + 1.3, project.position[2] + 0.2]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {project.title}
      </Text>
      
      <Text
        position={[project.position[0], project.position[1] - 1.3, project.position[2] + 0.2]}
        fontSize={0.08}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.4}
      >
        {project.description}
      </Text>
    </Float>
  );
}

// Ambient particles
function Particles() {
  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  return (
    <points geometry={particlesGeometry}>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const ProjectGallery3D = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const orbitControlsRef = useRef<any>(null);

  // Filter projects by category
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || filteredProjects.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay, filteredProjects.length]);

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      canvasContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Navigate projects
  const handlePrevious = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  // Focus on current project
  const focusOnProject = (index: number) => {
    if (orbitControlsRef.current && filteredProjects[index]) {
      const project = filteredProjects[index];
      orbitControlsRef.current.target.set(
        project.position[0], 
        project.position[1], 
        project.position[2]
      );
    }
  };

  // Reset index when category changes
  useEffect(() => {
    if (currentIndex >= filteredProjects.length) {
      setCurrentIndex(0);
    }
  }, [selectedCategory, filteredProjects.length, currentIndex]);

  useEffect(() => {
    if (filteredProjects.length > 0) {
      focusOnProject(currentIndex);
    }
  }, [currentIndex, filteredProjects.length]);

  return (
    <section id="galeria-3d" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold mb-4 text-lg">
            🎨 Galería Interactiva 3D
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Proyectos</span> Realizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Explora nuestros proyectos en un entorno 3D interactivo
          </p>
          <p className="text-sm text-muted-foreground">
            🖱️ Arrastra para rotar • 🔍 Scroll para zoom • 👆 Click en los proyectos
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentIndex(0);
              }}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="transition-all"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <motion.div
          ref={canvasContainerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 ${
            isFullscreen ? 'h-screen' : 'h-[600px]'
          }`}
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <OrbitControls 
              ref={orbitControlsRef}
              enableZoom={true}
              enablePan={false}
              minDistance={5}
              maxDistance={15}
              autoRotate={!isAutoPlay}
              autoRotateSpeed={0.5}
            />
            
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
            <pointLight position={[10, -10, -5]} intensity={0.5} color="#10b981" />
            
            {/* Environment for reflections */}
            <Environment preset="city" />
            
            {/* Particles */}
            <Particles />
            
            {/* Project Cards */}
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </Canvas>

          {/* Control Panel */}
          {filteredProjects.length > 0 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
              <Button
                size="icon"
                variant="ghost"
                onClick={handlePrevious}
                className="rounded-full"
                disabled={filteredProjects.length === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="px-3 text-sm font-medium">
                {currentIndex + 1} / {filteredProjects.length}
              </div>

              <Button
                size="icon"
                variant="ghost"
                onClick={handleNext}
                className="rounded-full"
                disabled={filteredProjects.length === 0}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

            <div className="w-px h-6 bg-border mx-2" />

            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="rounded-full"
            >
              {isAutoPlay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>

              <Button
                size="icon"
                variant="ghost"
                onClick={toggleFullscreen}
                className="rounded-full"
              >
                {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
            </div>
          )}

          {/* Project Info Overlay */}
          <AnimatePresence>
            {filteredProjects.length > 0 && filteredProjects[currentIndex] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-3 shadow-lg max-w-xs"
              >
                <h3 className="font-bold text-lg mb-1">{filteredProjects[currentIndex].title}</h3>
                <p className="text-sm text-muted-foreground">{filteredProjects[currentIndex].description}</p>
                <Button
                  size="sm"
                  className="mt-3 w-full"
                  onClick={() => setSelectedProject(filteredProjects[currentIndex])}
                >
                  Ver Detalles
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-card rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <Tabs defaultValue="demo" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="demo">Demo Interactiva</TabsTrigger>
                    <TabsTrigger value="features">Características</TabsTrigger>
                    <TabsTrigger value="tech">Tecnologías</TabsTrigger>
                  </TabsList>

                  <TabsContent value="demo" className="mt-6">
                    <InteractiveDemo 
                      category={selectedProject.category}
                      projectTitle={selectedProject.title}
                    />
                  </TabsContent>

                  <TabsContent value="features" className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Características Principales:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                            <span className="text-primary font-bold">✓</span>
                            <div>
                              <p className="font-medium">Diseño Responsive y Moderno</p>
                              <p className="text-sm text-muted-foreground">Adaptado a todos los dispositivos</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                            <span className="text-primary font-bold">✓</span>
                            <div>
                              <p className="font-medium">Optimización de Velocidad</p>
                              <p className="text-sm text-muted-foreground">Carga rápida y rendimiento superior</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                            <span className="text-primary font-bold">✓</span>
                            <div>
                              <p className="font-medium">Sistema de Pagos Integrado</p>
                              <p className="text-sm text-muted-foreground">Múltiples métodos de pago seguros</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                            <span className="text-primary font-bold">✓</span>
                            <div>
                              <p className="font-medium">Panel de Administración</p>
                              <p className="text-sm text-muted-foreground">Control total del sistema</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                            <span className="text-primary font-bold">✓</span>
                            <div>
                              <p className="font-medium">Soporte Técnico 24/7</p>
                              <p className="text-sm text-muted-foreground">Asistencia continua incluida</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="tech" className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Stack Tecnológico:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg">
                            <p className="font-semibold mb-1">React</p>
                            <p className="text-sm text-muted-foreground">Framework frontend moderno</p>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-600/20 rounded-lg">
                            <p className="font-semibold mb-1">TypeScript</p>
                            <p className="text-sm text-muted-foreground">Type safety y mejor DX</p>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-lg">
                            <p className="font-semibold mb-1">Tailwind CSS</p>
                            <p className="text-sm text-muted-foreground">Estilos modernos y responsive</p>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg">
                            <p className="font-semibold mb-1">Node.js</p>
                            <p className="text-sm text-muted-foreground">Backend escalable y eficiente</p>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg">
                            <p className="font-semibold mb-1">Supabase</p>
                            <p className="text-sm text-muted-foreground">Base de datos y autenticación</p>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-lg">
                            <p className="font-semibold mb-1">Vercel</p>
                            <p className="text-sm text-muted-foreground">Deployment y hosting</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm font-semibold text-primary">
                          💡 Todas las tecnologías son modernas, escalables y probadas en producción
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => {
                      setSelectedProject(null);
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Solicitar Este Proyecto
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGallery3D;
