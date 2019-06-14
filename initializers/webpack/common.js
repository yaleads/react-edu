const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'public', 'assets'),
    publicPath: '/assets/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(process.cwd(), 'src')
        ],
        use: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(process.cwd(), 'src')
    ]
  }
};