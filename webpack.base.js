var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),]
}

if (process.env.NODE_ENV !== 'production') {
    config.devtool = 'inline-source-map'
}

module.exports = config;