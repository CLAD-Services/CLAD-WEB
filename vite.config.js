import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // O el framework que uses

export default defineConfig({
  plugins: [react()],
  base: 'CLAD-WEB',  // <-- AÑADE ESTA LÍNEA EXACTA
})