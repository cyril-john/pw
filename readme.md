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
