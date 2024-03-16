import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App'; // React アプリケーションのルートコンポーネントのパスを適切に設定

const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My SSR React App</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));