// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const customSite = process.env.SITE_URL;
const customBase = process.env.SITE_BASE;
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPage =
  Boolean(repositoryOwner) &&
  Boolean(repositoryName) &&
  repositoryName !== `${repositoryOwner}.github.io`;

const githubPagesSite =
  repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io${isProjectPage ? `/${repositoryName}` : ''}`
    : undefined;

const resolvedSite =
  customSite || (isGitHubActions && githubPagesSite ? githubPagesSite : 'https://example.com');

const resolvedBase =
  customBase || (isGitHubActions && isProjectPage && repositoryName ? `/${repositoryName}` : '/');

// https://astro.build/config
export default defineConfig({
  site: resolvedSite,
  base: resolvedBase,
  integrations: [expressiveCode(), mdx(), sitemap()],

  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: { prefixDefaultLocale: false },
  },

  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SOCIAL_GITHUB: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SOCIAL_X: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SOCIAL_LINKEDIN: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SOCIAL_EMAIL: envField.string({ context: "client", access: "public", optional: true }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
