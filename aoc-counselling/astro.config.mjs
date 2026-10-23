import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alexorlando.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
