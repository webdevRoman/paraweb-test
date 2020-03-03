module.exports = function() {
  return {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /node_modules/,
            chunks: 'all',
            enforce: true,
          },
          common: {
            name: 'common',
            test: /common/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  };
};