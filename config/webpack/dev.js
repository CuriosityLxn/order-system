const webpack = require('webpack');

const merge   = require('webpack-merge');
const baseCfg = require('./base');
const DEV_SERVER_PORT = 8800;

let config = merge(baseCfg, {
  mode    : 'development',

  devtool : 'eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase        : './src/',
    historyApiFallback : true,
    hot                : true,
    inline             : true,
    port               : DEV_SERVER_PORT,
    publicPath         : '/assets/',
    disableHostCheck   : true,
    noInfo             : false
  }

});

module.exports = config;

