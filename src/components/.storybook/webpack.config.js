module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
}
