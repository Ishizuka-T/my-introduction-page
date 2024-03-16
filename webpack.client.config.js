// webpack.client.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx', // クライアントサイドのエントリーポイント
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};