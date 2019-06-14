const merge = require('webpack-merge');
const common = require('./common');
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
  mode: 'development',

  target: 'node',
  devtool: 'source-map',

  entry: path.resolve(process.cwd(), 'initializers', 'server', 'index.js'),

  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'server.js'
  },

  externals: [
    nodeExternals()
  ],

  module: {
    exprContextCritical: false,
    rules: [
      { test: /\.css$/, use: 'ignore-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      __CLIENT__: false,
      __SERVER__: true
    }),
  ]

});