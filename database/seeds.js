/*
Explanation of db.js:
Imports:

mongoose: This is the ODM (Object Data Modeling) library that allows you to interact with MongoDB in a more structured way using schemas and models.
dotenv: This module loads environment variables from a .env file into process.env. This is important for keeping sensitive information like your MongoDB connection string out of your codebase.
connectDB Function:

Purpose: This is an asynchronous function that attempts to connect to your MongoDB database using the connection string stored in the MONGO_URI environment variable.
Connection Options:
useNewUrlParser: true: This option ensures that Mongoose uses the new MongoDB connection string parser.
useUnifiedTopology: true: This option enables the new unified topology layer, which removes support for several connection options that are no longer relevant.
Error Handling:
If the connection fails, the error is caught, logged to the console, and the process exits with a non-zero status (process.exit(1)), indicating a failure.
Environment Variables:

process.env.MONGO_URI: This is where your MongoDB connection string is stored. It is loaded from the .env file.
*/