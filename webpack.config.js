const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
})

const plugins = [
  extractSass,
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlWebpackPlugin({
    title: 'planning',
  }),
]

module.exports = function webpackStuff(env) {
  if (env === 'production') plugins.push(new MinifyPlugin())

  return {
    entry: ['./src/index.js', './styles/global.scss'],
    output: {
      filename: 'bundle.[chunkhash].js',
      path: path.resolve(__dirname, './dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            plugins: [],
          },
          include: [path.resolve(__dirname, './')],
        },
        {
          test: /\.(scss|css|sass)$/,
          use: extractSass.extract([
            'css-loader',
            {
              loader: 'fast-sass-loader',
              options: {
                includePaths: ['./node_modules'],
                sourceMap: true,
              },
            },
          ]),
        },
      ],
    },
    plugins,
  }
}
