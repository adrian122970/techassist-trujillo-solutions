import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, Text, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";
import * as THREE from "three";

// Project data
const projects = [
  {
    title: "E-Commerce",
    description: "Tienda online con sistema de pagos",
    color: "#3b82f6",
    position: [-3, 0, 0] as [number, number, number],
    image: "web-development.jpg"
  },
  {
    title: "App Restaurant",
    description: "Sistema de pedidos automatizado",
    color: "#10b981",
    position: [0, 0, 0] as [number, number, number],
    image: "restaurant-automation.jpg"
  },
  {
    title: "Café Digital",
    description: "Menú digital interactivo",
    color: "#f59e0b",
    position: [3, 0, 0] as [number, number, number],
    image: "cafe-digital.jpg"
  },
  {
    title: "Seguridad Red",
    description: "Sistema de monitoreo 24/7",
    color: "#ef4444",
    position: [-1.5, 2, -2] as [number, number, number],
    image: "cybersecurity.jpg"
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de métricas en tiempo real",
    color: "#8b5cf6",
    position: [1.5, 2, -2] as [number, number, number],
    image: "hero-tech.jpg"
  }
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-border/50"
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <OrbitControls 
              enableZoom={true}
              enablePan={false}
              minDistance={5}
              maxDistance={15}
              autoRotate
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
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </Canvas>
        </motion.div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-card rounded-2xl p-8 max-w-2xl w-full border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-2xl hover:text-primary transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Características:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Diseño responsive y moderno</li>
                    <li>Optimización de velocidad</li>
                    <li>Integración con sistemas de pago</li>
                    <li>Panel de administración completo</li>
                    <li>Soporte técnico incluido</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery3D;
