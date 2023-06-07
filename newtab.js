document.addEventListener('DOMContentLoaded', () => {
  chrome.runtime.sendMessage({ action: 'getQuote' }, (response) => {
    document.getElementById('quote').innerText = response.quote;
  });
});
