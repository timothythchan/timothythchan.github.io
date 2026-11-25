import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().optional(),
        copyrightBg: z.string().optional().nullable(),
        category: z.string(), // "Flavor"
        tags: z.array(z.string()).optional(),
        readingTime: z.string().optional(), // Now automated, but keeping as optional for override
        depth: z.string(), // e.g. "Beginner", "Intermediate", "Deep Dive" - "Cocktail Strength"
        copyright: z.object({
            enabled: z.boolean().optional(),
            declaration: z.string().optional(),
        }).optional(),
    }),
});

export { blog };

const pages = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/pages" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});


const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        github: z.string().url().optional(),
        url: z.string().url().optional(),
    }),
});

export const collections = { blog, pages, projects };
