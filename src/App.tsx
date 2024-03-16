// src/App.tsx
import React from 'react';
import './App.css'; // CSSファイルをインポート

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HelloWorld</h1>
        <p>おはよう世界</p>
        <a
          className="App-link"
          href="https://www.yodobashi.com/product/100000086601426842/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reactを学ぶ
        </a>
      </header>
    </div>
  );
};

export default App;