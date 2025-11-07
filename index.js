const express = require('express');
const app = express();
app.use(express.json());

app.get('/inventory', (req, res) => {
    res.json({ message: 'Inventory service is running' });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Inventory service running on port ${PORT}`));
