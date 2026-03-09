# Playwright Automation Framework

## Overview

This project is an end-to-end automation framework built using **Playwright with TypeScript**.
It covers **UI automation, API testing, API-UI validation, data-driven testing, network mocking, and CI integration**.

The framework follows **Page Object Model (POM)** to improve maintainability and reduce flaky tests.

---

## Tech Stack

* **Playwright**
* **TypeScript**
* **Node.js**
* **Faker.js (test data generation)**
* **Allure Reporting**
* **GitHub Actions (CI/CD)**

---

## Framework Features

* Page Object Model (POM)
* API Testing using Playwright request fixture
* API + UI data validation
* Data-driven testing
* Network API mocking
* File upload & download testing
* Parallel test execution
* Custom reporting (HTML + Allure)
* CI pipeline using GitHub Actions

---

## Project Structure

```
playwright-automation-framework
│
├── pages
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── LoginPage.ts
│
├── tests
│   ├── carts
│   ├── checkout
│   ├── forms
│   ├── products
│   └── api
│
├── fixtures
│   └── test-fixture.ts
│
├── utils
│   └── test-data.ts
│
├── test-data
│   └── sample-data.json
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```
git clone <repository-url>
cd playwright-automation-framework
```

Install dependencies

```
npm install
```

Install Playwright browsers

```
npx playwright install
```

---

## Running Tests

Run all tests

```
npx playwright test
```

Run tests in headed mode

```
npx playwright test --headed
```

Run a specific test file

```
npx playwright test tests/products/search.spec.ts
```

Run tests in debug mode

```
npx playwright test --debug
```

---

## Test Reporting

Playwright HTML report

```
npx playwright show-report
```

Allure report

```
npx allure serve allure-results
```

---

## CI/CD Integration

This project includes a **GitHub Actions pipeline** that:

* Installs dependencies
* Installs Playwright browsers
* Runs automated tests
* Uploads Playwright HTML reports

Pipeline file location:

```
.github/workflows/playwright.yml
```

---

## Test Coverage

The automation suite covers the following:

* User Registration
* Login / Logout
* Product Search
* Add to Cart
* Remove from Cart
* Checkout Flow
* Contact Form
* Category Navigation
* Scroll Validation
* API Product Validation
* API + UI Integration Validation

---

## Key Automation Concepts Used

* Page Object Model
* Reusable test utilities
* Independent test cases
* Dynamic test data
* Network interception
* Parallel execution
* API mocking

---


---
