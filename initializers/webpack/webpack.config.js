const path = require('path');

module.exports = {
  mode: 'development',

  devServer: {
    contentBase: path.resolve(process.cwd(), 'public'),
    historyApiFallback: true
  },

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
      },
      {
        test: /\.css$/,
        use: [
          {  loader: 'style-loader', options: { sourceMap: true } },
          {  loader: 'css-loader', options: { sourceMap: true } }
        ]
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