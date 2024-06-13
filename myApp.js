const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet middleware to hide X-Powered-By header
app.use(helmet({
  hidePoweredBy: true,
  frameguard: { action: 'deny' },
  xssFilter: true,
  noSniff: true,
  ieNoOpen: true,
  hsts: { maxAge: 90 * 24 * 60 * 60, force: true },
  dnsPrefetchControl: true,
  noCache: true,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com']
    }
  }
}));






module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});