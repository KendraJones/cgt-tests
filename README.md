# Cypress, Gherkin, and TypeScript Web Testing

![Cypress](https://img.shields.io/badge/Cypress-15.0.0-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Node](https://img.shields.io/badge/Node-22.15.1-brightgreen)
![Cucumber](https://img.shields.io/badge/Cucumber-Gherkin-23D96C)
![License](https://img.shields.io/badge/License-ISC-yellow)

## This project serves as a demonstration of BDD-style automated testing using modern tools. It is intended for my own educational and portfolio purposes. I will be continuously adding to this.

## Technologies Used

- **Cypress** – End-to-end testing framework for web applications
- **Gherkin** – Syntax for writing human-readable feature specifications
- **TypeScript** – Strongly typed language for scalable test logic

## Project Structure

- `cypress/e2e/Features/` – Gherkin feature files describing test scenarios
- `cypress/e2e/Step-Definitions/` – TypeScript implementations of Gherkin steps
- `cypress/e2e/Pages/` - Page objects models that encapsulate element selectors and actions for each page under test
- `cypress/` – Root directory containing all test files, page objects, and support files

## How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) v22.18.0 or higher
- npm

### Installation
1. Clone the repository:
```bash
   git clone https://github.com/KendraJones/cgt-tests.git
```
2. Navigate to the project directory:
```bash
   cd cgt-tests
```
3. Install dependencies:
```bash
   npm install
```

### Running Tests
Run tests in headless mode:
```bash
npm run test
```
Run tests with the Cypress UI:
```bash
npm run cypress:open