const path = require('path');
var devServerPort = require('./src/config/index.config.js').serverConfig.webpackDevServerPort;
var webpack = require('webpack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
// note the different casing here for variables
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack/isomorphic.config'));

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:' + devServerPort,
            'webpack/hot/only-dev-server',
            './src/app'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },

    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        webpackIsomorphicToolsPlugin.development(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};