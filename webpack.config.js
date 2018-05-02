const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = {
  mode: 'production',
  entry:     slsw.lib.entries,
  target:    "node",
  devtool:   "source-map",
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test:   /\.tsx?$/,
        loader: "ts-loader",
        options: {
          //workaround
          //https://github.com/serverless-heaven/serverless-webpack/issues/299
          happyPackMode: true,
          transpileOnly: true
        }
      }
    ],
  },

  resolve: {
    extensions: [
      ".ts",
      ".js",
      ".tsx",
      ".jsx",
    ],
  },

  output: {
    libraryTarget: "commonjs",
    path:          path.join(__dirname, "dist", "lambda"),
    filename:      "[name].js",
  },
  plugins: [
    //workaround for transpileOnly: true
    //https://github.com/serverless-heaven/serverless-webpack/issues/299
    new ForkTsCheckerWebpackPlugin()
  ]
};
