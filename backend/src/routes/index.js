const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const companyRoutes = require('./companyRoutes');
// User Routes
router.use('/apply_job', userRoutes);


// Job Routs 
router.use('/jobs', jobRoutes);
router.use('/add', jobRoutes);

// Company Routes
router.use('/company', companyRoutes);

module.exports = router;