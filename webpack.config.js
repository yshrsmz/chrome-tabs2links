const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJson = require('./package.json');

module.exports = {
    mode: 'development',
    entry: {
        'js/popup': './src/popup'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.vue', '.js']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'js/vendor',
                    chunks: 'initial',
                    enforce: true
                }
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'manifest.json',
            template: './src/template/manifest.json.ejs',
            inject: false,
            appname: 'Tabs2Links',
            appversion: packageJson.version,
            appdescription: packageJson.description
        }),
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: './src/template/popup.html.ejs',
            chunks: ['js/popup', 'js/vendor']
        })
    ]
}
