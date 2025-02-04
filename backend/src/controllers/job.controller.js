const Job = require('../models/jobModel');


const all_Jobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ _id: -1 });
        res.json(jobs);
    }catch(error){
        res.status(500).json({message: error.message})
    }
};

const add_job = async (req, res) => {
    try {
        const { jobTitle, position } = req.body;
        const newJob = new Job({ jobTitle, position });
        await newJob.save();
        res.json(newJob);
    }catch(error){
        res.status(500).json({
            status: "Error",
            message: "Internal Server Error",
        })
    }
};

module.exports = {
    all_Jobs,
    add_job,
}