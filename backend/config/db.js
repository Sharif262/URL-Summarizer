/*
Import Mongoose: The first step is to import Mongoose, a library that simplifies working with MongoDB in Node.js.

Define the Connection Function:  define an asynchronous function connectDB that will handle the connection to the MongoDB database.

Attempt to Connect: Inside the try block, the mongoose.connect function is called with the MongoDB URI from an environment variable (process.env.MONGO_URI). We also pass some options to avoid deprecated MongoDB features.

Handle Success: If the connection is successful, a message is printed to the console.

Handle Errors: If there is an error during the connection attempt, the error message is logged, and the process exits with an error code.

Export the Function: The connectDB function is then exported so it can be used elsewhere in the project, typically to establish the database connection when the server starts.

This commented code provides a clear understanding of each step involved in setting up the database connection.


*/