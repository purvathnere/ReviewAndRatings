const express = require('express');
const cors = require('cors');
const path = require('path');  // ✅ Add path module to serve frontend files
const app = express();
const reviewRoutes = require('./routes/reviews');

app.use(cors());
app.use(express.json());

// Explicitly set a base path for the API routes
app.use('/api', reviewRoutes);

// Handle React client-side routing correctly (important for direct URL navigation)
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
