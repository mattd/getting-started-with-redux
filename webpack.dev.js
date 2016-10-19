const webpack = require('webpack');
const base = require('./webpack.base');
const dev = Object.assign({}, base);

//dev.debug = true;
dev.devtool = 'eval';
dev.entry.unshift('webpack-hot-middleware/client');
dev.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new webpack.NoErrorsPlugin()
];

module.exports = dev;
