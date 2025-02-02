const express = require('express');
const Job = require('../models/jobModel');

const router = express.Router();

router.get('/', async (req, res) => {
    // try {
        // const jobs = await Job.find();
        res.json([{ JobTitle: "Fitter", position: 5 }]);
    // }catch(error){
        // res.status(500).json({message: error.message})
    // }
});

module.express = router;