import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React PDF into its own chunk
          'react-pdf': ['@react-pdf/renderer'],
          // Separate Lucide icons into its own chunk
          'icons': ['lucide-react'],
          // Separate React into its own chunk for better caching
          'react': ['react', 'react-dom']
        }
      }
    },
    // Increase chunk size warning limit for PDF library
    chunkSizeWarningLimit: 1600
  },
  optimizeDeps: {
    // Force pre-bundling of problematic dependencies
    include: ['@react-pdf/renderer', 'emoji-regex']
  },
  define: {
    // Fix for some CommonJS dependencies
    global: 'globalThis'
  }
})
