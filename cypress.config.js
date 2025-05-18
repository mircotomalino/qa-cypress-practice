const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    setupNodeEvents(on, config) {
      // puedes agregar configuraciones aquí
    },
  },
});