
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool:'eval-source-map', // 生成一个完整干净的source-map，打包速度适中
    devServer:{
        contentBase:  "./WexinHardware/src",// 本地服务器所加载的页面所在的目录
        port: 8991,
        //hot: true,  // 该模块需要单独安装
        inline: true, // 实时刷新 设置为true，当源文件改变时会自动刷新页面
        historyApiFallback: true, //不跳转
    }
});