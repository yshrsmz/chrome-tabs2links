const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new CopyWebpackPlugin([
            { from: "./assets/dev/*.png", to: "assets", flatten: true }
        ]),
    ]
});
