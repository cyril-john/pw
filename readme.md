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

- [Node.js](https://nodejs.org/) (version 14 or higher)
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

```

##  Running Tests 

Run All Tests
To run all tests, execute the following command:

 ```bash
npm test
```


Run a Specific Test
To run a specific test file, use:
 ```bash
npm run test -- src/tests/your-test-file.spec.ts
```

Run Tests with a Specific Tag
You can tag your tests using the @tag notation and run tests with a specific tag:
 ```bash
npm run test -- --grep @yourTag
```

Show Test Report
After running your tests, you can generate and open the HTML report:
 ```bash
npm run show-report
```

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

