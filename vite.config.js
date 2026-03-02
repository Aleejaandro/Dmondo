import { defineConfig } from 'vite';
import path from 'path';
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  root: path.resolve(import.meta.dirname, 'client'),
  resolve: {
    alias: {
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'client/index.html'),
        cocinas: path.resolve(import.meta.dirname, 'client/cocinas/index.html'),
        latina: path.resolve(import.meta.dirname, 'client/cocinas/latina.html'),
        arabe: path.resolve(import.meta.dirname, 'client/cocinas/arabe.html'),
        asiatica: path.resolve(import.meta.dirname, 'client/cocinas/asiatica.html'),
        productos: path.resolve(import.meta.dirname, 'client/productos/index.html'),
        recetas: path.resolve(import.meta.dirname, 'client/recetas/index.html'),
        receta: path.resolve(import.meta.dirname, 'client/recetas/receta.html'),
        calidad: path.resolve(import.meta.dirname, 'client/calidad.html'),
        contacto: path.resolve(import.meta.dirname, 'client/contacto.html'),
      }
    }
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  }
});