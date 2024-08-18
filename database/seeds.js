const mongoose = require('mongoose');
const ScrapedData = require('../backend/models/ScrapedData');

const seedData = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const data = [
        { url: 'https://example.com', title: 'Example', content: 'This is an example.', dateScraped: new Date() },
        // Add more data objects as needed
    ];

    await ScrapedData.insertMany(data);
    console.log('Database seeded successfully');

    mongoose.connection.close();
};

seedData();