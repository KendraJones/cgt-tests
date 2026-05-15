class DropdownPage {

    visit() {
        cy.visit("https://practice.expandtesting.com/dropdown#google_vignette");
    };

    selectOption(option: string) {
        cy.get("#dropdown").select(option);
    };

    shouldHaveValue(value: string) {
        cy.get("#dropdown").should("have.value", value);
    };

};

export const dropdownPage = new DropdownPage();