import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/v2-portfolio/",  // 👈 Add this (Change it to your repo name)
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist", // Ensure build output goes to 'dist'
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
