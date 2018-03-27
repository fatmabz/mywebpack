const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ['./src/test.ts'],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'bundle.js',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist/"),
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true
  }
}
