var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./js/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../server/dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /js/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" })
    ]
}
