import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const loginURL = "https://practicetestautomation.com/practice-test-login/";

Given("I am on the login page", () => {
    cy.visit(loginURL);
});

When('I enter valid credentials', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
});

When('I enter "invalidUser" as a username and "Password123" as password', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
});

When('I enter "student" as username and "WrongPassword" as password', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('WrongPassword');
    cy.get('#submit').click();
});

When('I submit the form without entering credentials', () => {
    cy.get('#submit').click();
});

When("I click the logout button", () => {
    cy.contains("Log out").click();
});

Then("I am redirected to the success page", () => {
    cy.get('.post-title').should('have.text', 'Logged In Successfully');
});

Then('I should see a username error message', () => {
    cy.get('#error').should('be.visible');
});

Then('I should see a password error message', () => {
    cy.get('#error').should('be.visible');
});

Then('I should see an error message', () => {
    cy.get('#error').should('be.visible');
});

Then("I should be redirected to the login page", () => {
    cy.url().should("include", "/practice-test-login/");
    cy.get("#username").should("be.visible");
});