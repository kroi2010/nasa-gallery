module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'js/bundle.js'
    },
    devServer: {
      contentBase: './public',
    },
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      ]
    },
  };