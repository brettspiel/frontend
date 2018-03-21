const path = require("path");
const os = require("os");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const AutoDllWebpackPlugin = require("autodll-webpack-plugin");
const cssnext = require("postcss-cssnext");

if (!process.env.NODE_ENV)
  throw new Error("Could not find required environment variable NODE_ENV");

const outPath = path.join(__dirname, "build");

module.exports = {
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    //  出力ファイルのディレクトリ名
    path: outPath,
    // 出力ファイル名
    filename: "[name]_[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
            }
          },
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
    new HtmlWebpackPlugin({
      inject: true,
      template: "src/index.html",
      minify: {
        collapseWhitespace: true
      }
    }),
    new AutoDllWebpackPlugin({
      inject: true,
      filename: '[name]_[hash].js',
      entry: {
        dll: [
          'react',
          'react-dom',
          'react-router-dom',
          'semantic-ui-react',
          'formik',
          'lodash'
        ]
      }
    }),
    new HardSourceWebpackPlugin()
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000,
    historyApiFallback: true
  }
};
