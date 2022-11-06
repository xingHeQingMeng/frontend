const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts', devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, 'dist'), filename: 'bundle.js', environment: {
            arrowFunction: false
        },

    }, resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    }, module: {
        rules: [{
            test: /.tsx?$/, use: {
                loader: 'babel-loader', options: {
                    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    plugins: [['@babel/plugin-transform-runtime', {
                        regenerator: true
                    }]]
                }
            }, exclude: /node-modules/
        }]
    }, plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })]

}