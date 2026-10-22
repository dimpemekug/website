import { defineCollection, type SchemaContext } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const BLOG_EN_PATH = "src/data/en/blog";
export const GALLERY_PATH = "src/data/galleries";
export const PROJECTS_PATH = "src/data/projects";
export const PROJECTS_EN_PATH = "src/data/en/projects";

const blogSchema = ({ image }: SchemaContext) =>
  z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    modDatetime: z.date().optional().nullable(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: image().or(z.string()).optional(),
    coverImage: image().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
    hideEditPost: z.boolean().optional(),
    timezone: z.string().optional(),
  });

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: blogSchema,
});

const blogEn = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_EN_PATH}` }),
  schema: blogSchema,
});

const galleries = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: `./${GALLERY_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      draft: z.boolean().optional(),
      coverImage: image().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDatetime: z.date(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default([]),
  appStore: z.url().optional(),
  playStore: z.url().optional(),
  website: z.url().optional(),
  privacyDataTypes: z.string().optional(),
  privacyStorageNote: z.string().optional(),
  privacyUpdatedAt: z.string().optional(),
  privacyUrl: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${PROJECTS_PATH}` }),
  schema: projectSchema,
});

const projectsEn = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${PROJECTS_EN_PATH}` }),
  schema: projectSchema,
});

export const DOCS_PATH = "src/data/docs";
export const DOCS_EN_PATH = "src/data/en/docs";

const docSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  project: z.string().optional(),
  order: z.number().default(0),
  section: z.string().default("Generale"),
  draft: z.boolean().optional().default(false),
  lastModified: z.date().optional(),
});

const docs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${DOCS_PATH}` }),
  schema: docSchema,
});

const docsEn = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${DOCS_EN_PATH}` }),
  schema: docSchema,
});

export const collections = { blog, blogEn, galleries, projects, projectsEn, docs, docsEn };
