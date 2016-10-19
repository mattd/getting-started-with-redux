/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev');

const app = express();
const compiler = webpack(webpackConfig);

const config = {
    port: {
        app: process.env.PORT || 9090
    },
    devMiddleware: {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }
};

app.use(require('webpack-dev-middleware')(compiler, config.devMiddleware));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(config.port.app, 'localhost', (error) => {
    if (error) return console.error(error);
    console.log(`App listening on port ${config.port.app}`);
});
