const path = require('path');

module.exports = {
  target: 'node', // サーバーサイド特有の設定
  entry: './server/index.js', // エントリーポイントの修正
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力ディレクトリ
    filename: 'server.bundle.js' // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScriptファイルに適用
        exclude: /node_modules/, // node_modulesは除外
        use: {
          loader: 'babel-loader', // babel-loaderを使用
          options: {
            presets: ['@babel/preset-env'] // ES6以上のJavaScriptを変換
          }
        }
      }
    ]
  }
};