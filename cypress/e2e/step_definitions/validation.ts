import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const loginUrl = "https://practicetestautomation.com/practice-test-login/";

Given('I open the login page', () => {
    cy.visit(loginUrl);
});

When(
    "I enter {string} as username and {string} as password",
    (username: string, password: string) => {
        if (username === "") {
            cy.get("#username").clear();
        } else {
            cy.get("#username").type(username);
        }

        if (password === "") {
            cy.get("#password").clear();
        } else {
            cy.get("#password").type(password);
        }

        cy.get("#submit").click();
    }
);

Then('I should see an Error Message', () => {
    cy.get("#error").should("be.visible");
});
