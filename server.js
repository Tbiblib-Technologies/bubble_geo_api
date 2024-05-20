const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());

// POST endpoint to receive city name
app.post('/city', (req, res) => {
  const { cityName } = req.body;

  if (!cityName) {
    return res.status(400).json({ error: 'City name is required' });
  }

  console.log('Received city name:', cityName);
  return res.json({ cityName });
});

// The Vercel platform automatically provides the PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
