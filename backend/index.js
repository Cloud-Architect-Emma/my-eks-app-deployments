const express = require('express');
const cors = require('cors');  // allow cross-origin requests

const app = express();
const PORT = 3000;

app.use(cors());  // enable CORS

app.get('/', (req, res) => {
  res.send('Hello, world! Backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
