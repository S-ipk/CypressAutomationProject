const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://practice.cydeo.com',
    video: false, 
    retires: 2,
    defaultCommandTimeout: 5000, // normally defaul is 4 seconds
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
