/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const {
  override,
  addWebpackModuleRule,
  addWebpackPlugin,
  addWebpackAlias,
} = require('customize-cra');
const ArcoWebpackPlugin = require('@arco-plugins/webpack-react');
const addLessLoader = require('customize-cra-less-loader');
const setting = require('./src/settings.json');

module.exports = {
  webpack: override(
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            'arcoblue-6': setting.themeColor,
          },
        },
      },
    }),
    addWebpackModuleRule({
      test: /\.svg$/,
      loader: '@svgr/webpack',
    }),
    addWebpackPlugin(
      new ArcoWebpackPlugin({
        theme: '@arco-themes/react-arco-pro',
      })
    ),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    })
  ),
};
