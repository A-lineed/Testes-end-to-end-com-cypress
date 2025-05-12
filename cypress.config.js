const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com/',
    //defaultCommandTimeout: 10000, -> Altera o timeout padrão do cypress para 10 segundos ao invés de 4 que é o padrão
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
