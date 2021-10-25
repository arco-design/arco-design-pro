const { override, addLessLoader, addWebpackModuleRule, addWebpackPlugin } = require('customize-cra');
const ArcoWebpackPlugin = require('@arco-design/webpack-plugin');

module.exports = {
  webpack: override(
    addLessLoader(),
    addWebpackModuleRule({
      test: /\.svg$/,
      loader: '@svgr/webpack'
    }),
    addWebpackPlugin(new ArcoWebpackPlugin()),
  )
}