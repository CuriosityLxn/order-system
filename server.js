/*eslint no-console:0 */
'use strict';
const webpack          = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config           = require('./webpack.config');
const open             = require('open');
const http             = require('http');

const port = config.devServer.port;


// console.log('Server running at http://127.0.0.1:8800/');

new WebpackDevServer(webpack(config), config.devServer)
.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  http.createServer (function (request, response) {
  // send HTTP header
  // HTTP status: 200 : OK
  // Content-Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('oh yeah!');
}).listen(port);
  console.log('Listening at localhost:' + port);
  console.log('Opening your system browser...');
  open('http://dev-m.helijia.com:' + port);
});
