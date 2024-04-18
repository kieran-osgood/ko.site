import { defineCollection, z } from "astro:content";

const date = z.union([z.number(), z.string(), z.date()]).pipe(z.coerce.date());

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: date,
  }),
});

export const collections = {
  blog,
};
