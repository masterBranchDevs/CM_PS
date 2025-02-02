const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    positions: Number,
});

module.exports = mongoose.model('Job', jobSchema);