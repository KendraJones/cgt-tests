import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { qbankPage } from "../Pages/QBankPage";

Given('I am on the Transfer Funds screen', () => {
    qbankPage.visit();
    qbankPage.username('qbankadmin');
    qbankPage.password('qbTrnPass1&');
    qbankPage.signIn();
    qbankPage.sidebar();
});

When('I enter valid information and submit the transfer', (text: string) => {
    qbankPage.selectAccount('Salary Account');
    qbankPage.dayCare('Day care');
    qbankPage.transferAmount('10');
    qbankPage.memo('Test');
    qbankPage.submit();
});

Then('I should be redirected to a confirmation screen', () => {
    qbankPage.getReferenceId()
        .should('not.be.empty')
        .then((refId) => {
            cy.log(`Reference Id is: ${refId}`);
        });
});