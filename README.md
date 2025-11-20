# TechAssist - Soluciones de Automatización Empresarial

Plataforma de automatización empresarial diseñada para transformar procesos manuales en soluciones inteligentes. Aumenta productividad, reduce costos y enfócate en lo que realmente importa: **crecer tu negocio**.

## 🚀 Características Principales

- **Hero Impactante**: Presentación clara de valor con video embebido
- **Problemas → Soluciones**: Antes/después con números reales
- **Videos de Casos de Uso**: Demostraciones de automatización en acción
- **Formulario Optimizado**: Captación de leads con urgencia
- **Diseño Responsivo**: Funcionamiento perfecto en todos los dispositivos
- **Animaciones Fluidas**: Experiencia visual moderna y profesional

## 🛠️ Stack Tecnológico

Este proyecto está construido con:

- **Vite** - Build tool rápido y moderno
- **React 18** - Librería UI con hooks
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones suaves
- **shadcn-ui** - Componentes accesibles
- **React Router** - Navegación
- **React Query** - Gestión de estado

## 📋 Requisitos Previos

- Node.js 16+
- npm o yarn

## 🔧 Instalación y Setup

```bash
# 1. Clonar el repositorio
git clone <TU_GIT_URL>

# 2. Navegar al directorio
cd techassist-trujillo-solutions

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:8080`

## 📦 Scripts Disponibles

```bash
# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview de build local
npm preview

# Linting de código
npm run lint
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.tsx                 # Sección principal con video banner
│   ├── ProblemSolution.tsx      # Antes/después de automatizaciones
│   ├── VideoShowcase.tsx        # Galería de videos de casos
│   ├── Benefits.tsx             # Beneficios principales
│   ├── UseCases.tsx             # Casos de uso específicos
│   ├── Testimonials.tsx         # Testimonios de clientes
│   ├── ContactForm.tsx          # Formulario de contacto
│   ├── Header.tsx               # Navegación
│   ├── Footer.tsx               # Pie de página
│   └── ui/                      # Componentes shadcn-ui
├── pages/
│   ├── Index.tsx                # Página principal
│   └── NotFound.tsx             # Página 404
├── assets/                      # Imágenes y recursos
├── App.tsx                      # Componente raíz
└── main.tsx                     # Entrada de la app
```

## 🎯 Componentes Clave

### Hero Section
- Banner principal con video embebido de Google Drive
- CTA principal: "Obtén consulta gratis"
- Estadísticas impactantes: 150+ empresas, 8h/día ahorradas, 45% más ingresos

### Problem Solution
Muestra 3 casos reales con comparativas:
- **Gestión de Inventario**: 4h/día → 30 min/día
- **Facturación y Cobros**: 2h/día → 5 min/día
- **Atención al Cliente**: 6h/día → 1h/día

### Video Showcase
Galería interactiva con videos de Google Drive:
- Solución empresarial completa
- Gestión de rutas optimizada

### En otros hosts
```bash
npm run build
# Luego sube la carpeta 'dist/' a tu hosting
```

## 📱 Responsive Design

✅ Optimizado para:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Personalización

### Cambiar colores
Edita `tailwind.config.ts` para ajustar la paleta:
```typescript
theme: {
  colors: {
    blue: { ... },
    purple: { ... },
  }
}
```

### Cambiar videos
Actualiza las URLs de Google Drive en:
- `Hero.tsx` - Video banner principal
- `VideoShowcase.tsx` - Galería de casos

### Agregar nuevas secciones
Crea un nuevo componente en `src/components/` e importalo en `App.tsx`

## 📊 Métricas de Performance

- Lighthouse Score: 95+
- Time to Interactive: < 2s
- Core Web Vitals: Optimizados

## 🔒 Seguridad

- ✅ HTTPS ready
- ✅ CSP headers configurados
- ✅ No tracking de datos sensibles
- ✅ Formularios protegidos

## 📞 Contacto y Soporte

- **Email**: contacto@techassist.pe
- **Ubicación**: Trujillo, Perú
- **Web**: [techassist.pe](https://techassist.pe)

## 📝 Licencia

© 2024 TechAssist. Todos los derechos reservados.

## 🤝 Contribuir

¿Quieres mejorar este proyecto? Haz fork, crea tu rama y envía un pull request.

---

**Última actualización**: Diciembre 2024

