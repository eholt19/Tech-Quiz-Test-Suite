import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';

export default defineConfig({
  component: {
    // where your component specs actually are
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    // so it picks up your support/component.ts
    supportFile: 'cypress/support/component.ts',
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
  },

  e2e: {
    // explicitly point at your E2E folder
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // so it picks up your support/e2e.ts
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // your node event hooks, if any
    },
  },
});
