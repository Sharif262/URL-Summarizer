/*
Explanation of scrapeController.js:
Imports:

puppeteer: The library used for headless browsing and web scraping.
ScrapedData: The Mongoose model that defines how the scraped data is stored in MongoDB.
scrapeWebsite Function:

Input: Expects the URL to scrape, provided in the request body (req.body.url).
Browser Launch: Starts a headless browser session using Puppeteer.
Navigation: The browser navigates to the given URL.
Scraping: The example shows scraping the page title using document.title. You can extend this by targeting specific elements.
Data Storage: The scraped data is saved to the MongoDB collection using the ScrapedData model.
Response: Returns the scraped data as a JSON response to the client.

*/