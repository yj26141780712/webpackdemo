const path = require('path');
// 生成新的index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清空dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            publicPath: '/'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    performance: { hints: false }
};