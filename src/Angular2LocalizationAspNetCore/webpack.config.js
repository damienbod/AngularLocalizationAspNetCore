﻿var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "vendor": "./wwwroot/app/vendor",
        "app": "./wwwroot/app/boot"
    },
    output: {
        path: __dirname,
        filename: "./wwwroot/dist/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader: 'raw'
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./wwwroot/dist/vendor.bundle.js")
    ]
}