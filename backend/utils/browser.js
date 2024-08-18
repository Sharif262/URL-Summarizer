/*
Explanation of browser.js:
Functions:

launchBrowser():

Purpose: Launches a new instance of a headless browser.
Options:
headless: true: Runs the browser without a UI (headless mode). Set to false if you want to see the browser's UI.
args: ['--no-sandbox', '--disable-setuid-sandbox']: These options are often necessary when running in environments like Docker or certain CI/CD pipelines.
Returns: A browser instance that you can use to create pages and interact with the web.
createPage():

Purpose: Creates a new tab (or page) in the browser instance.
Returns: A page instance that you can use to navigate to URLs, interact with web elements, and more.
Error Handling: Both functions include basic error handling to catch and log any issues that occur during browser setup or page creation.

Exports:

launchBrowser and createPage are exported so they can be used in other parts of your application, such as in scrapeController.js.
*/