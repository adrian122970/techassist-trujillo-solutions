-- Crear tabla para solicitudes de servicio
CREATE TABLE public.service_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  description TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  contact_preference TEXT NOT NULL DEFAULT 'whatsapp',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

-- Política para permitir INSERT público (cualquiera puede enviar una solicitud)
CREATE POLICY "Permitir inserción pública de solicitudes" 
ON public.service_requests 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Política para ver todas las solicitudes (solo para administradores autenticados)
CREATE POLICY "Admin puede ver todas las solicitudes" 
ON public.service_requests 
FOR SELECT 
TO authenticated
USING (true);

-- Función para actualizar timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger para actualizar automáticamente updated_at
CREATE TRIGGER update_service_requests_updated_at
BEFORE UPDATE ON public.service_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Índices para mejorar rendimiento
CREATE INDEX idx_service_requests_created_at ON public.service_requests(created_at DESC);
CREATE INDEX idx_service_requests_status ON public.service_requests(status);