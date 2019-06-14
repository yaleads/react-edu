const merge = require('webpack-merge');
const common = require('./common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.resolve(process.cwd(), 'public'),
    historyApiFallback: true
  },
});