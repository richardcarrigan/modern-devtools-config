const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

// Serve the files on port 3000.
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
