import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["saas", "web", "mobile", "automation"]),
    technologies: z.array(z.string()),
    img: z.string(),
    urls: z.object({
      live: z.string(),
      repo: z.string(),
    }),
  }),
});

export const collections = {
  projects: projectsCollection,
};