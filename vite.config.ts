import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Content-Security-Policy": "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://drive.google.com https://docs.google.com; frame-src 'self' https://drive.google.com https://docs.google.com https://www.youtube.com; connect-src 'self' https: wss:; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; media-src 'self' https: blob:;",
      "Permissions-Policy": "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), encrypted-media=(self 'https://drive.google.com'), fullscreen=(self 'https://drive.google.com' 'https://www.youtube.com'), picture-in-picture=(self 'https://drive.google.com' 'https://www.youtube.com')",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor": ["react", "react-dom"],
          "framer": ["framer-motion"],
          "ui": ["@radix-ui/react-dialog", "@radix-ui/react-slot"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
}));
