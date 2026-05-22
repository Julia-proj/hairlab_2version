import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hairlab.example',
  integrations: [solid(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
