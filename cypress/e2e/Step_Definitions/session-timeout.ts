// cypress/e2e/session-timeout.cy.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { qbankPage } from "../Pages/QBankPage";

Given('I am logged into QBank with valid credentials', () => {
    qbankPage.visit();
    qbankPage.username('qbankadmin');
    qbankPage.password('qbTrnPass1&');
    qbankPage.signIn();
});

When('I remain inactive for 15 minutes', () => {
    qbankPage.simulateInactivity();
});

Then('I should be redirected to the QBank login page', () => {
    // Try to interact again
    qbankPage.interactWithPage();

    // Validate redirection to login
    qbankPage.validateRedirectToLogin();
});