const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    build: path.resolve(__dirname, 'src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, 'dist'),
      },
      {
        directory: path.resolve(__dirname, 'src/images'),
        publicPath: '/images',
      },
    ],
    watchFiles: [
      path.resolve(__dirname, 'src/*.html'),
    ],
    port: 3001,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'top-weather-app',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template.html'),
    }),
  ],
};
