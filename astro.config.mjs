import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Finálna doména projektu (používa sa pre canonical, og:url a sitemap)
  site: 'https://go.kasinozelenavoda.sk',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
