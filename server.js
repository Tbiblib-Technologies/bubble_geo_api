const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express();
app.use(bodyParser.json());

app.post('/city', (req, res) => {
  const { cityName } = req.body;
  if (!cityName) {
    return res.status(400).json({ error: 'City name is required' });
  }
  return res.json({ cityName });
});

module.exports = app; // Export the app
module.exports.handler = serverless(app); // For serverless deployment
