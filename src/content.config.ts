import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        image: z.string().optional(),
        githubUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        stars: z.number().default(0),
        featured: z.boolean().default(false),
        order: z.number().default(0),
        date: z.date(),
    }),
});

export const collections = {
    projects,
};