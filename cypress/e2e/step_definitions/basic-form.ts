import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the basic form page", () => {
    cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html");
});

When("I fill in the form fields", () => {
    cy.get("input[name='username']").type("myUser");
    cy.get("input[name='password']").type("myPassword");
    cy.get("textarea[name='comments']").type("This is a test comment.");
});

When("I check the first checkbox", () => {
    cy.get("input[name='checkboxes[]']").first().check();
});

When("I select Drop Down Item 2 from the dropdown", () => {
    cy.get('[value="ms2"]').click();
});

When("I submit the form", () => {
    cy.get('[type="submit"]').click();
});

Then("I should see the form submission confirmation", () => {
    cy.contains("Processed Form Details").should("exist"); // Title of the confirmation page
});
