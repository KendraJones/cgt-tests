import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the Demoblaze product page', () => {
    cy.visit('https://demoblaze.com/#');
});

When('I select a cell phone', () => {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
});

When('I select a laptop', () => {
    cy.get('[onclick="byCat(\'notebook\')"]').click();
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
});

When('I select a monitor', () => {
    cy.get('[onclick="byCat(\'monitor\')"]').click();
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
});

When('add it to the cart', () => {
    cy.get('.col-sm-12 > .btn').click();
});

Then('I should see the cell phone in the cart', () => {
    cy.get('#cartur').click();
    cy.get('.success > :nth-child(2)').should('have.text', 'Samsung galaxy s6');
});

Then('I should see the laptop in the cart', () => {
    cy.get('#cartur').click();
    cy.get('.success > :nth-child(2)').should('have.text', 'Sony vaio i5');
});

Then('I should see the monitor in the cart', () => {
    cy.get('#cartur').click();
    cy.get('.success > :nth-child(2)').should('have.text', 'Apple monitor 24');
})