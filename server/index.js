// server/index.js または適切なサーバーサイドのエントリポイントファイル
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../src/App').default; // Appコンポーネントのインポートパスを確認

const PORT = 9000;
const app = express();

app.use(express.static('dist')); // クライアントサイドのビルドされた静的ファイルを提供

app.get('*', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));

  // 動的にHTML文書を生成
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React App</title>
    </head>
    <body>
        <div id="root">${appHtml}</div>
        <script src="client.bundle.js"></script> <!-- クライアントサイドのバンドルを正しく参照してください -->
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});