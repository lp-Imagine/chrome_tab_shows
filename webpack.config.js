/*
 * @Descripttion:
 * @version:
 * @Author: peng
 * @Date: 2021-05-19 14:29:47
 * @LastEditors: peng
 * @LastEditTime: 2021-05-19 18:03:16
 */
const path = require("path");
// const { getThemeVariables } = require("antd/dist/antd.less");
module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.less$/,
        loader: "less-loader", // compiles Less to CSS
        // options: {
        //   modifyVars: getThemeVariables({
        //     dark: true, // 开启暗黑模式
        //     compact: true, // 开启紧凑模式
        //   }),
        //   javascriptEnabled: true,
        // },
      },
    ],
  },
};
