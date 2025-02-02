const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connection_DB = require("./src/config/db");
const jobFormRoutes = require("./src/routes/routes");
const jobRoutes = require('./src/routes/jobRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connection_DB();

//Routes
app.use('/api/cm', jobFormRoutes);
app.use('/api/jobs', jobRoutes);


// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));