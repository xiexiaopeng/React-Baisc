const path = require("path");
const MockjsWebpackPlugin = require("mockjs-webpack-plugin");

const { REACT_APP_MOCK_PORT } = process.env;

const MockjsWebpackPluginFun = () => {
  return new MockjsWebpackPlugin({
    path: path.join(__dirname, "./mocks"),
    port: Number(REACT_APP_MOCK_PORT),
  });
};

export { MockjsWebpackPluginFun };
