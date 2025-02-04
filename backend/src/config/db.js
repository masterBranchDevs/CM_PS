const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connection_DB = async () => {
    try {
        const MONGO_URI = 'mongodb+srv://21amtics464:root1@jobs.sepmv.mongodb.net/?retryWrites=true&w=majority&appName=jobs';
        await mongoose.connect(MONGO_URI, {});
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        process.exit(1); // Optionally exit if the connection fails
    }
};

module.exports = connection_DB;
