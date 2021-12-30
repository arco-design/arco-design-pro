/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const {
  override,
  addWebpackModuleRule,
  addWebpackPlugin,
  addWebpackAlias,
} = require('customize-cra');
const ArcoWebpackPlugin = require('@arco-design/webpack-plugin');
const addLessLoader = require('customize-cra-less-loader');

module.exports = {
  webpack: override(
    addLessLoader(),
    addWebpackModuleRule({
      test: /\.svg$/,
      loader: '@svgr/webpack',
    }),
    addWebpackPlugin(new ArcoWebpackPlugin()),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    })
  ),
};
