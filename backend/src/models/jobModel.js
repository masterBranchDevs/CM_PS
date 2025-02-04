const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: String,
    position: Number,
},{ timestamps: true });

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;