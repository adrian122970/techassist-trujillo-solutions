import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Eres un asistente virtual experto de TechAssist Solutions. Tu rol es ayudar a los clientes potenciales con información sobre nuestros servicios.

SERVICIOS Y PRECIOS:
1. Desarrollo Web y Apps Móviles
   - Sitios web corporativos: Desde $2,000 - $8,000
   - E-commerce completo: $5,000 - $15,000
   - Apps móviles iOS/Android: $8,000 - $25,000
   - Progressive Web Apps: $4,000 - $12,000
   - Tiempo: 4-12 semanas

2. Automatización de Procesos
   - Automatización de flujos básicos: $1,500 - $4,000
   - Integración de sistemas: $3,000 - $10,000
   - Automatización para restaurantes (POS, inventario, pedidos): $3,500 - $12,000
   - Bots de WhatsApp/Telegram: $1,000 - $3,500
   - Tiempo: 2-8 semanas

3. Ciberseguridad
   - Auditoría de seguridad: $2,000 - $6,000
   - Implementación de protocolos: $3,000 - $10,000
   - Monitoreo continuo: $500 - $2,000/mes
   - Capacitación de equipo: $1,000 - $3,000
   - Tiempo: 1-6 semanas

4. Consultoría Digital
   - Análisis y estrategia digital: $1,500 - $5,000
   - Optimización de procesos: $2,000 - $8,000
   - Migración a la nube: $3,000 - $12,000
   - Tiempo: 2-6 semanas

PROCESO DE TRABAJO:
1. Contacto inicial (gratuito) - 30 min
2. Análisis de necesidades (gratuito) - 1-2 días
3. Propuesta y cotización - 2-3 días
4. Contrato y anticipo (30-50%)
5. Desarrollo e implementación
6. Pruebas y ajustes
7. Entrega y capacitación
8. Soporte post-entrega (3-6 meses incluido)

FORMAS DE PAGO:
- Transferencia bancaria
- PayPal
- Criptomonedas (Bitcoin, USDT)
- Planes de pago personalizados disponibles

GARANTÍAS:
- 6 meses de garantía en desarrollo
- 3 meses de soporte técnico incluido
- Actualizaciones de seguridad por 1 año

CASOS DE USO PARA RESTAURANTES:
- Sistema de pedidos online integrado
- Gestión de inventario en tiempo real
- Dashboard administrativo completo
- Integración con WhatsApp para pedidos
- Sistema de fidelización de clientes
- Reportes y análisis de ventas

Sé amigable, profesional y conciso. Si no sabes algo, ofrece conectar al cliente con un especialista. Siempre termina ofreciendo una consulta gratuita.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Límite de solicitudes excedido, intenta de nuevo más tarde." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Se requiere agregar créditos al workspace de Lovable AI." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Error en el gateway de AI" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
