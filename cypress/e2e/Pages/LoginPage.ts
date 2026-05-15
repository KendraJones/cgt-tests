class LoginPage {

    visit() {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
    };

    username(username: string) {
        cy.get('#username').type(username)
    };

    password(password: string) {
        cy.get('#password').type(password)
    };

    submit() {
        cy.get('#submit').click()
    };

    successfulLogin(successMessage: string) {
        cy.get('.post-title').contains(successMessage).should("be.visible");
    };

    successfulLogout() {
        cy.get('.wp-block-button__link').click()
        cy.get('h2').should("be.visible");
    };

    clickLogout() {
        cy.contains("Log out").click();
    };

    usernameError() {
        cy.get('#error').should("be.visible");
    };

    passwordError() {
        cy.get('#error').should("be.visible");
    };

    redirectedToLogin() {
        cy.url().should('include', 'practice-test-login');
        cy.get('#username').should("be.visible");
    };
};

export const loginPage = new LoginPage();