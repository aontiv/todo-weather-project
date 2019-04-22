var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "bundle.js",
        publicPath: "/static/",
        path: path.resolve(__dirname, "../server/dist/static")
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
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: "./src/index.html",
        })
    ],
    node: {
        fs: "empty"
    }
}
