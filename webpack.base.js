var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/client/scss/main.scss',

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
    }
}