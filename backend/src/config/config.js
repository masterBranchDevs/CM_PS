const dotenv = require("dotenv");
dotenv.config();

const config = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/cmServices',
    PORT: process.env.PORT || 5000,
    EMAIL_USER: process.env.EMAIL_USER || 'rakeshshah00004@gmail.com',
    EMAIL_PASS: process.env.EMAIL_PASS || 'rakeshshah00004',
    // JWT_SECRET: process.env.JWT_SECRET_KEY || "secret-key",
};

module.exports = config;