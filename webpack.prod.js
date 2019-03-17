const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
});
