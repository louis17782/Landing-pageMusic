import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://localhost:5500/",
  prefetch: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    server: {
      hmr: true,
    }
  }
});
