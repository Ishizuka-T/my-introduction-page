const express = require('express');
const app = express();
const PORT = 9000;
import { renderToString } from 'react-dom/server';

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});