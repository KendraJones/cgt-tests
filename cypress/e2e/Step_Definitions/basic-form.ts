import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { basicFormPage } from "../Pages/BasicFormPage";

Given("I open the basic form page", () => {
  basicFormPage.visit();
});

When("I fill in the form fields", () => {
  basicFormPage.fillForm("myUser", "myPassword", "This is a test comment.");
});

When("I check the first checkbox", () => {
  basicFormPage.checkCheckbox();
});

When("I select the {string} from the dropdown", (option: string) => {
  basicFormPage.selectDropdown(option);
});

When("I submit the form", () => {
  basicFormPage.submit();
});

When("I fill in username {string} and password {string}", (username: string, password: string) => {
  basicFormPage.fillForm(username, password, "Generated comment");
});

Then("I should see the form submission confirmation", () => {
  basicFormPage.shouldSeeConfirmation();
});