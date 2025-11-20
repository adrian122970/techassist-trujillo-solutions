import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">TechAssist</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("servicios")} className="text-foreground hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection("beneficios")} className="text-foreground hover:text-primary transition-colors">
              Beneficios
            </button>
            <button onClick={() => scrollToSection("testimonios")} className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </button>
            <button onClick={() => scrollToSection("contacto")} className="text-foreground hover:text-primary transition-colors">
              Contacto
            </button>
          </div>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contacto")}>
              Solicitar Servicio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors text-left">
              Inicio
            </button>
            <button onClick={() => scrollToSection("servicios")} className="text-foreground hover:text-primary transition-colors text-left">
              Servicios
            </button>
            <button onClick={() => scrollToSection("beneficios")} className="text-foreground hover:text-primary transition-colors text-left">
              Beneficios
            </button>
            <button onClick={() => scrollToSection("testimonios")} className="text-foreground hover:text-primary transition-colors text-left">
              Testimonios
            </button>
            <button onClick={() => scrollToSection("contacto")} className="text-foreground hover:text-primary transition-colors text-left">
              Contacto
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="w-full">
              Solicitar Servicio
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
