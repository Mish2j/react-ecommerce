const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  devtool: "eval-source-map",
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "./src/custom.scss";`,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      reject: true,
    }),
  ],

  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/",
    assetModuleFilename: "images/[hash][text][query]",
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./public"),
    hot: true,
  },
};
