const express = require('express');
const app = express();
const PORT = 3002; // Replace X with correct port

app.get('/inventory_service', (req, res) => {
  res.json({ message: 'Mock response from SERVICE_NAME' });
});

app.get('/health', (req, res) => {
  res.send('inventory_service is healthy');
});

app.listen(PORT, () => {
  console.log(`inventory_service running on port ${PORT}`);
});
