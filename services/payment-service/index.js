const express = require('express');
const app = express();
const PORT = 3004; // Replace X with correct port

app.get('/payment_service', (req, res) => {
  res.json({ message: 'Mock response from SERVICE_NAME' });
});

app.get('/health', (req, res) => {
  res.send('payment_service is healthy');
});

app.listen(PORT, () => {
  console.log(`payment_service running on port ${PORT}`);
});
