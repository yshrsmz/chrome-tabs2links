const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require("./webpack.common");
const packageJson = require('./package.json');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "./assets/dev/*.png", to: "assets", flatten: true }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'manifest.json',
            template: './src/template/manifest.json.ejs',
            inject: false,
            appname: 'Tabs2Links(Dev)',
            appversion: packageJson.version,
            appversion_name: packageJson.version_name,
            appdescription: packageJson.description,
        }),
    ]
});
