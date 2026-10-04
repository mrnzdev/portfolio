import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			order: z.number().default(0),
			status: z.enum(['live', 'internal', 'in development']),
			stack: z.array(z.string()).default([]),
			url: z.url().optional(),
			repo: z.url().optional(),
			cover: image().optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { projects };
