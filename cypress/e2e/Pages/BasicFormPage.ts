class BasicFormPage {

    visit() {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
    };

    fillForm(username: string, password: string, comments: string) {
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('textarea').clear().type(comments)
    };

    checkCheckbox() {
        cy.get('[value="cb1"]').check();
    };

    selectDropdown(option: string) {
        cy.get('select[name="multipleselect[]"]').select(option);
    };

    submit() {
        cy.get('input[type="submit"]').click();
    };

    shouldSeeConfirmation() {
        cy.get('.explanation > p').should('contain.text', 'You submitted the form.');
    };

};

export const basicFormPage = new BasicFormPage();