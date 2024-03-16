// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 正しいファイルパスを確認

ReactDOM.hydrate(<App />, document.getElementById('root'));