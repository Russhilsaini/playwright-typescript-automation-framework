# Playwright TypeScript Automation Framework

## Overview

This project is a robust test automation framework built using Playwright and TypeScript. The framework follows industry-standard automation practices and is designed for scalable, maintainable, and reusable test automation.

The framework supports UI automation, data-driven testing, cross-browser execution,  and file handling operations.



## Tech Stack

* Playwright
* TypeScript
* Node.js
* JSON Test Data
* Excel Utilities
* PDF Validation



## Key Features

### UI Automation

* End-to-end web application testing
* Cross-browser execution
* Locator-based element handling
* Reusable page methods

### Page Object Model (POM)

* Separation of test scripts and page actions
* Improved code maintainability
* Reusable page components

### Data-Driven Testing

* Externalized test data using JSON files
* Easy test data management
* Supports multiple test scenarios

### Cross Browser Testing

* Chromium
* Firefox
* WebKit (Safari)

### File Handling

* Excel file reading and validation
* PDF content validation

### Reporting

* HTML Test Reports
* Playwright Trace Support for failed tests


## Project Structure

```text
Project Root
│
├── tests/
│   ├── Test Scripts
│
├── pages/
│   ├── Page Object Classes
│
├── testData/
│   ├── data.json
│
├── utils/
│   ├── Common Utilities
│   ├── Excel Utilities
│   └── PDF Utilities
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```



## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd playwright_tdd_framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```


## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/testname.spec.ts
```

Run tests in Chromium:

```bash
npx playwright test --project=chromium
```

Run tests in Firefox:

```bash
npx playwright test --project=firefox
```

Run tests in WebKit:

```bash
npx playwright test --project=webkit
```



## Generate Report

After execution:

```bash
npx playwright show-report
```

The framework generates an HTML report for detailed test execution analysis.



## Sample Test Data

```json
{
  "username": "testuser@example.com",
  "password": "Password123"
}
```



## Framework Highlights

* Playwright with TypeScript
* Page Object Model Design Pattern
* Data-Driven Testing
* Cross-Browser Execution
* Excel File Validation
* PDF Validation
* HTML Reporting
* Reusable Utility Methods
* Scalable Framework Architecture



## Future Enhancements

* API Automation Integration
* CI/CD Pipeline Integration
* Docker Support
* Parallel Execution Optimization
* Allure Reporting
* Environment-Based Configuration



## Author

Russhil Saini

Software Tester | QA Engineer | Test Automation Enthusiast

Specialized in Manual Testing, Automation Testing, API Testing, and Test Framework Development using Playwright and TypeScript.
