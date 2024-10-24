import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
import { msw } from "./src/plugins/msw";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  // https://astro.build/config
  integrations: [tailwind(), mdx(), react(), pagefind(), msw()],
  image: {
    service: {
      // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
      entrypoint: "astro/assets/services/sharp",
    },
  },
  prefetch: { prefetchAll: true },
  markdown: { remarkPlugins: [remarkReadingTime] },
  output: "hybrid",
  adapter: vercel(),
});
