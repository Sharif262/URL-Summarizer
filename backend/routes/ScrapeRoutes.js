/*
Explanation of scrapeRoutes.js:
Imports:

express: The Express framework is used to create the router.
scrapeWebsite: This is the controller function from scrapeController.js that handles the logic for scraping a website.
Router Setup:

router.post('/scrape', scrapeWebsite);:
This line defines a POST route at the /scrape endpoint.
When a POST request is made to /api/scrape (assuming your routes are prefixed with /api), the scrapeWebsite function from your controller will be executed.
Export:

The router is exported so it can be used in the main server file (app.js).
*/