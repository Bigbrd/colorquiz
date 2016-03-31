//required modules
require('./server.babel');
var path = require('path');
var http = require('http');
var fs = require('fs');
var express = require('express');
var webpack = require('webpack');

//check what gloabl environment we are in and set it as the global constant
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

//create express server and set up compiler with config
var app = express();

//load different config files based on the environment
if (__DEVELOPMENT__) {
  var config = require('./webpack.config');
  var compiler = webpack(config);
  
  //use dev and hot middleware for dev mode. this is to not have to wait to refresh the page for file modification.
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
  
} else {
  var config = require('./webpack.prod.config');
  var compiler = webpack(config);
}

//create server
const server = new http.Server(app);

const index = fs.readFileSync('./index.html', {
    encoding: 'utf-8'
});
const str = index;

//if we get a 200 from the server send the index.html file
app.get('*', function(req, res) {
    res.status(200).send(str);
});

//if we get a 404 from the server send text
app.get('*', function(req, res) {
    res.status(404).send('Server.js > 404 - Page not found');
});

//if request is bad send 500 error
app.use((err, req, res, next) => {
    console.error("Error on request %s %s", req.method, req.url);
    console.error(err.stack);
    res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
    console.log('uncaughtException ', evt);
});

//listen on 9000
server.listen('9000', (err) => {
    if (err) {
        console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'localhost', '9000');
});