// 公共配置，开发环境和生成环境都能共用抽离的部分

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './WexinHardware/src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './build')
    },
    module:{
        rules:[
            // js-compile
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            { // 样式模块
                test: /(\.css|\.less|\.sass)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./WexinHardware/src/index.ejs"),
            fillName: '../index.html',
            title: 'Production',
        })
    ],
    resolve: {  // 省略文件扩展名
        extensions: [ '.js', '.jsx', '.es6', '.json', '.css', '.less', '.scss', '.html', '.md', '.markdown', 'coffee'],
        alias: {}
    },
};

// css-loader postcss-loader autoprefixer  extract-text-webpack-plugin
// babel-loader babel-core babel-plugin-react-transform  babel-preset-env babel-preset-es2015 babel-preset-react babel-preset-stage-0
// webpack-dev-server