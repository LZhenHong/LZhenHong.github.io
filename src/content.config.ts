import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One folder per app under src/content/apps/, holding a support.md and a
// privacy.md. Entry ids look like "<app-slug>/support".
const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    app: z.string(),
    kind: z.enum(['support', 'privacy']),
  }),
});

export const collections = { apps };
