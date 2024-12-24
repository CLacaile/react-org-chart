const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  name: '@unicef/react-org-chart',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    sourceMapFilename: './index.js.map',
    pathinfo: true,
    library: {
      name: '@unicef/react-org-chart',
      type: 'umd',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  externals: {
    d3: {
      commonjs: 'd3',
      commonjs2: 'd3',
      amd: 'd3',
      root: '_',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_',
    },
  },
}
