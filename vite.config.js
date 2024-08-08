import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  include: /src\/.*\.js$/, // Process all JavaScript files in the src directory
});
