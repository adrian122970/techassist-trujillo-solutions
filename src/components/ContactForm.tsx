import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    description: "",
    whatsapp: "",
    email: "",
    contact_preference: "whatsapp"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Por ahora solo mostramos el toast, más adelante conectaremos con la base de datos
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en breve.",
    });

    // Resetear formulario
    setFormData({
      name: "",
      company: "",
      service: "",
      description: "",
      whatsapp: "",
      email: "",
      contact_preference: "whatsapp"
    });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solicita tu Servicio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo inmediatamente
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Nombre completo *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <Label htmlFor="company">Empresa (opcional)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div>
              <Label htmlFor="service">Tipo de servicio *</Label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soporte">Soporte Técnico y Mantenimiento</SelectItem>
                  <SelectItem value="instalaciones">Instalaciones y Configuraciones</SelectItem>
                  <SelectItem value="desarrollo">Desarrollo de Software</SelectItem>
                  <SelectItem value="ciberseguridad">Ciberseguridad</SelectItem>
                  <SelectItem value="mejoras">Mejoras de Procesos</SelectItem>
                  <SelectItem value="camaras">Cámaras de Seguridad</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Descripción del problema/servicio *</Label>
              <Textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Cuéntanos qué necesitas"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="whatsapp">Número WhatsApp *</Label>
              <Input
                id="whatsapp"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+51 999 999 999"
              />
            </div>

            <div>
              <Label htmlFor="email">Correo electrónico *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <Label>Preferencia de contacto *</Label>
              <RadioGroup
                value={formData.contact_preference}
                onValueChange={(value) => setFormData({ ...formData, contact_preference: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="whatsapp" id="whatsapp-pref" />
                  <Label htmlFor="whatsapp-pref">WhatsApp</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="telegram" id="telegram-pref" />
                  <Label htmlFor="telegram-pref">Telegram</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-pref" />
                  <Label htmlFor="email-pref">Correo</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Enviar Solicitud
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
