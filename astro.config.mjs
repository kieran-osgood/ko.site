import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: 'KO',
      social: {
        github: 'https://github.com/kieran-osgood',
        linkedin: 'https://www.linkedin.com/in/kieranosgood',
        twitter: 'https://twitter.com/kieranbosgood',
      },
      // sidebar: [
        // {
        //   label: 'Guides',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: 'Example Guide', link: '/guides/example/' },
        //   ],
        // },
        // {
        //   label: 'Reference',
        //   autogenerate: { directory: 'reference' },
        // },
      // ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
