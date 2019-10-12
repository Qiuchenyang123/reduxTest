const path = require('path')

module.exports = {
    entry: {
        vendor: "./src/index.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], //表示这几个的后缀名可以参略
        alias: {
            '@': path.join(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(img|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192
                    }
                },
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf)/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
}