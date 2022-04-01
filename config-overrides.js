/* config-overrides.js */
import { MockjsWebpackPluginFun } from "./webpack/dev.js";
const { override, addLessLoader, addWebpackPlugin } = require("customize-cra");

module.exports = {
  webpack: override(
    addWebpackPlugin(MockjsWebpackPluginFun()),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
      },
    })
  ),
};
