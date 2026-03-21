import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/vite/",
  plugins: [react()],
  optimizeDeps: {
    include: ["video2ascii"],
  },
  build: {
    outDir: "../static/vite",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: "vite.js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "vite.css";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
})
