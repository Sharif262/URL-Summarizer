


document.getElementById('scrapeForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const url = document.getElementById('urlInput').value;
    const action = document.getElementById('action').value;  // Capture the selected action
    const selector = document.getElementById('selector').value;
    const inputValue = document.getElementById('inputValue').value;
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch('/api/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url, action, selector, inputValue }),  // Send the action to the backend
        });

        if (!response.ok) {
            throw new Error('Failed to scrape the website');
        }

        const data = await response.json();
        resultDiv.innerHTML = `<p><strong>Title:</strong> ${data.data.title}</p>-
                               <p><strong>Action Performed:</strong> ${data.data.actionPerformed || 'None'}</p>-
                               <p><strong>Content:</strong> ${data.data.content}</p>`;
    } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
