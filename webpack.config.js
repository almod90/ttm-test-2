const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: "development",
    entry: [
        './src/index.js'
    ],
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        hot: false,
        port: 9000
    }
};
