var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './app/App.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.scss$/,
            include : path.join(__dirname, 'app'),
            loader: ExtractTextPlugin.extract('css!sass')
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
    devServer: {
        contentBase: "./public",
        noInfo: true,
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    node: {
      child_process: 'empty'
    }
};
