const express = require('express');
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

// Route for testing
app.get('/', (req, res) => {
    res.send('Hello, world! This is a dummy testing route.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;  // Exporting for testing or modular use
