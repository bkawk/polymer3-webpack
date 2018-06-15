const path = require('path')

module.exports = {
  entry: './webpack.js',
  output: {
    filename: 'bip39.js',
    path: path.resolve(__dirname)
  }
  ,
module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
        loader: 'babel-loader',
        }
    }
    ]
}
}