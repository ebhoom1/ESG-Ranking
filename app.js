const express = require('express');
const dotenv = require('dotenv');
const DB = require('./config/DB');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
DB();

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});
