const mongoose = require('mongoose');

// Define the schema for scraped data
const scrapedDataSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    dateScraped: {
        type: Date,
        default: Date.now,
    },
});

// Create the model using the schema
const ScrapedData = mongoose.model('ScrapedData', scrapedDataSchema);

module.exports = ScrapedData;