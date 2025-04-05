import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/pokedex-Angel_Paredes/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', 
    emptyOutDir: true,
  }
})