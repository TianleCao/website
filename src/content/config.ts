import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    badge: z.string().optional(),
  }),
});

const education = defineCollection({
  type: "content",
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date(),
  }),
});

const honors = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, work, projects, education, honors };
