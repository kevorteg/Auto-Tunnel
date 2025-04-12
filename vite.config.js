import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Escucha en la red
    port: 5173, // Puerto
    allowedHosts: [
      'assignments-arctic-screensaver-accurate.trycloudflare.com', // Host específico
      'all', // Permitir todos los demás hosts
    ]
  }
});
