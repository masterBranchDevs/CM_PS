const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connection_DB = require("./src/config/db");
const routes = require('./src/routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Database Connection
connection_DB();

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));