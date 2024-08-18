const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Define API routes
app.use('/api', require('./routes/ScrapeRoutes'));

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
