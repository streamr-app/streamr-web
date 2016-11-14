var path = require('path')
var poststylus = require('poststylus')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 4000,
    historyApiFallback: {
      index: './src/index.html'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  stylus: {
    use: [
      poststylus([ 'autoprefixer', 'lost' ])
    ]
  }
}
