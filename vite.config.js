import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    commonjs(),
    nodePolyfills({
      include: ['buffer', 'process', 'util', 'stream'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    })
  ],
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
    include: ['emoji-regex'],
  },
  define: {
    // Fix for some CommonJS dependencies
    global: 'globalThis'
  }
})
