let lastQuoteDate = null;
let quote = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getQuote') {
    const today = new Date().toDateString();
    if (lastQuoteDate !== today) {
      fetchQuote().then((newQuote) => {
        quote = newQuote;
        lastQuoteDate = today;
        sendResponse({ quote });
      });
    } else {
      sendResponse({ quote });
    }
  }
  return true;
});

async function fetchQuote() {
  // Fetch a quote from an API or use a local list of quotes
  // For example, you can use the following API: https://api.quotable.io/random
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return `${data.content} - ${data.author}`;
}
