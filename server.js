const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (e.g., your frontend build files)
app.use(express.static('public')); // Replace 'public' with your build folder if applicable

// API Endpoint Example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
