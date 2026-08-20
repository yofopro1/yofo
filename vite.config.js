import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Cloudflare Pages settings:
//   Build command:   npm run build
//   Build output:    dist
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
