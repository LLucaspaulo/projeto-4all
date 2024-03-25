const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://shopcart-challenge.4all.com/',
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
