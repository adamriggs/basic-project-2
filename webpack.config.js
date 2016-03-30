var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel']
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.woff(2)?$/,
            loader: "url-loader"
        }, {
            test: /\.(ttf|eot|svg)?$/,
            loader: "file-loader"
        }, { 
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
            loader: 'imports?define=>false&this=>window'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};
