const express = require('express');
const helmet = require('helmet');
const app = express();



// Use helmet middleware
app.use(helmet.hidePoweredBy());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import API routes from server.js
const api = require('./server.js');

// Use API routes
app.use('/_api', api);

// Disable strict-transport-security
app.disable('strict-transport-security');

// Serve the main page
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Define the port to listen on
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Useful programmer Info Security App Started on Port ${port}`);
});

module.exports = app;
