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
import { motion } from "framer-motion";
import { Send, Mail, Phone, MessageCircle } from "lucide-react";

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
      const validatedData = contactSchema.parse(formData);

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
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-primary font-semibold mb-4 text-lg">
            📞 Hablemos de Tu Proyecto
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Solicita</span> tu Servicio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Completa el formulario y te contactaremos en menos de 2 horas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: MessageCircle, title: "WhatsApp", value: "+51 999 999 999", href: "https://wa.me/51999999999", color: "from-green-500 to-green-600" },
              { icon: Phone, title: "Teléfono", value: "+51 999 999 999", href: "tel:+51999999999", color: "from-blue-500 to-blue-600" },
              { icon: Mail, title: "Email", value: "contacto@techassist.pe", href: "mailto:contacto@techassist.pe", color: "from-purple-500 to-pink-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group">
                  <a href={item.href} className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-tech-purple/10 border-primary/20">
              <h3 className="font-bold text-lg mb-2">⚡ Respuesta Rápida</h3>
              <p className="text-sm text-muted-foreground">
                Te respondemos en menos de 2 horas. Soporte disponible 24/7.
              </p>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <Label htmlFor="service">Tipo de servicio *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
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
                  <Label htmlFor="description">Descripción del servicio *</Label>
                  <Textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Cuéntanos qué necesitas..."
                    rows={4}
                    className={errors.description ? "border-destructive" : ""}
                  />
                  {errors.description && <p className="text-sm text-destructive mt-1">{errors.description}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
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
                    <Label htmlFor="email">Email *</Label>
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
                </div>

                <div>
                  <Label>Preferencia de contacto *</Label>
                  <RadioGroup
                    value={formData.contact_preference}
                    onValueChange={(value) => setFormData({ ...formData, contact_preference: value })}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="whatsapp" id="whatsapp-pref" />
                      <Label htmlFor="whatsapp-pref" className="cursor-pointer">WhatsApp</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="telegram" id="telegram-pref" />
                      <Label htmlFor="telegram-pref" className="cursor-pointer">Telegram</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-pref" />
                      <Label htmlFor="email-pref" className="cursor-pointer">Correo</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-tech-purple hover:shadow-glow transition-all duration-300" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
