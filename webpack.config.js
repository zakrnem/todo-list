const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    fallback: {
      "fs": false,
      "util": false,
      "assert": false,
      "stream": false,
      "constants": false,
      "path": false,
      "crypto": false,
      "zlib": false,
      "buffer": false,
      "https": false,
      "http": false,
      "zlib": false,
      "url": false,
      "vm": false,
      "querystring": false,
      "module": false,
      "os": false,
      "esbuild": false,
      "@swc/core": false,
      "uglify-js": false,
      "worker_threads": false,
      "child_process": false
    }
  },
  devtool: 'source-map'
};