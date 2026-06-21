// Build config: uses @lovable.dev/vite-tanstack-config as a wrapper around
// TanStack Start / Nitro / Vite — includes tailwindcss, tsConfigPaths, React,
// and SSR (Nitro targeting Cloudflare Workers for build; Apache static for deploy).
// For deploy instructions, see DEPLOY_CONTEXT.md.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // SSR entry point — Nitro builds from src/server.ts
    server: { entry: "server" },
  },
});
