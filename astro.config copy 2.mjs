import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig(({ command }) => {
  const isDev = command === 'dev';

  return {
    site: 'https://josemorenourrutia.github.io/00-Documentacion-MicraCity',

    base: isDev
      ? ''
      : '/00-Documentacion-MicraCity/dist/',

    build: {
      assets: 'assets'
    },

    integrations: [
      starlight({
        defaultLocale: 'root',
        locales: {
          root: {
            label: 'Español',
            lang: 'es'
          }
        },

        title: 'MicraCity',

        social: [
          {
            icon: 'github',
            label: 'GitHub',
            href: 'https://github.com/withastro/starlight'
          }
        ],

        customCss: ['./src/styles/global.css']
      }),
      react()
    ],

    trailingSlash: 'always'
  };
});