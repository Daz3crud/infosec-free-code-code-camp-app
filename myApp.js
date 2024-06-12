const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet middleware to hide X-Powered-By header
app.use(helmet.hidePoweredBy());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import API routes from server.js
const api = require('./server.js');

// Use API routes
app.use('/_api', api);

// Serve the main page
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Define the port to listen on
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

module.exports = app;
