const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic.config'));

const config = {
    entry: {
        main: ['./src/client/index.js', './src/client/scss/main.scss']
    },
    module: {

        rules: [
            { test: /\.(svg|eot|ttf|woff|woff2)?$/, loader: 'url-loader' },
            { test: /\.scss$/, exclude: /node_modules/, use: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] }) },
            { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader', options: { limit: 10240 } }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new ExtractTextPlugin({
            disable: false,
            filename: "[name].css",
            allChunks: true
        })
    ]
}

module.exports = merge(baseConfig, config);