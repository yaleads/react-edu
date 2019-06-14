const merge = require('webpack-merge');
const common = require('./common');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {  loader: MiniCssExtractPlugin.loader },
          {  loader: 'css-loader' }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      __CLIENT__: true,
      __SERVER__: false
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[hash].css'
    }),
    new ManifestPlugin()
  ]

});