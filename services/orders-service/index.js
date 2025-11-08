const express = require('express');
const app = express();
const PORT = 3003; // Replace X with correct port

app.get('/orders_service', (req, res) => {
  res.json({ message: 'Mock response from SERVICE_NAME' });
});

app.get('/health', (req, res) => {
  res.send('orders_service is healthy');
});

app.listen(PORT, () => {
  console.log(`orders_service running on port ${PORT}`);
});
