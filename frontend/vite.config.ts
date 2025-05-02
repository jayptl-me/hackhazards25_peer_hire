import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
          ],
          // Add other chunks as needed based on your dependencies
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000kb if needed
  },
  define: {
    'process.env.VITE_API_URL': mode === 'production' 
      ? JSON.stringify('https://hackhazards25-peer-hire-backend.onrender.com')
      : JSON.stringify('http://localhost:3000')
  }
}));
