const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // regex to match CSS files
        use: [
          'style-loader', // this loader should come before css-loader
          'css-loader'
        ]
      }
    ]
  }
};
