var path = require('path');
var MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const VueLoaderPlugin  = require('vue-loader/lib/plugin.js');
var config = {
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        // path: '/dist/',
        publicPath: '',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: {
                            use: [
                                MiniCssExtractPlugin.loader,
                                'style-loader',
                                'css-loader'
                            ]
                        }
                    }
                }
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: 'main.css'
        // }),
        new VueLoaderPlugin()
    ]
};
module.exports = config;
