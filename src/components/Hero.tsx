import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

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
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="TechAssist Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Soluciones Tecnológicas Profesionales para tu Empresa y Hogar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desarrollo, mantenimiento y soporte técnico confiable en Trujillo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToContact} className="text-lg">
              Solicitar Servicio
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsApp} className="text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
