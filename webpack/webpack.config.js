const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, '..');
const PATHS = {
  dist: `${ROOT}/dist/`,
  src: `${ROOT}/src/`,
  entry: ['bootstrap-loader', `${ROOT}/src/index.js`]
};

module.exports = {
  entry: PATHS.entry,
  output: {
    path: PATHS.dist,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['./src/styles/App.scss']
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: PATHS.src
      }
    ]
  },
  devServer: {
    contentBase: PATHS.dist,
    port: 9000,
    historyApiFallback: true,
    stats: 'errors-only',
    openPage: '',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    open: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      title: 'Cihangir challenge',
      template: `${PATHS.src}/index.html`,
      hash: true,
      minify: {
        collapseWhitespace: false
      }
    })
  ]
};

