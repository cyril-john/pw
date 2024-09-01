# 🎭 Playwright

[![npm version](https://img.shields.io/npm/v/playwright.svg)](https://www.npmjs.com/package/playwright) <!-- GEN:chromium-version-badge -->[![Chromium version](https://img.shields.io/badge/chromium-128.0.6613.36-blue.svg?logo=google-chrome)](https://www.chromium.org/Home)<!-- GEN:stop --> <!-- GEN:firefox-version-badge -->[![Firefox version](https://img.shields.io/badge/firefox-129.0-blue.svg?logo=firefoxbrowser)](https://www.mozilla.org/en-US/firefox/new/)<!-- GEN:stop --> <!-- GEN:webkit-version-badge -->[![WebKit version](https://img.shields.io/badge/webkit-18.0-blue.svg?logo=safari)](https://webkit.org/)<!-- GEN:stop --> [![Join Discord](https://img.shields.io/badge/join-discord-infomational)](https://aka.ms/playwright/discord)

## [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

|          | Linux | macOS | Windows |
|   :---   | :---: | :---: | :---:   |
| Chromium <!-- GEN:chromium-version -->128.0.6613.36<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->18.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->129.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |

Headless execution is supported for all browsers on all platforms. Check out [system requirements](https://playwright.dev/docs/intro#system-requirements) for details.




# Playwright Automation Framework with TypeScript

This repository contains a Playwright-based automation framework using TypeScript. The framework is designed for end-to-end testing of web applications, providing a robust structure to write, run, and manage tests efficiently.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Writing Tests](#writing-tests)
- [Mock API Testing](#mock-api-testing)
- [Continuous Integration](#continuous-integration)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow the instructions below to set up the project and start running your first tests.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/cyril-john/pw.git
    cd playwright-automation
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## Project Structure

```plaintext
.
├── src
│   ├── tests/           # Test files
│   ├── pages/           # Page Object Models
│   ├── utils/           # Utility functions
│   └── fixtures/        # Test data and mock data
├── playwright.config.ts # Playwright configuration
├── package.json         # npm/Yarn dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation


## Project Structure

Run All Tests
To run all tests, execute the following command:

npm test


Run a Specific Test
To run a specific test file, use:
npm run test -- src/tests/your-test-file.spec.ts

Run Tests with a Specific Tag
You can tag your tests using the @tag notation and run tests with a specific tag:
npm run test -- --grep @yourTag

Show Test Report
After running your tests, you can generate and open the HTML report:
npm run show-report

NPM Scripts
The following npm scripts are available for running and managing tests:

npm test: Runs all tests using Playwright.
npm run show-report: Generates and opens the HTML report after tests are executed.
npm run test:ci: Runs tests in headless mode for CI/CD environments.
To add these scripts to your package.json, include the following:
{
  "scripts": {
    "test": "npx playwright test",
    "show-report": "npx playwright show-report",
    "test:ci": "npx playwright test --ci"
  }
}

