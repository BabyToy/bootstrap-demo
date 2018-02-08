/*eslint valid-jsdoc: "off"*/
/*eslint-env es6*/

'use strict';
const port = process.env.PORT || 1337;

const app = require('express')();
const parser = require('body-parser');
const os = require('os');

// middleware configuration
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

let listener = app.listen(port, function () {
  console.log('http://' + os.hostname() + ':' + listener.address().port);
  if (process.env.NODE_ENV === 'development') {
    console.log('DEV mode');
  }
});

app.get('/', function (request, response) {
  response.send('Login listening on http://' + os.hostname() + ':' + listener.address().port);
});
