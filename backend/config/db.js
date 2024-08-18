process.env.MONGO_URI = 'mongodb+srv://aaronsharif:PFJ%23R3%40BJyB3spx@cluster0.mxeg5.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0';

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });  // Explicitly specify the path to the .env file

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        console.log('MongoDB URI:', mongoUri);  // Debugging: Ensure the URI is correctly loaded

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
