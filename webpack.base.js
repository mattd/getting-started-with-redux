const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src', 'js')
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/static'),
        publicPath: '/static/'
    },
    resolve: {
        root: [path.resolve('src')],
        extensions: ['', '.jsx', '.js']
    }
}
