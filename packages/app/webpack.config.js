const devUtils = require('@pragmatic/dev-utils');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const config = devUtils.createWebpackConfig({
        dts: false,

        webpackConfig: {
            entry: {
                index: path.resolve(__dirname, 'src/index.tsx'),
            },
    
            output: {
                filename: '[name].bundle.js',
                path: path.resolve(__dirname, 'dist'),
            },
    
            devServer: {
                contentBase: './dist',
                proxy: {
                  '/pragmatic/api': 'http://localhost:5000'
                }
            },

            plugins: [
                new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
                new HtmlWebpackPlugin({
                    title: 'Development',
                    template: 'index.html',
                }),
                new webpack.DefinePlugin({
                  API_URL: JSON.stringify('/pragmatic/api/v1/rest'),
                }),
            ],
        },
    });

    console.log('webpackConfig', config);

    return config;
};
