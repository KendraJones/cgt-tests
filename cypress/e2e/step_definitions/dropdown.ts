import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open the dropdown page', () => {
    cy.visit('https://the-internet.herokuapp.com/dropdown');
});

When('I select {string} from the dropdown', (option: string) => {
    cy.get('#dropdown').select(option);
});

Then('the dropdown value should be {string}', (value: string) => {
    cy.get('#dropdown').should('have.value', value);
});