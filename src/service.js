const { ServiceBroker } = require("moleculer");

// Create broker
const broker = new ServiceBroker();

// Load service
broker.loadService("./src/login");

// Start broker
broker.start();