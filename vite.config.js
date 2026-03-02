import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'client',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'client/index.html'),
        cocinas: resolve(__dirname, 'client/cocinas/index.html'),
        latina: resolve(__dirname, 'client/cocinas/latina.html'),
        arabe: resolve(__dirname, 'client/cocinas/arabe.html'),
        asiatica: resolve(__dirname, 'client/cocinas/asiatica.html'),
        productos: resolve(__dirname, 'client/productos/index.html'),
        recetas: resolve(__dirname, 'client/recetas/index.html'),
        receta: resolve(__dirname, 'client/recetas/receta.html'),
        calidad: resolve(__dirname, 'client/calidad.html'),
        contacto: resolve(__dirname, 'client/contacto.html'),
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: true
  }
});