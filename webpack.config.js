const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production' for optimized build
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Name of the bundled JavaScript file
    publicPath: '/', // Public URL of the output directory when referenced in HTML
  },
  devServer: {
    static: './dist', // Serve files from 'dist' directory
    hot: true, // Enable hot module replacement
    historyApiFallback: true, // Enables support for browser history API in single-page applications
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Don't process files in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpilation
        },
      },
      // You can add rules for CSS, images, etc., here later
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this HTML file as a template
    }),
  ],
};