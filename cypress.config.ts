// cypress.config.ts
import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';

export default defineConfig({
  component: {
    // host your component tests in the real app shell
    indexHtmlFile: 'client/index.html',
    // locate your component specs
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    // lightweight support file for component tests
    supportFile: 'cypress/support/component.ts',
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
  },

  e2e: {
    // locate your end-to-end specs
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // point at the JS stub so Cypress can load it
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {},
  },
});
