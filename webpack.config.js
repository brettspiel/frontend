const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cssnext = require("postcss-cssnext");

if (!process.env.NODE_ENV)
  throw new Error("Could not find required environment variable NODE_ENV");

const outPath = path.join(__dirname, "build");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    //  出力ファイルのディレクトリ名
    path: outPath,
    // 出力ファイル名
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          "ts-loader",
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              namedExport: true,
              importLoaders: 1,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
              minimize: {
                autoprefixer: false
              }
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "node_modules/sanitize.css/sanitize.css",
        to: `${outPath}/assets/`,
        flatten: true
      },
      {
        from: "node_modules/semantic-ui-css/semantic.min.css",
        to: `${outPath}/assets/`,
        flatten: true
      },
      {
        from: "node_modules/balloon-css/balloon.min.css",
        to: `${outPath}/assets/`,
        flatten: true
      }
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      template: "src/index.html",
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000,
    historyApiFallback: true
  }
};
