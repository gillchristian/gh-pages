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
    path: `${__dirname}/src/public`,
    publicPath: isProd ? 'public/' : 'http://localhost:3000/',
    filename: '[name].js'
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
      }
    ]
  },
  plugins,
  noInfo: false,
  debug: true,
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

if (!isProd) {
  config.devtool = 'cheap-module-eval-source-map';
}

module.exports = config


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
    new webpack.optimize.UglifyJsPlugin()
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
