const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { themeColor } = require('../src/settings.json');

const ArcoDesignWebpackPlugin = require('@arco-design/webpack-plugin');

exports.site = (config, env) => {
  config.context = path.resolve(__dirname, '..');
  config.entry = path.resolve(__dirname, '../src/index');
  config.output.path = path.resolve(__dirname, '../dist');

  config.plugins[0] = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  });
  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  config.resolve.modules = ['node_modules'];

  config.plugins.push(new ArcoDesignWebpackPlugin({
    modifyVars: {
      ...(themeColor ? { 'arcoblue-6': themeColor } : {})
    }
  }));
};
