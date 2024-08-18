const express = require('express');
const { scrapeWebsite } = require('../controllers/scrapeControllers');

const router = express.Router();

// Define the scrape route
router.post('/scrape', scrapeWebsite);

module.exports = router;