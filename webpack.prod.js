const webpack = require('webpack');
const base = require('./webpack.base');
const prod = Object.assign({}, base);

prod.devtool = 'source-map';
prod.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    })
];

module.exports = prod;
