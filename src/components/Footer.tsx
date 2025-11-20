import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">TechAssist</span>
            </div>
            <p className="text-background/80">
              Soluciones tecnológicas profesionales para empresas y hogares en Trujillo, Perú.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-background/80">Trujillo, Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-background/80">+51 999 999 999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-background/80">contacto@techassist.pe</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 TechAssist. Todos los derechos reservados. | <a href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
