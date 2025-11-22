import { fileURLToPath } from 'url'; // For ESM-compatible path resolution
import path from "path"; // This is still technically wrong in pure ESM
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// The standard way to get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
     "@": path.resolve(__dirname, "./src"),
    },
  },
})