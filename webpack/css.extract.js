const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(paths) {
  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: './css/[name].css'
      })
    ],
    module: {
      rules: [{
        test: /\.sass$/,
        include: paths,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: { path: 'postcss.config.js' }
            }
          },
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        include: paths,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: { path: 'postcss.config.js' }
            }
          }
        ]
      }]
    }
  };
};




// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         indexStyles: {
//           name: 'index',
//           test: /index\.sass/,
//           chunks: 'all',
//           enforce: true,
//         },
//         blog1Styles: {
//           name: 'blog1',
//           test: /blog1\.sass/,
//           chunks: 'all',
//           enforce: true,
//         },
//       },
//     },
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: './css/[name].css'
//     })
//   ],
//   module: {
//     rules: [{
//       test: /\.sass$/,
//       // include: paths,
//       use: [
//         // 'style-loader',
//         {
//           loader: MiniCssExtractPlugin.loader,
//           options: {
//             publicPath: '../',
//           }
//         },
//         'css-loader',
//         'sass-loader'
//       ]
//     }, {
//       test: /\.css$/,
//       // include: paths,
//       use: [
//         // 'style-loader',
//         MiniCssExtractPlugin.loader,
//         'css-loader'
//       ]
//     }]
//   }
// };