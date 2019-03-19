const webpack = require("webpack");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require("./webpack.common");

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
    ]
});
