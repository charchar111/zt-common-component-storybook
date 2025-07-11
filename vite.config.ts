import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@stories": resolve(__dirname, "src/stories"),
      "@assets": resolve(__dirname, "src/assets"),
      "@public": resolve(__dirname, "public"),
      "@designTokens": resolve(__dirname, "design_tokens"),
    },
  },
});
