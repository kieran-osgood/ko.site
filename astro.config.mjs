import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'KO',
      social: {
        github: 'https://github.com/kieran-osgood',
        linkedin: 'https://www.linkedin.com/in/kieranosgood',
        twitter: 'https://twitter.com/kieranbosgood',
      },
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
