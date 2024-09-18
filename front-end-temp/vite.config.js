import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Set this to "0.0.0.0" to allow access from other devices on the network
    host: "localhost",
    port: 5173,
    proxy: {
      "/api": {
        // Proxy requests to the Flask backend
        changeOrigin: true,
        target: "http://127.0.0.1:5000",
        secure: false,
      },
    },
  },
});
