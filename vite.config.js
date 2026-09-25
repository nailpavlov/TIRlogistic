import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Относительные пути — работают на tirlogistica.ru И на nailpavlov.github.io/TIRlogistic/
  base: './',
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
