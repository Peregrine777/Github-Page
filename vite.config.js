import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

export default defineConfig({
  plugins: [react()],
  base: "/Github-Page/", // The repo name
  build: {
    outDir: "dist",
    sourcemap: true, // Enable source maps
  },
});
