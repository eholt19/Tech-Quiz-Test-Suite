// cypress.config.ts
import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';

export default defineConfig({
  component: {
    indexHtmlFile: 'client/index.html',
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
  },

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {},
  },
});
