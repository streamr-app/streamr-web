var webpack = require('webpack')
var path = require('path')
var poststylus = require('poststylus')

var HTMLWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config({ silent: true })
}

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-[hash].js'
  },
  devServer: {
    port: 5000,
    historyApiFallback: {
      index: './build/200.html'
    }
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [
                poststylus([ 'autoprefixer', 'lost' ])
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              bypassOnDebug: ''
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT || ''),
      'process.env.RECORDING_SERVICE_URL': JSON.stringify(process.env.RECORDING_SERVICE_URL || '')
    }),
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: 'src/200.html',
      filename: '200.html',
      alwaysWriteToDisk: true
    }),
    new HTMLWebpackHarddiskPlugin()
  ]
}
