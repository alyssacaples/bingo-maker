import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
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
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
      defaultIsModuleExports: true
    },
    // Increase chunk size warning limit for PDF library
    chunkSizeWarningLimit: 1600
  },
  optimizeDeps: {
    // Force pre-bundling of problematic dependencies
    include: ['@react-pdf/renderer'],
    exclude: ['emoji-regex'], // Add this line
  },
  define: {
    // Fix for some CommonJS dependencies
    global: 'globalThis'
  }
})
