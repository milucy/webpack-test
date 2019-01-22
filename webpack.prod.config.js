var webpack = require('webpack');
// var path = require('path');
var htmlwebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin  = require('mini-css-extract-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');
var TerserPlugin = require('terser-webpack-plugin');

// webpackBaseConfig.plugins = [];
module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    // output: {
    //     filename: '[name].[hash].js'
    // },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
            // chunkFilename: '[id].[hash].css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new htmlwebpackPlugin({
            // filename: 'index.html',
            // template: 'index.html',
            // inject: true
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {}
            })
        ]
    }
})