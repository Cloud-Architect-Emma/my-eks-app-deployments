const express = require('express');
const app = express();
const PORT = 3006; // Replace X with correct port

app.get('/feedback_service', (req, res) => {
  res.json({ message: 'Mock response from SERVICE_NAME' });
});

app.get('/health', (req, res) => {
  res.send('feedback_service is healthy');
});

app.listen(PORT, () => {
  console.log(`feedback_service running on port ${PORT}`);
});
