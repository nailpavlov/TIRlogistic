import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // ВАЖНО: путь к репозиторию на GitHub Pages
  // Если домен tirlogistica.ru — поставь '/'
  // Если nailpavlov.github.io/TIRlogistic — оставь '/TIRlogistic/'
  base: '/TIRlogistic/',
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
