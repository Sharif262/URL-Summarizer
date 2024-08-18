const puppeteer = require('puppeteer');

async function launchBrowser() {
    try {
        const browser = await puppeteer.launch({
            headless: true,  // Set to false if you want to see the browser UI
            args: ['--no-sandbox', '--disable-setuid-sandbox'],  // Options for running in various environments
        });
        return browser;
    } catch (error) {
        console.error('Failed to launch browser:', error.message);
        throw error;
    }
}

async function createPage(browser) {
    try {
        const page = await browser.newPage();
        // You can set additional page settings here, e.g., viewport size
        return page;
    } catch (error) {
        console.error('Failed to create a new page:', error.message);
        throw error;
    }
}

module.exports = {
    launchBrowser,
    createPage,
};