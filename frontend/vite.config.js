// ======================================================
// VITE CONFIGURATION
// ------------------------------------------------------
// Responsible for:
// - React plugin
// - LAN dev server access
// - GitHub Pages base path
// ======================================================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  /* =====================================================
     IMPORTANT FOR GITHUB PAGES
     -----------------------------------------------------
     Since this project is deployed under:
     https://BRIYAPCS.github.io/Briya-Room-Reservation-v2

     We must tell Vite the base path.
  ===================================================== */
  base: "/Briya-Room-Reservation-v2/",

  server: {
    host: true,
    port: 5173,
    strictPort: false
  }
});