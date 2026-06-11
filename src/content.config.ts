import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    order: z.number().optional().default(99),
    image: image().optional(),
    stack: z.array(z.string()),
    url: z.string().optional(),
    repo: z.string().optional(),
    blogPost: z.string().optional(),
  }),
});

export const collections = { blog, projects };
