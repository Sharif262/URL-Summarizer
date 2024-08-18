/*

Explanation of ScrapedData.js:
Imports:

mongoose: This is the ODM (Object Data Modeling) library used to interact with MongoDB in a more structured way.
Schema Definition:

scrapedDataSchema: This defines the structure of the data you will store in MongoDB. Each field represents a key in the document:
url: Stores the URL of the web page that was scraped. It's marked as required, meaning that every document must have a URL.
title: Stores the title of the page or any specific content you scrape.
content: Stores the main content or other specific data you scrape from the page.
dateScraped: Automatically records the date and time when the data was scraped, with a default value set to the current date and time.
Model Creation:

ScrapedData: This is the model created from the schema. A model in Mongoose provides an interface to interact with the corresponding collection in your MongoDB database.
Export:

The model is exported so it can be used in other parts of your application, such as in your controller (scrapeController.js) where you save the scraped data.
*/