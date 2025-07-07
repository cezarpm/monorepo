import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["node_modules"],
  },
  assetsInclude: ["**/*.xlsx"],
  define: {
    global: "globalThis",
  },
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    host: "localhost",
    port: 3000,
  },
});
