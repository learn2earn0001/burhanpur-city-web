import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // TailwindCSS is usually configured via postcss.config.js or tailwind.config.js
    // If you're using @tailwindcss/vite (experimental), make sure it's installed correctly
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Allows imports like @/assets/image.jpg
    },
  },
  server: {
    host: '0.0.0.0', // allows access from LAN
    port: 5173,      // default Vite port
  },
});
