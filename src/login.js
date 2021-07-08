
const HTTPServer = require("moleculer-web");
// const axios = require('axios');

// Export the schema of service
module.exports = {
  // Define service name
  name: "login",
  // Load the HTTP server
  mixins: [HTTPServer],
  settings: {
    port:  5001,
    routes: [
      {
        aliases: {
          // When the "GET /products" request is made the "listProducts" action of "products" service is executed
          "POST /login": "login.loginWithPassword",
          "GET /login": "login.loginWithPassword"
        }
      }
    ]
  },
  // name: "login",
  actions: {
    loginWithPassword(ctx) {
      return 'get a product' + ctx.params.user;
    }
  }
}