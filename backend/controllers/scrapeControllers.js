const { launchBrowser, createPage } = require('../utils/browser');
const ScrapedData = require('../models/ScrapedData');

exports.scrapeWebsite = async (req, res) => {
    const { url, action, selector, inputValue } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const browser = await launchBrowser();
        const page = await createPage(browser);

        await page.goto(url, { waitUntil: 'domcontentloaded' });

        let result = {};

        // Scrape the title
        const title = await page.evaluate(() => document.title);
        result.title = title;

        // Example: Perform an action based on user input
        if (action === 'click' && selector) {
            await page.click(selector);
            result.actionPerformed = `Clicked on ${selector}`;
        } else if (action === 'type' && selector && inputValue) {
            await page.type(selector, inputValue);
            result.actionPerformed = `Typed '${inputValue}' into ${selector}`;

            // Optionally: Press 'Enter' after typing to simulate a search
            await page.keyboard.press('Enter');

            // Wait for the results page to load
            await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        }

        // Example: Scrape content after interaction
        const content = await page.evaluate(() => {
            return document.querySelector('body').innerText; // Scraping all text in the body as an example
        });
        result.content = content;

        await browser.close();

        // Save the scraped data to MongoDB
        const newScrape = new ScrapedData({
            url,
            title: result.title,
            content: result.content,
            actionPerformed: result.actionPerformed,
        });

        await newScrape.save();

        res.status(200).json({
            message: 'Scraping successful',
            data: newScrape,
        });
    } catch (error) {
        console.error('Scraping error:', error.message);
        res.status(500).json({ error: 'Failed to scrape the website' });
    }
};
