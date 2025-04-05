import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pokedex-Angel_Paredes/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'docs', 
    emptyOutDir: true, 
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000, 
    open: true,
  },
  preview: {
    port: 4173 
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
})