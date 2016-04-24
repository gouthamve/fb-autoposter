module.exports = {
  entry: './js/index.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test:   /\.js/,
      loader: 'babel',
      include: __dirname + '/js',
    }, {
      test:   /\.html/,
      loader: 'html',
    }],
  }
}
