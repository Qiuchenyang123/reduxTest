const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const webpack = require('webpack')
const HTMLWebpackPlugin = require("html-webpack-plugin")

const devConfig = {
    mode: "development",
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: '9002',
        inline: true,
        open: true
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: []
    },
    plugins: [
        new HTMLWebpackPlugin({ title: "1223", template: "./index.html" }),
        new webpack.HotModuleReplacementPlugin()
    ],
}
module.exports = merge(devConfig, commonConfig)