import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/51999999999", "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={heroImage} 
          alt="TechAssist Hero" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"></div>
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-tech-cyan/20 blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-tech-purple/20 blur-3xl"
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-primary font-semibold mb-4 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              ⚡ Innovación Tecnológica en Trujillo
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="gradient-text">Transformamos</span>
              <br />
              <span className="text-foreground">Tu Negocio con</span>
              <br />
              <span className="gradient-text">Tecnología</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Desarrollo, mantenimiento y soporte técnico confiable. De restaurantes a empresas, resolvemos problemas reales.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToContact} 
                className="text-lg px-8 py-6 bg-gradient-to-r from-tech-blue to-tech-purple hover:shadow-glow transition-all duration-300"
              >
                Solicitar Servicio
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleWhatsApp} 
                className="text-lg px-8 py-6 border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hablar por WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
