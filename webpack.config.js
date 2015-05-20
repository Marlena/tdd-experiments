module.exports = {
  output: {
    path: __dirname,
    filename: "[name]bundle.js",
    chunkFilename: "[id].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};