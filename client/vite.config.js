import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.API_URL,
        changeOrigin: true,
        secure: true,
      }
    }
  },
});
