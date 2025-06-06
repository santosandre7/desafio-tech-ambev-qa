const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {
    apiUrl: "http://localhost:3001",
    defaultEmail: process.env.DEFAULT_USER_EMAIL,
    defaultPassword: process.env.DEFAULT_USER_PASSWORD,
  },
  e2e: {
    baseUrl: "https://front.serverest.dev/",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    viewportHeight: 1000,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
