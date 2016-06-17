'use strict'

let webpack = require('webpack')
let entry =  require('./webpack/entry.map')

const isProd = process.env.NODE_ENV === 'prod'

let plugins
if (isProd) {
  const GLOBALS = defineGlobals('production')
  plugins = [...basicPlugins(GLOBALS), ...prodPlugins()]
} else {
  const GLOBALS = defineGlobals('development')
  plugins = [...basicPlugins(GLOBALS)]
}

const config = {
  entry,
  output: {
    path: `${__dirname}/dist`,
    publicPath: 'http://localhost:3000/',
    filename: isProd ? '[name].prod.js' : '[name].dev.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&name=[name].[ext]&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&name=[name].[ext]&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&name=[name].[ext]&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&name=[name].[ext]&mimetype=image/svg+xml"
      }
    ]
  },
  plugins,
  noInfo: false,
  debug: true,
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}


/**
 * Returns the global variables
 *
 * @param {String}  enviroment
 * @returns {Object}  global variables
 */
function defineGlobals(enviroment) {
  return {
    'process.env.NODE_ENV': JSON.stringify(enviroment),
    __DEV__: enviroment === 'development',
    NODE_ENV: enviroment
  }
}

/**
 * Production specific plugins
 *
 * @returns {Array} plugins
 */
function prodPlugins() {
  return [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
}

/**
 * Production specific plugins
 *
 * @param {Object}  globals to define
 * @returns {Array} plugins
 */
function basicPlugins(globals) {
  return [
    new webpack.DefinePlugin(globals),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config
