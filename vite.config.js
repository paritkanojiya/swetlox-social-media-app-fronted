import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react-player'],
  },
  plugins: [react()],
  server: {
    port:3000
  },
  define: {
    global: "globalThis",
  },
})

