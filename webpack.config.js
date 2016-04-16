const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './js/ClientApp',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    // preLoaders: [{
    //   test: /\.jsx?$/,
    //   loader: 'eslint-loader',
    //   exclude: /node_modules/
    // }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /(\.s?css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
    }]
  },
  toolbox: {
    theme: path.join(__dirname, 'scss/toolbox-theme.scss')
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('react-toolbox.css', {
      allChunks: true
    })
  ]
};
