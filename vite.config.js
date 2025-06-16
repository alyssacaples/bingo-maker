import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to handle emoji-regex module
const emojiRegexPlugin = () => {
  return {
    name: 'emoji-regex-fix',
    resolveId(id) {
      if (id === 'emoji-regex') {
        return { id: 'emoji-regex-fixed', external: false }
      }
    },
    load(id) {
      if (id === 'emoji-regex-fixed') {
        return `
          import emojiRegex from 'emoji-regex/index.js';
          export default emojiRegex;
          export { emojiRegex };
        `;
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), emojiRegexPlugin()],
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
      include: [/emoji-regex/, /node_modules/],
      transformMixedEsModules: true,
      defaultIsModuleExports: true
    },
    // Increase chunk size warning limit for PDF library
    chunkSizeWarningLimit: 1600
  },
  optimizeDeps: {
    // Force pre-bundling of problematic dependencies
    include: ['@react-pdf/renderer'],
    exclude: [],
  },
  define: {
    // Fix for some CommonJS dependencies
    global: 'globalThis'
  }
})
