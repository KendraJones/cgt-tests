import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let response: Cypress.Response<any>;

Given('the API base URL is set', () => {
    cy.wrap('https://jsonplaceholder.typicode.com').as('baseURL');
});

When('I send a GET request to the users endpoint', () => {
    cy.get('@baseURL').then((baseURL) => {
        cy.request({
            method: "GET",
            url: `${baseURL}/users`,
        }).then((res) => {
            cy.wrap(res).as('response');
        });
    });
});

Then('the response status should be 200', () => {
    cy.get('@response').then((response: any) => {
        expect(response.status).to.eq(200);
    });
});

Then('the response should contain a list of users', () => {
    cy.get('@response').then((response: any) => {
        expect(response.body).to.exist;
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
    });
});