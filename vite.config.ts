import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// Deploy em Apache estático (Hostinger): build em modo SPA, gera um index.html
// único em dist/client. As rotas são resolvidas no navegador.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({ spa: { enabled: true } }),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 8080,
    host: "0.0.0.0",
    strictPort: true,
  },
});
