const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const vendors = require('./webpack/vendors');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const babel = require('./webpack/babel');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const common = merge([
  {
    entry: {
      'index': PATHS.src + '/pages/index/index.js',
      'about': PATHS.src + '/pages/about/about.js'
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: PATHS.src + '/pages/index/index.pug',
        favicon: PATHS.src + '/assets/favicon.ico'
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        chunks: ['about'],
        template: PATHS.src + '/pages/about/about.pug',
        favicon: PATHS.src + '/assets/favicon.ico'
      }),
      new HtmlWebpackTagsPlugin({
        tags: ['js/vendors.js', 'js/common.js', './css/common.css'],
        append: false
      }),
      new CopyWebpackPlugin([
        { from: `${PATHS.src}/img`, to: `${PATHS.build}/img` }
      ])
    ]
  },
  pug(),
  images(),
  fonts(),
  babel()
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS(),
      vendors()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass(),
      css()
    ]);
  }
};