var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        publicPath: "/static/js/",
        path: path.resolve(__dirname, "../server/dist/static/js")
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
                use: [
                    {
                        loader: "file-loader",
                        options: { outputPath: "../media/" }
                    }
                ]
            },
            {
                test: /\.scss$/,
                include: /scss/,
                exclude: /node_modules/,
                use: [ "style-loader", "css-loader", "postcss-loader", "sass-loader" ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "../../index.html",
            template: "./src/index.html",
        })
    ]
}
