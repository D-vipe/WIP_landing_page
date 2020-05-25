const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [
    require('autoprefixer'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, loader: 'imports-loader?define=>false'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'file-loader?name=[name].css',
          'extract-loader',
          'css-loader',
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: "sass-loader",
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          publicPath: 'images',
          name: '[folder]/[name].[ext]'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name=fonts/[name].[ext]'
        ],
      },
    ]
  },
};
