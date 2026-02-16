// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration
 * - Exposes the dev server on the local network (LAN) so other devices can access it
 * - Keeps React plugin enabled
 *
 * Notes:
 * - `server.host: true` (or '0.0.0.0') binds to all interfaces so LAN devices can connect.
 * - `server.port` is optional; change if the default 5173 is taken.
 * - `server.strictPort: true` will fail fast if the port is in use, instead of auto-incrementing.
 * - `server.hmr` settings help Hot Module Replacement work across the LAN:
 *    - If you know your machine's LAN IP (e.g., 192.168.1.50), set it as `host` for HMR.
 *    - Otherwise, you can omit the `hmr` block and Vite will try to infer it.
 */
export default defineConfig({
  plugins: [react()],

  server: {
    // Bind to all network interfaces so devices on the same LAN can reach the dev server
    host: true, // Equivalent to '0.0.0.0' in Vite; exposes on LAN

    // Choose a port for the dev server (default is 5173). Change if needed.
    port: 5173,

    // If true, Vite will not try the next port if this one is in use—it will error instead.
    strictPort: false,

    /**
     * HMR configuration for LAN:
     * - Replace the `host` below with your development machine's LAN IP address.
     *   You can find it with `ipconfig` (Windows) or `ifconfig`/`ip a` (macOS/Linux).
     * - If you leave this block out, Vite will often still work, but setting it can
     *   help when HMR doesn't connect from other devices.
     */
    // hmr: {
    //   host: '192.168.1.50', // <-- set this to your machine's LAN IP
    //   port: 5173,           // HMR port usually matches the server port
    //   protocol: 'ws'        // or 'wss' if you front it with TLS
    // },

    /**
     * Optional: If you’re using HTTPS locally and want LAN devices to trust it,
     * you can enable https here and provide cert/key. Commented out by default.
     */
    // https: {
    //   key: fs.readFileSync('./.cert/dev.key'),
    //   cert: fs.readFileSync('./.cert/dev.crt')
    // }
  }
});