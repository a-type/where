import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { VitePWA } from 'vite-plugin-pwa';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    react(),
    VitePWA({
      includeManifestIcons: true,
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.ts',
      manifest: {
        name: 'where',
        short_name: 'where',
        description: '',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        categories: [],
        display: 'standalone',
        start_url: '/',
      } as any,
      includeAssets: ['fonts/**/*', 'images/**/*'],

      workbox: {
        sourcemap: true,
      },

      devOptions: {
        enabled: false,
        type: 'module',
        navigateFallback: 'index.html',
      },
    }),
  ],
  optimizeDeps: {
    exclude: [],
    include: ['react/jsx-runtime', 'react', 'react-dom'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 4600,
  },
  build: {
    sourcemap: true,
  },
});
