import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es requerido" }).max(100),
  company: z.string().trim().max(100),
  service: z.string().min(1, { message: "Debe seleccionar un servicio" }),
  description: z.string().trim().min(10, { message: "La descripción debe tener al menos 10 caracteres" }).max(1000),
  whatsapp: z.string().trim().min(9, { message: "El número de WhatsApp es inválido" }).max(20),
  email: z.string().trim().email({ message: "El correo electrónico es inválido" }).max(255),
  contact_preference: z.enum(["whatsapp", "telegram", "email"])
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    description: "",
    whatsapp: "",
    email: "",
    contact_preference: "whatsapp"
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validar datos del formulario
      const validatedData = contactSchema.parse(formData);

      // Guardar en la base de datos
      const { data, error } = await supabase
        .from('service_requests')
        .insert([{
          name: validatedData.name,
          company: validatedData.company || null,
          service: validatedData.service,
          description: validatedData.description,
          whatsapp: validatedData.whatsapp,
          email: validatedData.email,
          contact_preference: validatedData.contact_preference
        }])
        .select();

      if (error) {
        console.error('Error al guardar solicitud:', error);
        toast({
          title: "Error",
          description: "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.",
          variant: "destructive",
        });
        return;
      }

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
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Error de validación",
          description: "Por favor revisa los campos del formulario.",
          variant: "destructive",
        });
      } else {
        console.error('Error inesperado:', error);
        toast({
          title: "Error",
          description: "Hubo un problema al enviar tu solicitud.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
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
              <Select 
                value={formData.service} 
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger className={errors.service ? "border-destructive" : ""}>
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
              {errors.service && <p className="text-sm text-destructive mt-1">{errors.service}</p>}
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
                className={errors.description ? "border-destructive" : ""}
              />
              {errors.description && <p className="text-sm text-destructive mt-1">{errors.description}</p>}
            </div>

            <div>
              <Label htmlFor="whatsapp">Número WhatsApp *</Label>
              <Input
                id="whatsapp"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+51 999 999 999"
                className={errors.whatsapp ? "border-destructive" : ""}
              />
              {errors.whatsapp && <p className="text-sm text-destructive mt-1">{errors.whatsapp}</p>}
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
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
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

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
