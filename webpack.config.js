var path = require('path');
var webpack = require('webpack');
const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, './.env'),
      safe: false
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
};
