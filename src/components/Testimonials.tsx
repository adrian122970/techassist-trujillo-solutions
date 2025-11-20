import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    company: "Comercial del Norte",
    text: "Excelente servicio. Solucionaron el problema de mi laptop en menos de 24 horas. Muy profesionales.",
    rating: 5
  },
  {
    name: "Carlos Ramírez",
    company: "Inversiones CR",
    text: "Desarrollaron nuestra aplicación web a medida y quedó perfecta. Recomendados al 100%.",
    rating: 5
  },
  {
    name: "Ana Flores",
    company: "Restaurante El Sabor",
    text: "Instalaron nuestras cámaras de seguridad y nos dieron capacitación completa. Muy satisfechos.",
    rating: 5
  },
  {
    name: "Roberto Silva",
    company: "Tech Solutions SAC",
    text: "El soporte remoto es increíble. Resolvieron nuestro problema sin tener que ir a la oficina.",
    rating: 5
  },
  {
    name: "Patricia Mendoza",
    company: "Boutique La Elegancia",
    text: "Nos crearon una landing page hermosa que ha aumentado nuestras ventas. Gracias TechAssist!",
    rating: 5
  },
  {
    name: "Luis Torres",
    company: "Estudio Jurídico Torres",
    text: "Mejoraron todos nuestros procesos internos con automatización. Ahorramos mucho tiempo.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonios reales de empresas y personas satisfechas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
