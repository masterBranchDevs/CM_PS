const express = require('express');
const jobController = require('../controllers/job.controller')
const router = express.Router();

router.get('/all_jobs', jobController.all_Jobs );
router.post('/job', jobController.add_job );

module.exports = router;