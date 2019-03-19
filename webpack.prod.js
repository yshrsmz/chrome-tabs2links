const webpack = require("webpack");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require("./webpack.common");
const packageJson = require('./package.json');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "./assets/prod/*.png", to: "assets", flatten: true }
        ]),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new HtmlWebpackPlugin({
            filename: 'manifest.json',
            template: './src/template/manifest.json.ejs',
            inject: false,
            appname: 'Tabs2Links',
            appversion: packageJson.version,
            appversion_name: packageJson.version_name,
            appdescription: packageJson.description,
        }),
    ]
});
