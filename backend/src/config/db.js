const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // Ensure environment variables are loaded

const connection_DB = async () => {
    try {
        // Use the IPv4 address explicitly
        const MONGO_URI = 'mongodb://127.0.0.1:27017/cmServices';
        
        await mongoose.connect(MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });

        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        process.exit(1); // Optionally exit if the connection fails
    }
};

module.exports = connection_DB;
