const path = require('path');
// 生成新的index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清空dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html' // 模板地址
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
};