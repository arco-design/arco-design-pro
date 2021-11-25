/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {
  override,
  addLessLoader,
  addWebpackModuleRule,
  addWebpackPlugin,
  addWebpackAlias,
} = require("customize-cra");
const ArcoWebpackPlugin = require("@arco-design/webpack-plugin");

module.exports = {
  webpack: override(
    addLessLoader(),
    addWebpackModuleRule({
      test: /\.svg$/,
      loader: "@svgr/webpack",
    }),
    addWebpackPlugin(new ArcoWebpackPlugin()),
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    })
  ),
};
