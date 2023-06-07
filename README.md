# Daily Inspiration Chrome Extension

The Daily Inspiration Chrome Extension is a simple extension that displays a new inspirational quote every day on the new tab page. It provides a source of motivation and positivity to start your day off right.

## Features

- Displays a new inspirational quote on the new tab page every day.
- Fetches quotes from an external API (https://api.quotable.io/random).
- Only fetches a new quote when the extension tab is opened for the first time each day.
- Saves the last extension open date using Chrome's `chrome.storage.local` API to avoid unnecessary quote fetches.

## Installation

Follow these steps to install the Daily Inspiration Chrome Extension:

1. Clone the repository to your local machine or download the source code as a ZIP file.
2. Open Google Chrome and go to `chrome://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on the "Load unpacked" button and select the directory where you cloned or extracted the extension's source code.
5. The Daily Inspiration Chrome Extension will now be installed and activated in your browser.

## Usage

Once the extension is installed, follow these steps to see the daily inspirational quote:

1. Open a new tab in Google Chrome.
2. The extension will display a new inspirational quote on the new tab page.
3. The quote will be fetched from the external API (https://api.quotable.io/random) only if it's the first time you open a new tab for the day.
4. If you open subsequent new tabs on the same day, the previously fetched quote will be displayed again to avoid unnecessary API calls.
5. Enjoy the daily dose of inspiration and motivation!

## Customization

If you wish to customize the extension or make modifications, here's a breakdown of the code structure:

- `background.js`: This script runs in the background and handles message passing between the content script and the extension.
- `newtab.html`: This HTML file defines the structure of the new tab page.
- `newtab.js`: This script runs on the new tab page and retrieves the daily quote from the background script and updates the DOM accordingly.
- `manifest.json`: This file contains the metadata and configuration for the extension, including permissions, icons, and background scripts.

Feel free to explore the code and make changes to suit your preferences or add additional features to enhance the functionality of the extension.

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or enhancements, feel free to open an issue or submit a pull request. Please ensure that any code changes align with the overall goals and functionality of the extension.

## Acknowledgements

The Daily Inspiration Chrome Extension utilizes the [Quotable API](https://api.quotable.io/) to fetch daily inspirational quotes. We thank the Quotable API for providing the valuable service of delivering inspirational content.
