class QBankPage {

    visit() {
        cy.visit('https://qbank.accelq.com/')
    };

    username(username: string) {
        cy.get('#qb-username').type(username);
    };

    password(password: string) {
        cy.get('#qb-password').type(password);
    };

    signIn() {
        cy.get('.qb-signin-button').click();
    };

    sidebar() {
        cy.get('#sidebar > div:nth-child(2) > div:nth-child(3)').click();
    };

    selectAccount(accountName: string) {
        cy.get('#qbf-accountname-input')
            .should('be.visible')
            .select(accountName);

        cy.get('#qbf-accountname-input')
            .should('have.value', accountName);
    };

    dayCare(dayCare: string) {
        cy.get('#qbf-toaccount-input').select(dayCare);
    };

    transferAmount(transferAmount: string) {
        cy.get('#qbf-amount-input').type(transferAmount);
    };

    memo(memo: string) {
        cy.get('#qbf-memo-input').type(memo);
    };

    submit() {
        cy.get('#sub-qb').click();
    };

    getReferenceId(): Cypress.Chainable<string> {
        return cy.get('#ref_id_input')
            .invoke('val')
            .then((value) => value as string);
    };

    simulateInactivity() {
        cy.log('Simulating inactivity...')
        cy.wait(5 * 60 * 1000) // 5 minutes
    };

    interactWithPage() {
        cy.get(':nth-child(3) > [ng-hide="userCtrl.skeletonLoader"] > :nth-child(6) > .qb-showmodal-btn');
    };

    validateRedirectToLogin() {
        cy.url().should('include', '/login');
        cy.contains('Your session has expired').should('exist');
    };

};

export const qbankPage = new QBankPage();