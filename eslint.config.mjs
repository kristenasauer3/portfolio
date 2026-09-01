import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // Setup standard Astro parsing and syntax checks
  ...eslintPluginAstro.configs.recommended,
  
  // Enforce rigid web accessibility rules across your pages
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      // Extends checks natively to standard HTML elements inside Astro
      'astro/jsx-a11y/alt-text': 'error',
      'astro/jsx-a11y/anchor-is-valid': 'warn',
    },
  },
];
