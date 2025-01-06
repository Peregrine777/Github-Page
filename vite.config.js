import { defineConfig } from 'vite';
import path from 'path'; // Add this import statement
import react from '@vitejs/plugin-react';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

export default defineConfig({
  plugins: [react()],
  base: '/Github-Page/', // The repo name
  build: {
    outDir: 'dist',
  },
});