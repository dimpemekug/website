// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

import { SITE } from './src/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const customSite = process.env.SITE_URL;
const customBase = process.env.SITE_BASE;
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPage =
  Boolean(repositoryOwner) &&
  Boolean(repositoryName) &&
  repositoryName !== `${repositoryOwner}.github.io`;

const resolvedSite = customSite || SITE.website;

const resolvedBase =
  customBase || (isGitHubActions && isProjectPage && repositoryName ? `/${repositoryName}` : '/');

// https://astro.build/config
export default defineConfig({
  site: resolvedSite,
  base: resolvedBase,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap({
      filter: page => {
        if (!SITE.showArchives && (page.endsWith("/archives") || page.endsWith("/archives/"))) return false;
        if (page.endsWith("/search") || page.endsWith("/search/")) return false;
        if (page.endsWith("/404") || page.endsWith("/404.html")) return false;
        return true;
      },
      i18n: {
        defaultLocale: "it",
        locales: {
          it: "it",
          en: "en",
        },
      },
      xslURL: "/sitemap.xsl",
    }),
  ],

  // The project was published as "remuxly" before it was renamed to rMux,
  // and as "rzip" before it was renamed to Archiva
  redirects: {
    "/progetti/remuxly": "/progetti/rmux/",
    "/progetti/remuxly/privacy": "/progetti/rmux/privacy/",
    "/en/projects/remuxly": "/en/projects/rmux/",
    "/en/projects/remuxly/privacy": "/en/projects/rmux/privacy/",
    "/progetti/rzip": "/progetti/archiva/",
    "/progetti/rzip/privacy": "/progetti/archiva/privacy/",
    "/en/projects/rzip": "/en/projects/archiva/",
    "/en/projects/rzip/privacy": "/en/projects/archiva/privacy/",
    "/progetti/rzip/docs/archivi-protetti": "/progetti/archiva/docs/archivi-protetti/",
    "/progetti/rzip/docs/creazione-modifica": "/progetti/archiva/docs/creazione-modifica/",
    "/progetti/rzip/docs/formati-supportati": "/progetti/archiva/docs/formati-supportati/",
    "/progetti/rzip/docs/gestione-archivi": "/progetti/archiva/docs/gestione-archivi/",
    "/progetti/rzip/docs": "/progetti/archiva/docs/",
    "/progetti/rzip/docs/installazione": "/progetti/archiva/docs/installazione/",
    "/progetti/rzip/docs/scorciatoie": "/progetti/archiva/docs/scorciatoie/",
    "/en/projects/rzip/docs/archive-management": "/en/projects/archiva/docs/archive-management/",
    "/en/projects/rzip/docs/creation-and-editing": "/en/projects/archiva/docs/creation-and-editing/",
    "/en/projects/rzip/docs/encrypted-archives": "/en/projects/archiva/docs/encrypted-archives/",
    "/en/projects/rzip/docs": "/en/projects/archiva/docs/",
    "/en/projects/rzip/docs/installation": "/en/projects/archiva/docs/installation/",
    "/en/projects/rzip/docs/shortcuts": "/en/projects/archiva/docs/shortcuts/",
    "/en/projects/rzip/docs/supported-formats": "/en/projects/archiva/docs/supported-formats/",
  },

  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: { prefixDefaultLocale: false },
  },

  image: {
    responsiveStyles: true,
    layout: "constrained",
  },

  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SOCIAL_GITHUB: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SOCIAL_X: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SOCIAL_LINKEDIN: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SOCIAL_EMAIL: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_EDIT_POST_URL: envField.string({ context: "client", access: "public", optional: true }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      name: "Wotfard",
      cssVariable: "--font-wotfard",
      fallbacks: ["sans-serif"],
      provider: fontProviders.local(),
      options: {
        variants: [{ src: ["./src/assets/fonts/wotfard.woff2"] }],
      },
    },
    {
      name: "Fira Code",
      cssVariable: "--font-firacode",
      fallbacks: ["monospace"],
      provider: fontProviders.local(),
      options: {
        variants: [{ src: ["./src/assets/fonts/firacode.woff2"] }],
      },
    },
  ],
});
