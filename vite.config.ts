import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  plugins: [react()],
  server: {
    open: true,
    port: 3000, 
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
