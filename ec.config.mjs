import { defineEcConfig } from 'astro-expressive-code';

export default defineEcConfig({
  themes: ['github-dark', 'github-light'],
  useDarkModeMediaQuery: false,
  themeCssSelector: (theme) =>
    theme.name === 'github-dark' ? '[data-theme="dark"]' : '[data-theme="light"]',
});
