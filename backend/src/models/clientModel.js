const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    education: { type: String, required: true },
    position: { type: String, required: true }
}, { timestamps: true });

const clientForm = mongoose.model('Recent_Applied', formSchema);

module.exports = clientForm;
