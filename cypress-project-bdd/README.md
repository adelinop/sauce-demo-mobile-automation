# Cypress Project BDD

This project is an example of using the Cypress framework with BDD approach. It aims to automate the website https://www.saucedemo.com/ and demonstrate the power and ease of use of Cypress.

## Getting Started

### Prerequisites

Before you begin, make sure you have the latest stable versions of Node.js and npm installed on your machine.

### Installing

1. Clone this repository.
2. Navigate to the `cypress-project-bdd` directory and run `npm install` to install the dependencies.

### Running the tests

- Run the command `npm run cy:run` to execute the tests. The tests will run in the Cypress Test Runner and generate an HTML report.

## Reporting

This project uses the `cypress-cucumber-preprocessor` and `cypress-html-reporter` to generate reports in a BDD style. After running the tests, you can find the generated HTML report in the `/reports/index.html` directory.

## Code Formatting and Linting

This project uses `prettier` and `eslint` to format and lint the code. The configurations are already set up in the `package.json` file.
