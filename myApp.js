const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet middleware to hide X-Powered-By header
app.use(helmet.hidePoweredBy());



// Define the port to listen on
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

module.exports = app;
