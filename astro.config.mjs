// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';
// import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  site: 'https://josemorenourrutia.github.io/00-Documentacion-MicraCity',

  base: isDev
    ? ''
    : '/00-Documentacion-MicraCity/dist/',

  build: {
    assets: 'assets' // 🔑 cambia _astro → assets
  },

  integrations: [starlight({
    defaultLocale: 'root', // Opcional si es el único
    locales: {
      root: {
        label: 'Español',
        lang: 'es', // Aquí especificas que el root es español
      },
    },
    title: 'MicraCity',
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
    customCss: [
      "./src/styles/global.css"
    ],
  }), react()],

});